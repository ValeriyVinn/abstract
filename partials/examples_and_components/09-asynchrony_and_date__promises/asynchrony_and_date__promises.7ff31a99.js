!function(){
//! Сповіщення
var i=null,t={notification:document.querySelector(".js-alert")};function n(){t.notification.classList.remove("is-visible")}t.notification.addEventListener("click",(function(){n(),clearTimeout(i)})),t.notification.classList.add("is-visible"),i=setTimeout((function(){console.log("qerty"),n()}),3e3)}();
//# sourceMappingURL=asynchrony_and_date__promises.7ff31a99.js.map
