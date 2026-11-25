# OmniModel — Pixel AI Switcher

Lightweight Firefox/Chrome extension with a 2D pixel-art interface.

## What works in this starter
- Pixel-art popup and standalone local chat.
- Ollama integration at `http://localhost:11434`.
- Model discovery from Ollama.
- Local DeepSeek R1 / DeepSeek Coder, Qwen and Llama options.
- Official web portal shortcuts for DeepSeek, Gemini, Claude and Qwen.
- No API key is required for local Ollama inference.

## Important about free DeepSeek
There is no honest way to promise unlimited free cloud DeepSeek access. Official hosted services may apply account, rate, or capacity limits. OmniModel does not bypass those limits or automate logged-in provider websites. For quota-free local use, install a DeepSeek model in Ollama; local compute and disk space are still limited by your PC.

## Install Ollama and DeepSeek
1. Install Ollama from https://ollama.com/download
2. Open PowerShell and run:
   ```powershell
   ollama pull deepseek-r1:1.5b
   ```
3. Keep Ollama running, then open the extension and select **DeepSeek R1 · 1.5B**.
4. For an 8 GB RAM PC, start with 1.5B models. Larger models may be slow or fail to load.

Other supported local models:
- `ollama pull deepseek-coder:1.3b`
- `ollama pull qwen2.5:1.5b`
- `ollama pull llama3.2:1b`

## Load in Firefox
1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…**.
3. Select this repository's `manifest.json`.

## Load in Chrome
1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the repository folder.

## Build ZIP
GitHub Actions creates a ZIP on pushes to main and manual runs. Download it from the workflow run's **Artifacts** section.

## Scope
The extension adds its own local chat and shortcuts. It cannot replace ChatGPT's server-side model selector or turn a ChatGPT request into a Claude/Gemini/DeepSeek request. Local chat requests go directly to Ollama on your machine.
