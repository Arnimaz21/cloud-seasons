/* Единый футер Cloud.Seasons для всех страниц.
   Использование на странице:
     <div id="site-footer"></div>
     <script src="/footer.js"></script>
   Правки футера делаются только здесь — на всех страницах он обновится сам. */
(function () {
  "use strict";

  var mount = document.getElementById("site-footer");
  if (!mount) return;

  var css = [
    ".cs-footer{position:relative;z-index:10;width:100%;margin-top:32px;border-top:1px solid rgba(255,255,255,.1);",
    "background:rgba(11,14,21,.95);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}",
    ".cs-footer-inner{max-width:1280px;margin:0 auto;padding:32px 24px calc(32px + env(safe-area-inset-bottom,0px))}",
    ".cs-footer-grid{display:grid;grid-template-columns:1fr;gap:28px;align-items:start}",
    ".cs-footer-brand{display:flex;flex-direction:column;gap:12px}",
    ".cs-footer-logo-row{display:flex;align-items:center;gap:12px}",
    ".cs-footer-logo{width:36px;height:36px;border-radius:12px;overflow:hidden;background:#4d8bff;flex-shrink:0;",
    "border:1px solid rgba(255,255,255,.15);box-shadow:0 6px 16px rgba(0,0,0,.35)}",
    ".cs-footer-logo img{display:block;width:100%;height:100%;object-fit:cover}",
    ".cs-footer-title{font-family:'Space Grotesk',sans-serif;font-size:18px;line-height:1.2;font-weight:700;",
    "letter-spacing:-.02em;color:#fff}",
    ".cs-footer-desc{margin:0;max-width:300px;font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;",
    "line-height:1.65;color:#94a3b8}",
    ".cs-footer-heading{margin-bottom:12px;font-family:'Space Grotesk',sans-serif;font-size:12px;line-height:16px;",
    "font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#fff}",
    ".cs-footer-links{display:flex;flex-direction:column;gap:4px;margin:0;padding:0;list-style:none}",
    ".cs-footer-links a{display:inline-block;padding:5px 0;font-family:'Plus Jakarta Sans',sans-serif;",
    "font-size:12px;line-height:18px;color:#94a3b8;text-decoration:none;transition:color .2s}",
    ".cs-footer-links a:hover{color:#fff}",
    ".cs-footer-links a:focus-visible{outline:2px solid #4d8bff;outline-offset:2px;border-radius:4px}",
    ".cs-footer-community-text{margin:0;font-family:'Plus Jakarta Sans',sans-serif;font-size:12px;line-height:1.65;color:#94a3b8}",
    ".cs-footer-social{display:flex;align-items:center;gap:8px;padding-top:4px}",
    ".cs-footer-social a{display:flex;align-items:center;justify-content:center;width:40px;height:40px;",
    "border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);",
    "color:#cbd5e1;text-decoration:none;transition:background .2s,color .2s,transform .15s}",
    ".cs-footer-social a:hover{background:rgba(255,255,255,.1);color:#fff}",
    ".cs-footer-social a:active{transform:scale(.95)}",
    ".cs-footer-social a:focus-visible{outline:2px solid #4d8bff;outline-offset:2px}",
    ".cs-footer-social svg{width:18px;height:18px}",
    "@media(min-width:640px){.cs-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px}",
    ".cs-footer-brand,.cs-footer-community{grid-column:1/-1}.cs-footer-social a{width:36px;height:36px}}",
    "@media(min-width:1024px){.cs-footer-inner{padding:40px 48px calc(40px + env(safe-area-inset-bottom,0px))}",
    ".cs-footer-grid{grid-template-columns:repeat(12,minmax(0,1fr));gap:40px}",
    ".cs-footer-brand{grid-column:span 4}.cs-footer-nav{grid-column:span 2}",
    ".cs-footer-support{grid-column:span 3}.cs-footer-community{grid-column:span 3}}",
    "@media(max-width:420px){.cs-footer-inner{padding-left:16px;padding-right:16px}.cs-footer-grid{gap:24px}}"
  ].join("");

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var discordIcon =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>';

  var globeIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"/></svg>';

  var serverIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><circle cx="7" cy="7" r="1" fill="currentColor" stroke="none"/><circle cx="7" cy="17" r="1" fill="currentColor" stroke="none"/></svg>';

  mount.innerHTML =
    '<footer class="cs-footer">' +
      '<div class="cs-footer-inner">' +
        '<div class="cs-footer-grid">' +
          '<div class="cs-footer-brand">' +
            '<div class="cs-footer-logo-row">' +
              '<div class="cs-footer-logo"><img src="/assets/logo.jpg" alt="Cloud.Seasons" loading="lazy"></div>' +
              '<span class="cs-footer-title">Cloud.Seasons</span>' +
            "</div>" +
            '<p class="cs-footer-desc">Уникальный проект с авторскими сборками и открытым сервером</p>' +
          "</div>" +
          '<div class="cs-footer-nav">' +
            '<div class="cs-footer-heading">Навигация</div>' +
            '<ul class="cs-footer-links">' +
              '<li><a href="/">Главная</a></li>' +
              '<li><a href="/modpacks/">Сборки</a></li>' +
              '<li><a href="/join/">Как играть</a></li>' +
              '<li><a href="/team/">В команду</a></li>' +
              '<li><a href="/#about">О проекте</a></li>' +
            "</ul>" +
          "</div>" +
          '<div class="cs-footer-support">' +
            '<div class="cs-footer-heading">Поддержка</div>' +
            '<ul class="cs-footer-links">' +
              '<li><a href="/rules/">Правила проекта</a></li>' +
              '<li><a href="/bug-report/">Сообщить о баге</a></li>' +
            "</ul>" +
          "</div>" +
          '<div class="cs-footer-community">' +
            '<div class="cs-footer-heading">Сообщество</div>' +
            '<p class="cs-footer-community-text">Присоединяйтесь к общению, делитесь скриншотами и голосуйте за обновления.</p>' +
            '<div class="cs-footer-social">' +
              '<a href="https://discord.gg/EJnDZhfPxQ" rel="noopener noreferrer" target="_blank" title="Discord" aria-label="Discord Cloud.Seasons">' + discordIcon + "</a>" +
              '<a href="/" title="Сайт" aria-label="На главную">' + globeIcon + "</a>" +
              '<a href="/#serverStatusCard" title="Статус сервера" aria-label="Статус сервера">' + serverIcon + "</a>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</footer>";
})();
