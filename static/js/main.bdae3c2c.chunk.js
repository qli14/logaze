(this.webpackJsonplogaze=this.webpackJsonplogaze||[]).push([[0],{200:function(e,t,a){e.exports=a(275)},205:function(e,t,a){},206:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),i=(a(205),a(53)),c=(a(206),a(207),a(97)),s=a(54),d=function(){var e="https://api.jsonbin.io/b/".concat("5dac6fed5751f76337fd4ac2","/latest");return fetch(e).then((function(e){return e.json()}))},u=a(63),h=a(197),m=(a(253),a(254),function(e){return r.a.createElement(u.a,{variant:"light",size:"sm",target:"_blank",rel:"noopener noreferrer",href:e},"Buy")}),f=function(e){return e?"Yes":"No"},p=function(e){return function(t){return null===t?t:t.toFixed(e)}},b=function(e){return function(t){var a=t.value;return null===a?a:e(a)}},g=function(e){return function(t){return"$".concat(e(t))}},y=function(e){var t=e.data,a={columnDefs:[{headerName:"USD",field:"url",width:65,cellRendererFramework:b(m)},{headerName:"Price",field:"price",width:70,cellRenderer:b(g(p(2))),filter:"agNumberColumnFilter",sort:"asc"},{headerName:"Type",field:"product-type",width:70},{headerName:"Model",field:"model"},{headerName:"Screen Size",field:"screen-size",width:70,cellRenderer:b(p(1)),filter:"agNumberColumnFilter"},{headerName:"Resolution",field:"resolution",width:100},{headerName:"IPS Screen?",field:"screen-has-ips",width:70,cellRenderer:b(f)},{headerName:"Display",field:"display-type"},{headerName:"Memory Size",field:"memory-size",width:70},{headerName:"Hard Drive Type",field:"hard-drive-type",width:70},{headerName:"Hard Drive Size",field:"hard-drive-size",width:70},{headerName:"Processor Brand",field:"processor-brand",width:70},{headerName:"Processor Range",field:"processor-range",width:80},{headerName:"Processor",field:"processor"},{headerName:"Wireless",field:"wireless"},{headerName:"Graphics",field:"graphics"},{headerName:"Touchscreen?",field:"screen-supports-touch",width:70,cellRenderer:b(f)},{headerName:"Hard Drive",field:"hard-drive"},{headerName:"Memory",field:"memory"},{headerName:"Memory Soldered?",field:"memory-soldered",width:70,cellRenderer:b(f)},{headerName:"Processor Cache",field:"processor-cache",width:70},{headerName:"Battery",field:"battery"},{headerName:"Warranty",field:"warranty"},{headerName:"Operating System",field:"operating-system"},{headerName:"Original Price",field:"orig-price",width:70,cellRenderer:b(g(p(2))),filter:"agNumberColumnFilter"},{headerName:"Pointing Device",field:"pointing-device"},{headerName:"Part Number",field:"part-number"},{headerName:"Keyboard",field:"keyboard"},{headerName:"Bluetooth",field:"bluetooth",width:70}],defaultColDef:{sortable:!0,filter:!0,resizable:!0},suppressCellSelection:!0,enableCellTextSelection:!0,suppressHorizontalScroll:!0,rowHeight:40,headerHeight:40};return r.a.createElement("div",{className:"ag-theme-balham-dark table-wrapper"},r.a.createElement(h.AgGridReact,{gridOptions:a,rowData:t,multiSortKey:"ctrl",onFirstDataRendered:function(e){return e.columnApi.autoSizeColumns()}}))},w=a(24),E=function(e){return r.a.createElement(w.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,{id:"contained-modal-title-vcenter"},"About")),r.a.createElement(w.a.Body,null,r.a.createElement("p",null,"When I wanted to buy a refurbished ThinkPad, I used ",r.a.createElement("a",{href:"https://lw.ofwiz.com"},"lw.ofwiz"),", but found it lacking because I couldn't filter for specs important to me, such as screen resolution, screen size, and whether the ThinkPad ",r.a.createElement("a",{href:"https://www.reddit.com/r/thinkpad/"},"had an IPS screen"),"."),r.a.createElement("p",null,"So I went all out to build logaze, to watch Lenovo's refurbished ThinkPad prices."),r.a.createElement("small",null,"p.s. Thanks for loading this page! You're contributing to scraping the Lenovo Outlet. (see faq)")),r.a.createElement(w.a.Footer,null,r.a.createElement("small",null,"Built with love by ",r.a.createElement("a",{href:"https://github.com/ackerleytng"},"ackerleytng")," in Clojure (",r.a.createElement("a",{href:"https://github.com/ackerleytng/logaze-scraper"},"scraper"),") and React (",r.a.createElement("a",{href:"https://github.com/ackerleytng/logaze"},"frontend"),")")," ",r.a.createElement(u.a,{onClick:e.onHide},"Close")))},v=function(e){return r.a.createElement(w.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,{id:"contained-modal-title-vcenter"},"FAQ")),r.a.createElement(w.a.Body,null,r.a.createElement("dl",null,r.a.createElement("dt",null,"Why does Lenovo say there are 235 (big number) products found but you only show 160 (smaller)?"),r.a.createElement("dd",null,"Some of those are already out of stock, I filtered out anything that is out of stock.")),r.a.createElement("dl",null,r.a.createElement("dt",null,"How am I contributing to scraping Lenovo Outlet?"),r.a.createElement("dd",null,"Whenever you open this page, your browser will check when the last update was, and if the last scraping time was more than 4 hours ago, your browser will trigger the scraper automatically. Thank you for helping to trigger the scraping! (not implemented yet. TODO) (Nope, your computer is not being used to scrape Lenovo Outlet.)")),r.a.createElement("dl",null,r.a.createElement("dt",null,"What is your backend/scraper?"),r.a.createElement("dd",null,"My backend is technically just a json file; the scraper resides on heroku. The heroku free dyno sleeps if it does not receive any traffic for 30 mins, and it takes really long to wake up after sleeping, hence I decided to cache results in a json file for better UX.")),r.a.createElement("dl",null,r.a.createElement("dt",null,"How are you caching scraping results?"),r.a.createElement("dd",null,"I'm using ",r.a.createElement("a",{href:"https://jsonbin.io"},"jsonbin.io"),"! They are a really great service that is like pastebin, but for json. They have a nice API for updating bins, and they allow you to update the same bin with new data!")),r.a.createElement("dl",null,r.a.createElement("dt",null,"Is this insecure, since the data being served from jsonbin.io could be written to by anyone?"),r.a.createElement("dd",null,"Yes, this means that if someone writes to the bin at ",r.a.createElement("a",{href:"https://jsonbin.io"},"jsonbin.io"),", they could potentially use XSS on you. I believe ",r.a.createElement("a",{href:"https://www.ag-grid.com"},"ag-grid")," escapes cell contents, but I will verify that. (TODO)")),r.a.createElement("dl",null,r.a.createElement("dt",null,"Why not secure the bin at jsonbin.io?"),r.a.createElement("dd",null,"I wish ",r.a.createElement("a",{href:"https://jsonbin.io"},"jsonbin.io")," allowed users to protect bins from writes with a key, but allow public access to the bin. As I understand it, they do have private bins, but that means needing the same key for access. If I have to embed the key in the web client, we're back to square one in protecting the bin from unauthorized writes."))),r.a.createElement(w.a.Footer,null,r.a.createElement(u.a,{onClick:e.onHide},"Close")))},k=a(55),N=function(e){var t=e.beforeOnClose,a=e.beforeShow,n=e.afterOnClose,l=e.afterShow;return r.a.createElement("div",{style:{position:"absolute",top:"1%",right:"1%",zIndex:10}},r.a.createElement(k.a,{onClose:t,show:a,delay:3e3,autohide:!0},r.a.createElement(k.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Scraper triggered!")),r.a.createElement(k.a.Body,null,"Scraper is starting up...")),r.a.createElement(k.a,{onClose:n,show:l,delay:3e3,autohide:!0},r.a.createElement(k.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Scraping triggered!")),r.a.createElement(k.a.Body,null,"Wait a bit, and then refresh this page!")))},j=function(){return d().then((function(e){return function(e,t){console.log({dldata:t});var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}("logaze.csv",function(e){console.log({conv:e});var t=function(e,t){return null===t?"":t},a=Object.keys(e[0]),n=e.map((function(e){return a.map((function(a){return JSON.stringify(e[a],t)})).join(",")}));return n.unshift(a.join(",")),n.join("\r\n")}(e))}))},S=function(){var e=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){d().then(r)}),[]),a}(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],o=a[1],u=Object(n.useState)(!1),h=Object(i.a)(u,2),m=h[0],f=h[1],p=Object(n.useState)(!1),b=Object(i.a)(p,2),g=b[0],w=b[1],k=Object(n.useState)(!1),S=Object(i.a)(k,2),O=S[0],C=S[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{bg:"dark",variant:"dark"},r.a.createElement(c.a.Brand,{href:"#home"},r.a.createElement("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ","logaze"),r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(s.a.Link,{onClick:function(){return o(!0)}},"about"),r.a.createElement(s.a.Link,{onClick:function(){return f(!0)}},"faq"),r.a.createElement(s.a.Link,{onClick:function(){return w(!0),void fetch("http://logaze.herokuapp.com/").then((function(){return C(!0)}))}},"rescrape"),r.a.createElement(s.a.Link,{onClick:j},"csv")),r.a.createElement(s.a,null,r.a.createElement(c.a.Text,null,r.a.createElement("small",null,e.length," laptops found")))),r.a.createElement(N,{beforeOnClose:function(){return w(!1)},beforeShow:g,afterOnClose:function(){return C(!1)},afterShow:O}),r.a.createElement(y,{data:e}),r.a.createElement(E,{show:l,onHide:function(){return o(!1)}}),r.a.createElement(v,{show:m,onHide:function(){return f(!1)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[200,1,2]]]);
//# sourceMappingURL=main.bdae3c2c.chunk.js.map