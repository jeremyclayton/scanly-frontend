<template>
<f7-page>
    <f7-navbar back-link="Back" sliding></f7-navbar>

  <f7-card class="product-container">


    <img class="product-images" v-bind:src="product.picUrl">
    <div class="row">
        <div class="col-30">
                <h3 style="padding-left: .6em; color: brown">{{ product.name }}</h3>
        </div>
    <div class="col-30">
        <h3 style="color: brown">{{product.price}}</h3>
    </div>
    </div>

  </f7-card>


  <div class="row review-button">
      <h3>Reviews</h3>
      <f7-col width="50">
        <f7-button open-popup="#popup">Write a Review</f7-button>
      </f7-col>
  </div>

  <f7-card-content class="review-content" v-for="review in reviews" key="review.id">

    <div class="row">
      <div class="col-50 star">{{ review.memberName }}</div>
      <div id="1" class="col-10 star"><i v-bind:class="{ yellow: review.rating  >= 1 }" class="fa fa-star fa-lg " aria-hidden="true"></i></div>
      <div id="2" class="col-10 star"><i v-bind:class="{ yellow: review.rating >= 2 }" class="fa fa-star fa-lg " aria-hidden="true"></i></div>
      <div id="3" class="col-10 star"><i v-bind:class="{ yellow: review.rating >= 3 }" class="fa fa-star fa-lg " aria-hidden="true"></i></div>
      <div id="4" class="col-10 star"><i v-bind:class="{ yellow: review.rating >= 4 }" class="fa fa-star fa-lg " aria-hidden="true"></i></div>
      <div id="5" class="col-10 star"><i v-bind:class="{ yellow: review.rating >= 5 }" class="fa fa-star fa-lg " aria-hidden="true"></i></div>
    </div>
    <div class="review-text">
      {{ review.review }}
    </div>

  </f7-card-content>


  <!-- <f7-block>
    <f7-grid>
      <f7-col width="50">
        <f7-button open-popup="#popup">Popup</f7-button>
      </f7-col>
      <f7-col width="50">
        <f7-button open-login-screen="#login-screen">Login Screen</f7-button>
      </f7-col>
    </f7-grid>
  </f7-block> -->
  <f7-popup id="popup">

    <f7-pages>
      <f7-page>
        <f7-list>
          <f7-list-item class="memberName">
            <f7-input id="name-form" type="text" v-model="memberName" placeholder="Enter Your Name"></f7-input>
          </f7-list-item>

          <div class="row star-review">
            <div v-on:click="syncRating(1)" id="1" class="col-20 star"><i v-bind:class="{ yellow: rating >= 1 }" class="fa fa-star fa-lg fa-3x" aria-hidden="true"></i></div>
            <div v-on:click="syncRating(2)" id="2" class="col-20 star"><i v-bind:class="{ yellow: rating >= 2 }" class="fa fa-star fa-lg fa-3x" aria-hidden="true"></i></div>
            <div v-on:click="syncRating(3)" id="3" class="col-20 star"><i v-bind:class="{ yellow: rating >= 3 }" class="fa fa-star fa-lg fa-3x" aria-hidden="true"></i></div>
            <div v-on:click="syncRating(4)" id="4" class="col-20 star"><i v-bind:class="{ yellow: rating >= 4 }" class="fa fa-star fa-lg fa-3x" aria-hidden="true"></i></div>
            <div v-on:click="syncRating(5)" id="5" class="col-20 star"><i v-bind:class="{ yellow: rating >= 5 }" class="fa fa-star fa-lg fa-3x" aria-hidden="true"></i></div>
          </div>
          <f7-input id="text-from" type="textarea" v-model="review" placeholder="Share Your Opinion And Tips Here"></f7-input>
          </f7-list-item>
        </f7-list>

        <p>
          <f7-grid>
            <f7-col>
              <f7-button raised color="red" class="close-popup">Cancel</f7-button>
            </f7-col>
            <f7-col>
              <f7-button fill raised color="green" v-on:click="addPost()" class="close-popup">Submit</f7-button>
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


export default {
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
    axios.get(`https://scanly-backend.herokuapp.com/product/${this.product.barcode}/review`).then(response => {
      this.reviews = response.data
    });
  },
  methods: {
    addPost: function() {
      console.log('clicked');
      axios.post(`https://scanly-backend.herokuapp.com/review/${this.product.id}`, {
        productId: this.product.id,
        memberName: this.memberName,
        review: this.review,
        rating: this.rating,
      }).then(response => {
        console.log(response.data);
      }).then(() => {
        axios.get(`https://scanly-backend.herokuapp.com/product/${this.product.barcode}/review`).then(response => {
          this.reviews = response.data
        });
      });
    },
    syncRating(rating) {
      console.log(rating);
      this.rating = rating;
    },
    cancel() {
      console.log('clicked');
      this.$router.load({
        url: '/product/'
      })
    }

  }

}
</script>
<style>
#name-from {
  margin-top: 1em;
}

#text-from {
  height: 60vh;
  padding-top: 3em;
}

.yellow {
  color: yellow
}

.product-images {
  height: 200px;
  width: 200px;
  align-self: center;
  padding-top: 1em;
}

.review-content {
  background-color: azure;
}

.review-text {
  padding-top: 1em;
}

.star-review {
  padding-top: 2em;
}

#text-form {
  padding-top: 2em;
}

.product-container {
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;
  border: 1px solid
}
.review-button{
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
}
.memberName{
    margin-top: 5em;
}
</style>
