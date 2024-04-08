//! Сповіщення
let i=null;const t={notification:document.querySelector(".js-alert")};function e(){t.notification.classList.remove("is-visible")}t.notification.addEventListener("click",(function(){e(),clearTimeout(i)})),t.notification.classList.add("is-visible"),i=setTimeout((()=>{console.log("qerty"),e()}),3e3);
//# sourceMappingURL=asynchrony_and_date__promises.16af5402.js.map
