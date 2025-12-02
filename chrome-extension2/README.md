# Bitcoin Price Tracker Chrome Extension

A simple Chrome extension that displays the current Bitcoin price in USD using the CoinDesk API.

## Features

- Real-time Bitcoin price in USD
- Clean, modern UI with gradient background
- Refresh button to get the latest price
- Caches last price for quick loading
- Last updated timestamp

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked"
4. Select the `chrome-extension2` folder
5. The Bitcoin Price Tracker icon will appear in your extensions toolbar

## Usage

1. Click the extension icon in your Chrome toolbar
2. The current Bitcoin price will be displayed
3. Click the "Refresh" button to get the latest price
4. The extension shows when the price was last updated

## Files

- `manifest.json` - Extension configuration
- `popup.html` - Extension popup interface
- `popup.css` - Styling for the popup
- `popup.js` - JavaScript logic for fetching and displaying Bitcoin price
- `icon16.png`, `icon48.png`, `icon128.png` - Extension icons (placeholder - add your own)

## API

This extension uses the free [CoinDesk API](https://api.coindesk.com/v1/bpi/currentprice/BTC.json) to fetch Bitcoin prices.

## Notes

- The icons are placeholders. You should create your own Bitcoin-themed icons in sizes 16x16, 48x48, and 128x128 pixels.
- The extension works without requiring an API key.
- Prices are fetched in real-time when you open the popup or click refresh.
