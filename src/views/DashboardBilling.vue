<template>
    <DashboardHeader />

    <div class="main-wrapper">
            <!-- navbar vertical -->
            
          <DashboardSideNav />
    
            <!-- main wrapper -->
        <main class="main-content-wrapper">
            <div class="container">
                <div v-if="getMerchantStore.status === 'inactive'">
                    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 class="display-4">Activate your <span class="text-success">store</span></h1>
                        <p class="lead">Get access to millions of customers and tools that will grow your business and earn you money</p>
                    </div>

                    <div class="container-fluid">
                        <div class="card-deck mb-3 text-center">
                            <div class="card mb-4 box-shadow">
                                <div class="card-header">
                                    <h4 class="my-0 font-weight-normal">What you get</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">£10 <small class="text-muted">/ month</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                    <li>Access to millions of buyers from all ends of the United Kingdom</li>
                                    <li>Get real time notifications when your store receives an order</li>
                                    <li>Manage your products and orders easily.</li>
                                    <li>Get data insights into how your store is performing</li>
                                    <li>24 / 7 support from our dedicated support team</li>
                                    </ul>
                                    <button @click="getClientSecret" type="button" class="btn btn-lg btn-block btn-outline-primary">Activate your store now</button>
                                </div>
                            </div>
                        </div>

                       
                      
                    </div>
                </div>
                <div v-else>
                    <h1>Your subscription was successful. 
                        <i class="bi bi-suit-heart text-success"></i><br>
                    </h1>
                    <p class="h4">Enjoy access to millions of customers and tools to manage and grow your business</p>
                    <button @click="getStripeBillingUrl" class="btn btn-primary">Manage my Subscription</button>
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
import axios from 'axios'

import moment from 'moment';
import store from '../store';


export default {
    name: "DashboardBilling",
    data() {
        return {
            activateButtonClicked: false,
            clientSecret: null,
            paymentMethod: null
        }
    },
    methods: {
        dateTime(value) {
            return moment(value).format('LL HH:mm a');
        },
        async getClientSecret() {

            const res = await axios.get('/api/v1/stripe-setup');
            this.clientSecret = res.data;

            if (res.data) {
        this.activateButtonClicked = true;
    }

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
            // if (res.data.success) {
            //     location.reload();
            // }

        },
        async getStripeBillingUrl() {
            const res = await axios.get('/api/v1/get-stripe-billing-url');
            window.location.href = res.data;
        }
       
    },
    computed: {
      getMerchantStore() {
        return store.getters.merchantStore;
      }
    },
    mounted() {      
        if (this.$store.getters.merchantStore.status === 'inactive') {
            const stripe = Stripe(import.meta.env.VITE_STRIPE_KEY);
            const elements = stripe.elements()
            const cardElement = elements.create('card')
        
            cardElement.mount('#card-element')
        
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
                    const data = {
                        'paymentMethodId': setupIntent.payment_method,
                        'planId': 1
                    }

                    this.subscribe(data);
                    cardBtn.disable = false

                }
            })
        }
    },
}
</script>

<style scoped>

.card-name-custom {
    margin-bottom: 30px;
}
</style>