import * as vscode from 'vscode';
import * as path from 'path';

function playChowayo(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('aooo');
    if (!config.get<boolean>('enableSound', true)) return;

    const soundFile = vscode.Uri.file(
        path.join(context.extensionPath, 'media', 'chowayo.mp3')
    );

    const panel = vscode.window.createWebviewPanel(
        'chowayoSound',
        'Chowayo',
        { viewColumn: vscode.ViewColumn.Beside, preserveFocus: true },
        {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.file(path.join(context.extensionPath, 'media'))
            ]
        }
    );

    const soundUri = panel.webview.asWebviewUri(soundFile);

    // body hidden so the panel appears blank, not jarring
    panel.webview.html = `<!DOCTYPE html>
<html>
<head><style>body { margin: 0; overflow: hidden; }</style></head>
<body>
<audio autoplay src="${soundUri}"></audio>
<script>
    const vscode = acquireVsCodeApi();
    const audio = document.querySelector('audio');
    audio.onended = () => vscode.postMessage('done');
    audio.onerror  = (e) => {
        console.error('Audio error', e);
        vscode.postMessage('done');
    };
</script>
</body>
</html>`;

    panel.webview.onDidReceiveMessage(
        () => { try { panel.dispose(); } catch { } },
        undefined,
        context.subscriptions
    );

    // Safety net in case the message never arrives
    setTimeout(() => { try { panel.dispose(); } catch { } }, 10000);
}

export function activate(context: vscode.ExtensionContext) {
    console.log('Chowayo Terminal Error Listener is now active!');

    // Primary: shell integration — gives per-command exit codes
    const shellListener = vscode.window.onDidEndTerminalShellExecution((event: any) => {
        if (event.exitCode !== undefined && event.exitCode !== 0) {
            playChowayo(context);
            vscode.window.showErrorMessage(
                `CHOWAYO! Command failed with exit code ${event.exitCode} 🎃`
            );
        }
    });

    // Fallback: fires when the terminal process itself closes (shell integration off)
    const closeListener = vscode.window.onDidCloseTerminal((terminal) => {
        const code = terminal.exitStatus?.code;
        if (code !== undefined && code !== 0) {
            playChowayo(context);
        }
    });

    // Manual command — lets users test via Command Palette
    const manualCmd = vscode.commands.registerCommand('aooo.chowayo', () => {
        playChowayo(context);
    });

    context.subscriptions.push(shellListener, closeListener, manualCmd);
}

export function deactivate() { }