import * as vscode from 'vscode';
import * as path from 'path';

// This is the player that talks to your Pop!_OS speakers
const player = require('play-sound')({});

export function activate(context: vscode.ExtensionContext) {
    console.log('AoooTerminalErrorSound is now active!');

    // This registers the command name
    let disposable = vscode.commands.registerCommand('aooo.chowayo', () => {
        
        // Find the sound file inside your extension's media folder
        const soundPath = path.join(context.extensionPath, 'media', 'chowayo.mp3');

        // Play the sound!
        player.play(soundPath, (err: any) => {
            if (err) {
                vscode.window.showErrorMessage("Chowayo sound error: " + err);
            }
        });

        // Show a "Chowayo" message in the bottom right corner
        vscode.window.showInformationMessage('CHOWAYO! 🎃');
    });

    context.subscriptions.push(disposable);
}