# 🛡️ Discord LARP Plugin

An advanced, stable, and obfuscated **BetterDiscord** plugin designed to customize your client-side profile with custom usernames, display names, and badges. **100% Free to use!**

---

## 📺 Video Tutorial
[![Watch the video](https://img.youtube.com/vi/2jvA5fkC4GU/0.jpg)](https://www.youtube.com/watch?v=2jvA5fkC4GU)

---

## 🚀 Features

- **Custom Identity:** Change your username, global name, and User ID locally.
- **Badge Injection:** Automatically adds badges like **Discord Nitro**, **Server Booster**, and **Active Developer** to your profile.
- **High Stability:** Built-in delay system and junk code injection to ensure zero "Yellow Screen" errors.
- **Security:** Multi-layer string obfuscation to protect the source logic.

## 📥 Installation

1. Install [BetterDiscord](https://betterdiscord.app/) if you haven't already.
2. Download the file: `discordlarpusernameby9ini.plugin.js`.
3. Open Discord and go to **Settings** > **Plugins**.
4. Click on **Open Plugins Folder**.
5. Move the downloaded `.js` file and the `discordlarp.config.json` file into that folder.
6. Enable the plugin in Discord.

## ⚙️ Configuration

You can easily modify your display data via the `discordlarp.config.json` file:

```json
{
  "user": {
    "username": "YourUsername",
    "display": "YourDisplayName",
    "userID": "1421243203738140803"
  }
}
