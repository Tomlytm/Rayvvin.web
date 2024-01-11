<template class="mont">

  <body class="body-container m-0">
    <!-- Shop Cart -->
    <Cart />

    <main>
      <!--small nav-->
      <div class="mt-4 mont">
        <div class="container mont">
          <!-- row -->
          <div class="row">
            <!-- col -->
            <div class="col-12">
              <!-- breadcrumb -->
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!--small nav-->

      <!-- shop -->
      <section class="mt-8 mb-lg-14 mb-8 mont">
        <div class="container">
          <!-- row -->
          <div class="row">
            <!-- col -->
            <div class="col-lg-12">
              <!-- page header -->
              <div class="card mb-4 bg-light border-0 mb-10">
                <!-- card body -->
                <div class="card-body p-9">
                  <!-- title -->
                  <div
                    class="d-lg-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h2 class="mb-0 fs-1">
                        Get all the latest stories
                        <span class="text-success">here!</span>
                      </h2>
                      <p>
                        All the updates and news on Rayvvin In one place.
                      </p>
                    </div>
                    <div>
                      <img src="/assets/images/blog_title.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- list icon -->
              <!-- blog title -->
              <div class="row g-0 mb-9">
                <div class="col-sm-6">
                  <img
                  :src="getModifiedImageUrl(fetchBlogs.data[0].image)"
                    alt="title"
                    class="w-100"
                  />
                </div>
                <div class="col-sm-6 border p-9 position-relative">
                  <div class="mb-5">
                    <span class="bg-light p-2">Delivery</span>&nbsp;&nbsp;<span
                      >5 min read</span
                    >
                  </div>
                  <div class="mb-5 h2">{{ fetchBlogs.data[0].title }}</div>
                  <div class="mb-5">
                    {{ fetchBlogs.data[0].body }}
                  </div>
                  <div
                    class="d-flex align-items-center gap-3 btn fw-normal p-0"
                  >
                    Read more<svg
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.96028 6.29322C7.17996 6.5129 7.17996 6.869 6.96028 7.08867L1.22541 12.8235C1.00573 13.0432 0.649631 13.0432 0.429956 12.8235L0.164756 12.5584C-0.0549187 12.3387 -0.0549187 11.9825 0.164756 11.7629L5.23671 6.69095L0.164756 1.619C-0.0549186 1.39932 -0.0549186 1.04322 0.164756 0.823545L0.429956 0.558346C0.649631 0.338671 1.00573 0.338671 1.22541 0.558346L6.96028 6.29322Z"
                        fill="#011E2C"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!--/ blog title end -->

              <div class="d-flex gap-5 mb-9">
                <div>View all</div>
                <div>Rayvvin Stores</div>
                <div>Delivery</div>
                <div>Category four</div>
              </div>
              <!-- <BlogCard /> -->
              <div class="row">
                <BlogCard
                  v-for="(path, index) in fetchBlogs.data"
                  :key="index"
                  :imgPath="getModifiedImageUrl(path.image)"
                  :body="path.body"
                  :title="path.title"
                />
              </div>

              <div class="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3 mt-2">
                <!-- col -->
                <div
                  class="col"
                  v-for="(product, index) in fetchProducts.data"
                  :key="index"
                >
                  <!-- card product -->
                  
                </div>
              </div>
              <!-- row -->
              <div class="row mt-8">
                <div class="col">
                  <!-- nav -->
                  <Bootstrap5Pagination
                    :data="fetchProducts"
                    @pagination-change-page="getResults"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- footer -->
    <Footer />
  </body>
</template>
  
  <script setup>
import { ref } from "vue";
const visible = ref(false);
</script>
  
  <script>
import Cart from "../components/Cart.vue";
import Footer from "../components/Footer.vue";
import { Bootstrap5Pagination } from "laravel-vue-pagination";
import Header from "../components/Header.vue";
import BlogCard from "../components/BlogCard.vue";
import store from "../store";

export default {
  name: "Shop",
  data() {
    return {
      data: [],
      storeId: this.$route.query.storeId,
      categoryId: this.$route.query.categoryId,
      searchTerm: this.getSearch,
      firstBlogItem: null,
      imagePaths: [
        "/assets/images/blog_img1.svg",
        "/assets/images/blog_img2.svg",
        "/assets/images/blog_img1.svg",
        "/assets/images/blog_img2.svg",
      ],
    };
  },
  methods: {
    async getResults(page) {
      if (typeof page === "undefined") {
        page = 1;
      }

      const data = {
        pageNumber: page,
      };

      if (Object.keys(this.$route.query).length > 0) {
        if (
          this.storeId !== "" ||
          this.storeId !== undefined ||
          this.storeId !== NaN
        ) {
          data.storeId = parseInt(this.storeId);
        }

        if (
          this.categoryId !== "" ||
          this.categoryId !== undefined ||
          this.categoryId !== NaN
        ) {
          data.categoryId = parseInt(this.categoryId);
        }

        if (
          this.getSearch !== "" ||
          this.getSearch !== undefined ||
          this.getSearch !== NaN
        ) {
          data.searchTerm = this.getSearch;
        }
      }

      await this.$store.dispatch("fetchProducts", data);
    },
    async addProductToCart(productId) {
      console.log("s");
      if (!store.getters.isAuthenticated) {
        return $("#loginModal").modal("show");
      }

      await this.$store.dispatch("addSingleProductToCart", productId);
    },
    getModifiedImageUrl(originalUrl) {
      // Remove the first slash if it exists
      return originalUrl.startsWith('/') ? originalUrl.slice(1) : originalUrl;
    },
  },
  computed: {
    fetchProducts() {
      
      return this.$store.getters.products;
    },
    fetchBlogs() {
      return this.$store.getters.blogs;
      
    },
    getSearch() {
      const result = this.$route.query.search;
      return result;
    },
  },
  async created() {

    await this.$store.dispatch("getBlogs");
const proxyObject = this.$store.getters.blogs.data[0];
console.log(proxyObject.title);
    this.firstBlogItem = JSON.parse(JSON.stringify(proxyObject));
  },
  async mounted() {
    this.$store.dispatch("getBlogs");
    // console.log('fwfebjkejke', this.$store.dispatch("getBlogs"))
    const data = {
      pageNumber: 1,
    };

    if (this.storeId !== undefined) {
      data.storeId = parseInt(this.storeId);
    }

    if (this.categoryId !== undefined) {
      data.categoryId = parseInt(this.categoryId);
    }

    if (this.getSearch !== undefined) {
      data.searchTerm = this.getSearch;
    }

    await this.$store.dispatch("fetchProducts", data);
  },
};
</script>
  