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
                    <router-link :to="{name: 'myOrders'}" class="nav-link" aria-current="page"><i
                        class="feather-icon icon-shopping-bag me-2"></i>Your Orders</router-link>
                    </li>
                    <!-- nav item -->
                    <li class="nav-item">
                        <router-link :to="{name: 'settings'}" class="nav-link active" aria-current="page"><i
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
                  <div class="mb-6">
                    <!-- heading -->
                    <h2 class="mb-0">Account Setting</h2>
                  </div>
                  <div>
                    <!-- heading -->
                    <h5 class="mb-4">Account details</h5>
                    <div class="row">
                      <div class="col-lg-5">
                        <!-- form -->
                        <form>
                          <!-- input -->
                          <div class="mb-3">
                            <label class="form-label">First Name</label>
                            <input type="text" v-model="data.first_name" class="form-control" :placeholder="fetchLoggedInUser.first_name">
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Last Name</label>
                            <input type="text" v-model="data.last_name" class="form-control" :placeholder="fetchLoggedInUser.last_name">
                          </div>
                          <!-- input -->
                          <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" v-model="data.email" class="form-control" :placeholder="fetchLoggedInUser.email">
                          </div>
                          <!-- input -->
                          <div class="mb-5">
                            <label class="form-label">Phone</label>
                            <input type="text" v-model="data.phone" class="form-control" :placeholder="fetchLoggedInUser.phone">
                          </div>
                          <!-- button -->
                          
                        </form>
                        <div class="mb-3">
                            <button class="btn btn-primary" @click="updateProfile">Save Details</button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-10">
                  <div class="pe-lg-14">
                    <!-- heading -->
                    <h5 class="mb-4">Password</h5>
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
            <!-- <hr class="my-10"> -->
            <!-- <div>
              <h5 class="mb-4">Delete Account</h5>
              <p class="mb-2">Would you like to delete your account?</p>
              <p class="mb-5">This account contain 12 orders, Deleting your account will remove all the order details
                associated with it.</p>
              <a href="#" class="btn btn-outline-danger">I want to delete my account</a>
            </div> -->
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
import moment from 'moment';
import Header from '../components/Header.vue';

export default {
    name: "Settings",
    data() {
        return {
            data: {
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                current_password: '',
                new_password: ''
            }
        }
    },
    methods: {
        dateTime(value) {
            return moment(value).format('LL HH:mm a');
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
    },
    created() {
        // this.$store.dispatch("loggedInUser");
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
