<template>
    <DashboardHeader />

    <div class="main-wrapper mont">
            <!-- navbar vertical -->
            
          <DashboardSideNav />
    
        <!-- main wrapper -->
        <main class="main-content-wrapper">
      <div class="container">
        <!-- row -->
        <div class="row mb-8">
          <div class="col-md-12">
            <!-- page header -->
            <div>
              <h2>Order List</h2>
                <!-- breacrumb -->
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Orders</li>
                </ol>
              </nav>

            </div>
          </div>
        </div>
        <!-- row -->
        <div class="row">
          <div class="col-xl-12 col-12 mb-5">
            <!-- card -->
            <div class="card h-100 card-lg shadow">
              <div class=" p-6 ">
                <div class="row justify-content-between">
                  <div class="col-md-4 col-12 mb-2 mb-md-0">
                    <!-- form -->
                    <form class="d-flex" role="search">
                      <input class="form-control" v-model="orderSearchTerm" type="search" placeholder="Search" aria-label="Search">

                    </form>
                  </div>
                  <div class="col-lg-2 col-md-4 col-12">
                    <!-- select -->
                    Filter by status
                    <select class="form-select" v-model="orderStatusFilter">
                      <option value="all" selected>All</option>
                      <option value="new">New</option>
                      <option value="paid">Paid</option>
                      <option value="shipped">Shipped</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- card body -->
              <div class="card-body p-0">
                <!-- table responsive -->
                <div class="table-responsive">
                  <table class="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                    <thead class="bg-light">
                      <tr>
                        <th>Order Number</th>
                        <th>Amount</th>
                        <th>Order Items</th>
                        <th>Date</th>
                        <th>Status</th>
                        <!-- <th></th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <div class="text-danger p-3 text-center" v-if="fetchStoreOrders.length < 1">No orders found</div>
                      <tr v-else v-for="(order, index) in fetchStoreOrders" :key="index">
                        <td><router-link :to="{name: 'DashboardSingleOrder',  query: {'orderno': order.order_number}}" class="text-reset">{{ order.order_number }}</router-link></td>
                        <td>{{ order.amount }}</td>
                        <td>{{ order.order_items.length }}</td>


                        <td>{{ dateTime(order.created_at) }}</td>
                        <td>
                            <span
                                class="badge text-dark-primary" :class="{'bg-light-warning': order.status === 'new', 
                                'bg-light-primary': order.status === 'paid' || order.status === 'shipped' || order.status === 'accepted', 
                                'bg-light-danger': order.status === 'cancelled'}">{{order.status}}</span>
                        </td>

                        <!-- <td>
                          <div class="dropdown">
                            <a href="#" class="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="feather-icon icon-more-vertical fs-5"></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#"><i class="bi bi-trash me-3"></i>Delete</a></li>
                              <li><a class="dropdown-item" href="#"><i class="bi bi-pencil-square me-3 "></i>Edit</a>
                              </li>
                            </ul>
                          </div>
                        </td> -->
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!-- <div class="border-top d-md-flex justify-content-between align-items-center p-6">
                <span>Showing 1 to 8 of 12 entries</span>
                <nav class="mt-2 mt-md-0">
                  <ul class="pagination mb-0 ">
                    <li class="page-item disabled"><a class="page-link " href="#!">Previous</a></li>
                    <li class="page-item"><a class="page-link active" href="#!">1</a></li>
                    <li class="page-item"><a class="page-link" href="#!">2</a></li>
                    <li class="page-item"><a class="page-link" href="#!">3</a></li>
                    <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                  </ul>
                </nav>
              </div> -->
            </div>

          </div>

        </div>
      </div>
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
import { Bootstrap5Pagination } from 'laravel-vue-pagination';

import moment from 'moment';

export default {
    name: "DashboardOrders",
    data() {
        return {
            orderStatusFilter: '',
            orderSearchTerm: ''
        }
    },
    methods: {
        dateTime(value) {
            return moment(value).format('LL HH:mm a');
        },
        async getResults(page) {
            if (typeof page === 'undefined') {
                page = 1;
            }

            await this.$store.dispatch('fetchStoreProducts', page);
        }
    },
    computed: {
        fetchStoreOrders() {
            var orders = this.$store.getters.storeOrders;

            if (this.orderSearchTerm !== '') {
                if (this.orderSearchTerm.includes('#')) {
                    this.orderSearchTerm = this.orderSearchTerm.replace('#', '');
                }



                orders = orders.filter(order => {
                    var matches = order.order_number.toLowerCase().indexOf(this.orderSearchTerm.toLowerCase()) >= 0 ? true : false;
                    return matches;
                })

                return orders;
            }

            if (this.orderStatusFilter !== '') {

              if (this.orderStatusFilter === 'all') return orders;

                orders = orders.filter(order => {
                    return order.status.toLowerCase() === this.orderStatusFilter.toLowerCase()
                });

                return orders;
            }

            return orders;
        },
    },
    created() {
      this.orderStatusFilter = 'all';

        this.$store.dispatch("getStoreOrders");
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