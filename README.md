# 🎃 Aooo Terminal Error Sound (Chowayo)

> **"Because failing a command should at least sound cool."**

Tired of silent terminal errors? This extension brings the iconic **"Aooooo!"** (Chowayo) pumpkin howl to your VS Code integrated terminal. Whenever a command fails, the pumpkin screams.

---

## ✨ Features

- **⚡ Automatic Trigger**: No manual commands needed. When any terminal command returns an error (exit code ≠ 0), the sound plays instantly
- **🔊 High-Fidelity Audio**: Includes the authentic "Chowayo" pumpkin howl sound effect
- **🖥️ Cross-Platform Support**: Optimized for Windows, macOS, and Linux
- **💬 Visual Alerts**: Shows a "CHOWAYO!" notification when a failure is detected
- **🎯 Zero Configuration**: Works out of the box on Windows and macOS

---

## 🛠️ Installation & Setup

### From VS Code Marketplace
1. Open VS Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
3. Search for "Aooo Terminal Error Sound"
4. Click **Install**

### Platform-Specific Setup

#### 🪟 Windows (10/11)
**No additional setup required!** ✅

The extension uses built-in Windows capabilities (PowerShell) to play audio automatically.

#### 🍎 macOS
**No additional setup required!** ✅

macOS comes with the built-in `afplay` command, which the extension uses automatically.

#### 🐧 Linux (Ubuntu, Debian, Pop!_OS)
**One-time setup required:**

Install the audio player using your terminal:

```bash
sudo apt update && sudo apt install mpg123
```

For other Linux distributions:
- **Fedora/RHEL**: `sudo dnf install mpg123`
- **Arch**: `sudo pacman -S mpg123`

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

---

## 📂 Project Structure

```
aooo-terminal-error-sound/
├── src/
│   └── extension.ts       # Main extension logic (monitors terminal exit codes)
├── media/
│   └── chowayo.mp3        # The legendary sound file
├── package.json           # Extension manifest
└── README.md              # This file
```

---

## ❓ Troubleshooting

### I see the "CHOWAYO!" popup but hear no sound

**Linux Users:**
- Ensure `mpg123` is installed: `which mpg123`
- If not installed, run: `sudo apt install mpg123`

**All Users:**
- Check if VS Code is muted in your system's Volume Mixer/Sound Settings
- Verify the audio file exists at `media/chowayo.mp3` in the extension directory
- Try increasing your system volume

### Does this work in external terminals?

No, this extension only monitors the **Integrated Terminal** inside VS Code. External terminal windows (Command Prompt, Terminal.app, etc.) are not monitored.

### The sound plays too often / not often enough

The extension triggers on any command that returns a non-zero exit code. Some commands (like `grep` with no matches) may return non-zero exit codes even when they're not "errors" in the traditional sense.

### How do I disable the extension temporarily?

1. Open the Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Find "Aooo Terminal Error Sound"
3. Click **Disable**

---

## 🔧 Configuration

Currently, this extension works with default settings and requires no configuration. Future versions may include:
- Custom sound file support
- Volume control
- Specific exit code filtering

---

## 📜 Release Notes

### 1.0.0 (Initial Release) 🚀
- Automatic terminal error detection
- Cross-platform support for Windows (PowerShell), macOS (afplay), and Linux (mpg123)
- Visual notification system
- High-quality "Chowayo" pumpkin howl audio

---

## 🤝 Contributing

Found a bug or have a feature request? 

- **Report Issues**: [GitHub Issues](https://github.com/SengQT/AoooTerminalErrorSound/issues)
- **Pull Requests**: Contributions are welcome!

---

## 📄 License

This extension is released under the [MIT License](LICENSE).

---

## 💖 Credits

Created with ❤️ by **SengQT** ([@SengQT](https://github.com/SengQT))

Inspired by the legendary Chowayo AI Pumpkin.

---

## ⭐ Show Your Support

If this extension made you smile (or jump in your chair), please:
- ⭐ Star the [GitHub repository](https://github.com/SengQT/AoooTerminalErrorSound)
- 📝 Leave a review on the VS Code Marketplace
- 🐛 Report any bugs or suggest features

**Happy coding! May your errors be loud and spooky! 🎃**