webpackJsonp([0,2],[,function(t,e,n){"use strict";e.a=[{path:"/about/",component:n(14)},{path:"/camera/",component:n(15)},{path:"/landing/",component:n(16)}]},function(t,e){},function(t,e){},,,function(t,e,n){n(13);var a=n(0)(n(8),n(20),null,null);t.exports=a.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{getProducts:function(t){var e=this;axios.get("http://10.6.65.224:4200/product/"+t).then(function(t){e.products=t.data,console.log(t)})},scanBarcode:function(){var t=this;console.log("clicked"),cordova.plugins.barcodeScanner.scan(function(e){console.log(e.text),alert("We got a barcode\nResult: "+e.text+"\nFormat: "+e.format+"\nCancelled: "+e.cancelled),t.getProducts(e.text)},function(t){alert("Scanning failed: "+t)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"QR_CODE,PDF_417",orientation:"landscape",disableAnimations:!0,disableSuccessBeep:!1})}},data:function(){return{products:{}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{getProducts:function(t){var e=this;axios.get("http://10.6.65.224:4200/product/"+t).then(function(t){e.products=t.data,console.log(t)})},scanBarcode:function(){var t=this;console.log("clicked"),cordova.plugins.barcodeScanner.scan(function(e){console.log(e.text),alert("We got a barcode\nResult: "+e.text+"\nFormat: "+e.format+"\nCancelled: "+e.cancelled),t.getProducts(e.text)},function(t){alert("Scanning failed: "+t)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"QR_CODE,PDF_417",orientation:"landscape",disableAnimations:!0,disableSuccessBeep:!1})}},data:function(){return{products:{}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){},function(t,e){},function(t,e,n){n(12);var a=n(0)(n(9),n(18),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(10),n(17),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(11),n(19),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",{attrs:{title:"About","back-link":"Back",sliding:""}}),t._v(" "),n("f7-block",{attrs:{inner:""}},[n("p",{on:{click:function(e){t.scanBarcode()}}},[t._v("Scan")])]),t._v(" "),n("h1",[t._v(t._s(t.products.name))]),t._v(" "),n("h3",[t._v("Details: "+t._s(t.products.details))]),t._v(" "),n("p",[t._v("Price: "+t._s(t.products.price))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-pages",[n("f7-page",[n("f7-content-block",[n("p",[n("img",{staticStyle:{width:"100px",height:"auto"},attrs:{src:"https://s-media-cache-ak0.pinimg.com/originals/82/06/07/8206074aa93e20c2b5c7208267b39b55.jpg",alt:""}})]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet...")])]),t._v(" "),n("f7-block-title",[t._v("Welcome to my App")]),t._v(" "),n("f7-block",{staticClass:"image"},[n("h3",{attrs:{id:"search"}},[t._v("Search")]),t._v(" "),n("h3",{attrs:{id:"camera"},on:{click:function(e){t.scanBarcode()}}},[t._v("Camera")])]),t._v(" "),n("f7-block-title",[t._v("Navigation")]),t._v(" "),n("f7-card",[n("f7-card-header",[t._v(t._s(t.products.name))]),t._v(" "),n("f7-card-content",[t._v(t._s(t.products.details))]),t._v(" "),n("f7-card-footer",[t._v(t._s(t.products.details))])],1),t._v(" "),n("f7-list",[n("f7-list-item",{attrs:{link:"/about/",title:"About"}}),t._v(" "),n("f7-list-item",{attrs:{link:"/camera/",title:"Camera"}}),t._v(" "),n("f7-list-item",{attrs:{link:"/landing/",title:"Landing"}}),t._v(" "),n("f7-list-item",{attrs:{link:"/photo/",title:"Photo"}}),t._v(" "),n("f7-list-item",{attrs:{link:"/dynamic-route/blog/45/post/125/?foo=bar#about",title:"Dynamic Route"}})],1),t._v(" "),n("f7-block-title",[t._v("Side Panels")]),t._v(" "),n("f7-block",[n("f7-grid",[n("f7-col",{attrs:{width:"50"}},[n("f7-button",{attrs:{"open-panel":"left"}},[t._v("Left Panel")])],1),t._v(" "),n("f7-col",{attrs:{width:"50"}},[n("f7-button",{attrs:{"open-panel":"right"}},[t._v("Right Panel")])],1)],1)],1),t._v(" "),n("f7-block-title",[t._v("Modals")]),t._v(" "),n("f7-block",[n("f7-grid",[n("f7-col",{attrs:{width:"50"}},[n("f7-button",{attrs:{"open-popup":"#popup"}},[t._v("Popup")])],1),t._v(" "),n("f7-col",{attrs:{width:"50"}},[n("f7-button",{attrs:{"open-login-screen":"#login-screen"}},[t._v("Login Screen")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-card",[n("f7-card-header",[t._v("Card header content")]),t._v(" "),n("f7-card-content",[t._v("Card content")]),t._v(" "),n("f7-card-footer",[t._v("Card footer content")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("f7-views",[n("f7-view",{attrs:{id:"main-view","navbar-through":"","dynamic-navbar":!0,main:""}},[n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"left"}})],1),t._v(" "),n("f7-nav-center",{attrs:{sliding:""}},[t._v("Scanly")]),t._v(" "),n("f7-nav-right",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1)],1),t._v(" "),n("f7-pages",[n("f7-page",{attrs:{"login-screen":""}},[n("f7-login-screen-title",[t._v("Login")]),t._v(" "),n("f7-list",{attrs:{form:""}},[n("f7-list-item",[n("f7-label",[t._v("Username")]),t._v(" "),n("f7-input",{attrs:{name:"username",placeholder:"Username",type:"text"}})],1),t._v(" "),n("f7-list-item",[n("f7-label",[t._v("Password")]),t._v(" "),n("f7-input",{attrs:{name:"password",type:"password",placeholder:"Password"}})],1)],1),t._v(" "),n("f7-list",[n("f7-list-button",{attrs:{link:"/about/",title:"Sign In","close-login-screen":""}}),t._v(" "),n("f7-list-label",[n("p",[t._v("Click Sign In to close Login Screen")])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(7),o=n(5),r=(n.n(o),n(4)),c=n.n(r),i=n(3),s=(n.n(i),n(2)),l=(n.n(s),n(1)),f=n(6),u=n.n(f);a.a.use(c.a),new a.a({el:"#app",template:"<app/>",framework7:{root:"#app",routes:l.a},components:{app:u.a}})}],[23]);
//# sourceMappingURL=app.16b48a41276aa1d00dd6.js.map