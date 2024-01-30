<template >
      

  <body  style="" class="body-container m-0">
    <div style="background-color: ;">
<!-- Shop Cart -->
 <Cart />

<main class="m-0" >
  <section class="w-100 m-0 shadow" style="border-radius:0 0 50px 50px;">
    <div class=" m-0 shadow"  style="background: url(/assets/images/navbg.svg)no-repeat; border-radius:0 0 50px 50px; ">
      <!-- <Header /> -->
      <div class="hero-slider mont mx-lg-auto container ">
        <div class=" d-lg-flex align-items-center justify-content-between ">
          <div class=" py-lg-12  py-14  text-xs-center">
            <span class="badge text-bg-warning">Opening Sale Discount 50%</span>

            <h2 class="text-white display-5 fw-bold mt-4">SuperMarket For Fresh Grocery </h2>
            <p class="lead text-white">Introduced a new model for online grocery shopping
              and convenient home delivery.</p>
              <router-link :to="{name: 'shop'}" class="btn py-5 px-lg-12 me-5 mt-3 text-white" style="background-color: #B20D0D;">Shop Now <i class="feather-icon icon-arrow-right ms-1"></i></router-link>
              <router-link :to="{name: 'shop'}" class="btn py-5 px-lg-12  mt-3 text-white border " style="background: transparent;">Explore Store <i class="feather-icon icon-arrow-right ms-1"></i></router-link>
          </div>
          <div class=" d-none d-lg-block">
            <img src="/assets/images/hero-img1.svg" height="420" alt="jhkk">
          </div>
        </div>
        <div class=" d-lg-flex align-items-center justify-content-between ">
          <div class=" py-lg-12  py-14  text-xs-center">
            <span class="badge text-bg-warning">Free Shipping - orders over £200</span>
            <h2 class=" display-5 fw-bold mt-4 text-white">Free Shipping on <br> orders over <span
                class="text-primary">£200</span></h2>
            <p class="lead text-white">Free Shipping to First-Time Customers Only, After promotions and discounts are applied.
            </p>
            <router-link :to="{name: 'shop'}" class="btn py-5 px-lg-12 mt-3 text-white me-5" style="background-color: #B20D0D;">Shop Now <i class="feather-icon icon-arrow-right ms-1"></i></router-link>
            
            <router-link :to="{name: 'shop'}" class="btn py-5 px-lg-12  mt-3 text-white border " style="background: transparent;">Explore Store <i class="feather-icon icon-arrow-right ms-1"></i></router-link>
          </div>
          <div class=" d-none d-lg-block">
            <img src="/assets/images/hero-img2.svg" height="420" alt="jhkk">
          </div>

        </div>
        <div class="d-lg-flex align-items-center justify-content-between ">
          <div class=" py-lg-12   py-14  text-xs-center">
            <span class="badge text-bg-warning">Free Shipping - orders over £200</span>
            <h2 class="text-white display-5 fw-bold mt-4">Free Shipping on <br> orders over <span
                class="text-primary">£200</span></h2>
            <p class="lead text-white">Free Shipping to First-Time Customers Only, After promotions and discounts are applied.
            </p>
            <router-link :to="{name: 'shop'}" class="btn py-5 px-lg-12 text-white mt-3 me-5" style="background-color: #B20D0D;">Shop Now <i class="feather-icon icon-arrow-right ms-1"></i></router-link>
            
            <router-link :to="{name: 'shop'}" class="btn py-5 px-lg-12  mt-3 text-white border " style="background: transparent;">Explore Store <i class="feather-icon icon-arrow-right ms-1"></i></router-link>
          </div>
          <div class=" d-none d-lg-block">
            <img src="/assets/images/hero-img3.svg" height="420" alt="jhkk">
          </div>


        </div>

      </div>
    </div>
  </section>

  <!-- Category Section Start-->
  <Categories />
  <!-- Category Section End-->

  <!-- Popular Products Start-->
  <!-- <TopTenPopularProducts 
  v-on:quickviewproduct="handleQuickViewProduct" 
  v-on:addSingleProductToCart="handleAddSingleProductToCart"
  v-on:addproducttowishlist="handleAddProductToWishList" /> -->
  <!-- Popular Products End-->

  <!-- top three daily best selers-->
  <!-- <TopThreeDailyBestSellers 
  v-on:quickviewproduct="handleQuickViewProduct" 
  v-on:addSingleProductToCart="handleAddSingleProductToCart"
  v-on:addproducttowishlist="handleAddProductToWishList" /> -->
  <!-- top three daily best selers-->
<!--African Market-->
  <section style="background-image: url(/assets/images/african-market-bg.svg);, height: 300px;">
    <div style="height: 520px;" class="container ">
<div class="d-lg-flex justify-content-end align-items-center my-auto h-100 mont">
  <div class="w-lg-50 text-white">
    <div class="fw-bold fs-1 mb-3">
      African Market for African Merchants
    </div>
    <div class="fs-3 mb-3">
      Get amazing deals on our daily featured products. Hurry while stock lasts
    </div>
    <div style="background-color: #0AAD0A; width: 230px;" class="text-center btn text-white py-4 fs-4 fw-normal">
      Shop Now
    </div>
  </div>

</div>
    </div>
  </section>
  <section class="my-lg-14 my-8 mont">
    <div class="container mont">
      <div class="row bg-white pt-3 shadow-sm">
        <div class="col-md-6 col-lg-3">
          <div class="d-flex gap-3 align-items-center">
            <div><svg width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.115 31.8706V3.0706L10.265 6.2206H0.815V0.370603H14.405V31.8706H7.115ZM24.2421 32.2306C23.0421 32.2306 22.0071 31.8256 21.1371 31.0156C20.2971 30.1756 19.8771 29.1106 19.8771 27.8206C19.8771 26.5306 20.2971 25.4956 21.1371 24.7156C22.0071 23.9056 23.0421 23.5006 24.2421 23.5006C25.4721 23.5006 26.5071 23.9056 27.3471 24.7156C28.1871 25.4956 28.6071 26.5306 28.6071 27.8206C28.6071 29.1106 28.1871 30.1756 27.3471 31.0156C26.5071 31.8256 25.4721 32.2306 24.2421 32.2306Z" fill="#E74040"/>
</svg>
</div>
          <div class="mb-8 mb-xl-0">
            <div class="mb-5 ms-2"><img src="/assets/images/icons/clock.svg" alt=""></div>
            <h3 class="h6 mb-3">
              10 minute grocery now
            </h3>
            <p class="fs-6">Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
          </div>
          </div>
        </div>
        <div class="col-md-6  col-lg-3">
          <div class="d-flex gap-3 align-items-center">
            <div>
              <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.11 32.8705V28.1455L14.26 16.6705C15.22 15.8005 15.925 15.0205 16.375 14.3305C16.825 13.6405 17.125 13.0105 17.275 12.4405C17.455 11.8705 17.545 11.3455 17.545 10.8655C17.545 9.60548 17.11 8.64548 16.24 7.98548C15.4 7.29548 14.155 6.95048 12.505 6.95048C11.185 6.95048 9.955 7.20548 8.815 7.71548C7.705 8.22548 6.76 9.02048 5.98 10.1005L0.67 6.68048C1.87 4.88048 3.55 3.45548 5.71 2.40548C7.87 1.35548 10.36 0.830483 13.18 0.830483C15.52 0.830483 17.56 1.22048 19.3 2.00048C21.07 2.75048 22.435 3.81548 23.395 5.19548C24.385 6.57548 24.88 8.22548 24.88 10.1455C24.88 11.1655 24.745 12.1855 24.475 13.2055C24.235 14.1955 23.725 15.2455 22.945 16.3555C22.195 17.4655 21.085 18.7105 19.615 20.0905L9.535 29.5855L8.14 26.9305H25.915V32.8705H2.11ZM33.7274 33.2305C32.5274 33.2305 31.4924 32.8255 30.6224 32.0155C29.7824 31.1755 29.3624 30.1105 29.3624 28.8205C29.3624 27.5305 29.7824 26.4955 30.6224 25.7155C31.4924 24.9055 32.5274 24.5005 33.7274 24.5005C34.9574 24.5005 35.9924 24.9055 36.8324 25.7155C37.6724 26.4955 38.0924 27.5305 38.0924 28.8205C38.0924 30.1105 37.6724 31.1755 36.8324 32.0155C35.9924 32.8255 34.9574 33.2305 33.7274 33.2305Z" fill="#E74040"/>
</svg>

            </div>
          <div class="mb-8 mb-xl-0">
            <div class="mb-5 ms-2"><img src="/assets/images/icons/gift.svg" alt=""></div>
            <h3 class="h6 mb-3">Best Prices & Offers</h3>
            <p class="fs-6">Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess &
              offers.
            </p>
          </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="d-flex gap-3 align-items-center">
            <div><svg width="38" height="33" viewBox="0 0 38 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.72 32.4105C10.53 32.4105 8.355 32.1255 6.195 31.5555C4.035 30.9555 2.205 30.1155 0.705 29.0355L3.54 23.4555C4.74 24.3255 6.135 25.0155 7.725 25.5255C9.315 26.0355 10.92 26.2905 12.54 26.2905C14.37 26.2905 15.81 25.9305 16.86 25.2105C17.91 24.4905 18.435 23.5005 18.435 22.2405C18.435 21.0405 17.97 20.0955 17.04 19.4055C16.11 18.7155 14.61 18.3705 12.54 18.3705H9.21V13.5555L17.985 3.61048L18.795 6.22048H2.28V0.370481H24.33V5.09548L15.6 15.0405L11.91 12.9255H14.025C17.895 12.9255 20.82 13.7955 22.8 15.5355C24.78 17.2755 25.77 19.5105 25.77 22.2405C25.77 24.0105 25.305 25.6755 24.375 27.2355C23.445 28.7655 22.02 30.0105 20.1 30.9705C18.18 31.9305 15.72 32.4105 12.72 32.4105ZM33.5009 32.2305C32.3009 32.2305 31.2659 31.8255 30.3959 31.0155C29.5559 30.1755 29.1359 29.1105 29.1359 27.8205C29.1359 26.5305 29.5559 25.4955 30.3959 24.7155C31.2659 23.9055 32.3009 23.5005 33.5009 23.5005C34.7309 23.5005 35.7659 23.9055 36.6059 24.7155C37.4459 25.4955 37.8659 26.5305 37.8659 27.8205C37.8659 29.1105 37.4459 30.1755 36.6059 31.0155C35.7659 31.8255 34.7309 32.2305 33.5009 32.2305Z" fill="#E74040"/>
</svg>
</div>
          <div class="mb-8 mb-xl-0">
            <div class="mb-5 ms-2"><img src="/assets/images/icons/package.svg" alt=""></div>
            <h3 class="h6 mb-3">Wide Assortment</h3>
            <p class="fs-6">Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other
              categories.</p>
          </div>
        </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="d-flex gap-3 align-items-center">
            <div><svg width="42" height="33" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.27 25.2555V20.3505L15.12 0.370481H22.77L8.235 20.3505L4.68 19.3155H29.475V25.2555H0.27ZM17.235 31.8705V25.2555L17.46 19.3155V13.4205H24.345V31.8705H17.235ZM36.8993 32.2305C35.6993 32.2305 34.6643 31.8255 33.7943 31.0155C32.9543 30.1755 32.5343 29.1105 32.5343 27.8205C32.5343 26.5305 32.9543 25.4955 33.7943 24.7155C34.6643 23.9055 35.6993 23.5005 36.8993 23.5005C38.1293 23.5005 39.1643 23.9055 40.0043 24.7155C40.8443 25.4955 41.2643 26.5305 41.2643 27.8205C41.2643 29.1105 40.8443 30.1755 40.0043 31.0155C39.1643 31.8255 38.1293 32.2305 36.8993 32.2305Z" fill="#E74040"/>
</svg>
</div>
            <div class="mb-8 mb-xl-0">
            <div class="mb-5 ms-2"><img src="/assets/images/icons/refresh-cw.svg" alt=""></div>
            <h3 class="h6 mb-3">Easy Returns</h3>
            <p class="fs-6">Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked
              <a href="#!">policy</a>.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Categories1 />
  <section>
    <div class="container d-lg-flex justify-content-between  mb-5">
      
      <img src="/assets/images/Rayvvin_logo.svg" alt="rayvvin">
      <div class="d-flex gap-4"> 
        
        <img src="/assets/images/app-store.svg" alt="rayvvin">
        <img src="/assets/images/googleplay.svg" alt="rayvvin">
      </div>
    </div>
  </section>
</main>


<!--Quick product view Modal -->
<div class="modal fade" id="quickViewModal" tabindex="-1" aria-hidden="true">
<div class="modal-dialog modal-xl modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-body p-8">
      <div class="position-absolute top-0 end-0 me-3 mt-3">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <!-- img slide -->
          <div class="product productModal" id="productModal">
            <div class="zoom" onmousemove="zoom(event)" 
            v-bind:style="{ 'background-image': 'url(' + modalProduct.image_url + ')' }">
              <img :src="modalProduct.image_url" alt="">
            </div>
          
          </div>
          <!-- product tools -->
          <!-- <div class="product-tools">
            <div class="thumbnails row g-3" id="productModalThumbnails">
              <div class="col-3 tns-nav-active">
                <div class="thumbnails-img">
                  <img
                    src="/assets/images/products/product-single-img-1.jpg"
                    alt=""
              >
                </div>
              </div>
              <div class="col-3">
                <div class="thumbnails-img" >
                  <img
                    src="/assets/images/products/product-single-img-2.jpg"
                    alt=""
              >
                </div>
              </div>
              <div class="col-3">
                <div class="thumbnails-img">
                  <img
                    src="/assets/images/products/product-single-img-3.jpg"
                    alt=""
              >
                </div>
              </div>
              <div class="col-3">
                <div class="thumbnails-img">
                  <img
                    src="/assets/images/products/product-single-img-4.jpg"
                    alt=""
              >
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="col-lg-6">
          <div class="ps-lg-8 mt-6 mt-lg-0">
            <a href="#!" class="mb-4 d-block">{{ modalProduct.category_name }}</a>
            <h2 class="mb-1 h1">{{ modalProduct.name }}</h2>
            <!-- <div class="mb-4">
              <small class="text-warning">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i></small
              ><a href="#" class="ms-2">(30 reviews)</a>
            </div> -->
            <div class="fs-4">
              <span class="fw-bold text-dark">£{{ modalProduct.price }}</span>
              <span class="text-decoration-line-through text-muted">£{{ modalProduct.price + 600 }}</span
              ><span
                ><small class="fs-6 ms-2 text-danger">26% Off</small></span
              >
            </div>
            <hr class="my-6">
            <div class="mb-4">
              <button type="button" class="btn btn-outline-secondary">
                {{ modalProduct.weight}} kg
              </button>
            </div>
            <div>
              <!-- input -->
              <!-- input -->
              <div class="input-group input-spinner  ">
                <input type="button" value="-" class="button-minus  btn  btn-sm " data-field="quantity">
                <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input   ">
                <input type="button" value="+" class="button-plus btn btn-sm " data-field="quantity">
              </div>
            </div>
            <div
              class="mt-3 row justify-content-start g-2 align-items-center"
            >

              <div class="col-lg-4 col-md-5 col-6 d-grid">
                <!-- button -->
                <!-- btn -->
                <button type="button" @click="$emit('addSingleProductToCart', modalProduct.id)" class="btn btn-primary">
                  <i class="feather-icon icon-shopping-bag me-2"></i>Add to
                  cart
                </button>
              </div>
              <div class="col-md-4 col-5">
                <a class="btn btn-light" href="#!" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist">
                  <i class="feather-icon icon-heart"></i>
                </a>
              </div>
            </div>
            <hr class="my-6">
            <div>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>Product Code:</td>
                    <td>FBB00255</td>
                  </tr>
                  <tr>
                    <td>Availability:</td>
                    <td>In Stock</td>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>Fruits</td>
                  </tr>
                  <tr>
                    <td>Shipping:</td>
                    <td>
                      <small
                        >01 day shipping.<span class="text-muted"
                          >( Free pickup today)</span
                        ></small
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>



<!-- footer -->
<Footer />
</div>
</body>
</template>


<script setup>
  import {ref} from 'vue'
  const visible = ref(false);
</script>

<script>
import Cart from '../components/Cart.vue'
import Categories from '../components/Categories.vue'
import Categories1 from '../components/Categories1.vue'
import TopTenPopularProducts from '../components/TopTenPopularProducts.vue'
import TopThreeDailyBestSellers from '../components/TopThreeDailyBestSellers.vue'
import Header from '../components/Header.vue';
import store from '../store'
import router from '../router';


import Footer from '../components/Footer.vue'

export default {
    name: "HomeView",
    data() {
        return {
          modalProduct: {}
        }
    },
    methods: {
      handleQuickViewProduct(product) {
        this.modalProduct = product;
      },
      async handleAddProductToWishList(productId) {
        const result = await this.$store.dispatch('addProductToWishList', productId)
        if (result) {
          return this.$toast.open({
            message: "Added product to your wishlist",
            type: "success"
          })
        }

        return this.$toast.open({
            message: "Failed please try again",
            type: "error"
          })
      },
      async handleAddSingleProductToCart(productId) {
        if (!this.$store.getters.isAuthenticated) {
          return $('#loginModal').modal('show')
        }

        const result = await this.$store.dispatch('addSingleProductToCart', productId)
        if (result) {
          return this.$toast.open({
            message: "Added product to your cart",
            type: "success"
          })
        }

        return this.$toast.open({
            message: "Failed please try again",
            type: "error"
          })
      }
    },
    computed: {
     
    },
    created() {
      if (store.getters.isAuthenticated && store.getters.loggedInUser.role === 'merchant') {
        router.push({ path: '/dashboard' })
      }
    },
     mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', '/assets/js/vendors/slick-slider.js')
      document.head.appendChild(recaptchaScript)

      let script = document.createElement('script')
      script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js')
      document.head.appendChild(script)

      let script2 = document.createElement('script')
      script2.setAttribute('src', '/assets/js/vendors/countdown.js')
      document.head.appendChild(script2)        
    },
}
</script>
<style>

.body-container {
  position: relative;
  background-image: 
    url(/assets/images/bg-home.jpg); /* Replace 'your-image-url.jpg' with your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.body-container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* Overlay color */
  background-color: #ffffff;
  /* Adjust opacity */
  opacity: 0.95; /* 5% opacity */
  /* Ensure it's below the content */
  z-index: -1;
}
</style>