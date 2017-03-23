<template>
    <f7-page>
        <f7-navbar back-link="Back" sliding></f7-navbar>
        <f7-list media-list=''>
               <f7-list-item v-for="product in products" key="product.id" v-on:click="onClick(product)" link="/product/" class="item-title"  :title='product.name'></f7-list-item>
             </f7-list>
             </div>

    </f7-page>
</template>

<script>
import store from '../../store.js'
export default {
    created(){
        axios.get(`https://scanly-backend.herokuapp.com/category/${this.category.id}/product`).then(result => {
            this.products = result.data
        })
    },
    data (){
        return {
            products: [],
            category: store.categoryProduct

        }
    },
    methods: {
      onClick: function(product) {
        store.selectedProduct = product;
      }
    }
}
</script>
