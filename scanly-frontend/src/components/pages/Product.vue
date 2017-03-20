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


    <h3>reviews</h3>
    <f7-card-content v-for="review in reviews" key="review.id">{{ review.review }}</f7-card-content>

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

          <!-- <f7-label>Textarea</f7-label> -->
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

export default {

  data() {
    return {
      product: store.selectedProduct,
      reviews: [],
      memberName: '',
      review: '',

    }
  },
  created () {
        axios.get(`http://localhost:4200/product/${this.product.barcode}/review`).then(response => {
          this.reviews = response.data
        });
   },
   methods: {
       addPost: function () {
           console.log('clicked');
           axios.post(`http://localhost:4200/review/${this.product.id}`, {
               productId : this.product.id,
               memberName : this.memberName,
               review : this.review
           }).then(response => {
               console.log(response.data);

            });
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
</style>
