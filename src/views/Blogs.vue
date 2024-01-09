<template class="mont">
  <Header />

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
                        Short heading goes
                        <span class="text-success">here!</span>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                    src="/assets/images/blog-title-image.svg"
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
                  <div class="mb-5 h2">Blog title heading will go here</div>
                  <div class="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
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
                  v-for="(path, index) in imagePaths"
                  :key="index"
                  :imgPath="path"
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
                  <div class="card card-product">
                    <div class="card-body">
                      <!-- badge -->
                      <div class="text-center position-relative">
                        <div class="position-absolute top-0 start-0">
                          <span class="badge bg-danger">Sale</span>
                        </div>
                        <img
                          :src="product.image_url"
                          alt="Grocery Ecommerce Template"
                          class="mb-3 img-fluid"
                        />
                        <div class="card-product-action">
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                            ><i
                              class="bi bi-eye"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Quick View"
                            ></i
                          ></a>
                          <a
                            href="shop-wishlist.html"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Wishlist"
                            ><i class="bi bi-heart"></i
                          ></a>
                          <a
                            href="#!"
                            class="btn-action"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Compare"
                            ><i class="bi bi-arrow-left-right"></i
                          ></a>
                        </div>
                      </div>
                      <!-- heading -->
                      <div class="text-small mb-1">
                        <a href="#!" class="text-decoration-none text-muted"
                          ><small>{{ product.category_name }}</small></a
                        >
                      </div>
                      <h2 class="fs-6">
                        <a
                          href="shop-single.html"
                          class="text-inherit text-decoration-none"
                          >{{ product.name }}</a
                        >
                      </h2>
                      <div>
                        <!-- rating --><small class="text-warning">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i
                        ></small>
                        <span class="text-muted small">4.5(149)</span>
                      </div>
                      <!-- price -->
                      <div
                        class="d-flex justify-content-between align-items-center mt-3"
                      >
                        <div>
                          <span class="text-dark">£{{ product.price }}</span>
                          <span class="text-decoration-line-through text-muted"
                            >£{{ product.price + 1500 }}</span
                          >
                        </div>
                        <!-- btn -->
                        <div>
                          <a
                            href="#!"
                            @click="addProductToCart(product.id)"
                            class="btn btn-primary btn-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-plus"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Add</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
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
  },
  computed: {
    fetchProducts() {
      return this.$store.getters.products;
    },
    getSearch() {
      const result = this.$route.query.search;
      return result;
    },
  },
  async created() {},
  async mounted() {
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
  