<template>
    <section class="my-lg-14 my-8 mont">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-6">

          <h3 class="mb-0">Popular Products</h3>

        </div>
      </div>

      <div class="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
        <div class="col" v-for="(product, index) in fetchTopTenPopularProducts" :key="index">
          <div class="card card-product">
            <div class="card-body">

              <div class="text-center position-relative ">
                <div class=" position-absolute top-0 start-0">
                  <span class="badge bg-danger">Sale</span>
                </div>
                <a href="#!"> <img :src="product.image_url" :alt="product.name" class="mb-3 img-fluid"></a>

                <div class="card-product-action">
                  <a @click="$emit('quickviewproduct', product)" class="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                      class="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></a>
                  <a @click="$emit('addproducttowishlist', product.id)" class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                      class="bi bi-heart"></i></a>
                </div>

              </div>
              <div class="text-small mb-1">
                <router-link :to="{name: 'shop', query: {'categoryId': product.category_id}}" class="text-decoration-none text-muted">
                  <small>{{ product.category_name }}</small>
                </router-link>
              </div>
              <h2 class="fs-6">
                <div class="text-inherit text-decoration-none">{{ product.name }}</div>
              </h2>
              <div>
                <small class="text-warning"> <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i></small> 
                  <span class="text-muted small mx-1">4.5</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <div><span class="text-dark">£{{ product.price }}</span> <span
                    class="text-decoration-line-through text-muted">${{ product.price + 1200 }}</span>
                </div>
                <div>
                  <button @click="$emit('addSingleProductToCart', product.id)" class="btn btn-sm" 
                  :class="{'btn-danger': product.available === 0, 'btn-primary': product.available === 1}" :disabled="product.available === 0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-plus">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg> {{ product.availabe === 0 ? 'Out of Stock' : 'Add to cart' }}</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import {ref} from 'vue'
  const visible = ref(false);
</script>

<script>
export default {
    name: "TopTenPopularProducts",
    data() {
        return {
        }
    },
    methods: {
      async addProductToCart(productId) {
        await this.$store.dispatch('addSingleProductToCart', productId)
      }
    },
    computed: {
      fetchTopTenPopularProducts() {
            return this.$store.getters.topTenPopularProducts;
        },
    },
    created() {
      this.$store.dispatch('fetchTopTenPopularProducts');
    }
}
</script>
