<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header border-bottom">
  <div class="text-start">
    <h5 id="offcanvasRightLabel" class="mb-0 fs-4">Your Cart</h5>
  </div>
  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">

  <div class="">
    <!-- alert -->
    <div class="alert alert-danger p-2" role="alert" v-if="fetchCart.length !== 0">
      Checkout now before it's too late
    </div>
    <ul class="list-group list-group-flush">
      <!-- list group -->
      <li class="list-group-item py-3 ps-0  border-bottom" v-for="(item, index) in fetchCart" :key="index">
        <!-- row -->
        <div class="row align-items-center">

          <div class="col-6 col-md-6 col-lg-7">
            <div class="d-flex">
            <img :src="item.product.image_url" alt="Ecommerce"
              class="icon-shape icon-xxl">
              <div class="ms-3">
            <!-- title -->
            <a href="./pages/shop-single.html" class="text-inherit">
              <h6 class="mb-0">{{ item.product.name }}</h6>
            </a>
            <div class="link-primary">
                <small>{{ item.product.store_name }}</small>
            </div>
            <!-- text -->
            <div class="mt-2 small lh-1"> <a href="#!" class="text-decoration-none text-inherit"> <span
                  class="me-1 align-text-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-trash-2 text-success">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                    </path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg></span><span class="text-muted">Remove</span></a></div>
                </div>
              </div>
          </div>
          <!-- input group -->
          <div class="col-4 col-md-3 col-lg-3">
            <!-- input -->
            <!-- input -->
            <div class="input-group input-spinner  ">
              <input type="button" value="-" class="button-minus  btn  btn-sm " data-field="quantity" @click="reduceOrRemoveCartProductItem(item.product.id)">
              <input type="number" step="1" max="10" :value="item.quantity" name="quantity"
                class="quantity-field form-control-sm form-input   ">
              <input type="button" value="+" class="button-plus btn btn-sm " data-field="quantity" @click="increaseCartProductItem(item.product.id)">
            </div>

          </div>
          <!-- price -->
          <div class="col-2 text-lg-end text-start text-md-end col-md-2">
            <span class="fw-bold">£{{ item.product.price * item.quantity }}</span>
          </div>
        </div>
      </li>
    </ul>
    <!-- btn -->
    <div class="d-flex justify-content-between">
      <div class="">
        Service Charge
      </div>
      <div class=""  style="margin-right: 5px;">
        <p>£{{ getServiceFee }}</p>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="">
        Total
      </div>
      <div class="" style="margin-right: 5px;">
        <p>£{{ checkoutTotal + getServiceFee }}</p>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-4" v-if="fetchCart.length !== 0">
        <button href="#!" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#checkoutModal">Checkout now</button>   
    </div>
    <div class="d-flex justify-content-between mt-4" v-else>
      <button href="#!" class="btn btn-primary" data-bs-dismiss="offcanvas">Continue Shopping</button>
    </div>

  </div>
</div>
</div>


<!-- Checkout Modal -->
<div style="z-index: 1100 !important;" class="modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="locationModalLabel" aria-hidden="true" data-bs-backdrop="false">
<div class="modal-dialog modal-sm modal-dialog-centered">
  <div class="modal-content">

    <div class="modal-body p-6">
      <div class="d-flex justify-content-between align-items-start ">
        <div>
          <h5 class="mb-1" id="locationModalLabel">Checkout</h5>
          <p class="mb-0 small">Enter your details and we will get your items to you right away! </p>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="my-5">
        <form>
          <div class="form-outline mb-4">
                <label class="form-label">Apartment Number / House Number</label>
                <input type="text"  v-model="checkout.house_apartment_number" placeholder="No 7" class="form-control" required />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label">Street</label>
                <input type="text"  v-model="checkout.street" placeholder="Roofsberg Street" class="form-control" required />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label">City</label>
                <input type="text"  v-model="checkout.city" placeholder="London" class="form-control" required />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label">Post Code</label>
                <input type="text"  v-model="checkout.post_code" placeholder="SYG 23F" class="form-control" required />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label">County</label>
                <input type="text"  v-model="checkout.county" placeholder="Shrewsbury" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label">Any additional info for the delivery person?</label>
                <input type="text"  v-model="checkout.delivery_note" placeholder="Ring the bell when you arrive" class="form-control" />
            </div>

                <!-- Submit button -->
        </form>
        <div class="mt-4 text-center">
                <button type="submit" class="btn btn-success" @click="checkoutCart" :disabled="checkoutSent">
                    Checkout
                    <template v-if="checkoutSent">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </template>
                </button>
            </div>
      </div>
      <div>
      </div>
    </div>

  </div>
</div>
</div>

</template>

<script setup>
  import {ref} from 'vue'
  const visible = ref(false);
</script>

<script>
import Cart from '../components/Cart.vue'
import axios from 'axios'


export default {
    name: "Cart",
    data() {
        return {
            checkoutSent: false,
            checkout: {
                address: '',
                country: '',
                state: '',
                county: '',
                post_code: '',
                city: ''
            }
        }

    },
    methods: {
        async increaseCartProductItem(productId) {
            const result = await this.$store.dispatch('addSingleProductToCart', productId);

            if (result) {
                return this.$toast.open({
                        message: 'Added succrssfully',
                        type: 'success'
                    });
                }

                return this.$toast.open({
                        message: 'Failed, please try again',
                        type: 'error'
                    });
        },
        async reduceOrRemoveCartProductItem(productId) {
            const result = await this.$store.dispatch('reduceOrRemoveCartProductItem', productId);
            if (result) {
                return this.$toast.open({
                        message: 'Removed succrssfully',
                        type: 'success'
                    });
                }

                return this.$toast.open({
                        message: 'Failed, please try again',
                        type: 'error'
                    });

        },
        async checkoutCart() {
            this.checkoutSent = true;

            try {
                const resp = await axios.post('/api/v1/checkout', this.checkout);
                if (resp.data.success) {
                    this.$toast.open({
                        message: 'Checkout started, redirecting you to payment page.',
                        type: 'success',
                        onDismiss: function() {
                          window.open(resp.data.data)
                        }
                    });

                }
                this.checkoutSent = false;
                $('#checkoutModal').modal('hide')

            } catch (error) {
                console.log(error);
                this.checkoutSent = false;

                this.$toast.open({
                    message: 'Checkout failed, please try again',
                    type: 'error'
                });
            }
        }
       
    },
     created() {
        this.$store.dispatch("fetchCart");
    },
    computed: {
      getServiceFee() {
        var stripeFee = (0.015 * this.checkoutTotal) + 0.20;
        var rayvvinServiceFee = 2;

        return stripeFee + rayvvinServiceFee;
      },
      fetchCart() {
          return this.$store.getters.cart;
      },
      checkoutTotal() {
          const cart = this.$store.getters.cart;

          return cart.reduce((accumulator, object) => {
              return accumulator + (object.product.price * object.quantity);
          }, 0);
      }   
    }
}
</script>