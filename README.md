# 📚 RSS Reader

A simple RSS feed reader to manage and view your feeds, it works for real use or as a base to build and expand upon.

## ✨ Features

- 🔄 Manage multiple RSS feeds
- 💾 Local storage using IndexedDB

## 🛠️ Requirements

- Node.js (v12 or higher)
- npm (Node Package Manager)

## 📦 Dependencies

```json
{
  "axios": "^1.7.9",
  "cors": "^2.8.5",
  "express": "^4.21.2"
}
```

## 🚀 Setup and Running

```bash
git clone https://github.com/unameit10000000/rssreader.git
```
```bash
cd rssreader
```
```bash
npm install
```
```bash
node index.js
```
```
http://localhost:3000
```

## 💡 Usage

1. The application comes pre-loaded with some default RSS feeds (BBC News, CNN, The Guardian)
2. To add a new feed:
   - Enter the feed name in the "Enter RSS name" field
   - Enter the feed URL in the "Enter RSS url" field
   - Click the "ADD" button

3. To view a feed's content:
   - Click the refresh button (🔄) next to the feed name

4. To delete a feed:
   - Click the trash button (🗑️) next to the feed name

## 📝 Notes

- The server runs on port 3000 by default
- CORS is enabled for development purposes
- Feeds are stored locally in the browser using IndexedDB
- The application uses Font Awesome icons for the UI
- The application includes CORS headers for development
- Browser security policies may affect RSS feed access

---

Made with ❤️ for RSS enthusiasts
