import * as vscode from 'vscode';
import * as path from 'path';

function playChowayo(context: vscode.ExtensionContext) {
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

    panel.webview.html = `<!DOCTYPE html>
<html>
<body>
<script>
    const vscode = acquireVsCodeApi();
    const audio = new Audio('${soundUri}');
    audio.play();
    audio.onended = () => vscode.postMessage('done');
    audio.onerror = () => vscode.postMessage('done');
</script>
</body>
</html>`;

    panel.webview.onDidReceiveMessage(
        () => panel.dispose(),
        undefined,
        context.subscriptions
    );

    setTimeout(() => {
        try { panel.dispose(); } catch {}
    }, 10000);
}

export function activate(context: vscode.ExtensionContext) {
    console.log('Chowayo Terminal Error Listener is now active!');

    const terminalListener = vscode.window.onDidEndTerminalShellExecution((event: any) => {
        if (event.exitCode !== undefined && event.exitCode !== 0) {
            playChowayo(context);
            vscode.window.showErrorMessage(
                `CHOWAYO! Command failed with code: ${event.exitCode} 🎃`
            );
        }
    });

    context.subscriptions.push(terminalListener);
}

export function deactivate() {}