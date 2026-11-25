(() => {
  if (document.getElementById("omni-pixel-launcher")) return;
  const button = document.createElement("button");
  button.id = "omni-pixel-launcher";
  button.textContent = "OM";
  button.title = "Open OmniModel Pixel Chat";
  button.addEventListener("click", () => chrome.runtime.sendMessage({type:"OPEN_URL",url:chrome.runtime.getURL("chat.html")}));
  document.documentElement.appendChild(button);
})();