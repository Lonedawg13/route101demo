const AGENTS = {
  voice: { url: "PASTE_VOICE_AGENT_URL_HERE", embed: false },
  chat: {
    url: "https://webchat-trial.cognigy.ai/v3/45eb8cc95901b9fed5ad94b3d3606852cf27db153ea485f7bff385759d2a6ae8",
    embed: true
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(nav.classList.contains("open")));
    });
  }

  const root = document.querySelector("[data-agent]");
  if (!root) return;

  const type = root.dataset.agent;
  const config = AGENTS[type];
  const configured = config && config.url && !config.url.startsWith("PASTE_");
  if (!configured) return;

  if (config.embed) {
    root.innerHTML = `<iframe src="${config.url}" title="Henry-James ${type} agent" ${type === "voice" ? 'allow="microphone; autoplay"' : ""}></iframe>`;
  } else {
    root.querySelector("h2").textContent = "Henry-James is ready";
    root.querySelector(".agent-message").textContent = `Launch the ${type} experience in a secure new tab.`;
    root.querySelector(".code-pill").outerHTML = `<a class="btn btn-primary launch" href="${config.url}" target="_blank" rel="noopener noreferrer">Launch ${type} agent →</a>`;
  }
});
