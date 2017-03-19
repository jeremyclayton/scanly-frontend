<template>
  <f7-page>
      <h1>Product Reviews</h1>
      <f7-card>
        <f7-card-header>{{ product.name }}</f7-card-header>
        <f7-card-content>{{ product.details }}</f7-card-content>
        <f7-card-content>{{ product.review }}</f7-card-content>
      </f7-card>
      <!-- Simple Chip -->

  </f7-page>
</template>

<script>
import store from '../../store.js'
export default {
    data () {
   return {
       product: store.selectedProduct
   }
 }
}
</script>
