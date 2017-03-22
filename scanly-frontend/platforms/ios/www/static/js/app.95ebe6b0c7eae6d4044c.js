webpackJsonp([0,2],[,function(t,e,a){"use strict";var r={products:[],allProducts:[],selectedProduct:void 0};e.a=r},function(t,e,a){"use strict";e.a=[{path:"/about/",component:a(18)},{path:"/camera/",component:a(19)},{path:"/landing/",component:a(20)},{path:"/product/",component:a(21)},{path:"/search/",component:a(22)}]},function(t,e){},function(t,e){},,,function(t,e,a){a(17);var r=a(0)(a(9),a(28),null,null);t.exports=r.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(1);e.default={methods:{getProducts:function(t){var e=this;axios.get("http://10.6.65.224:4200/product/"+t).then(function(t){e.products=t.data}).then(function(){console.log("hit"),r.a.selectedProduct=e.products,e.$router.load({url:"/product/"})})},scanBarcode:function(){var t=this;console.log("clicked"),cordova.plugins.barcodeScanner.scan(function(e){console.log(e.text),alert("We got a barcode\nResult: "+e.text+"\nFormat: "+e.format+"\n"),t.getProducts(e.text)},function(t){alert("Scanning failed: "+t)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"QR_CODE,PDF_417",orientation:"landscape",disableAnimations:!0,disableSuccessBeep:!1})}},data:function(){return{products:r.a.products}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{getProducts:function(t){var e=this;axios.get("http://10.6.65.224:4200/product/"+t).then(function(t){e.products=t.data,console.log(t)})},scanBarcode:function(){var t=this;console.log("clicked"),cordova.plugins.barcodeScanner.scan(function(e){console.log(e.text),alert("We got a barcode\nResult: "+e.text+"\nFormat: "+e.format+"\nCancelled: "+e.cancelled),t.getProducts(e.text)},function(t){alert("Scanning failed: "+t)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"QR_CODE,PDF_417",orientation:"landscape",disableAnimations:!0,disableSuccessBeep:!1})}},data:function(){return{products:{}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(1);e.default={data:function(){return{product:r.a.selectedProduct,reviews:[],memberName:"",review:""}},created:function(){var t=this;axios.get("http://10.6.65.224:4200/product/"+this.product.barcode+"/review").then(function(e){t.reviews=e.data})},methods:{addPost:function(){console.log("clicked"),axios.post("http://10.6.65.224:4200/review/"+this.product.id,{productId:this.product.id,memberName:this.memberName,review:this.review}).then(function(t){console.log(t.data)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(1);e.default={data:function(){return{allProducts:r.a.allProducts}},created:function(){var t=this;axios.get("http://10.6.65.224:4200/product/").then(function(e){console.log(e),t.allProducts=e.data})},methods:{onClick:function(t){r.a.selectedProduct=t}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){a(15);var r=a(0)(a(10),a(25),null,null);t.exports=r.exports},function(t,e,a){var r=a(0)(a(11),a(23),null,null);t.exports=r.exports},function(t,e,a){var r=a(0)(a(12),a(26),null,null);t.exports=r.exports},function(t,e,a){a(16);var r=a(0)(a(13),a(27),null,null);t.exports=r.exports},function(t,e,a){var r=a(0)(a(14),a(24),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"About","back-link":"Back",sliding:""}}),t._v(" "),a("f7-block",{attrs:{inner:""}},[a("p",{on:{click:function(e){t.scanBarcode()}}},[t._v("Scan")])]),t._v(" "),a("h1",[t._v(t._s(t.products.name))]),t._v(" "),a("h3",[t._v("Details: "+t._s(t.products.details))]),t._v(" "),a("p",[t._v("Price: "+t._s(t.products.price))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-pages",[a("f7-page",{staticClass:"navbar-fixed"},[a("form",{staticClass:"searchbar searchbar-init",attrs:{"data-search-list":".list-block-search","data-search-in":".item-title"}},[a("div",{staticClass:"searchbar-input"},[a("input",{attrs:{type:"search",placeholder:"Search"}}),t._v(" "),a("a",{staticClass:"searchbar-clear",attrs:{href:"#"}})]),t._v(" "),a("a",{staticClass:"searchbar-cancel",attrs:{href:"#"}},[t._v("Cancel")])]),t._v(" "),a("div",{staticClass:"searchbar-overlay"}),t._v(" "),a("div",{staticClass:"page-content"},[a("div",{staticClass:"content-block searchbar-not-found"},[a("div",{staticClass:"content-block-inner"},[t._v("No element found...")])]),t._v(" "),a("div",{staticClass:"list-block list-block-search searchbar-found"},[a("f7-list",{attrs:{"media-list":""}},t._l(t.allProducts,function(e){return a("f7-list-item",{key:"product.id",staticClass:"item-title",attrs:{link:"/product/",title:e.name,subtitle:e.details},on:{click:function(a){t.onClick(e)}}})}))],1)])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-pages",[a("f7-page",[a("f7-block",{staticClass:"image"},[a("div",{staticClass:"icon-container"},[a("i",{staticClass:"fa fa-superpowers fa-lg fa-3x",attrs:{"aria-hidden":"true"}}),t._v(" "),a("p",[t._v("Explore")])]),t._v(" "),a("div",{staticClass:"icon-container"},[a("i",{staticClass:"middle-icon fa fa-barcode fa-lg fa-5x",attrs:{"aria-hidden":"true"}}),t._v(" "),a("p",[t._v("Tap to Scan")])]),t._v(" "),a("div",{staticClass:"icon-container"},[a("i",{staticClass:"fa fa-search fa-lg fa-3x",attrs:{"aria-hidden":"true"}}),t._v(" "),a("p",[a("a",{staticStyle:{color:"#610A0D"},attrs:{href:"/search/"}},[t._v("Search")])])])]),t._v(" "),a("f7-grid",{attrs:{id:"header-grid"}},[a("f7-col",{attrs:{width:"50"}},[a("f7-block-title",[t._v("Recently Viewed")])],1),t._v(" "),a("f7-col",{attrs:{width:"50"}},[a("f7-block-title",{attrs:{id:"left-text"}},[t._v("See All >")])],1)],1),t._v(" "),a("f7-grid",[a("f7-col",{staticClass:"recent-view-cards",attrs:{width:"50"}},[a("div",{staticClass:"card demo-card-header-pic"},[a("div",{staticClass:"card-header color-white no-border",staticStyle:{"background-image":"url(http://www.romesnowboards.com/img/boards/mod/162.jpg)"},attrs:{valign:"bottom"}}),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-content-inner"},[a("p",{staticClass:"color-gray"},[t._v("Rome Mod")])])])])]),t._v(" "),a("f7-col",{staticClass:"recent-view-cards",attrs:{width:"50"}},[a("div",{staticClass:"card demo-card-header-pic"},[a("div",{staticClass:"card-header color-white no-border",staticStyle:{"background-image":"url(http://static.shoplightspeed.com/shops/604947/files/000902609/262x276x2/huf-huf-classic-hi-ess-black-white.jpg)"},attrs:{valign:"bottom"}}),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-content-inner"},[a("p",{staticClass:"color-gray"},[t._v("Huff Classic Black")])])])])])],1),t._v(" "),a("f7-block",[a("f7-grid",[a("f7-col",{attrs:{width:"50"}},[a("p",[a("a",{staticClass:"button",attrs:{href:"/search/"}},[t._v("Search")])])]),t._v(" "),a("f7-col",{attrs:{width:"50"}},[a("p",[a("a",{staticClass:"button",on:{click:function(e){t.scanBarcode()}}},[t._v("Camera")])])])],1)],1),t._v(" "),a("f7-list",[a("f7-list-item",{attrs:{link:"/search/",title:"Landing"}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("h1",[t._v("anytthing")]),t._v(" "),a("f7-chip",{attrs:{text:"Example Chip"}}),t._v(" "),a("f7-chip",{attrs:{text:"Another Chip",bg:"red",color:"white"}}),t._v(" "),a("f7-chip",{attrs:{text:"Jane Doe",media:'<img src="http://lorempixel.com/100/100/people/9/">'}}),t._v(" "),a("f7-chip",{attrs:{text:"Another Chip",deleteable:""},on:{delete:t.onChipDelete}}),t._v(" "),a("f7-chip",{attrs:{text:"Jane Doe",media:'<img src="http://lorempixel.com/100/100/people/9/">',"media-bg":"red",deleteable:""},on:{delete:t.onChipDelete}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("h1",[t._v("Product Reviews")]),t._v(" "),a("f7-card",[a("f7-card-header",[t._v(t._s(t.product.name))]),t._v(" "),a("f7-card-content",[t._v(t._s(t.product.barcode))]),t._v(" "),a("f7-card-content",[t._v(t._s(t.product.id))]),t._v(" "),a("f7-card-content",[t._v(t._s(t.review.productId))]),t._v(" "),a("img",{attrs:{src:t.product.picUrl}}),t._v(" "),a("f7-list",{attrs:{"media-list":""}},[a("f7-list-item",{attrs:{media:t.product.image,title:t.product.id,subtitle:t.product.name,text:t.product.name}})],1),t._v(" "),a("h3",[t._v("reviews")]),t._v(" "),t._l(t.reviews,function(e){return a("f7-card-content",{key:"review.id"},[t._v(t._s(e.review))])})],2),t._v(" "),a("f7-block",[a("f7-grid",[a("f7-col",{attrs:{width:"50"}},[a("f7-button",{attrs:{"open-popup":"#popup"}},[t._v("Popup")])],1),t._v(" "),a("f7-col",{attrs:{width:"50"}},[a("f7-button",{attrs:{"open-login-screen":"#login-screen"}},[t._v("Login Screen")])],1)],1)],1),t._v(" "),a("f7-popup",{attrs:{id:"popup"}},[a("f7-pages",[a("f7-page",[a("f7-navbar",{attrs:{"back-link":"Back",sliding:""}}),t._v(" "),a("f7-list",[a("f7-list-item",[a("f7-input",{attrs:{id:"name-form",type:"text",placeholder:"Name"},model:{value:t.memberName,callback:function(e){t.memberName=e},expression:"memberName"}})],1),t._v(" "),a("f7-input",{attrs:{id:"text-from",type:"textarea",placeholder:"Write A Review"},model:{value:t.review,callback:function(e){t.review=e},expression:"review"}})],1),t._v(" "),a("p",[a("f7-grid",[a("f7-col",[a("f7-button",{attrs:{raised:"",color:"red"}},[t._v("Cancel")])],1),t._v(" "),a("f7-col",[a("f7-button",{attrs:{fill:"",raised:"",color:"green"},on:{click:function(e){t.addPost()}}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("f7-views",[a("f7-view",{attrs:{id:"main-view","navbar-through":"","dynamic-navbar":!0,main:""}},[a("f7-navbar",[a("f7-nav-center",{attrs:{sliding:""}},[t._v("Scanly")])],1),t._v(" "),a("f7-pages",[a("f7-page",{attrs:{"login-screen":""}},[a("f7-login-screen-title",[t._v("Login")]),t._v(" "),a("f7-list",{attrs:{form:""}},[a("f7-list-item",[a("f7-label",[t._v("Username")]),t._v(" "),a("f7-input",{attrs:{name:"username",placeholder:"Username",type:"text"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Password")]),t._v(" "),a("f7-input",{attrs:{name:"password",type:"password",placeholder:"Password"}})],1)],1),t._v(" "),a("f7-list",[a("f7-list-button",{attrs:{link:"/about/",title:"Sign In","close-login-screen":""}}),t._v(" "),a("f7-list-label",[a("p",[t._v("Click Sign In to close Login Screen")])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(8),s=a(6),n=(a.n(s),a(5)),c=a.n(n),o=a(4),i=(a.n(o),a(3)),l=(a.n(i),a(2)),d=a(7),u=a.n(d);r.a.use(c.a),new r.a({el:"#app",template:"<app/>",framework7:{root:"#app",routes:l.a},components:{app:u.a}})}],[31]);
//# sourceMappingURL=app.95ebe6b0c7eae6d4044c.js.map