<template>
<f7-pages>

  <f7-page class="navbar-fixed">
      <f7-navbar back-link="Back" sliding></f7-navbar>
    <!-- <f7-searchbar cancel-link="Cancel" search-list="#search-list" placeholder="Search in items" :clear-button="true" @searchbar:search="onSearch"></f7-searchbar> -->
  <form data-search-list=".list-block-search" data-search-in=".item-title" class="searchbar searchbar-init">
    <div class="searchbar-input">
      <input type="search" placeholder="Search">
      <a href="#" class="searchbar-clear"></a>
    </div>
    <a href="#" class="searchbar-cancel">Cancel</a>
  </form>
  <div class="searchbar-overlay"></div>
  <div class="page-content">
    <div class="content-block searchbar-not-found">
      <div class="content-block-inner">No element found...</div>
    </div>
    <!-- <div class="list-block list-block-search searchbar-found">
      <f7-list-item v-for='product in allProducts' key="product.id" link='/product/' class="item-title":title='product.name' :subtitle='product.details'></f7-list-item>
    </div> -->
    <div class="list-block list-block-search searchbar-found">
    <f7-list media-list=''>
           <f7-list-item v-on:click="onClick(product)" v-for='product in allProducts' key="product.id" link='/product/' class="item-title"  :title='product.name' :subtitle='product.details' ></f7-list-item>
         </f7-list>
         </div>
</div>


    </f7-page>
</f7-pages>
</template>

<script>
import store from '../../store.js'
export default {
  data() {
    return {
      allProducts: store.allProducts
    }
  },
  created() {
    axios.get(`https://scanly-backend.herokuapp.com/product/`).then(response => {
      console.log(response)
      this.allProducts = response.data
    });
  },
  methods: {
    onClick: function(product) {
      store.selectedProduct = product;
    }
  }
}
</script>
<style media="screen">
    .list-block {
        margin-top: -3em;
    }
</style>
