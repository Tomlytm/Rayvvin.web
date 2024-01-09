<template>
       <Header />

    <body  class="body-container mont">
  <!-- Shop Cart -->
   <Cart />
  
  <main>  
    <!--small nav-->
    <div class="mt-4 ">
        <div class="container">
        <!-- row -->
        <div class="row ">
            <!-- col -->
            <div class="col-12">
            <!-- breadcrumb -->
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><a href="#!">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Stores</li>
                </ol>
            </nav>
            </div>
        </div>
        </div>
    </div>
    <!--small nav-->

      <!-- section -->
      <section class="mt-8 ">
        <!-- container -->
        <div class="container">
          <!-- row -->
          <div class="row ">
            <div class="col-12 ">
              <!-- heading -->
              <div class="bg-light d-flex justify-content-between ps-md-10 ps-6 rounded">
                <div class="d-flex align-items-center">
                  <h1 class="mb-0 fw-bold">Stores</h1>

                </div>
                <div class="py-6">
                  <!-- img -->
                  <!-- img -->
                  <img src="/assets/images/svg-graphics/store-graphics.svg" alt="" class="img-fluid">
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <!-- section -->
  <section class="mt-8 mb-lg-14 mb-8">
    <div class="container">
          <!-- row -->
      <div class="row">
            <!-- col -->
        <div class="col-12">
          <div class="mb-3">
             <!-- text -->
            <h6>We have <span class="text-primary">{{ fetchStores.total }}</span> vendors now</h6>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4 g-lg-4">

        <!-- col -->
        <div class="col" v-for="(store, index) in fetchStores.data" :key="index">
           <!-- card --><div class="card p-6 card-product">
            <!-- <div> 
                <img src="/assets/imagesstores-logo/stores-logo-1.svg" alt=""
                class="rounded-circle icon-shape icon-xl">
            </div> -->
            <div class="mt-4">
               <h2 class="mb-1 h5">
                    <router-link :to="{name: 'shop', query: {'storeId': store.id}}" class="text-inherit " style="font-size: 14px;">{{ store.name }}
                        <span class="badge " :class="{'bg-success': store.status === 'active'? true : false}, 
                        {'bg-danger': store.status === 'inactive' ? true : false}"  style="font-size: 12px;">{{ store.status }}</span>
                    </router-link>
                </h2>
                <!-- <div class="small text-muted"><span class="me-2">Organic </span><span class="me-2">Groceries</span>
                  <span>Butcher Shop</span>
                </div> -->
                <div class="py-3">
                  <ul class="list-unstyled mb-0 small">
                    <li>Delivery
                    </li>
                    <li>Pickup available</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
  

      


      </div>
      <div class="row mt-8">
                <div class="col">
                <!-- nav -->
                <Bootstrap5Pagination
                    :data="fetchStores"
                    @pagination-change-page="getResults"
                />
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
    import {ref} from 'vue'
    const visible = ref(false);
  </script>
  
  <script>
  import Cart from '../components/Cart.vue'  
  import Footer from '../components/Footer.vue'
  import { Bootstrap5Pagination } from 'laravel-vue-pagination';
  import axios from 'axios'
  import Header from '../components/Header.vue';


  
  export default {
    name: "Stores",
    data() {
        return {
            data: []
        }
    },
    methods: {
        async getResults(page) {
            if (typeof page === 'undefined') {
                page = 1;
            }

            await this.$store.dispatch('fetchStores', page);
        }
    },
    computed: {
        fetchStores() {
            return this.$store.getters.stores;
        }
    },
    created() {
        this.$store.dispatch("fetchStores", 1);
    },
    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', '/assets/js/vendors/slick-slider.js')
        document.head.appendChild(recaptchaScript)

        let script = document.createElement('script')
        script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js')
        document.head.appendChild(script)

        let script2 = document.createElement('script')
        script.setAttribute('src', '/assets/js/vendors/countdown.js')
        document.head.appendChild(script2)        
    },
  }
  </script>
  