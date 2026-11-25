chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === "OPEN_URL" && typeof message.url === "string") {
    chrome.tabs.create({ url: message.url });
    sendResponse({ ok: true });
  }
  return true;
});