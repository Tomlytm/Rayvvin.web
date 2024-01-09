<template>
  <section>
    <div class="container mont">
      <div class="row">
        <div class="col-md-12 mb-6">
          <h3 class="mb-0">Daily Best Sells</h3>
        </div>
      </div>
      <div class="table-responsive-xl pb-6">
      <div class="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4 flex-nowrap">
        <div class="col">
          <div class=" pt-8 px-6 px-xl-8 rounded"
            style="background:url(/assets/imagesbanner/banner-deal.jpg)no-repeat; background-size: cover; height: 470px;">
            <div>
              <h3 class="fw-bold text-white">100% Organic
                Coffee Beans.
              </h3>
              <p class="text-white">Get the best deal before close.</p>
              <router-link :to="{name: 'shop'}" class="btn btn-primary">Shop Now <i class="feather-icon icon-arrow-right ms-1"></i></router-link>
            </div>
          </div>
        </div>
        <div class="col" v-for="(product, index) in fetchTopThreeDailyBestSellers" :key="index">
          <div class="card card-product">
            <div class="card-body">
              <div class="text-center  position-relative ">
                        <img :src="product.image_url" alt="Grocery Ecommerce Template" class="mb-3 img-fluid">
                    <div class="card-product-action">
                    <a @click="$emit('quickviewproduct', product)" class="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                      <i class="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                    </a>
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

              <div class="d-flex justify-content-between align-items-center mt-3">
                <div><span class="text-dark">£{{ product.price }}</span> <span
                    class="text-decoration-line-through text-muted">£{{ product.price + 1500 }}</span>
                </div>
                <div>
                  <small class="text-warning"> <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </small>
                  <span><small>4.5</small></span>
                </div>
              </div>
              <div class="d-grid mt-2">
                <button href="#!" class="btn" 
                :class="{'btn-danger': product.available === 0, 'btn-primary': product.available === 1}" @click="$emit('addSingleProductToCart', product.id)"
                :disabled="product.available === 0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>{{ product.availabe === 0 ? 'Out of Stock' : 'Add to cart' }} </button>
                </div>
              <div class="d-flex justify-content-start text-center mt-3">
                <!-- <div class="deals-countdown w-100" data-countdown="2028/10/10 00:00:00"></div> -->
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
    name: "TopThreeDailyBestSellers",
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
        fetchTopThreeDailyBestSellers() {
            return this.$store.getters.topThreeDailyBestSellers;
        },
    },
    created() {
      this.$store.dispatch('fetchTopThreeDailyBestSellers');
    }
}
</script>