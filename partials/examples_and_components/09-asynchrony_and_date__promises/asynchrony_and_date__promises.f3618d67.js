!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var n={};function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}
//! Notification ------------
Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e,n){e&&o(t.prototype,e);n&&o(t,n);return t};var c=null,i={notification:document.querySelector(".js-alert"),btn:document.querySelector(".notification")};function r(){i.notification.classList.remove("is-visible")}
//! Annoying ------------------
i.notification.addEventListener("click",(function(){r(),clearTimeout(c)})),i.btn.addEventListener("click",(function(){i.notification.classList.add("is-visible"),c=setTimeout((function(){console.log("qerty"),r()}),5e3)}));var a={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),clockface:document.querySelector(".js-clockface")},s=new(function(){"use strict";function o(n){var c=n.onTick;t(e)(this,o),this.intervalId=null,this.isActive=!1,this.onTick=c,this.init()}return t(n)(o,[{key:"init",value:function(){var t=this.getTimeComponents(0);this.onTick(t)}},{key:"start",value:function(){var t=this;if(!this.isActive){var e=Date.now();this.isActive=!0,this.intervalId=setInterval((function(){var n=Date.now()-e,o=t.getTimeComponents(n);t.onTick(o)}),1e3)}}},{key:"stop",value:function(){clearInterval(this.intervalId),this.isActive=!1;var t=this.getTimeComponents(0);this.onTick(t)}},{key:"getTimeComponents",value:function(t){return{hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}},{key:"pad",value:function(t){return String(t).padStart(2,"0")}}]),o}())({onTick:function(t){var e=t.hours,n=t.mins,o=t.secs;a.clockface.textContent="".concat(e,":").concat(n,":").concat(o)}});a.startBtn.addEventListener("click",s.start.bind(s)),a.stopBtn.addEventListener("click",s.stop.bind(s));var u=document.querySelector(".date-day"),l=document.querySelector(".date"),d=document.querySelector(".date-month"),f=document.querySelector(".date-year"),v=document.querySelector(".digital-clock"),m=document.querySelector(".clock-seconds__arrow"),y=document.querySelector(".clock-minutes__arrow"),h=document.querySelector(".clock-hours__arrow"),k=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],p=["Неділя","Понеділок","Вівторок","Середа","Четвер","П`ятниця","Субота"];setInterval((function(){var t=new Date,e=p[t.getDay()],n=t.getDate(),o=k[t.getMonth()],c=t.getFullYear(),i=t.getHours(),r=t.getMinutes(),a=t.getSeconds(),s=6*a,g=6*r,S=30*i+.5*r,b="".concat(i.toString().padStart(2,"0")," : ").concat(r.toString().padStart(2,"0")," : ").concat(a.toString().padStart(2,"0"));u.textContent=e,l.textContent=n,d.textContent=o,f.textContent=c,v.textContent="Поточний час: ".concat(b),m.style.transform="rotate(".concat(s,"deg)"),y.style.transform="rotate(".concat(g,"deg)"),h.style.transform="rotate(".concat(S,"deg)")}),1e3)}();
//# sourceMappingURL=asynchrony_and_date__promises.f3618d67.js.map