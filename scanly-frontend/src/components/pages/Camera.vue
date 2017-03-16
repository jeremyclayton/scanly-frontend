<template>
  <f7-page>
    <f7-navbar title="About" back-link="Back" sliding></f7-navbar>
    <f7-block inner>
        <p v-on:click="scanBarcode()">Scan</p>
    </f7-block>

            <h1>{{ products.name }}</h1>
            <h3>Details: {{ products.details }}</h3>
            <p>Price: {{ products.price }}</p>


  </f7-page>
</template>

<script>
export default {
    methods: {
        getProducts(barcode){
            axios.get(`http://10.6.65.224:4200/product/${barcode}`).then(response => {
                this.products = response.data
                console.log(response);
            });
        },
        scanBarcode(){
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
              function (error) {
                  alert("Scanning failed: " + error);
              },
              {
                  preferFrontCamera : false, // iOS and Android
                  showFlipCameraButton : true, // iOS and Android
                  showTorchButton : true, // iOS and Android
                  torchOn: true, // Android, launch with the torch switched on (if available)
                  prompt : "Place a barcode inside the scan area", // Android
                  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                  formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                  orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                  disableAnimations : true, // iOS
                  disableSuccessBeep: false // iOS
              }
           )
        }
    },
    data(){
        return {
            products: {},
        };

    },
    // mounted() {
    //     axios.get(`http://localhost:4200/product/${barcodeResult}`).then(response => this.products = response.data);
    // }
}
</script>
