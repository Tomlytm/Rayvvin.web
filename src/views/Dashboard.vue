<template>
    <DashboardHeader />

    <div class="main-wrapper mont">
            <!-- navbar vertical -->
            
          <DashboardSideNav />
    
            <!-- main wrapper -->
            <main class="main-content-wrapper">
                <section class="container">
                    <!-- row -->
                    <div class="row mb-8">
                        <div class="col-md-12">
                            <!-- card -->
                            <div class="card bg-light shadow-sm border-0 rounded-4"
                                v-bind:style="{ 'background-image': 'url(' + image + ')' }"
                                style="background-repeat: no-repeat; background-size: cover; background-position: right;">
                                <div class="card-body p-lg-12">
                                    <h1>Welcome back! {{ getMerchantStore.name }}
                                    </h1>
                                    <p>Manage your products and orders from a simple and easy to use dashboard</p>
                                    <router-link :to="{name: 'DashboardProducts'}" class="btn btn-primary" v-if="getMerchantStore.status === 'active'">
                                        Manage your products
                                    </router-link>
                                    <!-- <router-link :to="{name: 'DashboardBilling'}" class="btn btn-primary" v-else>
                                        Active your account
                                    </router-link> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- table -->

                        <div class="row">
                            <div class="col-lg-4 col-12 mb-6">
                                <!-- card -->
                                <div class="card shadow-sm h-100 card-lg">
                                    <!-- card body -->
                                    <div class="card-body p-6">
                                        <!-- heading -->
                                        <div class="d-flex justify-content-between align-items-center mb-6">
                                            <div>
                                                <h4 class="mb-0 fs-5">Earnings</h4>
                                            </div>
                                            <div
                                                class="icon-shape icon-md bg-light-danger text-dark-danger rounded-circle">
                                                <i class="bi bi-currency-dollar fs-5"></i>
                                            </div>
                                        </div>
                                        <!-- project number -->
                                        <div class="lh-1">
                                            <h1 class=" mb-2 fw-bold fs-2">£{{ fetchDashboardData.earnings }}</h1>
                                            <span class="text-dark me-1">Overall<span class="text-primary mx-1">You're doing well!</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12 mb-6">
                                <!-- card -->
                                <div class="card shadow-sm h-100 card-lg">
                                    <!-- card body -->
                                    <div class="card-body p-6">
                                        <!-- heading -->
                                        <div class="d-flex justify-content-between align-items-center mb-6">
                                            <div>
                                                <h4 class="mb-0 fs-5">Orders</h4>
                                            </div>
                                            <div
                                                class="icon-shape icon-md bg-light-warning text-dark-warning rounded-circle">
                                                <i class="bi bi-cart fs-5"></i>
                                            </div>
                                        </div>
                                        <!-- project number -->
                                        <div class="lh-1">
                                            <h1 class=" mb-2 fw-bold fs-2">{{ fetchDashboardData.orders }}</h1>
                                            <span class="text-dark me-1">Overall<span class="text-primary mx-1">Keep it up!</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12 mb-6">
                                <!-- card -->
                                <div class="card shadow-sm h-100 card-lg">
                                    <!-- card body -->
                                    <div class="card-body p-6">
                                        <!-- heading -->
                                        <div class="d-flex justify-content-between align-items-center mb-6">
                                            <div>
                                                <h4 class="mb-0 fs-5">Customer
                                                    <span>{{ fetchDashboardData.customers > 1 ? 's' : '' }}</span>
                                                </h4>
                                            </div>
                                            <div class="icon-shape icon-md bg-light-info text-dark-info rounded-circle">
                                                <i class="bi bi-people fs-5"></i>
                                            </div>
                                        </div>
                                        <!-- project number -->
                                        <div class="lh-1">
                                            <h1 class=" mb-2 fw-bold fs-2">{{ fetchDashboardData.customers }}</h1>
                                            <span class="text-dark me-1">Purchased from your store overall</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <!-- row -->
                    <div class="row ">
                        <div class="col-xl-8 col-lg-6 col-md-12 col-12 mb-6">
                            <!-- card -->
                            <div class="card shadow-sm h-100 card-lg">
                                <div class="card-body p-6">
                                    <!-- heading -->
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <h3 class="mb-1 fs-5">Revenue </h3>
                                            <!-- <small>(+63%) than last year)</small> -->
                                        </div>
                                        <!-- <div>
                                            <select class="form-select ">
                                                <option selected>2019</option>
                                                <option value="2023">2020</option>
                                                <option value="2024">2021</option>
                                                <option value="2025">2022</option>
                                                <option value="2025">2023</option>
                                            </select>
                                        </div> -->

                                    </div>
                                    <!-- chart -->
                                    <line-chart thousands="," :data="fetchDashboardData.chartData"></line-chart>

                                    <!-- <div id="revenueChart" class="mt-6"></div> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-12 mb-6">
                            <!-- card -->
                            <div class="card shadow-sm h-100 card-lg">
                                <!-- card body -->
                                <div class="card-body p-6">
                                    <!-- heading -->
                                    <h3 class="mb-0 fs-5">Metrics on your orders </h3>
                                    <div id="totalSale" class="mt-6 d-flex justify-content-center"></div>
                                    <div class="mt-4">
                                        <!-- list -->
                                        <ul class="list-unstyled mb-0">
                                            <li class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="8"
                                                    height="8" fill="currentColor"
                                                    class="bi bi-circle-fill text-primary" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg> <span class="ms-1">
                                                    <span class="text-dark">New %{{ fetchDashboardData.orderMetrics.new }}</span>
                                                </span></li>
                                            <li class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="8"
                                                    height="8" fill="currentColor"
                                                    class="bi bi-circle-fill text-warning" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg> <span class="ms-1"><span class="text-dark">Paid %{{ fetchDashboardData.orderMetrics.paid }}</span>
                                                    </span></li>
                                            <li class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="8"
                                                    height="8" fill="currentColor" class="bi bi-circle-fill text-danger"
                                                    viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg> <span class="ms-1"><span class="text-dark">Shipped %{{ fetchDashboardData.orderMetrics.shipped }}</span>
                                                    </span></li>
                                            <li><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"
                                                    fill="currentColor" class="bi bi-circle-fill text-info"
                                                    viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg> <span class="ms-1"><span class="text-dark">Cancelled %{{ fetchDashboardData.orderMetrics.cancelled }}</span>
                                                    </span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- row -->
                
                    <!-- row -->
                    <div class="row ">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-12 mb-6">
                            <div class="card shadow-sm h-100 card-lg">
                                <!-- heading -->
                                <div class="p-6">
                                    <h3 class="mb-0 fs-5">Recent Order</h3>
                                    <router-link :to="{name: 'DashboardOrders'}">View All</router-link>
                                </div>
                                <div class="card-body p-0">
                                    <!-- table -->
                                    <div class="table-responsive">
                                        <table class="table table-centered table-borderless text-nowrap table-hover">
                                            <thead class="bg-light">
                                                <tr>
                                                    <th scope="col">Order Number</th>
                                                    <th scope="col">Order Items</th>
                                                    <th scope="col">Order Date</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Status</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(order, index) in fetchDashboardData.topFiveRecentOrders" :key="index">

                                                    <td>#{{ order.order_number }}</td>
                                                    <td>{{ order.order_items.length }}</td>
                                                    <td>{{ dateTime(order.created_at) }}</td>
                                                    <td>£{{ order.amount }}</td>
                                                    <td>
                                                        <span
                                                            class="badge text-dark-primary" :class="{'bg-light-warning': order.status === 'new', 
                                                            'bg-light-primary': order.status === 'paid' || order.status === 'shipped' || order.status === 'accepted', 
                                                            'bg-light-danger': order.status === 'cancelled'}">{{order.status}}</span>
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
        </div>
   

</template>

<script setup>
  import {ref} from 'vue'
  const visible = ref(false);
</script>


<script>
import DashboardHeader from '../components/DashboardHeader.vue';
import DashboardSideNav from '../components/DashboardSideNav.vue';

import moment from 'moment';

export default {
    name: "Dashboard",
    data() {
        return {
            chartData: {},
            image: "/assets/imagesslider/slider-image-1.jpg"
        }
    },
    methods: {
        dateTime(value) {
            return moment(value).format('LL HH:mm a');
        },
    },
    computed: {
        getMerchantStore() {
            return this.$store.getters.merchantStore;
        },
        fetchCustomerOrders() {
            return this.$store.getters.customerOrders;
        },
        fetchDashboardData() {
            return this.$store.getters.dashboardData;
        }
    },
    created() {
        this.$store.dispatch("getDashboardData");
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