<template>
<f7-pages>
  <f7-page>
    <!-- <f7-content-block>

          <p>
        <f7-list-item(media="<img src='https://s-media-cache-ak0.pinimg.com/originals/82/06/07/8206074aa93e20c2b5c7208267b39b55.jpg'>" )></f7-list-item>
          <f7-data-background="https://s-media-cache-ak0.pinimg.com/originals/82/06/07/8206074aa93e20c2b5c7208267b39b55.jpg"></f7-data-background>
              <img src="https://s-media-cache-ak0.pinimg.com/originals/82/06/07/8206074aa93e20c2b5c7208267b39b55.jpg" alt="" style="width: 100px; height: auto;">
          <img src="../../src/assets/guitar-image.jpg" alt="">
          </p>
          <p>Lorem ipsum dolor sit amet...</p>

        </f7-content-block> -->





    <f7-block-title>Welcome Emage Skateshop</f7-block-title>
    <f7-block class="image">
      <!-- <h3 id="search">Welcome</h3> -->
      <!-- <h3 id="search">Explore</h3> -->
      <!-- <h3 id="img-header">Expeirence Retail</h3> -->
    </f7-block>
    <f7-block-title>How To Use The App</f7-block-title>
    <f7-content-block>

          <p>
            Seitan pok pok echo park, slow-carb meh vape 3 wolf moon humblebrag blue bottle viral scenester portland gastropub polaroid. Gentrify migas neutra sustainable, franzen venmo organic you probably haven't heard of them wolf etsy sriracha.

          </p>


        </f7-content-block>
        <f7-block-title>Side Panels</f7-block-title>
        <f7-block>
          <f7-grid>
            <f7-col width="50">
              <f7-button open-panel="left">Search</f7-button>
            </f7-col>
            <f7-col width="50">
              <f7-button v-on:click="scanBarcode()">Camera</f7-button>
            </f7-col>
          </f7-grid>
        </f7-block>
    <!-- <f7-card>
      <f7-card-header>{{ products.name }}</f7-card-header>
      <f7-card-content>{{ products.details }}</f7-card-content>
      <f7-card-footer>{{ products.details }}</f7-card-footer>
    </f7-card> -->
    <f7-list media-list=''>
           <f7-list-item v-on:click="onClick(products)" link='/product/'  :title='products.name' :subtitle='products.details' ></f7-list-item>
         </f7-list>
    <f7-list>
      <!-- <f7-list-item link="/product/:id"  title="Product"></f7-list-item> -->
      <!-- <f7-list-item link="/camera/" title="Camera"></f7-list-item> -->
      <f7-list-item link="/landing/" title="Landing"></f7-list-item>
    </f7-list>

  </f7-page>
</f7-pages>
</f7-view>
</f7-views>
</template>

<script>
import store from '../../store.js'
export default {
    methods: {
        onClick: function (products){
        store.selectedProduct = products;
    }
},
  // methods: {
  //   getProducts(barcode) {
  //     axios.get(`http://10.6.65.224:4200/product/${barcode}`).then(response => {
  //       this.products = response.data
  //       console.log(response);
  //     });
  //   },
  //   scanBarcode() {
  //     console.log('clicked')
  //     cordova.plugins.barcodeScanner.scan(
  //       (result) => {
  //         console.log(result.text);
  //         alert("We got a barcode\n" +
  //           "Result: " + result.text + "\n" +
  //           "Format: " + result.format + "\n");
  //
  //         this.getProducts(result.text);
  //       },
  //       function(error) {
  //         alert("Scanning failed: " + error);
  //       }, {
  //         preferFrontCamera: false, // iOS and Android
  //         showFlipCameraButton: true, // iOS and Android
  //         showTorchButton: true, // iOS and Android
  //         torchOn: true, // Android, launch with the torch switched on (if available)
  //         prompt: "Place a barcode inside the scan area", // Android
  //         resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
  //         formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
  //         orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
  //         disableAnimations: true, // iOS
  //         disableSuccessBeep: false // iOS
  //       }
  //     )
  //   }
  // },
  data() {
    return {
      products: store.products
    };

},


mounted() {
    axios.get('http://localhost:4200/product/0012300302883').then(response => this.products = response.data);
}
}
</script>
<style>
.image {
    background-image: url(http://placehold.it/200x100);
  height: 15vh;
  padding: 20vh;
  display: flex;
  justify-content: space-between;
}

/*#search {
font-size: medium;
  color: white;
  margin-top: 0;
  color: #610A0D;
  text-shadow: 0 0 3px #FF0000;
  margin-left: inherit;
}*/

#img-header {
  font-size: medium;
  color: #eee;
  margin-top: 0;
  text-shadow: 2px 2px #000000;
}
</style>
