<template class="mont">
  <!-- <Header /> -->

  <body class="m-0 bg-white">
    <!-- Shop Cart -->
    <Cart />

    <main>
      <!--small nav-->
      <div class="mt-8 mb-lg-14 mb-8 mont">
        <div class="container mont">
          <!-- row -->
          <div class="row">
            <!-- col -->
            <div class="col-12">
              <!-- breadcrumb -->
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item text-black d-flex gap-2">
                    <router-link
                      class="d-flex text-black align-items-center gap-2"
                      to="/blog"
                      ><svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 1L2 6L7 11"
                          stroke="#011E2C"
                          stroke-width="1.5"
                        /></svg
                      >All Posts
                    </router-link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <!--small nav-->

      <!-- shop -->
      
      <section class="container mont mb-lg-4 mb-8">
        <div class="mb-5">
          <span class="bg-light p-2">Delivery</span>&nbsp;&nbsp;<span
            >5 min read</span
          >
        </div>
        <div class="mb-5 h2">Blog title heading will go here</div>
        <div class="mb-8 mb-lg-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </div>

        <div class="mb-8">
          <img src="/assets/images/blog_img1.svg" alt="post" class="w-100" />
        </div>
        <div class="d-flex justify-content-between mb-7">
          <div class="d-flex gap-5">
            <div>
              <p>Written by</p>
              <p>Full name</p>
            </div>
            <div>
              <p>Published on</p>
              <p>22 January 2021</p>
            </div>
          </div>
          <div class="d-flex gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#F4F4F4" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.9999 11.6601V12.0001C25.0007 13.0662 24.576 14.0885 23.8199 14.84L20.9999 17.67C20.4738 18.1911 19.6261 18.1911 19.1 17.67L19 17.56C18.8094 17.3656 18.8094 17.0544 19 16.86L22.4399 13.4201C22.807 13.0394 23.0083 12.5288 22.9999 12.0001V11.6601C23.0003 11.127 22.788 10.6159 22.4099 10.2401L21.7599 9.59011C21.3841 9.21207 20.873 8.99969 20.3399 9.00011H19.9999C19.4669 8.99969 18.9558 9.21207 18.58 9.59011L15.14 13.0001C14.9456 13.1906 14.6344 13.1906 14.44 13.0001L14.33 12.8901C13.8089 12.3639 13.8089 11.5162 14.33 10.9901L17.16 8.15012C17.9165 7.40505 18.9382 6.99133 19.9999 7.00014H20.3399C21.4011 6.9993 22.4191 7.42018 23.1699 8.17012L23.8299 8.83012C24.5798 9.5809 25.0007 10.5989 24.9999 11.6601ZM12.6499 17.94L17.9399 12.6501C18.0338 12.5554 18.1616 12.5022 18.2949 12.5022C18.4282 12.5022 18.556 12.5554 18.6499 12.6501L19.3499 13.3501C19.4445 13.4439 19.4978 13.5717 19.4978 13.7051C19.4978 13.8384 19.4445 13.9662 19.3499 14.0601L14.0599 19.35C13.966 19.4447 13.8382 19.4979 13.7049 19.4979C13.5716 19.4979 13.4438 19.4447 13.3499 19.35L12.6499 18.65C12.5553 18.5561 12.502 18.4283 12.502 18.295C12.502 18.1617 12.5553 18.0339 12.6499 17.94ZM17.5599 19C17.3655 18.8094 17.0543 18.8094 16.8599 19L13.4299 22.41C13.0517 22.7905 12.5365 23.003 12 22.9999H11.66C11.1269 23.0004 10.6158 22.788 10.24 22.41L9.58997 21.76C9.21194 21.3842 8.99956 20.873 8.99998 20.34V20C8.99956 19.4669 9.21194 18.9558 9.58997 18.58L13.0099 15.14C13.2005 14.9456 13.2005 14.6345 13.0099 14.44L12.8999 14.33C12.3738 13.8089 11.5261 13.8089 11 14.33L8.17999 17.16C7.42392 17.9116 6.99916 18.9339 7 20V20.35C7.00182 21.4077 7.42249 22.4216 8.16999 23.1699L8.82998 23.8299C9.58076 24.5799 10.5988 25.0008 11.66 24.9999H12C13.0534 25.0061 14.0667 24.5964 14.8199 23.8599L17.6699 21.01C18.191 20.4838 18.191 19.6361 17.6699 19.11L17.5599 19Z"
                fill="#011E2C"
              />
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#F4F4F4" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.5 7.24268C7.67157 7.24268 7 7.91425 7 8.74268V23.7427C7 24.5711 7.67157 25.2427 8.5 25.2427H23.5C24.3284 25.2427 25 24.5711 25 23.7427V8.74268C25 7.91425 24.3284 7.24268 23.5 7.24268H8.5ZM12.5208 11.2454C12.5264 12.2016 11.8106 12.7909 10.9612 12.7866C10.1611 12.7824 9.46357 12.1454 9.46779 11.2468C9.47201 10.4016 10.14 9.72243 11.0076 9.74212C11.8879 9.76181 12.5264 10.4073 12.5208 11.2454ZM16.2797 14.0044H13.7597H13.7583V22.5643H16.4217V22.3646C16.4217 21.9847 16.4214 21.6047 16.4211 21.2246C16.4203 20.2108 16.4194 19.1959 16.4246 18.1824C16.426 17.9363 16.4372 17.6804 16.5005 17.4455C16.7381 16.568 17.5271 16.0013 18.4074 16.1406C18.9727 16.2291 19.3467 16.5568 19.5042 17.0898C19.6013 17.423 19.6449 17.7816 19.6491 18.129C19.6605 19.1766 19.6589 20.2242 19.6573 21.2719C19.6567 21.6417 19.6561 22.0117 19.6561 22.3815V22.5629H22.328V22.3576C22.328 21.9056 22.3278 21.4537 22.3275 21.0018C22.327 19.8723 22.3264 18.7428 22.3294 17.6129C22.3308 17.1024 22.276 16.599 22.1508 16.1054C21.9638 15.3713 21.5771 14.7638 20.9485 14.3251C20.5027 14.0129 20.0133 13.8118 19.4663 13.7893C19.404 13.7867 19.3412 13.7833 19.2781 13.7799C18.9984 13.7648 18.7141 13.7494 18.4467 13.8033C17.6817 13.9566 17.0096 14.3068 16.5019 14.9241C16.4429 14.9949 16.3852 15.0668 16.2991 15.1741L16.2797 15.1984V14.0044ZM9.68164 22.5671H12.3324V14.01H9.68164V22.5671Z"
                fill="#011E2C"
              />
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#F4F4F4" />
              <path
                d="M21.1761 8.24268H23.9362L17.9061 15.0201L25 24.2427H19.4456L15.0951 18.6493L10.1172 24.2427H7.35544L13.8052 16.9935L7 8.24268H12.6954L16.6279 13.3553L21.1761 8.24268ZM20.2073 22.6181H21.7368L11.8644 9.78196H10.2232L20.2073 22.6181Z"
                fill="#011E2C"
              />
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#F4F4F4" />
              <path
                d="M26 16.3038C26 10.7472 21.5229 6.24268 16 6.24268C10.4771 6.24268 6 10.7472 6 16.3038C6 21.3255 9.65684 25.4879 14.4375 26.2427V19.2121H11.8984V16.3038H14.4375V14.0872C14.4375 11.5656 15.9305 10.1728 18.2146 10.1728C19.3088 10.1728 20.4531 10.3693 20.4531 10.3693V12.8453H19.1922C17.95 12.8453 17.5625 13.6209 17.5625 14.4166V16.3038H20.3359L19.8926 19.2121H17.5625V26.2427C22.3432 25.4879 26 21.3257 26 16.3038Z"
                fill="#011E2C"
              />
            </svg>
          </div>
        </div>
        <div class="row">
        <div class="col-xl-8"> <div>
          <div class="h2">Introduction</div>
          <p>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </p>
          <p>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.
          </p>
          <p><img src="/assets/images/blog.svg" alt="blog" class="w-100" /></p>
          <p class="d-flex gap-7">
            <svg
              width="2"
              height="21"
              viewBox="0 0 2 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="2" height="21" fill="#011E2C" />
            </svg>
            Image caption goes here
          </p>
          <p></p>
          <p>
            <strong
              >Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim
              dignissim adipiscing faucibus consequat, urna. Viverra purus et
              erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
              congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
              neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
              id. Dolor lacus, eget nunc lectus in tellus, pharetra,
              porttitor.</strong
            >
          </p>
          <p>
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
            commodo consectetur convallis risus. Sed condimentum enim dignissim
            adipiscing faucibus consequat, urna. Viverra purus et erat auctor
            aliquam. Risus, volutpat vulputate posuere purus sit congue
            convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
            Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor
            lacus, eget nunc lectus in tellus, pharetra, porttitor.
          </p>
          <p>
            <em
              >"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus."</em
            >
          </p>
          <p>
            Tristique odio senectus nam posuere ornare leo metus, ultricies.
            Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
            Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
            suscipit accumsan. Cursus viverra aenean magna risus elementum
            faucibus molestie pellentesque. Arcu ultricies sed mauris
            vestibulum.
          </p>
          <p class="h2">Conclusion</p>
          <p>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
          </p>
          <p>
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
            condimentum mi massa. In tincidunt pharetra consectetur sed duis
            facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
            dictum eget nibh tortor commodo cursus.
          </p>
          <p>
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
            aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id
            morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
            dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
            tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere
            gravida enim posuere cursus diam.
          </p>
        </div></div>
        <div class="col-xl-4">
            <div class="border p-5">
                <p class="h5">Suscribe to newsletter</p>
                <p>Subscribe to receive the latest blog posts to your inbox every week.</p>
                <input type="text" placeholder="Enter your email" class="border w-100 p-3" style="background: transparent;">
                <div class="btn w-100 rounded-0 mt-8 text-white fw-normal" style="background-color: #0AAD0A;">Subscribe</div>
            </div>
        </div>
      </div>
       
      </section>

      <section class="mont container mt-lg-13">
        <p class="h2">Related posts</p>
        <div class="d-flex mb-lg-14 mb-8 justify-content-between align-items-center">
            
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
        <div class="border btn fw-normal rounded-0" style="border-color: #0AAD0A; color: #0AAD0A;">View all</div>
        </div>
        <div class="row">
        <BlogCard v-for="(path, index) in imagePaths" :key="index" :imgPath="path"  />
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
    