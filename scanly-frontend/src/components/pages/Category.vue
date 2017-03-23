<template>
<f7-page>
  <f7-navbar back-link="Back" sliding></f7-navbar>
  <!-- <f7-list media-list=''>
             <f7-list-item v-on:click="onClick(category)" v-for='category in category' key="category.id" link='/productbycategory/' class="item-title"  :title='category.name'></f7-list-item>
           </f7-list> -->
  <!-- <div v-on:click="onClick(category)" v-for='category in category' key="category.id" link='/productbycategory/'>
               <img v-bind:src="category.categoryImg" alt="">
               <p>{{category.name}}</p>
           </div> -->
  <!-- <f7-list media-list=''>
                <f7-list-item v-on:click="onClick(category)" v-for='category in category' key="category.id" link='/productbycategory/' class="item-title"  :title='category.name'></f7-list-item>
                <img src="category.categoryImg" alt="">
            </f7-list> -->
    <div class="row no-gutter">
        <!-- <div class="col-50"> -->
            <div class="openCard"  v-for='category in category' key="category.id" >
                <div class="opacity-background">
              <img class="catImg" v-bind:src="category.categoryImg"/>
               </div>
                  <div class="card-title" v-on:click="onClick(category)"><p><a href="/productbycategory/">{{category.name}}</a></p></div>
              <!-- <div class="card-subtitle">Breckenridge, CO</div> -->
            <!-- </div> -->
        </div>

    </div>


</f7-page>
</template>

<script>
import store from '../../store.js'
export default {
  created() {
    axios.get('http://localhost:4200/category').then(response => {
      this.category = response.data
      console.log(this.category);
    })
  },
  data() {
    return {
      category: store.category
    }
  },
  methods: {
    onClick: function(category) {
      store.categoryProduct = category
    }
  }
}
</script>
<style>
.openCard {
  position: relative;
  text-align: center;
}

.card-title {
  position: absolute;
  top: 30%;
  font-size: 1.5em;
  width: 100%;
  font-weight: bold;
  font-family: 'Comfortaa', cursive;
  color: #fff;
  color: #610A0D;;
}
.catImg {
    width: 187px;
    height: 150px;

}
.no-gutter {
    display: flex;
    justify-content: center;
    margin-top: .2em
}
.opacity-background{
    opacity: .3;
}
</style>
