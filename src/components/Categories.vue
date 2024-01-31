<template>
  <!-- Category Section Start-->
  <section class="mb-lg-10 mt-lg-14 my-8 mont w-100">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-6">
          <h3 class="mb-0 fw-bold">Hot Deals</h3>
        </div>
      </div>
      <div class="d-lg-flex gap-5">
        <p
          class="text-black pointer"
          :class="selectedCategory === 'all' ? 'text-green' : ''"
          style="cursor: pointer"
          @click="onCategorySelected('all')"
        >
          All 
        </p>
        <div
          
          class="d-flex"
          v-for="(category, index) in fetchCategories"
          style="cursor: pointer;"
          :key="index"
        >
          <div :class="selectedCategory === category.name ? 'text-green' : ''" @click="onCategorySelected(category.name)"  class="text-black">{{ category.name }}</div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="row g-4 row-cols-lg-4 row-cols-2 row-cols-md-3">
      <Product
        v-for="(product, index) in fetchProducts"
        :key="index"
        :imgPath="product.image_url"
        :product_name="product.name"
        :price="product.price"
        :maxprice="product.max_price"
        :category="product.category_name"
      />
    </div>
  </div>
  <div>
    <div class="" style="background: url(/assets/images/marquee.svg)">
      <marquee behavior="scroll" direction="left" scrollamount="6">
        <p class="text-white mont fs-4 fw-semibold my-auto py-2">
          Be the first to know about new products, discounts and all the market
          gist. Subscribe Now! Be the first to know about new products,
          discounts and all the market gist. Subscribe Now!
        </p>
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
      <Product
        v-for="(path, index) in imagePaths"
        :key="index"
        :imgPath="path"
      />
    </div>
  </div>

  <!-- Category Section End-->
</template>

<script setup>
import { ref } from "vue";
import Product from "../components/Product.vue";
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
      ],
      selectedCategory: "all",
    };
  },
  methods: {
    async onCategorySelected(categoryName) {
      // Method triggered when a category is selected
      this.selectedCategory = categoryName; // Update the selected category
      const filteredProducts = this.filterProductsByCategory(categoryName);
      // Do something with the filtered products...
      console.log(filteredProducts);
    },
    filterProductsByCategory(categoryName) {
  // Method to filter products by category
  let products = [];

  if (categoryName === "all") {
    products = this.$store.getters.recentproducts.data;
  } else {
    products = this.$store.getters.recentproducts.data.filter(
      (product) => product.category_name === categoryName
    );
  }

  // Shuffle the array to get a random order
  products = this.shuffleArray(products);

  // Return the first 8 items
  return products.slice(0, 8);
},

shuffleArray(array) {
  // Function to shuffle an array (using Fisher-Yates algorithm)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

    
  },
  computed: {
    fetchCategories() {
      return this.$store.getters.categories;
    },
    fetchProducts() {
      // Return filtered products based on the selected category
      return this.filterProductsByCategory(this.selectedCategory);
    },
  },
  created() {
    this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchRecentProducts");
  },
};
</script>
