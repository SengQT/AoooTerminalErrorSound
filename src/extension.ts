import * as vscode from 'vscode';
import * as path from 'path';

// This specific syntax tells TypeScript how to handle the play-sound library
import playerFactory = require('play-sound');
const player = playerFactory({});

export function activate(context: vscode.ExtensionContext) {
    // This will now be recognized thanks to the "dom" or "node" types
    console.log('Chowayo Aoooo is active!');

    let disposable = vscode.commands.registerCommand('aooo.chowayo', () => {
        // Construct the path to your sound file
        const soundPath = path.join(context.extensionPath, 'media', 'chowayo.mp3');

        player.play(soundPath, (err: any) => {
            if (err) {
                vscode.window.showErrorMessage("Chowayo Sound Error: " + err);
            }
        });

        vscode.window.showInformationMessage('Aooooooo! 🎃');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}