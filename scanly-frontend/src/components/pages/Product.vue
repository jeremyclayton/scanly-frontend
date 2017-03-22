<template>
<f7-page>
  <h1>Product Reviews</h1>
  <f7-card>
    <f7-card-header>{{ product.name }}</f7-card-header>
    <!-- <f7-card-content>{{ product.rating }}</f7-card-content>
    <f7-card-content>{{ product.review }}</f7-card-content> -->
    <f7-card-content>{{ product.barcode }}</f7-card-content>
    <f7-card-content>{{ product.id }}</f7-card-content>
    <f7-card-content>{{ review.productId }}</f7-card-content>
    <img v-bind:src="product.picUrl">


    <f7-list media-list=''>
      <f7-list-item :media='product.image' :title='product.id' :subtitle="product.name" :text='product.name'></f7-list-item>
    </f7-list>


    <h3>reviews</h3>
    <f7-card-content v-for="review in reviews" key="review.id">
      <div class="row">
        <div id="1" class="col-20 star"><i v-bind:class="{ yellow: review.rating  >= 1 }" class="fa fa-star fa-lg " aria-hidden="true"></i></div>
        <div id="2" class="col-20 star"><i v-bind:class="{ yellow: review.rating >= 2 }" class="fa fa-star fa-lg " aria-hidden="true"></i></div>
        <div id="3" class="col-20 star"><i v-bind:class="{ yellow: review.rating >= 3 }" class="fa fa-star fa-lg " aria-hidden="true"></i></div>
        <div id="4" class="col-20 star"><i v-bind:class="{ yellow: review.rating >= 4 }" class="fa fa-star fa-lg " aria-hidden="true"></i></div>
        <div id="5" class="col-20 star"><i v-bind:class="{ yellow: review.rating >= 5 }" class="fa fa-star fa-lg " aria-hidden="true"></i></div>
      </div>
      {{ review.review }}
    </f7-card-content>

  </f7-card>
  <f7-block>
    <f7-grid>
      <f7-col width="50">
        <f7-button open-popup="#popup">Popup</f7-button>
      </f7-col>
      <f7-col width="50">
        <f7-button open-login-screen="#login-screen">Login Screen</f7-button>
      </f7-col>
    </f7-grid>
  </f7-block>
  <f7-popup id="popup">

    <f7-pages>
      <f7-page>
        <f7-navbar back-link="Back" sliding></f7-navbar>
        <f7-list>
          <f7-list-item>
            <!-- <f7-label>Name</f7-label> -->
            <f7-input id="name-form" type="text" v-model="memberName" placeholder="Name"></f7-input>
          </f7-list-item>
          <!-- <star-rating v-bind:increment="0.5" v-bind:max-rating="5" inactive-color="#000" active-color="#cc1166" v-bind:star-size="90">
          </star-rating> -->

          <!-- <star-rating :rating="rating" @rating-selected="syncRating"></star-rating>
  <a href="#">Reset Rating</a>
</div> -->
          <!-- <f7-label>Textarea</f7-label> -->
          <!-- <i class="fa fa-star-o" aria-hidden="true"></i> -->
          <div class="row">
            <div v-on:click="syncRating(1)" id="1" class="col-20 star"><i v-bind:class="{ yellow: rating >= 1 }" class="fa fa-star fa-lg fa-4x" aria-hidden="true"></i></div>
            <div v-on:click="syncRating(2)" id="2" class="col-20 star"><i v-bind:class="{ yellow: rating >= 2 }" class="fa fa-star fa-lg fa-4x" aria-hidden="true"></i></div>
            <div v-on:click="syncRating(3)" id="3" class="col-20 star"><i v-bind:class="{ yellow: rating >= 3 }" class="fa fa-star fa-lg fa-4x" aria-hidden="true"></i></div>
            <div v-on:click="syncRating(4)" id="4" class="col-20 star"><i v-bind:class="{ yellow: rating >= 4 }" class="fa fa-star fa-lg fa-4x" aria-hidden="true"></i></div>
            <div v-on:click="syncRating(5)" id="5" class="col-20 star"><i v-bind:class="{ yellow: rating >= 5 }" class="fa fa-star fa-lg fa-4x" aria-hidden="true"></i></div>
          </div>
          <f7-input id="text-from" type="textarea" v-model="review" placeholder="Write A Review"></f7-input>
          </f7-list-item>
        </f7-list>

        <p>
          <f7-grid>
            <f7-col>
              <f7-button raised color="red">Cancel</f7-button>
            </f7-col>
            <f7-col>
              <f7-button fill raised color="green" v-on:click="addPost()">Submit</f7-button>
            </f7-col>

          </f7-grid>
        </p>
        </f7-block>
      </f7-page>
    </f7-pages>
    </f7-view>
  </f7-popup>

</f7-page>
</template>

<script>
import store from '../../store.js'
import StarRating from 'vue-star-rating'

export default {
  // name: 'star-rating',
  data() {
    return {
      activeColor: 'blue',
      product: store.selectedProduct,
      reviews: [],
      memberName: '',
      review: '',
      rating: 0
    }
  },
  created() {
    axios.get(`http://localhost:4200/product/${this.product.barcode}/review`).then(response => {
      this.reviews = response.data
    });
  },
  methods: {
    addPost: function() {
      console.log('clicked');
      axios.post(`http://localhost:4200/review/${this.product.id}`, {
        productId: this.product.id,
        memberName: this.memberName,
        review: this.review,
        rating: this.rating,
      }).then(response => {
        console.log(response.data);

      });
    },
    syncRating(rating) {
      console.log(rating);
      this.rating = rating;
    }

  }

}
</script>
<style>
#name-from {
  margin-top: 1em;
}

#text-from {
  height: 70vh;
}

.yellow {
  color: yellow
}
</style>
