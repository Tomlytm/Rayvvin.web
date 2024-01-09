<template>
    <!-- Category Section Start-->


 <section class="mb-lg-10 mt-lg-14 my-8 mont">
   <div class="container">
     <div class="row">
       <div class="col-12 mb-6">
         <h3 class="mb-0 fw-bold">Most Searched</h3>
       </div>
     </div>
   </div>
 </section>
 <div class="container">
   <div class="row">
       <Product v-for="(path, index) in imagePaths" :key="index" :imgPath="path"  />
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
