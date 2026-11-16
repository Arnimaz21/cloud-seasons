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
    { href: "/team/", label: "В команду", active: path === "/team" },
    { href: "/rules/", label: "Правила", active: path === "/rules" },
    { href: "/bug-report/", label: "Сообщить о баге", active: path === "/bug-report" }
  ];

  var nav = links.map(function (link) {
    return '<a href="' + link.href + '"' +
      (link.active ? ' aria-current="page"' : "") + ">" + link.label + "</a>";
  }).join("");

  var mobileNav = links.map(function (link) {
    return '<a href="' + link.href + '"' +
      (link.active ? ' aria-current="page"' : "") + ">" +
      "<span>" + link.label + "</span>" +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>' +
      "</a>";
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
    ".cs-menu-btn{display:none;align-items:center;justify-content:center;width:40px;height:40px;flex-shrink:0;",
    "padding:0;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:rgba(24,27,37,.9);",
    "color:#fff;cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);",
    "box-shadow:0 10px 30px rgba(0,0,0,.4);transition:background .2s,border-color .2s}",
    ".cs-menu-btn:hover{background:rgba(255,255,255,.08)}",
    ".cs-menu-btn:focus-visible{outline:2px solid #4d8bff;outline-offset:2px}",
    ".cs-menu-icon{position:relative;display:block;width:18px;height:14px}",
    ".cs-menu-icon span{position:absolute;left:0;right:0;height:2px;border-radius:2px;background:currentColor;",
    "transition:top .2s,transform .2s,opacity .2s}",
    ".cs-menu-icon span:nth-child(1){top:0}",
    ".cs-menu-icon span:nth-child(2){top:6px}",
    ".cs-menu-icon span:nth-child(3){top:12px}",
    ".cs-menu-btn[aria-expanded='true'] .cs-menu-icon span:nth-child(1){top:6px;transform:rotate(45deg)}",
    ".cs-menu-btn[aria-expanded='true'] .cs-menu-icon span:nth-child(2){opacity:0}",
    ".cs-menu-btn[aria-expanded='true'] .cs-menu-icon span:nth-child(3){top:6px;transform:rotate(-45deg)}",
    ".cs-mobile-nav{position:fixed;top:88px;left:12px;right:12px;z-index:49;display:none;flex-direction:column;",
    "padding:10px;border-radius:20px;background:rgba(15,19,28,.98);border:1px solid rgba(255,255,255,.12);",
    "box-shadow:0 24px 60px rgba(0,0,0,.65);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);",
    "opacity:0;transform:translateY(-8px);pointer-events:none;transition:opacity .2s,transform .2s;",
    "max-height:calc(100vh - 104px);overflow-y:auto;overscroll-behavior:contain}",
    ".cs-mobile-nav.is-open{opacity:1;transform:none;pointer-events:auto}",
    ".cs-mobile-nav nav{display:flex;flex-direction:column;gap:4px}",
    ".cs-mobile-nav a{display:flex;align-items:center;justify-content:space-between;gap:12px;",
    "padding:13px 14px;border-radius:12px;border:1px solid transparent;text-decoration:none;",
    "font-family:'Space Grotesk',sans-serif;font-size:14px;line-height:20px;font-weight:600;",
    "color:rgba(255,255,255,.72);transition:color .2s,background .2s,border-color .2s}",
    ".cs-mobile-nav a:hover{color:#fff;background:rgba(255,255,255,.06)}",
    ".cs-mobile-nav a[aria-current='page']{color:#fff;background:rgba(77,139,255,.14);border-color:rgba(77,139,255,.28)}",
    ".cs-mobile-nav a svg{width:16px;height:16px;flex-shrink:0;opacity:.5}",
    "@media(max-width:1100px){.cs-nav a{padding:6px 10px;font-size:11px}.cs-discord{padding:8px 12px}}",
    "@media(max-width:960px){.cs-nav{gap:0;padding:5px 8px}.cs-nav a{padding:5px 8px;font-size:10.5px}",
    ".cs-brand-logo{width:34px;height:34px}.cs-wordmark{font-size:16px}.cs-sub{font-size:9px;letter-spacing:.14em}}",
    "@media(max-width:767.98px){.cs-nav{display:none}.cs-menu-btn{display:inline-flex}.cs-mobile-nav{display:flex}}",
    "@media(max-width:420px){.cs-header-inner{padding:0 14px}.cs-brand{gap:10px}",
    ".cs-wordmark{font-size:16px}.cs-sub{display:none}",
    ".cs-discord{padding:9px 11px}.cs-discord span{display:none}",
    ".cs-mobile-nav{top:84px;left:10px;right:10px}}",
    "@media(max-width:360px){.cs-header-inner{padding:0 12px;gap:8px}.cs-brand{gap:8px}",
    ".cs-wordmark{font-size:15px}.cs-discord{width:38px;height:38px;padding:0;justify-content:center}",
    ".cs-menu-btn{width:38px;height:38px}}"
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
        '<button class="cs-menu-btn" id="csMenuBtn" type="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="cs-mobile-nav">' +
          '<span class="cs-menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>' +
        "</button>" +
      "</div>" +
    "</header>" +
    '<div class="cs-mobile-nav" id="cs-mobile-nav" aria-hidden="true">' +
      '<nav aria-label="Мобильная навигация">' + mobileNav + "</nav>" +
    "</div>";

  var menuBtn = document.getElementById("csMenuBtn");
  var mobileNavEl = document.getElementById("cs-mobile-nav");

  function setMenuOpen(open) {
    if (!menuBtn || !mobileNavEl) return;
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    mobileNavEl.classList.toggle("is-open", open);
    mobileNavEl.setAttribute("aria-hidden", open ? "false" : "true");
  }

  if (menuBtn && mobileNavEl) {
    menuBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      setMenuOpen(menuBtn.getAttribute("aria-expanded") !== "true");
    });

    mobileNavEl.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenuOpen(false);
    });

    document.addEventListener("click", function (event) {
      if (!mobileNavEl.classList.contains("is-open")) return;
      if (event.target.closest("#cs-mobile-nav") || event.target.closest("#csMenuBtn")) return;
      setMenuOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenuOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 767.98) setMenuOpen(false);
    });
  }

  /* Предзагрузка внутренних страниц при наведении/касании — переходы быстрее */
  if (window.HTMLScriptElement && HTMLScriptElement.supports && HTMLScriptElement.supports("speculationrules")) {
    var rules = document.createElement("script");
    rules.type = "speculationrules";
    rules.textContent = JSON.stringify({
      prefetch: [{ where: { href_matches: "/*" }, eagerness: "moderate" }]
    });
    document.head.appendChild(rules);
  }
})();
