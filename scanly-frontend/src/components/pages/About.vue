<template>
<f7-pages>
  <f7-page>
    <f7-block class="image">
      <div class="icon-wrapper">
        <div class="icon-container">
          <i class="fa fa-superpowers fa-lg fa-3x" aria-hidden="true"></i>
          <p><a href="/category/" class="button hide-border" style="color: white">Explore</a></p>
        </div>
        <div class="icon-container">
          <i class="middle-icon fa fa-barcode fa-lg fa-5x" aria-hidden="true"></i>
          <p v-on:click="scanBarcode()">Tap to Scan</p>
        </div>
        <div class="icon-container">
          <i class="fa fa-search fa-lg fa-3x" aria-hidden="true"></i>
          <p><a href="/search/" class="button hide-border" style="color: white">Search</a></p>

        </div>
      </div>
    </f7-block>

    <!-- <f7-block> -->
    <f7-grid id="header-grid">
      <f7-col width="50">
        <f7-block-title>Recently Viewed</f7-block-title>
      </f7-col>
      <f7-col width="50">
        <f7-block-title id="left-text">See All ></f7-block-title>
      </f7-col>
    </f7-grid>
    <f7-grid>
      <f7-col width="50" class="recent-view-cards">
        <div class="card demo-card-header-pic">
          <div style="background-image:url(http://www.romesnowboards.com/img/boards/mod/162.jpg)" valign="bottom" class="card-header color-white no-border"></div>
          <div class="card-content">
            <div class="card-content-inner">
              <p class="color-gray">Rome Mod</p>
            </div>
          </div>

        </div>
      </f7-col>
      <f7-col width="50" class="recent-view-cards">
        <div class="card demo-card-header-pic">
          <div style="background-image:url(http://static.shoplightspeed.com/shops/604947/files/000902609/262x276x2/huf-huf-classic-hi-ess-black-white.jpg)" valign="bottom" class="card-header color-white no-border"></div>
          <div class="card-content">
            <div class="card-content-inner">
              <p class="color-gray">Huff Classic Black</p>
            </div>
          </div>

        </div>
      </f7-col>
    </f7-grid>
    <!-- <f7-block>
      <f7-grid>
        <f7-col width="50">
          <p><a href="/search/" class="button">Search</a></p>
        </f7-col>

        <f7-col width="50">
          <p><a v-on:click="scanBarcode()" class="button">Camera</a></p>

        </f7-col>
      </f7-grid>
    </f7-block> -->

    <!-- <f7-list media-list=''>
      <f7-list-item v-on:click="onClick(products)" link='/product/' :title='products.name' :subtitle='products.details'></f7-list-item>
    </f7-list>
    <f7-list>
      <f7-list-item link="/search/" title="Landing"></f7-list-item>

    </f7-list> -->

  </f7-page>
</f7-pages>
</f7-view>
</f7-views>
</template>

<script>
import store from '../../store.js'

export default {
  // methods: {
  //   onClick: function(products) {
  //     store.selectedProduct = products;
  //   }
  // },
  methods: {
    getProducts(barcode) {
      axios.get(`https://scanly-backend.herokuapp.com/product/${barcode}`).then(response => {
        //   this.products = response.data
        this.products = response.data
      }).then(() => {
        console.log('hit');
        store.selectedProduct = this.products;
        this.$router.load({
          url: '/product/'
        })
      });
    },
    scanBarcode() {
      console.log('clicked')
      cordova.plugins.barcodeScanner.scan(
        (result) => {
        //   console.log(result.text);
        //   alert("We got a barcode\n" +
        //     "Result: " + result.text + "\n" +
        //     "Format: " + result.format + "\n");

          this.getProducts(result.text);
        },
        function(error) {
        //   alert("Scanning failed: " + error);
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
    // onClick: function(products) {
    //   store.selectedProduct = products;
    // }
  },
  data() {
    return {
      products: store.products
    };
  },
  // mounted() {
  //   axios.get('http://localhost:4200/product/0012300302883').then(response => this.products = response.data);
  // }
}
</script>
<style>
.image {
  background-image: url(http://www.miamidesigndistrict.net/images/listings/medium/363_rick-owens_8571.jpg);
  height: 30vh;
  padding: 20vh;
  display: flex;
  justify-content: center;
  margin-top: auto;
}

.middle-icon {
  padding-left: .6em;
  padding-right: .6em;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: -2em;
}


#img-header {
  font-size: medium;
  color: #eee;
  margin-top: 0;
  text-shadow: 2px 2px #000000;
}

#left-text {
  padding-left: 5em;
  font-weight: 200
}

#header-grid {
  margin-top: -3em;
}

.demo-card-header-pic .card-header {
  height: 40vw;
  background-size: cover;
  background-position: center;
}

.hide-border {
  border: 0px;
}

.icon-wrapper {
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10em 3.1em;
  margin-top: -10em;
}
</style>
