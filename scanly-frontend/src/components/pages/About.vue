<template>
<f7-pages>
  <f7-page>
    <!-- <f7-content-block> -->

          <!-- <p> -->
        <!-- <f7-list-item(media="<img src='https://s-media-cache-ak0.pinimg.com/originals/82/06/07/8206074aa93e20c2b5c7208267b39b55.jpg'>" )></f7-list-item> -->
          <!-- <f7-data-background="https://s-media-cache-ak0.pinimg.com/originals/82/06/07/8206074aa93e20c2b5c7208267b39b55.jpg"></f7-data-background> -->
              <!-- <img src="https://s-media-cache-ak0.pinimg.com/originals/82/06/07/8206074aa93e20c2b5c7208267b39b55.jpg" alt="" style="width: 100px; height: auto;"> -->
          <!-- <img src="../../src/assets/guitar-image.jpg" alt=""> -->
          <!-- </p> -->
          <!-- <p>Lorem ipsum dolor sit amet...</p> -->

        <!-- </f7-content-block> -->





    <f7-block-title>Welcome Emage Skateshop</f7-block-title>
    <f7-block class="image">
      <h3 id="search">Search</h3>
      <!-- <h3 id="search">Explore</h3> -->
      <h3 id="camera" v-on:click="scanBarcode()">Camera</h3>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-card>
      <f7-card-header>{{ products.name }}</f7-card-header>
      <f7-card-content>{{ products.details }}</f7-card-content>
      <f7-card-footer>{{ products.details }}</f7-card-footer>
    </f7-card>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/camera/" title="Camera"></f7-list-item>
      <f7-list-item link="/landing/" title="Landing"></f7-list-item>
      <f7-list-item link="/photo/" title="Photo"></f7-list-item>


      <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
    </f7-list>
    <f7-block-title>Side Panels</f7-block-title>
    <f7-block>
      <f7-grid>
        <f7-col width="50">
          <f7-button open-panel="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button open-panel="right">Right Panel</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>
    <f7-block-title>Modals</f7-block-title>
    <f7-block>
      <f7-grid>
        <f7-col width="50">
          <f7-button open-popup="#popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button open-login-screen="#login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>
  </f7-page>
</f7-pages>
</f7-view>
</f7-views>
</template>

<script>
export default {
  methods: {
    getProducts(barcode) {
      axios.get(`http://10.6.65.224:4200/product/${barcode}`).then(response => {
        this.products = response.data
        console.log(response);
      });
    },
    scanBarcode() {
      console.log('clicked')
      cordova.plugins.barcodeScanner.scan(
        (result) => {
          console.log(result.text);
          alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);
          this.getProducts(result.text);
        },
        function(error) {
          alert("Scanning failed: " + error);
        }, {
          preferFrontCamera: false, // iOS and Android
          showFlipCameraButton: true, // iOS and Android
          showTorchButton: true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          prompt: "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations: true, // iOS
          disableSuccessBeep: false // iOS
        }
      )
    }
  },
  data() {
    return {
      products: {},
    };

  }


// mounted() {
//     axios.get(`http://localhost:4200/product/${barcodeResult}`).then(response => this.products = response.data);
// }
}
</script>
<style>
.image {
  background-image: url(https://www.skipark.com/wp-content/uploads/Klamath-Basin-Sports-300x225.jpg);
  height: 10vh;
  padding: 20vh;
  display: flex;
}

#search {
  font-size: medium;
  color: white;
  margin-top: 0;
   color: #610A0D;
   text-shadow: 0 0 3px #FF0000;
}

#camera {
  font-size: medium;
  color: white;
  margin-top: 0;
}
</style>
