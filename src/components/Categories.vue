<template>
     <!-- Category Section Start-->
  <section class="mb-lg-10 mt-lg-14 my-8 mont w-100">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-6">
        <h3 class="mb-0 fw-bold">Featured Categories</h3>
        </div>
      </div>
      <div class="d-lg-flex gap-5 ">
        <div class="fw-bold " style="color: #0AAD0A; text-decoration: underline;">All</div>
        <div class=" d-flex" v-for="(category, index) in fetchCategories" :key="index"> 
          <div class="text-black">{{ category.name }}</div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="row g-4 row-cols-lg-4 row-cols-2 row-cols-md-3">
        <Product v-for="(path, index) in imagePaths" :key="index" :imgPath="path"  />
    </div>
</div>
<div>
  <div class="" style="background: url(/assets/images/marquee.svg);">
  <marquee behavior="scroll" direction="left" scrollamount="6">
    <p class="text-white mont fs-4 fw-semibold my-auto py-2 ">Be the first to know about new products, discounts and all the market gist. Subscribe Now!
Be the first to know about new products, discounts and all the market gist. Subscribe Now!</p>
  </marquee>
</div>
</div>
  <section class="mb-lg-10 mt-lg-14 my-8 mont">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-6">
          <h3 class="mb-0 fw-bold">Featured Products</h3>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="row g-4 row-cols-lg-4 row-cols-2 row-cols-md-3">
        <Product v-for="(path, index) in imagePaths" :key="index" :imgPath="path" />
    </div>
</div>

  <!-- Category Section End-->
</template>

<script setup>
  import {ref} from 'vue'
  import Product from '../components/Product.vue'
  const visible = ref(false);
</script>

<script>
export default {
    name: "Categories",
    data() {
        return {
          imagePaths: [
      "/assets/images/products/product-img.svg",
      "/assets/images/products/product-img1.svg",
      "/assets/images/products/product-img2.svg",
      "/assets/images/products/product-img3.svg",
      "/assets/images/products/product-img4.svg",
      "/assets/images/products/product-img5.svg",
      "/assets/images/products/product-img-6.jpg",
      "/assets/images/products/product-img-3.jpg",
    ]
        }

    },
    computed: {
      fetchCategories() {
            return this.$store.getters.categories;
        },
    },
    created() {
        this.$store.dispatch("fetchCategories");
    }
}
</script>
