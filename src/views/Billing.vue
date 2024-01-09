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
                   <router-link :to="{name: 'settings'}" class="nav-link" aria-current="page"><i
                       class="feather-icon icon-shopping-bag me-2"></i>Settings</router-link>
               </li>
               <li class="nav-item">
                   <router-link :to="{name: 'billing'}" class="nav-link active" aria-current="page"><i
                       class="feather-icon icon-dollar me-2"></i>Billing</router-link>
               </li>
           </ul>
       </div>
       </div>
       <div class="col-lg-9 col-md-8 col-12 mb-4">
        <div class="container">
                <div v-if="getLoggedInUser.role === 'customer' && getLoggedInUser.exclusive_user === 0">
                    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h6 class="display-6">Subsribe to a world without of shopping without service charge payments and ads at £6.99 / month</h6>
                        <p class="lead">Get our premium subscription and save money on service charges when you place orders of any amount!</p>
                    </div>
                    <div class="text-center mb-4">
                        <button @click="getClientSecret" type="button" class="btn btn-lg btn-block btn-outline-primary">Activate your membership</button>

                    </div>

                    <div class="card payment-card mt-4" v-show="activateButtonClicked">
                            <div class="card-header">
                        You will be charged £6.99 / month for plan
                            </div>

                            <div class="card-body">
                                <form id="payment-form">
                                        <div class="col-xl-4 col-lg-4 card-name-custom">
                                            <div class="form-group">
                                                <label for="">Name</label>
                                                <input type="text" name="name" id="card-holder-name" class="form-control" value="" placeholder="Name on the card">
                                            </div>
                                        </div>
            
                                        <div class="col-xl-4 col-lg-4 ">
                                            <div class="form-group">
                                                <label for="">Card details</label>
                                                <div id="customer-card-element"></div>
                                            </div>
                                        </div>
                                        <div class="col-xl-12 col-lg-12">
                                        <hr>
                                            <button type="submit" class="btn btn-primary" id="card-button">Purchase</button>
                                        </div>
            
                                </form>
    
                            </div>
                        </div>
                </div>
                <div v-else>
                    <h1>Your subscription was successful. 
                        <i class="bi bi-suit-heart text-success"></i><br>
                    </h1>
                    <p class="h4">Enjoy access to millions of products without ads or service charge payments</p>
                    <button @click="getStripeBillingUrl" class="btn btn-primary">Manage my Subscription</button>
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
import moment from 'moment';
import Header from '../components/Header.vue';
import store from '../store';
import axios from 'axios'

export default {
name: "Billing",
data() {
   return {
        activateButtonClicked: false,
        clientSecret: null,
        paymentMethod: null,
   }
},
methods: {
   dateTime(value) {
       return moment(value).format('LL HH:mm a');
   },
   async subscribe(data) {
        const result = await this.$store.dispatch('subscribe', data);
            if (result) {
                return this.$toast.open({
                    'message': 'Subscription successful!',
                    'type': 'success'
                })
            }
            // const res = await axios.post('/api/v1/subscribe', data);
            // console.log(res);

            // if (res.data.success) {
            //     location.reload();
            // }

        },
        async getStripeBillingUrl() {
            const res = await axios.get('/api/v1/get-stripe-billing-url');
            window.location.href = res.data;
        },
   async getClientSecret() {

    const res = await axios.get('/api/v1/stripe-setup');
    this.clientSecret = res.data;

    if (res.data) {
        this.activateButtonClicked = true;
    }

   }
},
computed: {
    getLoggedInUser() {
        return store.getters.loggedInUser;
    }
 
},
created() {
   // this.$store.dispatch("loggedInUser");
},
mounted() {
    if (this.$store.getters.loggedInUser.exclusive_user === 0) {
            const stripe = Stripe(import.meta.env.VITE_STRIPE_KEY);
            const elements = stripe.elements()
            const cardElement = elements.create('card')
        
            cardElement.mount('#customer-card-element')
        
            const form = document.getElementById('payment-form')
            const cardBtn = document.getElementById('card-button')
            const cardHolderName = document.getElementById('card-holder-name')
    
            form.addEventListener('submit', async (e) => {
                e.preventDefault()
        
                cardBtn.disabled = true
                const { setupIntent, error } = await stripe.confirmCardSetup(
                    this.clientSecret, {
                        payment_method: {
                            card: cardElement,
                            billing_details: {
                                name: cardHolderName.value
                            }   
                        }
                    }
                )
        
                if(error) {
                    cardBtn.disable = false
                } else {
                    console.log(setupIntent.payment_method)
                    const data = {
                        'paymentMethodId': setupIntent.payment_method,
                        'planId': 2
                    }

                    this.subscribe(data);
                    cardBtn.disable = false

                }
            })
        }     
},
}
</script>
