(this["webpackJsonpredux.weather"]=this["webpackJsonpredux.weather"]||[]).push([[0],{31:function(t,e,c){},32:function(t,e,c){},59:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(7),r=c.n(a),i=(c(31),c(2)),s=c(25),o=(c(32),c(4)),u=c(12),h=c.n(u),j=c(21),D="weather",d="".concat(D,"/GET_WEATHER"),l="".concat(D,"/CITY_WEATHER"),b="".concat(D,"/COUNTRY_WEATHER"),p="".concat(D,"/START_WEATHER"),O={weather:[],city:"uzhgorod",country:"ua",start:!1},B=function(t){return{type:p,payload:t}},y=c(22),m=c.n(y),x=c(1);var f=function(t){var e=Object(o.c)(),c=Object(o.d)((function(t){return t.weather.city})),n=Object(o.d)((function(t){return t.weather.country})),a=function(){var a=Object(j.a)(h.a.mark((function a(r){var i,s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),i="https://api.openweathermap.org/data/2.5/forecast?q=".concat(c,",").concat(n,"&units=metric&appid=85ab88ec9852a2b74fd828b43a8afbb3"),a.next=4,m.a.get(i);case 4:s=a.sent,t.onSubmit(s.data),e((o=s.data,{type:d,payload:o})),e(B(!0));case 8:case"end":return a.stop()}var o}),a)})));return function(t){return a.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:a,children:[Object(x.jsx)("label",{htmlFor:"country",children:'Country: "ua","de","by","ru","hu", "it"'}),Object(x.jsx)("input",{type:"text",placeholder:"country",id:"country",onChange:function(t){var c;e((c=t.target.value,{type:b,payload:c}))},required:!0}),Object(x.jsx)("label",{htmlFor:"city",children:"City:"}),Object(x.jsx)("input",{type:"text",placeholder:"city",id:"city",onChange:function(t){var c;e((c=t.target.value,{type:l,payload:c}))},required:!0}),Object(x.jsx)("button",{type:"submit",children:"Search"})]})};var g=function(t){if("undefined"===typeof t.city)return Object(x.jsx)("h2",{children:"No user information"});var e="http://openweathermap.org/img/wn/".concat(t.list[0].weather[0].icon,"@2x.png"),c="",n="",a=(new Date).getTime(),r=new Date(1e3*t.city.sunrise).toLocaleTimeString().slice(0,5),i=new Date(1e3*t.city.sunset).toLocaleTimeString().slice(0,5);return 1e3*t.city.sunrise>a&&t.city.sunrise*i<a?(c="https://i.pinimg.com/736x/6a/26/e6/6a26e6cca95d7f4233c6269ff8ccdf76.jpg",n="Day"):(c="https://thumbs.dreamstime.com/b/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D0%BD%D0%BE%D1%87%D0%B8-%D0%BB%D1%83%D0%BD%D1%8B-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-eps-%D0%B7%D0%BD%D0%B0%D0%BA%D0%B0-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%B8%D0%BB%D1%83%D1%8D%D1%82-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-143907982.jpg",n="Night"),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"icons item",children:[Object(x.jsxs)("h4",{children:[n," "]}),Object(x.jsx)("img",{src:c,alt:"",width:"160px",height:"160px"}),Object(x.jsxs)("p",{children:["Sunrise: ",r," "]}),Object(x.jsxs)("p",{children:["Sunset: ",i," "]})]}),Object(x.jsxs)("div",{className:"weatherCity item",children:[Object(x.jsxs)("h3",{children:["\u0421ountry: ",t.city.country]}),Object(x.jsxs)("h3",{children:["City: ",t.city.name]}),Object(x.jsx)("img",{src:e,alt:"",width:"180px",height:"180px"}),Object(x.jsx)("h3",{children:t.list[0].weather[0].main})]}),Object(x.jsxs)("div",{className:"temp item",children:[Object(x.jsxs)("h1",{children:[Math.floor(t.list[0].main.temp)," C"]}),Object(x.jsxs)("p",{children:["Min temp: ",Math.floor(t.list[0].main.temp_min)," C"]}),Object(x.jsxs)("p",{children:["Max temp: ",Math.floor(t.list[0].main.temp_max)," C"]}),Object(x.jsxs)("p",{children:["Wind speed: ",Math.floor(t.list[0].wind.speed)," \u043c/\u0441"]})]})]})};var w=Object(o.b)((function(t){var e=t.weather;return{weather:e.weather,city:e.city,country:e.country}}))((function(){var t=Object(n.useState)({}),e=Object(s.a)(t,2),c=e[0],a=e[1];return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{children:"Weather"}),Object(x.jsx)(f,{onSubmit:function(t){a(t)}}),Object(x.jsx)(g,Object(i.a)({},c))]})})),v=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))},E=c(26),T=c(6),_=c(23),S=c(24),C=c.n(S),N={weather:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case d:return Object(i.a)(Object(i.a)({},t),{},{weather:n});case l:return t.city=n,Object(i.a)(Object(i.a)({},t),{},{city:t.city});case b:return t.country=n,Object(i.a)(Object(i.a)({},t),{},{country:t.country});case p:return t.start=n,Object(i.a)(Object(i.a)({},t),{},{start:t.start});default:return t}}},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Object(T.d)(Object(T.b)(Object(i.a)(Object(i.a)({},N),t)),e,Object(T.c)(T.a.apply(void 0,Object(E.a)(c).concat([_.a,C.a])),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()))},R=(c(58),A());r.a.render(Object(x.jsx)(o.a,{store:R,children:Object(x.jsx)(w,{})}),document.getElementById("root")),v()}},[[59,1,2]]]);
//# sourceMappingURL=main.3961eeea.chunk.js.map