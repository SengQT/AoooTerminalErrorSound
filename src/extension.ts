import * as vscode from 'vscode';
import * as path from 'path';
import { exec } from 'child_process';

function playChowayo(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('aooo');
    if (!config.get<boolean>('enableSound', true)) return;

    const soundPath = path.join(context.extensionPath, 'media', 'chowayo.mp3');

    switch (process.platform) {
        case 'win32':
            exec(`powershell -c "Add-Type -AssemblyName presentationCore; $mp = New-Object System.Windows.Media.MediaPlayer; $mp.Open([uri]'${soundPath}'); $mp.Play(); Start-Sleep 5"`);
            break;
        case 'darwin':
            exec(`afplay "${soundPath}"`);
            break;
        default:
            // Linux — try common players in order
            exec(`mpg123 "${soundPath}" 2>/dev/null || ffplay -nodisp -autoexit "${soundPath}" 2>/dev/null`);
            break;
    }
}

export function activate(context: vscode.ExtensionContext) {
    console.log('Chowayo Terminal Error Listener is now active!');

    const shellListener = vscode.window.onDidEndTerminalShellExecution((event: any) => {
        if (event.exitCode !== undefined && event.exitCode !== 0) {
            playChowayo(context);
            vscode.window.showErrorMessage(
                `CHOWAYO! Command failed with exit code ${event.exitCode} 🎃`
            );
        }
    });

    const closeListener = vscode.window.onDidCloseTerminal((terminal) => {
        const code = terminal.exitStatus?.code;
        if (code !== undefined && code !== 0) {
            playChowayo(context);
        }
    });

    const manualCmd = vscode.commands.registerCommand('aooo.chowayo', () => {
        playChowayo(context);
    });

    context.subscriptions.push(shellListener, closeListener, manualCmd);
}

export function deactivate() { }