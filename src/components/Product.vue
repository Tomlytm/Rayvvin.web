<template>
    <div class="col mb-10 mont ">
        <div class="card card-product shadow-sm" style="background: transparent;">
                      <div class="card-body">
                        <!-- badge -->
                        <div class="text-center position-relative">
                          <div class="position-absolute top-0 start-0">
                            <span class="badge bg-danger">Sale</span>
                          </div>
                          <img
                            style="height: 220px"
                            :src="imgPath"
                            alt="Grocery Ecommerce Template"
                            class="mb-3 img-fluid "
                          />
                          <div class="card-product-action">
                            <button
                              class="btn btn-action"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i
                                class="bi bi-eye"
                                data-bs-toggle="tooltip"
                                data-bs-html="true"
                                title="Quick View"
                              ></i>
                            </button>
                            <a
                              href="shop-wishlist.html"
                              class="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Wishlist"
                              ><i class="bi bi-heart"></i
                            ></a>
                            <a
                              href="#!"
                              class="btn-action"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Compare"
                              ><i class="bi bi-arrow-left-right"></i
                            ></a>
                          </div>
                        </div>
                        <!-- heading -->
                        <div class="text-small mb-1">
                          <a href="#!" class="text-decoration-none text-muted"
                            ><small>food</small></a
                          >
                        </div>
                        <h2 class="fs-6">
                          <a
                            href="shop-single.html"
                            class="text-inherit text-decoration-none"
                            >Product Name</a
                          >
                        </h2>
                        <div>
                          <!-- rating --><small class="text-warning">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i
                          ></small>
                          <span class="text-muted small">4.5(149)</span>
                        </div>
                        <!-- price -->
                        <div
                          class="d-flex justify-content-between align-items-center mt-3"
                        >
                          <div>
                            <span class="text-dark">£55</span>
                            <span
                              class="text-decoration-line-through text-muted"
                              >£{{ 55 + 1500 }}</span
                            >
                          </div>
                          <!-- btn -->
                          <div>
                            <a
                              href="#!"
                              class="btn btn btn-sm"
                              style="background-color: #f3fde8; color: #65b741"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              Add</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
    </div>
    
   
 <!-- Category Section End-->
</template>

<script setup>
 import {ref} from 'vue'
 const visible = ref(false);
</script>

<script>
export default {
   name: "Categories",

   data() {
       return {
       }

   },
   props: {
    // Define a prop named 'imgPath' to receive the image path
    imgPath: {
      type: String,
      required: true // You can set this to false if the prop is not mandatory
    }},
    
   computed: {
     fetchCategories() {
           return this.$store.getters.categories;
       },
   },
   created() {
       this.$store.dispatch("fetchCategories");
   }
}
</script>
