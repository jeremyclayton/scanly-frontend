<template>
<f7-pages>

  <f7-page class="navbar-fixed">
    <!-- <f7-searchbar cancel-link="Cancel" search-list="#search-list" placeholder="Search in items" :clear-button="true" @searchbar:search="onSearch"></f7-searchbar> -->
  <form data-search-list=".list-block-search" data-search-in=".product in allProducts" class="searchbar searchbar-init">
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
    <div class="list-block list-block-search searchbar-found">
      <f7-list-item v-for='product in allProducts' key="product.id" link='/product/' :title='product.name' :subtitle='product.details'></f7-list-item>
    </div>
</div>


    </f7-page>
</f7-pages>
</template>

<script>
export default {
  data() {
    return {
      allProducts: []
    }
  },
  created() {
    axios.get(`http://localhost:4200/product/`).then(response => {
      console.log(response)
      this.allProducts = response.data
    });
  },
  methods: {
    onSearch: function() {
      console.log(query);
    }
  }
}
</script>
