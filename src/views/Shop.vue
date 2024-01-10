<template>
  <div class="body-container mont">
    <!-- Shop Cart -->
    <Cart />

    
      <!--small nav-->
      <div class="mt-4 mont">
        <div class="container">
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
                    Shop
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!--small nav-->

      <!-- shop -->
      <section class="mt-8 mb-lg-14 mb-8">
        <div class="container">
          <!-- row -->
          <div class="row">
            <!-- col -->
            <div class="col-lg-12">
              <!-- page header -->
              <div class="card mb-4 bg-light border-0">
                <!-- card body -->
                <div class="card-body p-9">
                  <!-- title -->
                  <h2 class="mb-0 fs-1">
                    All you want and need right
                    <span class="text-success">here!</span>
                  </h2>
                  <div>
                    <p class="mt-3 mb-md-0">
                      <span class="text-dark">{{ fetchProducts.length }}</span>
                      Products found
                    </p>
                  </div>
                </div>

                <div
                  class="d-lg-flex justify-content-between align-items-center"
                ></div>
              </div>
              <!-- list icon -->

              <div class="d-lg-flex w-100">
                <div class="py-5 m-0 d-none d-lg-block col-2">
                  <div class="h5">Filters</div>
                  <p style="font-size: 10px">
                    Showing <span>0</span> of <span>100</span>
                  </p>
                  <p class="mt-3 text-black pointer" :class=" selectedCategory === 'all'?'text-green':'' " style="font-size: 12px; cursor: pointer;"  @click="onCategorySelected('all')">
                    All Categories
                  </p>
                  <hr class="w-75" />
                  <div>
                    <p
                      v-for="(category, index) in fetchCategories"
                      :key="index"
                      class="text-black pointer"
                    >
                      <span
                      @click="onCategorySelected(category.name)"
                        class="text-black pointer"
                        :class=" selectedCategory === category.name?'text-green':'' "
                        style="font-size: 12px; cursor: pointer;"
                        >{{ category.name }}</span
                      >
                    </p>
                  </div>
                  <hr class="w-75" />
                </div>
                <div  v-if="fetchProducts.length > 0"
                  class="row g-4 row-cols-lg-4 row-cols-2 row-cols-md-3 mt-2 w-100"
                >
                  <!-- col -->
                  <div
                    class="col"
                    v-for="(product, index) in fetchProducts"
                    :key="index"
                  >
                    <!-- card product -->
                    <div class="card card-product shadow-sm">
                      <div class="card-body">
                        <!-- badge -->
                        <div class="text-center position-relative">
                          <div class="position-absolute top-0 start-0">
                            <span class="badge bg-danger">Sale</span>
                          </div>
                          <img
                            style="height: 130px"
                            :src="product.image_url"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid"
                          />
                          <div class="card-product-action">
                            <button
                              class="btn btn-action"
                              @click="openQuickViewModal(product)"
                            >
                              <i
                                class="bi bi-eye"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Quick View"
                              ></i>
                            </button>
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
                            <span
                              class="text-decoration-line-through text-muted"
                              >£{{ product.price + 1500 }}</span
                            >
                          </div>
                          <!-- btn -->
                          <div>
                            <a
                              href="#!"
                              @click="addProductToCart(product.id)"
                              class="btn btn btn-sm"
                              style="background-color: #f3fde8; color: #65b741"
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
                 
                </div> <div
      v-else 
      class="col mt-5 text-danger"
    >
      <p>Product not found for this category.</p>
    </div>
              </div>

              <!-- row -->
              <div class="row mt-8">
                <div class="col text-dark">
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

      

    <!-- footer -->
    <Footer />
  </div>
  <!-- quickview modal -->

  <div class="modal fade" ref="quickViewModal" id="quickViewModal" tabindex="-1" aria-labelledby="quickViewModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg text-dark">
        <div class="modal-content  p-4">
          <div class="modal-header border-0">
            <!-- <h5 class="modal-title fs-3 fw-bold" id="quickViewModalLabel">Sign In For the Best Experience</h5><br /> -->
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>
          <div class="mont" style="margin-top: -20px;">
            <div class="d-lg-flex gap-5 w-100"> 
              <div class="w-lg-50"><img class="w-100 pointer" :src="selectedProduct.imageUrl" alt="" style="height: 350px;"></div>
              <div class="w-lg-50 position-relative">
                <div style="overflow-y: scroll; max-height: 330px;">
                <div class="mb-2 text-dark fw-semibold fs-5">{{ selectedProduct.name }}</div>
                <div class="mb-2 text-dark  fs-5">£&nbsp;{{ selectedProduct.price }}</div>
                <div class="mb-4">
                          <!-- rating --><small class="text-dark" style="font-size: 17px;">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i
                          ></small>
                        </div>
                <div class="fs-9 fw-normal mb-3">{{ selectedProduct.description }}</div>
                
                        <div class="mb-4">
                          <div class="mb-3 fs-9 ">
                            Quantity
                          </div>
                          <div class="input-group input-spinner  ">
              <input type="button" value="-" class="button-minus border-dark  rounded-0 btn  btn-sm shadow" data-field="quantity" >
              <input type="number" step="1" max="10"  name="quantity" value="1"
                class="quantity-field form-control-sm form-input border-dark ">
              <input type="button" value="+" class="button-plus btn btn-sm  border-dark rounded-0 shadow" data-field="quantity" >
            </div>
                        </div>
                        <div @click="togglePopup" class="mb-4  fs-9 cursor-pointer" style="cursor: pointer; color: #65b741;">
                            Message Seller
                          </div>
                        </div>
                        <div>
                          <button    class="btn rounded-0 bg-dark w-100 text-white fw-normal mb-2 position-absolute bottom-0 mx-auto w-75">Add to Cart</button>
                          <!-- <button></button> -->
                        </div>
              </div>
            </div>
           
          </div>
          <div class="modal-footer border-0 justify-content-center">
            <!-- Don't have an account? 
            <a href="#" @click="showRegisterCustomerModal">Register to buy</a>
            <span>or</span>
            <a href="#" @click="showRegisterMerchantModal">Register to sell</a> -->

          </div>
        </div>
      </div>
    </div>
    <div style="position: fixed; bottom: 0; right: 0; width: 300px; height: 300px;" class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRightt" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header border-bottom">
    <div class="text-start">
      <h5 id="offcanvasRightLabel" class="mb-0 fs-4">Your Cart</h5>
    </div>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  <div class="offcanvas-body">
    jk
  </div>
</div>
<div id="messagingPopup" :class="{ 'show': isPopupOpen }">
    <span @click="togglePopup" class="close-btn">&times;</span>
    <div class="popup-content mont ">
      <div class="px-4 pt-3 fw-semibold">
        Messaging

        
      </div>
      <hr />
       <div style="height: 35px;" class="mx-3 d-flex align-items-center mb-1 gap-3 px-3 shadow-sm w-75  bg-light rounded-1">
          <i class="bi bi-search search-icon"></i>
        <input placeholder="search messages" type="text" class=" border-0 bg-light">
        
        </div>
      <div class="px-3"  style="overflow-y: scroll; height: 250px;">
       
<hr />
<div>
  <div style="cursor: pointer;" class="d-flex justify-content-between px-2 border-bottom pb-3 mb-2" v-for="(category, index) in 4" :key="index">
    <div class="d-flex gap-3 align-items-center">
      <div><img src="/assets/images/avatar-12.jpg" width="40px" height="40px" alt="user" class="rounded-circle"></div>
    <div class="">
      <div class="fw-semibold">Tootbrush</div>
      <em class="" style="font-size:11px;">Hello, how much would you like to sell? </em>
    </div>
    </div>
    <div class="fw-light " style="font-size:10px;">
      Dec 2, 2023
    </div>
    
  </div>
</div>
      </div>
      <!-- Your messaging content goes here -->
      
    </div>
  </div>

</template>
  
  
  <script>
//   import store from '../store'
import Cart from "../components/Cart.vue";
import Footer from "../components/Footer.vue";
import { Bootstrap5Pagination } from "laravel-vue-pagination";
import store from "../store";

export default {
  components: {
    Cart, // Register the NavBar component
  },
  name: "Shop",
  data() {
    return {
      data: [],
      storeId: this.$route.query.storeId,
      categoryId: this.$route.query.categoryId,
      searchTerm: this.getSearch,
      selectedCategory: "all",
      isPopupOpen: false,
      animateIcon: false,
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

      const result = await this.$store.dispatch(
        "addSingleProductToCart",
        productId
      );
      if (result) {
        return this.$toast.open({
          message: "Added Successfully!",
          type: "success",
        });
      }
    },
    filterProductsByCategory(categoryName) {
      // Method to filter products by category
      if (categoryName === "all") {
        // If "all" category is selected, show all products
        return this.$store.getters.products.data;
      } else {
        // Filter products based on the selected category
        return this.$store.getters.products.data.filter(
          (product) => product.category_name === categoryName
        );
      }
    },
    async onCategorySelected(categoryName) {
      // Method triggered when a category is selected
      this.selectedCategory = categoryName; // Update the selected category
      const filteredProducts = this.filterProductsByCategory(categoryName);
      // Do something with the filtered products...
      console.log(filteredProducts);
    },
    async openQuickViewModal(product) {
      // console.log(product.id)
      
    // Update the Vuex store with the selected product's details
    this.$store.commit('setSelectedProduct', {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.image_url,
      description: product.description,
      // other details you want to store
    });

    // Open the modal here
    // console.log('clicked')
    $('#quickViewModal').modal('show');
  },
  closeModal() {
    // Clear the selected product in the Vuex store
    this.$store.commit('clearSelectedProduct');

    // Close the modal
    $('#quickViewModal').modal('hide');
  },
  togglePopup() {
    $('#quickViewModal').modal('hide');
      this.isPopupOpen = !this.isPopupOpen;
    }
  
  },
  computed: {
    fetchProducts() {
      // Return filtered products based on the selected category
      return this.filterProductsByCategory(this.selectedCategory);
    },
    getSearch() {
      const result = this.$route.query.search;
      return result;
    },
    fetchCategories() {
      return store.getters.categories;
    },
    selectedProduct() {
    return this.$store.state.selectedProduct; // Assuming the state in your store is named 'selectedProduct'
  },
  },
  created() {
    setInterval(() => {
      this.animateIcon = true;
      setTimeout(() => {
        this.animateIcon = false;
      }, 1000); // Duration of the animation in milliseconds
    }, 5000); // Interval in milliseconds (15 seconds)
  },
  async mounted() {
    const products = this.$store.getters.products;
    console.log("Fetched Products:", products.data); // Log fetched products
    // return products;
    const plainArray = Array.from(products.data);
    console.log("plain", plainArray);

    // Log the plain JavaScript array
    console.log("Fetched plain Products:", JSON.stringify(plainArray));

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
<style>
.text-green {
  color: green !important; /* Define your desired green color */
}
#messagingPopup {
      position: fixed;
      bottom: 0px;
      right: 10px;
      width: 400px;
      height: 400px;
      background-color: #fff;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      display: none;
    }

    #messagingPopup.show {
      display: block;
    }

    /* Styles for the close button */
    .close-btn {
      position: absolute;
      top: 5px;
      right: 10px;
      cursor: pointer;
      font-size: 20px;
      color: #999;
    }
    .fixed-icon {
      position: fixed;
      bottom: 20px;
      right: 20px;
      cursor: pointer;
      z-index: 1001;
    }
    #messageIcon {
      filter: hue-rotate(220deg)
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.bounce-animation {
  animation: bounce 1s infinite;
}
</style>