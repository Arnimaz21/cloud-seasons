/* Единая шапка Cloud.Seasons для всех страниц.
   Использование на странице:
     <div id="site-header"></div>
     <script src="/header.js"></script>
   Правки шапки делаются только здесь — на всех страницах она обновится сама. */
(function () {
  "use strict";

  var mount = document.getElementById("site-header");
  if (!mount) return;

  /* Определяем активный раздел по адресу страницы */
  var path = location.pathname.replace(/\/index\.html$/, "/");
  if (path.length > 1) path = path.replace(/\/+$/, "");

  var links = [
    { href: "/", label: "Главная", active: path === "/" },
    { href: "/modpacks/", label: "Сборки", active: path === "/modpacks" },
    { href: "/join/", label: "Как играть", active: path === "/join" },
    { href: "/rules/", label: "Правила", active: path === "/rules" },
    { href: "/bug-report/", label: "Сообщить о баге", active: path === "/bug-report" }
  ];

  var nav = links.map(function (link) {
    return '<a href="' + link.href + '"' +
      (link.active ? ' aria-current="page"' : "") + ">" + link.label + "</a>";
  }).join("");

  var css = [
    ".cs-header{position:fixed;top:0;left:0;right:0;z-index:50;height:80px;",
    "background:rgba(15,19,28,.15);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);",
    "border-bottom:1px solid rgba(255,255,255,.10);transition:background .3s,border-color .3s}",
    ".cs-header-inner{max-width:1400px;margin:0 auto;height:100%;padding:0 24px;",
    "display:flex;align-items:center;justify-content:space-between;gap:16px}",
    ".cs-brand{display:flex;align-items:center;gap:14px;text-decoration:none;flex-shrink:0}",
    ".cs-brand-logo{width:40px;height:40px;border-radius:12px;overflow:hidden;display:flex;align-items:center;",
    "justify-content:center;background:#151923;border:1px solid rgba(255,255,255,.2);",
    "box-shadow:0 8px 24px rgba(77,139,255,.2);transition:transform .2s}",
    ".cs-brand:hover .cs-brand-logo{transform:scale(1.05)}",
    ".cs-brand-logo img{width:100%;height:100%;object-fit:cover;display:block}",
    ".cs-brand-text{display:flex;flex-direction:column;min-width:0}",
    ".cs-wordmark{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;line-height:1.15;",
    "letter-spacing:-.02em;color:#fff;display:flex;align-items:center;gap:1px;transition:color .2s}",
    ".cs-brand:hover .cs-wordmark{color:#4d8bff}",
    ".cs-dot{color:#4d8bff}",
    ".cs-sub{font-family:'Space Grotesk',monospace;font-size:10px;line-height:1.3;text-transform:uppercase;",
    "letter-spacing:.18em;color:rgba(255,255,255,.5);font-weight:600;margin-top:1px}",
    ".cs-nav{display:flex;align-items:center;gap:4px;padding:6px 12px;border-radius:9999px;",
    "background:rgba(24,27,37,.9);border:1px solid rgba(255,255,255,.15);",
    "-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:0 10px 30px rgba(0,0,0,.4)}",
    ".cs-nav a{display:block;padding:6px 16px;border-radius:9999px;border:1px solid transparent;",
    "font-family:'Space Grotesk',sans-serif;font-size:12px;line-height:16px;font-weight:600;",
    "color:rgba(255,255,255,.7);text-decoration:none;white-space:nowrap;transition:color .2s,background .2s,border-color .2s}",
    ".cs-nav a:hover{color:#fff;background:rgba(255,255,255,.06)}",
    ".cs-nav a[aria-current='page']{color:#fff;background:rgba(255,255,255,.10);border-color:rgba(255,255,255,.15)}",
    ".cs-discord{display:inline-flex;align-items:center;gap:8px;flex-shrink:0;padding:8px 16px;border-radius:12px;",
    "background:rgba(88,101,242,.2);border:1px solid rgba(88,101,242,.4);color:#fff;",
    "font-family:'Space Grotesk',sans-serif;font-size:12px;line-height:16px;font-weight:600;",
    "text-decoration:none;box-shadow:0 10px 15px -3px rgba(88,101,242,.1);transition:background .2s,border-color .2s}",
    ".cs-discord:hover{background:#5865F2;border-color:#5865F2}",
    ".cs-discord svg{width:16px;height:16px;fill:currentColor;transition:transform .2s}",
    ".cs-discord:hover svg{transform:scale(1.1)}",
    "@media(max-width:767.98px){.cs-nav{display:none}}",
    "@media(max-width:420px){.cs-header-inner{padding:0 14px}.cs-brand{gap:10px}",
    ".cs-wordmark{font-size:16px}.cs-sub{display:none}",
    ".cs-discord{padding:9px 11px}.cs-discord span{display:none}}"
  ].join("");

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  mount.innerHTML =
    '<header class="cs-header">' +
      '<div class="cs-header-inner">' +
        '<a class="cs-brand" href="/" aria-label="Cloud.Seasons — на главную">' +
          '<span class="cs-brand-logo"><img src="/assets/logo.jpg" alt="Cloud.Seasons"></span>' +
          '<span class="cs-brand-text">' +
            '<span class="cs-wordmark">CLOUD<span class="cs-dot">.</span>SEASONS</span>' +
            '<span class="cs-sub">MINECRAFT PROJECT</span>' +
          "</span>" +
        "</a>" +
        '<nav class="cs-nav" aria-label="Основная навигация">' + nav + "</nav>" +
        '<a class="cs-discord" href="https://discord.gg/EJnDZhfPxQ" target="_blank" rel="noopener noreferrer" aria-label="Discord Cloud.Seasons">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>' +
          "<span>Discord</span>" +
        "</a>" +
      "</div>" +
    "</header>";
})();
