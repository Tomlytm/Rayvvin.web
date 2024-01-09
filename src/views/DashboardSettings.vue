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
                <h2>Settings</h2>
                  <!-- breacrumb -->
                  <nav aria-label="breadcrumb">
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a href="#" class="text-inherit">Dashboard</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Settings</li>
                  </ol>
                </nav>
              </div>
              <!-- button --> 
            </div>
          </div>
        </div>
        <!-- row -->
        <div class="row ">
          <div class="col-xl-12 col-12 mb-5">
            <!-- card -->
            <div class="card h-100 card-lg">
              <!-- card body -->
              <div class="card-body p-4">
                <!-- settings -->
                <h5 class="mb-4">Personal details</h5>
                    <div class="pe-lg-14">
                    <!-- form -->
                    <form>
                        <div class="row">
                            <div class="col-sm-6">
                                    <!-- input -->
                                <div class="mb-3">
                                    <label class="form-label">First Name</label>
                                    <input type="text" v-model="data.first_name" class="form-control" :placeholder="fetchLoggedInUser.first_name">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3">
                                    <label class="form-label">Last Name</label>
                                    <input type="text" v-model="data.last_name" class="form-control" :placeholder="fetchLoggedInUser.last_name">
                                </div>     
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                                <!-- input -->
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" v-model="data.email" class="form-control" :placeholder="fetchLoggedInUser.email">
                                </div>
                            </div>
                            <div class="col-sm-6">
                                    <!-- input -->
                                    <div class="mb-5">
                                    <label class="form-label">Phone</label>
                                    <input type="text" v-model="data.phone" class="form-control" :placeholder="fetchLoggedInUser.phone">
                                </div>
                            </div> 
                        </div>    
                    </form>
                    <div class="mb-3">
                        <button class="btn btn-primary" @click="updateProfile">Save Details</button>
                        </div>
                    </div>
                    <hr class="my-10">
                    <div class="pe-lg-14">
                        <!-- heading -->
                        <h5 class="mb-4">Store Settings</h5>
                        <form class=" row row-cols-1 row-cols-lg-2">
                            <!-- input -->
                            <div class="mb-3 col">
                                <label class="form-label">Name</label>
                                <input type="text" v-model="storeData.name" :placeholder="fetchMerchantStore.name" class="form-control" >
                            </div>
                            <!-- input -->
                            <div class="mb-3 col">
                                <label class="form-label">Email</label>
                                <input type="text" v-model="storeData.email" class="form-control" :placeholder="fetchMerchantStore.email" disabled>
                            </div>
                            <div class="mb-3 col">
                                <label class="form-label">Phone Number</label>
                                <input type="text" v-model="storeData.phone_number" :placeholder="fetchMerchantStore.phone_number" class="form-control" disabled>
                            </div>
                            <!-- input -->
                            <div class="mb-3 col">
                                <label class="form-label">Status</label>
                                <input type="text" v-model="storeData.status" :placeholder="fetchMerchantStore.status" class="form-control" disabled>
                            </div>
                            <!-- input -->
                        </form>
                        <button @click="updateStore" class="btn btn-primary">Update Store</button>
                    </div>
                    <hr class="my-10">
                    <div class="pe-lg-14">
                        <!-- heading -->
                        <h5 class="mb-4">Password Settings</h5>
                        <form class=" row row-cols-1 row-cols-lg-2">
                        <!-- input -->
                        <div class="mb-3 col">
                            <label class="form-label">Current Password</label>
                            <input type="password" v-model="data.current_password" class="form-control" placeholder="**********">
                        </div>
                        <!-- input -->
                        <div class="mb-3 col">
                            <label class="form-label">New Password</label>
                            <input type="password" v-model="data.new_password" class="form-control" placeholder="**********">
                        </div>
                        <!-- input -->
                        <div class="col-12">
                            <p class="mb-4">Can’t remember your current password?
                            </p>
                        </div>
                        </form>
                        <button @click="updateProfile" class="btn btn-primary">Save Password</button>

                    </div>
              </div>
              <div class=" border-top d-md-flex justify-content-between align-items-center px-6 py-6">
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
    name: "DashboardSettings",
    data() {
        return {
            productStatusFilter: '',
            productSearchTerm: '',
            data: {
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                current_password: '',
                new_password: ''
            },
            storeData: {
                name: '',
                email: '',
                phone_number: '',
                status: ''
            }
        }
    },
    methods: {
        async updateStore() {
            const data = {
                name: this.storeData.name,
            }

            const result = await this.$store.dispatch('updateStore', this.storeData);

            if (result) {
                return this.$toast.open({
                    message: "Updated successfully",
                    type: 'success'
                });
            } 

            return this.$toast.open({
                message: "Failed, please try again",
                type: 'error'
            })
        },
        async updateProfile() {
            const update = {};
            if (this.data.first_name !== '') {
                update.first_name = this.data.first_name;
            }

            if (this.data.last_name !== '') {
                update.last_name = this.data.last_name;
            }

            if (this.data.phone !== '') {
                update.phone = this.data.phone;
            }

            if (this.data.email !== '') {
                update.email = this.data.email;
            }

            if (this.data.current_password !== '') {
                update.current_password = this.data.current_password;
            }

            if (this.data.new_password !== '') {
                update.new_password = this.data.new_password;
            }

            const result = await this.$store.dispatch('updateProfile', update);

            if (result) {
                return this.$toast.open({
                    message: 'Updated successfully',
                    type: 'success'
                })
            }

            return this.$toast.open({
                message: 'Failed, please try again',
                type: 'error'
            });
        },
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
        fetchLoggedInUser() {
            const result =  this.$store.getters.loggedInUser;

            this.data.first_name = result.first_name;
            this.data.last_name = result.last_name;
            this.data.email = result.email;
            this.data.phone = result.phone;

            return result;
        },
        fetchMerchantStore() {
            const result = this.$store.getters.merchantStore;
            this.storeData.name = result.name;
            this.storeData.email = result.email;
            this.storeData.phone_number = result.phone_number;
            this.storeData.status = result.status;

            return result;

        },
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
    this.$store.dispatch("getMerchantStore");

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