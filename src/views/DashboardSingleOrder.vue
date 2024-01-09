<template>
 <DashboardHeader />

<div class="main-wrapper">
        <!-- navbar vertical -->
        
      <DashboardSideNav />

    <!-- main wrapper -->
    <main class="main-content-wrapper">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row mb-8">
          <div class="col-md-12">
            <div class="d-md-flex justify-content-between align-items-center">
              <div>
                <!-- page header -->
                <h2>Single Order</h2>
                 <!-- breacrumb -->
                 <nav aria-label="breadcrumb">
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a href="#" class="text-inherit">Dashboard</a></li>
                    <li class="breadcrumb-item"><a href="#" class="text-inherit">Order</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Single Order</li>
                  </ol>
                </nav>
              </div>
              <!-- button -->
              <div>
                <router-link :to="{name: 'DashboardOrders'}" class="btn btn-primary">Back to all orders</router-link>
              </div>

            </div>
          </div>
        </div>
        <!-- row -->
        <div class="row ">
          <div class="col-xl-12 col-12 mb-5">
            <!-- card -->
            <div class="card h-100 card-lg">
              <div class="card-body p-6">
                <div class="d-md-flex justify-content-between">
                  <div class="d-flex align-items-center mb-2 mb-md-0">
                    <h2 class="mb-0">Order ID: #{{ fetchSingleStoreOrder.order_number }}</h2>
                    <span class="badge text-dark-warning ms-2" :class="{'bg-light-primary': fetchSingleStoreOrder.status === 'accepted' || fetchSingleStoreOrder.status === 'paid', 
                'bg-light-danger': fetchSingleStoreOrder.status === 'cancelled'}">{{ fetchSingleStoreOrder.status }}</span>
                  </div>
                  <!-- select option -->
                  <div class="d-md-flex">
                    <div class="mb-2 mb-md-0">
                      <select class="form-select" v-model="status">
                        <option selected>Status</option>
                        <option value="accepted">Accepted</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="shipped">Shipped</option>
                      </select>
                    </div>
                    <!-- button -->
                    <div class="ms-md-3">
                      <button class="btn btn-primary" @click="updateOrderStatus">Save Status</button>
                      <!-- <a href="#" class="btn btn-secondary">Download Invoice</a> -->
                    </div>
                  </div>
                </div>
                <div class="mt-8">
                  <div class="row">
                    <!-- address -->
                    <div class="col-lg-4 col-md-4 col-12">
                      <div class="mb-6">
                        <h6>Customer Details</h6>
                        <p class="mb-1 lh-lg">{{ fetchSingleStoreOrder.user.first_name }} {{ fetchSingleStoreOrder.user.last_name }}<br>
                          {{ fetchSingleStoreOrder.user.email }}<br>
                          {{ fetchSingleStoreOrder.user.phone }}</p>
                      </div>
                    </div>
                    <!-- address -->
                    <div class="col-lg-4 col-md-4 col-12">
                      <div class="mb-6">
                        <h6>Shipping Address</h6>
                        <p class="mb-1 lh-lg">{{ fetchSingleStoreOrder.house_apartment_number }} {{ fetchSingleStoreOrder.street }}<br>
                          {{ fetchSingleStoreOrder.county }} {{ fetchSingleStoreOrder.city }}, United Kingdom <br>
                          </p>

                      </div>
                    </div>
                    <!-- address -->
                    <div class="col-lg-4 col-md-4 col-12">
                      <div class="mb-6">
                        <h6>Order Details</h6>
                        <p class="mb-1 lh-lg">Order Number: <span class="text-dark">{{ fetchSingleStoreOrder.order_number }}</span><br>
                          Order Date: <span class="text-dark">{{ dateTime(fetchSingleStoreOrder.created_at)}}</span><br>
                          Order Total: <span class="text-dark">£{{ fetchSingleStoreOrder.amount }}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="table-responsive">
                    <!-- Table -->
                    <table class="table mb-0 text-nowrap table-centered">
                      <!-- Table Head -->
                      <thead class="bg-light">
                        <tr>
                          <th>Products</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <!-- tbody -->
                      <tbody>
                        <tr v-for="(item, index) in fetchSingleStoreOrder.order_items">
                          <td>
                            <a href="#" class="text-inherit">
                              <div class="d-flex align-items-center">
                                <div>
                                  <img :src="item.product.image_url" alt=""
                                    class="icon-shape icon-lg">
                                </div>
                                <div class="ms-lg-4 mt-2 mt-lg-0">
                                  <h5 class="mb-0 h6">
                                    {{ item.product.name }}
                                  </h5>

                                </div>
                              </div>
                            </a>
                          </td>
                          <td><span class="text-body">£{{ item.product.price }}</span></td>
                          <td>{{ item.quantity }}</td>
                          <td>£{{ item.quantity * item.product.price }}</td>
                        </tr>
                        <tr>
                          <td class="border-bottom-0 pb-0"></td>
                          <td class="border-bottom-0 pb-0"></td>
                          <td colspan="1" class="fw-medium text-dark ">
                            <!-- text -->
                            Sub Total :
                          </td>
                          <td class="fw-medium text-dark ">
                            <!-- text -->
                            £{{ fetchSingleStoreOrder.order_items.reduce((accumulator, item) => {
                            return accumulator + (item.product.price * item.quantity);
                            }, 0)}}
                          </td>
                        </tr>
                        <tr>
                          <td class="border-bottom-0 pb-0"></td>
                          <td class="border-bottom-0 pb-0"></td>
                          <td colspan="1" class="fw-medium text-dark ">
                            <!-- text -->
                            Shipping Cost
                          </td>
                          <td class="fw-medium text-dark  ">
                            <!-- text -->
                            --
                          </td>
                        </tr>

                        <tr>
                          <td></td>
                          <td></td>
                          <td colspan="1" class="fw-semi-bold text-dark ">
                            <!-- text -->
                            Grand Total
                          </td>
                          <td class="fw-semi-bold text-dark ">
                            <!-- text -->
                            £{{ fetchSingleStoreOrder.order_items.reduce((accumulator, item) => {
                            return accumulator + (item.product.price * item.quantity);
                            }, 0)}}
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- <div class="card-body p-6">
                <div class="row">
                  <div class="col-md-6 mb-4 mb-lg-0">
                    <h6>Payment Info</h6>
                    <span>Cash on Delivery</span>
                  </div>
                  <div class="col-md-6">
                    <h5>Notes</h5>
                    <textarea class="form-control mb-3" rows="3" placeholder="Write note for order"></textarea>
                    <a href="#" class="btn btn-primary">Save Notes</a>
                  </div>
                </div>
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

import moment from 'moment';

export default {
    name: "DashboardSingleOrder",
    data() {
        return {
            status: '',
            queryOrderNumber: this.$route.query.orderno,
            image: "/assets/imagesslider/slider-image-1.jpg"
        }
    },
    methods: {
        async updateOrderStatus() {
            const res = await this.$store.dispatch('updateOrderStatus', 
            {orderId: this.fetchSingleStoreOrder.id, 
                status: this.status, orderNumber: this.fetchSingleStoreOrder.order_number})
                console.log(res);
                if (res) {
                    this.$toast.open({
                        message: "Updated successfully",
                        type: "success"
                    })
                } else {
                    this.$toast.open({
                        message: "Update failed",
                        type: "error"
                    })
                }
        },
        dateTime(value) {
            return moment(value).format('LL HH:mm a');
        },
    },
    computed: {
        fetchSingleStoreOrder() {
            var data = this.$store.getters.singleStoreOrder;
            this.status = data.status;
            return data;
        }
    },
    created() {
        this.$store.dispatch("fetchSingleStoreOrder", this.queryOrderNumber);
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