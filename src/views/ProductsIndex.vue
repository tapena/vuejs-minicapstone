<template>
  <div class="products-index">
    <h1>{{ product.title }}</h1>
    <h2>Products</h2>
    <ul>
      <li v-for="products in product.formatted.products">
        {{product}}
      </li>
    </ul>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      product: {
        formatted:{
          products: []
        }}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/products")
    .then(response => {
      this.product = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>
