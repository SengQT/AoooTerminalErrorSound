import * as vscode from 'vscode';
import * as path from 'path';

// This is the bridge to your speakers
const player = require('play-sound')({});

export function activate(context: vscode.ExtensionContext) {
    console.log('Chowayo Terminal Error Listener is now active!');

    // This listens for any command finishing in the VS Code terminal
    const terminalListener = vscode.window.onDidEndTerminalShellExecution((event: any) => {
        
        // Check if the command failed (exit code is NOT 0)
        if (event.exitCode !== undefined && event.exitCode !== 0) {
            
            // Build the path to the pumpkin sound
            const soundPath = path.join(context.extensionPath, 'media', 'chowayo.mp3');

            // Play the Aooooo!
            player.play(soundPath, (err: any) => {
                if (err) {
                    console.error("Chowayo playback error:", err);
                }
            });

            vscode.window.showErrorMessage(`CHOWAYO! Command failed with code: ${event.exitCode} 🎃`);
        }
    });

    context.subscriptions.push(terminalListener);
}

// This runs when your extension is deactivated
export function deactivate() {}