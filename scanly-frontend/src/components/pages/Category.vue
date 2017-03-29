<template>
<f7-page>
  <f7-navbar back-link="Back" sliding></f7-navbar>

  <div class="row no-gutter category-list">
    <div class="openCard" v-for='category in category' key="category.id">
      <div class="opacity-background">
        <img class="catImg" v-bind:src="category.categoryImg" />
      </div>
      <div class="card-title" v-on:click="onClick(category)">
        <p><a href="/productbycategory/">{{category.name}}</a></p>
      </div>
    </div>
  </div>


</f7-page>
</template>

<script>
import store from '../../store.js'
export default {
  created() {
    axios.get('https://scanly-backend.herokuapp.com/category').then(response => {
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
  color: #610A0D;
  ;
}

.catImg {
  width: 150px;
  height: 150px;
}

.category-list {
  display: flex;
  justify-content: center;
  margin-top: .2em
}

.opacity-background {
  opacity: .3;
}
</style>
