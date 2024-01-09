<template>
        <Header />

    <body>
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
                <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Account</li>
                </ol>
            </nav>
            </div>
        </div>
        </div>
    </div>
    <!--small nav-->


    <!-- orderssection -->
    <section>
        <div class="container">
        <!-- row -->
        <div class="row">
            <!-- col -->
            <div class="col-12">
            <div class="d-flex justify-content-between align-items-center d-md-none py-4">
                <!-- heading -->
                <h3 class="fs-5 mb-0">Account Setting</h3>
                <!-- button -->
                <button class="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3 " type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasAccount" aria-controls="offcanvasAccount">
                <i class="bi bi-text-indent-left fs-3"></i>
                </button>
            </div>
            </div>
            <!-- col -->
            <div class="col-lg-3 col-md-4 col-12 border-end  d-none d-md-block">
            <div class="pt-10 pe-lg-10">
                <!-- nav -->
                <ul class="nav flex-column nav-pills nav-pills-dark">
                <!-- nav item -->
                <li class="nav-item">
                    <router-link :to="{name: 'myOrders'}" class="nav-link active" aria-current="page"><i
                        class="feather-icon icon-shopping-bag me-2"></i>Your Orders</router-link>
                </li>
                <!-- nav item -->
                <li class="nav-item">
                    <router-link :to="{name: 'settings'}" class="nav-link" aria-current="page"><i
                        class="feather-icon icon-shopping-bag me-2"></i>Settings</router-link>
                </li>
                <li class="nav-item">
                   <router-link :to="{name: 'billing'}" class="nav-link" aria-current="page"><i
                       class="feather-icon icon-dollar me-2"></i>Billing</router-link>
               </li>
           
                </ul>
            </div>
            </div>
            <div class="col-lg-9 col-md-8 col-12">
            <div class="py-6 p-md-6 p-lg-10">
                <!-- heading -->
                <h2 class="mb-6">Your Orders</h2>

                <div class="table-responsive-xxl border-0">
                <!-- Table -->
                <table class="table mb-0 text-nowrap table-centered ">
                    <!-- Table Head -->
                    <thead class="bg-light">
                    <tr>
                        <th>&nbsp;</th>
                        <th>Product</th>
                        <th>Order No.</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Status</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- Table body -->
                    <tr v-for="(order, index) in fetchCustomerOrders" :key="index">
                        <td class="align-middle border-top-0 w-0">
                            <img :src="order.product.image_url" alt="Ecommerce" class="icon-shape icon-xl">
                        </td>
                        <td class="align-middle border-top-0">
                            <h6 class="mb-0">{{ order.product.name }}</h6>
                        <span><small class="text-muted">{{ order.product.weight }}kg</small></span>

                        </td>
                        <td class="align-middle border-top-0">
                            <h6 class="mb-0">#{{ order.order.order_number }}</h6>
                        </td>
                        <td class="align-middle border-top-0">
                        {{dateTime(order.order.created_at)}}

                        </td>
                        <td class="align-middle border-top-0">
                        {{ order.quantity }}
                        </td>
                        <td class="align-middle border-top-0">
                        <span class="badge" 
                        :class="{'bg-warning': order.order.status === 'new' ? true : false, 
                        'bg-success': order.order.status === 'paid' ? true : false }">{{order.order.status}}</span>
                        </td>
                        <td class="align-middle border-top-0">
                        £{{ order.order.amount }}
                        </td>
                    </tr>
                    </tbody>
                </table>
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
import {ref} from 'vue'
const visible = ref(false);
</script>

<script>
import Cart from '../components/Cart.vue'  
import Footer from '../components/Footer.vue'
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import Header from '../components/Header.vue';
import moment from 'moment';

export default {
    name: "Shop",
    data() {
        return {
        }
    },
    methods: {
        dateTime(value) {
            return moment(value).format('LL HH:mm a');
        },
    },
    computed: {
        fetchCustomerOrders() {
            return this.$store.getters.customerOrders;
        },
    },
    created() {
        this.$store.dispatch("fetchCustomerOrders");
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
