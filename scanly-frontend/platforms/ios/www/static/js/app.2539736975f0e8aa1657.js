webpackJsonp([0,2],[,function(t,e,a){"use strict";var i={products:[],allProducts:[],category:[],selectedProduct:void 0,categoryProduct:void 0};e.a=i},function(t,e,a){"use strict";e.a=[{path:"/about/",component:a(24)},{path:"/camera/",component:a(25)},{path:"/landing/",component:a(27)},{path:"/product/",component:a(28)},{path:"/search/",component:a(30)},{path:"/category/",component:a(26)},{path:"/productbycategory/",component:a(29)}]},function(t,e){},function(t,e){},,,function(t,e,a){a(22);var i=a(0)(a(12),a(39),null,null);t.exports=i.exports},function(t,e,a){a(23);var i=a(0)(a(10),a(41),"data-v-76e9d052",null);t.exports=i.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(31),r=a.n(i);e.default={components:{star:r.a},props:{increment:{type:Number,default:1},rating:{type:Number,default:0},activeColor:{type:String,default:"#ffd055"},inactiveColor:{type:String,default:"#d8d8d8"},maxRating:{type:Number,default:5},starSize:{type:Number,default:50},showRating:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},textClass:{type:String,default:""},inline:{type:Boolean,default:!1},borderColor:{type:String,default:"#999"},borderWidth:{type:Number,default:0},padding:{type:Number,default:0}},created:function(){this.step=100*this.increment,this.currentRating=this.rating,this.selectedRating=this.rating,this.createStars()},methods:{setRating:function(t,e){if(!this.readOnly){var a=t.position/100;this.currentRating=(t.id+a-1).toFixed(2),this.currentRating=this.currentRating>this.maxRating?this.maxRating:this.currentRating,this.createStars(),e?(this.selectedRating=this.currentRating,this.$emit("rating-selected",this.selectedRating)):this.$emit("current-rating",this.currentRating)}},resetRating:function(){this.readOnly||(this.currentRating=this.selectedRating,this.createStars())},createStars:function(){this.round();for(var t=0;t<this.maxRating;t++){var e=0;t<this.currentRating&&(e=this.currentRating-t>1?100:100*(this.currentRating-t)),this.$set(this.fillLevel,t,Math.round(e))}},round:function(){var t=1/this.increment;this.currentRating=Math.ceil(this.currentRating*t)/t}},watch:{rating:function(t){this.currentRating=t,this.selectedRating=t,this.createStars()}},data:function(){return{step:0,fillLevel:[],currentRating:0,selectedRating:0}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{fill:{type:Number,default:0},size:{type:Number,default:50},starId:{type:Number,required:!0},activeColor:{type:String,required:!0},inactiveColor:{type:String,required:!0},borderColor:{type:String,default:"#000"},borderWidth:{type:Number,default:0},padding:{type:Number,default:0}},created:function(){this.calculatePoints,this.grad=Math.random().toString(36).substring(7)},computed:{calculatePoints:function(){var t=this;this.starPoints=this.starPoints.map(function(e){return t.size/43*e+1.5*t.borderWidth})},starPointsToString:function(){return this.starPoints.join(",")},getGradId:function(){return"url(#"+this.grad+")"},getSize:function(){return parseInt(this.size)+parseInt(3*this.borderWidth)+this.padding},getFill:function(){return this.fill+"%"}},methods:{mouseMoving:function(t){this.$emit("star-mouse-move",{event:t,position:this.getPosition(t),id:this.starId})},getPosition:function(t){var e=.92*this.size,a=Math.round(100/e*t.offsetX);return a>100?100:a},selected:function(t){this.$emit("star-selected",{id:this.starId,position:this.getPosition(t)})}},data:function(){return{starPoints:[19.8,2.2,6.6,43.56,39.6,17.16,0,17.16,33,43.56],grad:""}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1);e.default={methods:{getProducts:function(t){var e=this;axios.get("http://10.6.65.224:4200/product/"+t).then(function(t){e.products=t.data}).then(function(){console.log("hit"),i.a.selectedProduct=e.products,e.$router.load({url:"/product/"})})},scanBarcode:function(){var t=this;console.log("clicked"),cordova.plugins.barcodeScanner.scan(function(e){console.log(e.text),alert("We got a barcode\nResult: "+e.text+"\nFormat: "+e.format+"\n"),t.getProducts(e.text)},function(t){alert("Scanning failed: "+t)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"QR_CODE,PDF_417",orientation:"landscape",disableAnimations:!0,disableSuccessBeep:!1})}},data:function(){return{products:i.a.products}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{getProducts:function(t){var e=this;axios.get("https://scanly-backend.herokuapp.com/product/"+t).then(function(t){e.products=t.data,console.log(t)})},scanBarcode:function(){var t=this;console.log("clicked"),cordova.plugins.barcodeScanner.scan(function(e){console.log(e.text),alert("We got a barcode\nResult: "+e.text+"\nFormat: "+e.format+"\nCancelled: "+e.cancelled),t.getProducts(e.text)},function(t){alert("Scanning failed: "+t)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"QR_CODE,PDF_417",orientation:"landscape",disableAnimations:!0,disableSuccessBeep:!1})}},data:function(){return{products:{}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1);e.default={created:function(){var t=this;axios.get("http://10.6.65.224:4200/category").then(function(e){t.category=e.data})},data:function(){return{category:i.a.category}},methods:{onClick:function(t){i.a.categoryProduct=t}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1);e.default={data:function(){return{activeColor:"blue",product:i.a.selectedProduct,reviews:[],memberName:"",review:"",rating:0}},created:function(){var t=this;axios.get("http://10.6.65.224:4200/product/"+this.product.barcode+"/review").then(function(e){t.reviews=e.data})},methods:{addPost:function(){var t=this;console.log("clicked"),axios.post("http://10.6.65.224:4200/review/"+this.product.id,{productId:this.product.id,memberName:this.memberName,review:this.review,rating:this.rating}).then(function(t){console.log(t.data)}).then(function(){axios.get("http://10.6.65.224:4200/product/"+t.product.barcode+"/review").then(function(e){t.reviews=e.data})})},syncRating:function(t){console.log(t),this.rating=t},cancel:function(){console.log("clicked"),this.$router.load({url:"/product/"})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1);e.default={created:function(){var t=this;axios.get("http://10.6.65.224:4200/category/"+this.category.id+"/product").then(function(e){t.products=e.data})},data:function(){return{products:[],category:i.a.categoryProduct}},methods:{onClick:function(t){i.a.selectedProduct=t}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1);e.default={data:function(){return{allProducts:i.a.allProducts}},created:function(){var t=this;axios.get("http://10.6.65.224:4200/product/").then(function(e){console.log(e),t.allProducts=e.data})},methods:{onClick:function(t){i.a.selectedProduct=t}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){a(20);var i=a(0)(a(13),a(35),null,null);t.exports=i.exports},function(t,e,a){var i=a(0)(a(14),a(33),null,null);t.exports=i.exports},function(t,e,a){var i=a(0)(a(15),a(32),null,null);t.exports=i.exports},function(t,e,a){var i=a(0)(a(16),a(36),null,null);t.exports=i.exports},function(t,e,a){a(21);var i=a(0)(a(17),a(37),null,null);t.exports=i.exports},function(t,e,a){var i=a(0)(a(18),a(38),null,null);t.exports=i.exports},function(t,e,a){var i=a(0)(a(19),a(34),null,null);t.exports=i.exports},function(t,e,a){var i=a(0)(a(11),a(40),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{"back-link":"Back",sliding:""}}),t._v(" "),a("f7-list",{attrs:{"media-list":""}},t._l(t.category,function(e){return a("f7-list-item",{key:"category.id",staticClass:"item-title",attrs:{link:"/productbycategory/",title:e.name},on:{click:function(a){t.onClick(e)}}})}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"About","back-link":"Back",sliding:""}}),t._v(" "),a("f7-block",{attrs:{inner:""}},[a("p",{on:{click:function(e){t.scanBarcode()}}},[t._v("Scan")])]),t._v(" "),a("h1",[t._v(t._s(t.products.name))]),t._v(" "),a("h3",[t._v("Details: "+t._s(t.products.details))]),t._v(" "),a("p",[t._v("Price: "+t._s(t.products.price))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-pages",[a("f7-page",{staticClass:"navbar-fixed"},[a("f7-navbar",{attrs:{"back-link":"Back",sliding:""}}),t._v(" "),a("form",{staticClass:"searchbar searchbar-init",attrs:{"data-search-list":".list-block-search","data-search-in":".item-title"}},[a("div",{staticClass:"searchbar-input"},[a("input",{attrs:{type:"search",placeholder:"Search"}}),t._v(" "),a("a",{staticClass:"searchbar-clear",attrs:{href:"#"}})]),t._v(" "),a("a",{staticClass:"searchbar-cancel",attrs:{href:"#"}},[t._v("Cancel")])]),t._v(" "),a("div",{staticClass:"searchbar-overlay"}),t._v(" "),a("div",{staticClass:"page-content"},[a("div",{staticClass:"content-block searchbar-not-found"},[a("div",{staticClass:"content-block-inner"},[t._v("No element found...")])]),t._v(" "),a("div",{staticClass:"list-block list-block-search searchbar-found"},[a("f7-list",{attrs:{"media-list":""}},t._l(t.allProducts,function(e){return a("f7-list-item",{key:"product.id",staticClass:"item-title",attrs:{link:"/product/",title:e.name,subtitle:e.details},on:{click:function(a){t.onClick(e)}}})}))],1)])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-pages",[a("f7-page",[a("f7-block",{staticClass:"image"},[a("div",{staticClass:"icon-container"},[a("i",{staticClass:"fa fa-superpowers fa-lg fa-3x",attrs:{"aria-hidden":"true"}}),t._v(" "),a("p",[a("a",{staticClass:"button hide-border",staticStyle:{color:"#610A0D"},attrs:{href:"/category/"}},[t._v("Explore")])])]),t._v(" "),a("div",{staticClass:"icon-container"},[a("i",{staticClass:"middle-icon fa fa-barcode fa-lg fa-5x",attrs:{"aria-hidden":"true"}}),t._v(" "),a("p",{on:{click:function(e){t.scanBarcode()}}},[t._v("Tap to Scan")])]),t._v(" "),a("div",{staticClass:"icon-container"},[a("i",{staticClass:"fa fa-search fa-lg fa-3x",attrs:{"aria-hidden":"true"}}),t._v(" "),a("p",[a("a",{staticClass:"button hide-border",staticStyle:{color:"#610A0D"},attrs:{href:"/search/"}},[t._v("Search")])])])]),t._v(" "),a("f7-grid",{attrs:{id:"header-grid"}},[a("f7-col",{attrs:{width:"50"}},[a("f7-block-title",[t._v("Recently Viewed")])],1),t._v(" "),a("f7-col",{attrs:{width:"50"}},[a("f7-block-title",{attrs:{id:"left-text"}},[t._v("See All >")])],1)],1),t._v(" "),a("f7-grid",[a("f7-col",{staticClass:"recent-view-cards",attrs:{width:"50"}},[a("div",{staticClass:"card demo-card-header-pic"},[a("div",{staticClass:"card-header color-white no-border",staticStyle:{"background-image":"url(http://www.romesnowboards.com/img/boards/mod/162.jpg)"},attrs:{valign:"bottom"}}),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-content-inner"},[a("p",{staticClass:"color-gray"},[t._v("Rome Mod")])])])])]),t._v(" "),a("f7-col",{staticClass:"recent-view-cards",attrs:{width:"50"}},[a("div",{staticClass:"card demo-card-header-pic"},[a("div",{staticClass:"card-header color-white no-border",staticStyle:{"background-image":"url(http://static.shoplightspeed.com/shops/604947/files/000902609/262x276x2/huf-huf-classic-hi-ess-black-white.jpg)"},attrs:{valign:"bottom"}}),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"card-content-inner"},[a("p",{staticClass:"color-gray"},[t._v("Huff Classic Black")])])])])])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("h1",[t._v("anytthing")]),t._v(" "),a("f7-chip",{attrs:{text:"Example Chip"}}),t._v(" "),a("f7-chip",{attrs:{text:"Another Chip",bg:"red",color:"white"}}),t._v(" "),a("f7-chip",{attrs:{text:"Jane Doe",media:'<img src="http://lorempixel.com/100/100/people/9/">'}}),t._v(" "),a("f7-chip",{attrs:{text:"Another Chip",deleteable:""},on:{delete:t.onChipDelete}}),t._v(" "),a("f7-chip",{attrs:{text:"Jane Doe",media:'<img src="http://lorempixel.com/100/100/people/9/">',"media-bg":"red",deleteable:""},on:{delete:t.onChipDelete}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{"back-link":"Back",sliding:""}}),t._v(" "),a("f7-card",{staticClass:"product-container"},[a("img",{staticClass:"product-images",attrs:{src:t.product.picUrl}}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-30"},[a("h3",{staticStyle:{"padding-left":".6em",color:"brown"}},[t._v(t._s(t.product.name))])]),t._v(" "),a("div",{staticClass:"col-30"},[a("h3",{staticStyle:{color:"brown"}},[t._v(t._s(t.product.price))])])])]),t._v(" "),a("div",{staticClass:"row review-button"},[a("h3",[t._v("Reviews")]),t._v(" "),a("f7-col",{attrs:{width:"50"}},[a("f7-button",{attrs:{"open-popup":"#popup"}},[t._v("Write a Review")])],1)],1),t._v(" "),t._l(t.reviews,function(e){return a("f7-card-content",{key:"review.id",staticClass:"review-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-50 star"},[t._v(t._s(e.memberName))]),t._v(" "),a("div",{staticClass:"col-10 star",attrs:{id:"1"}},[a("i",{staticClass:"fa fa-star fa-lg ",class:{yellow:e.rating>=1},attrs:{"aria-hidden":"true"}})]),t._v(" "),a("div",{staticClass:"col-10 star",attrs:{id:"2"}},[a("i",{staticClass:"fa fa-star fa-lg ",class:{yellow:e.rating>=2},attrs:{"aria-hidden":"true"}})]),t._v(" "),a("div",{staticClass:"col-10 star",attrs:{id:"3"}},[a("i",{staticClass:"fa fa-star fa-lg ",class:{yellow:e.rating>=3},attrs:{"aria-hidden":"true"}})]),t._v(" "),a("div",{staticClass:"col-10 star",attrs:{id:"4"}},[a("i",{staticClass:"fa fa-star fa-lg ",class:{yellow:e.rating>=4},attrs:{"aria-hidden":"true"}})]),t._v(" "),a("div",{staticClass:"col-10 star",attrs:{id:"5"}},[a("i",{staticClass:"fa fa-star fa-lg ",class:{yellow:e.rating>=5},attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("div",{staticClass:"review-text"},[t._v("\n      "+t._s(e.review)+"\n    ")])])}),t._v(" "),a("f7-popup",{attrs:{id:"popup"}},[a("f7-pages",[a("f7-page",[a("f7-list",[a("f7-list-item",[a("f7-input",{attrs:{id:"name-form",type:"text",placeholder:"Enter Your Name"},model:{value:t.memberName,callback:function(e){t.memberName=e},expression:"memberName"}})],1),t._v(" "),a("div",{staticClass:"row star-review"},[a("div",{staticClass:"col-20 star",attrs:{id:"1"},on:{click:function(e){t.syncRating(1)}}},[a("i",{staticClass:"fa fa-star fa-lg fa-3x",class:{yellow:t.rating>=1},attrs:{"aria-hidden":"true"}})]),t._v(" "),a("div",{staticClass:"col-20 star",attrs:{id:"2"},on:{click:function(e){t.syncRating(2)}}},[a("i",{staticClass:"fa fa-star fa-lg fa-3x",class:{yellow:t.rating>=2},attrs:{"aria-hidden":"true"}})]),t._v(" "),a("div",{staticClass:"col-20 star",attrs:{id:"3"},on:{click:function(e){t.syncRating(3)}}},[a("i",{staticClass:"fa fa-star fa-lg fa-3x",class:{yellow:t.rating>=3},attrs:{"aria-hidden":"true"}})]),t._v(" "),a("div",{staticClass:"col-20 star",attrs:{id:"4"},on:{click:function(e){t.syncRating(4)}}},[a("i",{staticClass:"fa fa-star fa-lg fa-3x",class:{yellow:t.rating>=4},attrs:{"aria-hidden":"true"}})]),t._v(" "),a("div",{staticClass:"col-20 star",attrs:{id:"5"},on:{click:function(e){t.syncRating(5)}}},[a("i",{staticClass:"fa fa-star fa-lg fa-3x",class:{yellow:t.rating>=5},attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("f7-input",{attrs:{id:"text-from",type:"textarea",placeholder:"Share Your Opinion And Tips Here"},model:{value:t.review,callback:function(e){t.review=e},expression:"review"}})],1),t._v(" "),a("p",[a("f7-grid",[a("f7-col",[a("f7-button",{staticClass:"close-popup",attrs:{raised:"",color:"red"}},[t._v("Cancel")])],1),t._v(" "),a("f7-col",[a("f7-button",{staticClass:"close-popup",attrs:{fill:"",raised:"",color:"green"},on:{click:function(e){t.addPost()}}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{"back-link":"Back",sliding:""}}),t._v(" "),a("f7-list",{attrs:{"media-list":""}},t._l(t.products,function(e){return a("f7-list-item",{key:"product.id",staticClass:"item-title",attrs:{link:"/product/",title:e.name},on:{click:function(a){t.onClick(e)}}})}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("f7-views",[a("f7-view",{attrs:{id:"main-view","navbar-through":"","dynamic-navbar":!0,main:""}},[a("f7-navbar",[a("f7-nav-center",{attrs:{sliding:""}},[t._v("Scanly")])],1),t._v(" "),a("f7-pages",[a("f7-page",{attrs:{"login-screen":""}},[a("f7-login-screen-title",[t._v("Login")]),t._v(" "),a("f7-list",{attrs:{form:""}},[a("f7-list-item",[a("f7-label",[t._v("Username")]),t._v(" "),a("f7-input",{attrs:{name:"username",placeholder:"Username",type:"text"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Password")]),t._v(" "),a("f7-input",{attrs:{name:"password",type:"password",placeholder:"Password"}})],1)],1),t._v(" "),a("f7-list",[a("f7-list-button",{attrs:{link:"/about/",title:"Sign In","close-login-screen":""}}),t._v(" "),a("f7-list-label",[a("p",[t._v("Click Sign In to close Login Screen")])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{height:t.getSize,width:t.getSize},on:{mousemove:t.mouseMoving,click:t.selected}},[a("linearGradient",{attrs:{id:t.grad,x1:"0",x2:"100%",y1:"0",y2:"0"}},[a("stop",{attrs:{offset:t.getFill,"stop-color":t.activeColor}}),t._v(" "),a("stop",{attrs:{offset:t.getFill,"stop-color":t.inactiveColor}})],1),t._v(" "),a("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId,stroke:t.borderColor,"stroke-width":t.borderWidth}}),t._v(" "),a("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["star-rating",{inline:t.inline}]},[a("div",{staticClass:"star-rating",on:{mouseleave:t.resetRating}},[t._l(t.maxRating,function(e){return a("span",{class:[{pointer:!t.readOnly},"star"]},[a("star",{attrs:{fill:t.fillLevel[e-1],size:t.starSize,"star-id":e,step:t.step,"active-color":t.activeColor,"inactive-color":t.inactiveColor,"border-color":t.borderColor,"border-width":t.borderWidth,padding:t.padding},on:{"star-selected":function(e){t.setRating(e,!0)},"star-mouse-move":t.setRating}})],1)}),t._v(" "),t.showRating?a("span",{class:["rating-text",t.textClass]},[t._v(" "+t._s(t.currentRating))]):t._e()],2)])},staticRenderFns:[]}},,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(9),r=a(8),s=a.n(r),n=a(6),o=(a.n(n),a(5)),c=a.n(o),l=a(4),d=(a.n(l),a(3)),u=(a.n(d),a(2)),f=a(7),p=a.n(f);i.a.use(c.a),new i.a({el:"#app",template:"<app/>",framework7:{root:"#app",routes:u.a},components:{app:p.a,StarRating:s.a}})}],[44]);
//# sourceMappingURL=app.2539736975f0e8aa1657.js.map