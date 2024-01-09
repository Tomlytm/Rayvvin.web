<template>
     <Header />

    <body>
  <!-- Shop Cart -->
   <Cart />
  
  <main>  
    <!-- small nav section -->
    <div class="mt-4">
        <div class="container">
        <!-- row -->
        <div class="row ">
            <!-- col -->
            <div class="col-12">
            <!-- breadcrumb -->
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><a href="#!">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">My Wishlist</li>
                </ol>
            </nav>
            </div>
        </div>
        </div>
    </div>
    <!-- small nav section -->

    <!--table section-->
    <section class="mt-8 mb-14">
        <div class="container">
        <!-- row -->
        <div class="row">
            <div class="col-lg-12">
            <div class="mb-8">
                <!-- heading -->
                <h1 class="mb-1">My Wishlist</h1>
                <p>You have got {{ fetchWishList.length }} product
                    <span v-if="fetchWishList.length > 1">s</span>
                    <span v-else></span>in this wishlist.</p>
            </div>
            <div>
                <!-- table -->
                <div class="table-responsive" v-if="Object.keys(fetchWishList).length > 0">
                <table class="table text-nowrap table-with-checkbox">
                    <thead class="table-light">
                    <tr>
                        <th>S/N</th>
                        <th></th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in fetchWishList" :key="index">
                        <td class="align-middle">
                            {{ index + 1 }}
                        </td>
                        <td class="align-middle" >
                            <a href="#">
                                <img :src="item.product.image_url" class="icon-shape icon-xxl" alt="">
                            </a>
                        </td>
                        <td class="align-middle" >
                            <div>
                                <h5 class="fs-6 mb-0"><a href="#" class="text-inherit">{{ item.product.name }}</a></h5>
                                <a href="#"> 
                                    <small>{{ item.product.category_name }}</small>
                                </a>
                            </div>
                        </td>
                        <td class="align-middle" >£{{ item.product.price }}</td>
                        <td class="align-middle" ><span class="badge" :class="{'bg-success': item.product.available, 'bg-danger': !item.product.available}">{{ item.product.available ? 'In Stock' : 'Out of Stock' }}</span></td>
                        <td class="align-middle" >
                            <button class="btn btn-primary btn-sm" @click="addProductToCart(item.product.id)">Add to Cart</button>
                        </td>
                        <td class="align-middle" >
                            <a href="#" class="text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" @click="removeWishListItem(item.id)">
                            <i class="feather-icon icon-trash-2"></i></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div v-else>
                    <h1>You have no wish list</h1>
                    
                </div>

            </div>
            </div>
        </div>
    </div>

    </section>
    <!-- table section-->
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
  import Header from '../components/Header.vue';
  import store from '../store';

  
  export default {
    name: "WishList",
    data() {
        return {}
    },
    methods: {
      async addProductToCart(productId) {
        await this.$store.dispatch('addSingleProductToCart', productId)
      },
      async removeWishListItem(itemId) {
        if(await this.$store.dispatch('removeWishListItem', itemId)) {
            this.$toast.open({
                message: 'Removed successfully',
                type: 'success'
            });   
            
            location.reload();
        }
      }
    },
    computed: {
        fetchWishList() {
            return this.$store.getters.wishList;
        },
    },
    created() {
        this.$store.dispatch("fetchUserWishLists");
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
  