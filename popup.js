const $ = (id) => document.getElementById(id);
async function check() {
  $("status").textContent = "Проверяю Ollama…";
  try {
    const r = await fetch("http://localhost:11434/api/tags", { signal: AbortSignal.timeout(2200) });
    if (!r.ok) throw new Error("Ollama ответила с ошибкой");
    const data = await r.json();
    const names = (data.models || []).map(m => m.name);
    $("status").textContent = names.length ? "Ollama online · " + names.length + " моделей" : "Ollama online · моделей пока нет";
    $("statusDot").className = "dot on";
    const select = $("model");
    for (const name of names) if (![...select.options].some(o => o.value === name)) {
      const option = document.createElement("option"); option.value = name; option.textContent = name; select.append(option);
    }
  } catch {
    $("status").textContent = "Ollama offline · запусти Ollama";
    $("statusDot").className = "dot";
  }
}
$("refresh").addEventListener("click", check);
$("openChat").addEventListener("click", () => chrome.tabs.create({ url: chrome.runtime.getURL("chat.html") }));
document.querySelectorAll("[data-url]").forEach(b => b.addEventListener("click", () => chrome.tabs.create({url:b.dataset.url})));
check();