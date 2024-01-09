<template>
    <DashboardHeader />

    <div class="main-wrapper">
            <!-- navbar vertical -->
            
          <DashboardSideNav />
    
            <!-- main wrapper -->
        <main class="main-content-wrapper">
      <div class="container">
        <div class="row mb-8">
          <div class="col-md-12">
            <!-- page header -->
            <div class="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Products</h2>
                  <!-- breacrumb -->
                  <nav aria-label="breadcrumb">
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a href="#" class="text-inherit">Dashboard</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Products</li>
                  </ol>
                </nav>
              </div>
              <!-- button -->
              <div>
                <router-link :to="{name: 'AddProductView'}" class="btn btn-primary">Add Product</router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- row -->
        <div class="row ">
          <div class="col-xl-12 col-12 mb-5">
            <!-- card -->
            <div class="card h-100 card-lg">
              <div class="px-6 py-6 ">
                <div class="row justify-content-between">
                  <!-- form -->
                  <div class="col-lg-4 col-md-6 col-12 mb-2 mb-lg-0">
                    <form class="d-flex" role="search">
                      <input class="form-control" type="search" v-model="productSearchTerm" placeholder="Search Products" aria-label="Search">
                    </form>
                  </div>
                  <!-- select option -->
                  <div class="col-lg-2 col-md-4 col-12">
                    Filter by status
                    <select class="form-select" v-model="productStatusFilter">
                      <option value="all" selected>All</option>
                      <option value="available">Available</option>
                      <option value="not-available">Out of Stock</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- card body -->
              <div class="card-body p-4">
                <!-- table -->
                <div class="table-responsive">
                  <table class="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                    <thead class="bg-light">
                      <tr>
                        <th>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkAll">
                            <label class="form-check-label" for="checkAll">

                            </label>
                          </div>
                        </th>
                        <th>Image</th>
                        <th>Proudct Name</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Create at</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in fetchStoreProducts" :key="index">
                        <td>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="productOne">
                            <label class="form-check-label" for="productOne">
                            </label>
                          </div>
                        </td>
                        <td>
                          <a href="#!"> <img :src="product.image_url" alt=""
                              class="icon-shape icon-md"></a>
                        </td>
                        <td><a href="#" class="text-reset">{{ product.name }}</a></td>
                        <td>{{ product.category_name }}</td>

                        <td>
                          <span class="badge bg-light-primary" :class="{'text-dark-primary': product.available, 'bg-light-danger': product.available === 0}">{{ product.available ? 'Available' : 'Out of Stock'}}</span>
                        </td>
                        <td>£{{ product.price }}</td>
                        <td>{{dateTime(product.created_at)}}</td>
                        <td>
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
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              <div class=" border-top d-md-flex justify-content-between align-items-center px-6 py-6">
                <!-- <Bootstrap5Pagination
                    :data="fetchStoreProducts"
                    @pagination-change-page="getResults"
                /> -->
                <!-- <span>Showing 1 to 8 of 12 entries</span>
                <nav class="mt-2 mt-md-0">
                  <ul class="pagination mb-0 ">
                    <li class="page-item disabled"><a class="page-link " href="#!">Previous</a></li>
                    <li class="page-item"><a class="page-link active" href="#!">1</a></li>
                    <li class="page-item"><a class="page-link" href="#!">2</a></li>
                    <li class="page-item"><a class="page-link" href="#!">3</a></li>
                    <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                  </ul>
                </nav> -->
              </div>
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
    name: "DashboardProducts",
    data() {
        return {
            productStatusFilter: '',
            productSearchTerm: ''
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
        fetchStoreProducts() {
            var products = this.$store.getters.storeProducts;

            if (this.productSearchTerm !== '') {
                products = products.filter(product => {
                    var matches = product.name.toLowerCase().indexOf(this.productSearchTerm.toLowerCase()) >= 0 ? true : false;
                    return matches;
                })

                return products;
            }

            if (this.productStatusFilter !== '' && this.productStatusFilter === 'available') {
              if (this.productStatusFilter === 'all') return products;

                products = products.filter(product => {
                    return product.available
                });

                return products;
            }

            if (this.productStatusFilter !== '' && this.productStatusFilter === 'not-available') {
              if (this.productStatusFilter === 'all') return products;

                products = products.filter(product => {
                    return product.available === 0
                });

                return products;
            }

           

            return products;
        },
    },
    created() {
      this.productStatusFilter = 'all';
      
        this.$store.dispatch("getStoreProducts");
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