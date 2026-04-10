# 🎃 Aooo Terminal Error Sound (Chowayo)

> **"Because failing a command should at least sound cool."**

Tired of silent terminal errors? This extension brings the iconic **"Aooooo!"** (Chowayo) pumpkin howl to your VS Code integrated terminal. Whenever a command fails, the pumpkin screams.

---

## ✨ Features

- **⚡ Automatic Trigger**: No manual commands needed. When any terminal command returns an error (exit code ≠ 0), the sound plays instantly
- **🔊 High-Fidelity Audio**: Includes the authentic "Chowayo" pumpkin howl sound effect
- **🖥️ Cross-Platform Support**: Works on Windows, macOS, and Linux — no system audio tools required
- **💬 Visual Alerts**: Shows a "CHOWAYO!" notification when a failure is detected
- **🎯 Zero Configuration**: Works out of the box on all platforms
- **🔧 Toggle On/Off**: Disable the sound via VS Code settings without uninstalling

---

## 🛠️ Installation

### From VS Code Marketplace
1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
3. Search for **"Aooo Terminal Error Sound"**
4. Click **Install**

### Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| 🪟 Windows 10/11 | ✅ Works out of the box | No setup required |
| 🍎 macOS | ✅ Works out of the box | No setup required |
| 🐧 Linux | ✅ Works out of the box | No setup required |

> Audio is handled internally via a VS Code WebView — no external system commands or tools needed on any platform.

---

## 🚀 How to Use

1. **Install the extension** (see above)
2. **Open the integrated terminal** in VS Code:
   - Windows/Linux: `Ctrl + ~`
   - Mac: `Cmd + ~`
3. **Run a command that fails** to test it:

```bash
this-is-a-typo
```

4. **Listen to the Aooooo!** 🎃

The sound plays automatically whenever any command exits with a non-zero status code.

### Manual Trigger

You can also trigger the sound directly via the Command Palette:

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. Search for **"Aooo: Play Chowayo Sound"**
3. Press Enter

---

## 🔧 Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `aooo.enableSound` | boolean | `true` | Enable or disable the Chowayo howl on terminal failure |

To change settings:
1. Open Settings: `Ctrl+,` / `Cmd+,`
2. Search for **"Aooo"**
3. Toggle **Enable Sound** on or off

Or add this to your `settings.json`:
```json
"aooo.enableSound": false
```

---

## 📂 Project Structure

```
aooo-terminal-error-sound/
├── src/
│   └── extension.ts       # Main extension logic (monitors terminal exit codes)
├── media/
│   ├── chowayo.mp3        # The legendary sound file
│   └── icon.png           # Extension icon
├── package.json           # Extension manifest
└── README.md              # This file
```

---

## ❓ Troubleshooting

### I see the "CHOWAYO!" popup but hear no sound

- Check that `aooo.enableSound` is set to `true` in your settings
- Make sure VS Code is not muted in your system's Volume Mixer / Sound Settings
- Verify the audio file exists at `media/chowayo.mp3` in the extension directory
- Try the **manual trigger** via Command Palette to isolate the issue

### The sound doesn't play on some commands

VS Code shell integration must be active for per-command exit code detection. If it's not active (e.g. in certain custom shells), the extension falls back to detecting when the terminal process itself closes with a non-zero code.

To enable shell integration manually, add this to your `settings.json`:
```json
"terminal.integrated.shellIntegration.enabled": true
```

### Some commands trigger it unexpectedly

The extension fires on any non-zero exit code. Some commands like `grep` (no matches = exit 1) or `diff` behave this way by design. A future version will support exit code filtering.

### Does this work in external terminals?

No — this extension only monitors the **Integrated Terminal** inside VS Code. External windows (Command Prompt, Terminal.app, iTerm2, etc.) are not monitored.

### How do I disable the extension temporarily?

**Option 1 — Disable sound only** (extension stays active):
- Set `aooo.enableSound` to `false` in Settings

**Option 2 — Disable extension entirely**:
1. Open the Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Find "Aooo Terminal Error Sound"
3. Click **Disable**

---

## 📜 Release Notes

### 0.0.3
- Cross-platform audio via VS Code WebView (no external system tools required)
- Added `aooo.enableSound` toggle setting
- Added manual Command Palette trigger (`Aooo: Play Chowayo Sound`)
- Fallback listener for terminals without shell integration

### 0.0.1 — 0.0.2 (Early Releases)
- Initial terminal error detection
- Visual notification system
- "Chowayo" pumpkin howl audio

---

## 🤝 Contributing

Found a bug or have a feature request? Contributions are welcome!

- **Report Issues**: [GitHub Issues](https://github.com/SengQT/AoooTerminalErrorSound/issues)
- **Submit Pull Requests**: Fork the repo and submit your improvements
- **Reach out**: Contact me on GitHub [@SengQT](https://github.com/SengQT)

---

## 📄 License

This extension is released under the [MIT License](LICENSE).

---

## 💖 Credits

Created with ❤️ by **SengQT** ([@SengQT](https://github.com/SengQT))

Inspired by the legendary Chowayo AI Pumpkin. 🎃

---

## ⭐ Show Your Support

If this extension made you smile (or jump in your chair), please:
- ⭐ Star the [GitHub repository](https://github.com/SengQT/AoooTerminalErrorSound)
- 📝 Leave a review on the VS Code Marketplace
- 🐛 Report bugs or suggest features via [Issues](https://github.com/SengQT/AoooTerminalErrorSound/issues)

**Happy coding! May your errors be loud and spooky! 🎃**