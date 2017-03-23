<template>
  <f7-page>
      <!-- <f7-navbar back-link="Back" sliding></f7-navbar>
      <f7-list media-list=''>
             <f7-list-item v-on:click="onClick(category)" v-for='category in category' key="category.id" link='/productbycategory/' class="item-title"  :title='category.name'></f7-list-item>
           </f7-list> -->
           <div class="row category-content">
               <div class="col-50">
                   <div class="category-img" id="snowboard">
                       <p>{{category[0].name}}</p>
                   </div>
               </div>
               <div class="col-50">
                   <div class="category-img" id="skateboard">
                       <p>{{category[1].name}}</p>
                   </div>
               </div>
               <div class="col-50">
                   <div class="category-img">
                       <p>{{category[2].name}}</p>
                   </div>
               </div>
               <div class="col-50">
                   <div class="category-img">
                       <p>{{category[3].name}}</p>
                   </div>
               </div>
               <div class="col-50">
                   <div class="category-img">
                       <p>{{category[4].name}}</p>
                   </div>
               </div>
               <div class="col-50">
                   <div class="category-img">
                       <p>{{category[5].name}}</p>
                   </div>
               </div>
               <div class="col-50">
                   <div class="category-img">
                       <p>{{category[6].name}}</p>
                   </div>
               </div>
               <div class="col-50">
                   <div class="category-img">
                       <p>{{category[7].name}}</p>
                   </div>
               </div>
               <div class="col-50">
                   <div class="category-img">
                       <p>{{category[8].name}}</p>
                   </div>
               </div>
               <div class="col-50">
                   <div class="category-img">
                       <p>{{category[9].name}}</p>
                   </div>
               </div>
               <div class="col-50">

               </div>
           </div>

  </f7-page>
</template>

<script>
import store from '../../store.js'
export default {
    created(){
        axios.get('http://localhost:4200/category').then(response => {
            console.log(response.data);
            this.category = response.data
            console.log(this.category[0]);
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
<style>
    #snowboard{
        background-image: url(http://mtnweekly.com/wp-content/uploads/2016/01/2017-GNU-Snowboards-4-300x238.jpg);
    }
    .category-img
</style>
