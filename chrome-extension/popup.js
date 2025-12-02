const DARK_MODE_STYLE_ID = "___dark_mode_extension_style___";

document.getElementById("darkBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: toggleDarkMode
  });
});

function toggleDarkMode() {
  const existing = document.getElementById("___dark_mode_extension_style___");

  if (existing) {
    existing.remove();
    return;
  }

  const style = document.createElement("style");
  style.id = "___dark_mode_extension_style___";

  style.textContent = `
    html, body {
      background: #121212 !important;
      color: #e0e0e0 !important;
    }
    * {
      background-color: transparent !important;
      color: #e0e0e0 !important;
    }
    img, video {
      filter: brightness(0.8) contrast(1.1) !important;
    }
  `;

  document.documentElement.appendChild(style);
}
