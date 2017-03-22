<template>
  <f7-page>
      <f7-navbar back-link="Back" sliding></f7-navbar>
      <f7-list media-list=''>
             <f7-list-item v-on:click="onClick(category)" v-for='category in category' key="category.id" link='/productbycategory/' class="item-title"  :title='category.name'></f7-list-item>
           </f7-list>
           </div>
  </f7-page>
</template>

<script>
import store from '../../store.js'
export default {
    created(){
        axios.get('http://localhost:4200/category').then(response => {
            this.category = response.data
        })
    },
    data (){
        return {
            category: store.category
        }
    },
    methods: {
        onClick: function (category){
            store.categoryProduct = category
        }
    }
}
</script>
