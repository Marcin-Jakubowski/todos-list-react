(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(2),c=a.n(o),i=(a(8),a(9),function(){return s.a.createElement("form",{className:"form"},s.a.createElement("input",{className:"form__input",autoFocus:!0,placeholder:"Co jest do zrobienia?"}),s.a.createElement("button",{className:"form__button"},"Dodaj zadanie"))}),r=(a(10),function(e){var t=e.tasks,a=e.hiding;return s.a.createElement("ul",{className:"tasksList"},t.map((function(e){var t=e.name,n=e.id,o=e.done;return s.a.createElement("li",{key:n,className:"tasksList__item".concat(a&&o?" tasksList__item--hidden":"")},s.a.createElement("button",{className:"tasksList__button ".concat(o?"":" tasksList__button--false")}),s.a.createElement("span",{className:"tasksList__task ".concat(o?"":" tasksList__task--false")},t),s.a.createElement("button",{className:"tasksList__button tasksList__button--deleteButton"}))})))}),l=(a(11),function(e){var t=e.tasks,a=e.hiding;return s.a.createElement("div",{className:"section__buttonContainer"},t.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"section__button".concat(t.length>0?"":" tasksList--hidden")},a?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"),s.a.createElement("button",{disabled:t.every((function(e){return e.done})),className:"section__button".concat(t.length>0?"":" tasksList--hidden")},"Uko\u0144cz wszystkie")))}),m=(a(12),function(e){var t=e.title,a=e.body,n=e.extraHeaderContent;return s.a.createElement("div",{className:"section"},s.a.createElement("div",{className:"section__container"},s.a.createElement("h2",{className:"section__h2"},t),n),a)}),u=function(e){var t=e.title;return s.a.createElement("h1",{className:"header"},t)},d=(a(13),function(e){var t=e.children;return s.a.createElement("main",{className:"container"},t)}),_=[{id:1,name:"a",done:!1},{id:2,name:"b",done:!0}];var k=function(){return s.a.createElement(d,null,s.a.createElement(u,{title:"Lista zada\u0144"}),s.a.createElement(m,{title:"Dodaj nowe zadanie",body:s.a.createElement(i,null)}),s.a.createElement(m,{title:"Lista zada\u0144",body:s.a.createElement(r,{tasks:_,hiding:!1}),extraHeaderContent:s.a.createElement(l,{tasks:_,hiding:!1})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.448de6db.chunk.js.map