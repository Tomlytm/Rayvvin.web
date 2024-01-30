<template>
    <DashboardHeader />

    <div class="main-wrapper mont">
            <!-- navbar vertical -->
            
          <DashboardSideNav />

      <!-- main -->
        <main class="main-content-wrapper">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row mb-8">
          <div class="col-md-12">
            <div class="d-md-flex justify-content-between align-items-center">
              <!-- page header -->
              <div>
                <h2>Add New Product</h2>
                  <!-- breacrumb -->
                  <nav aria-label="breadcrumb">
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a href="#" class="text-inherit">Dashboard</a></li>
                    <li class="breadcrumb-item"><a href="#" class="text-inherit">Products</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Add New Product</li>
                  </ol>
                </nav>
              </div>
              <!-- button -->
              <div>
                <router-link :to="{name: 'DashboardProducts'}" class="btn btn-light">Back to Product</router-link>
              </div>
            </div>

          </div>
        </div>
        <!-- row -->

            <!-- card -->
            <div class="card mb-6 card-lg">
              <!-- card body -->
              <div class="card-body p-6 ">
                <h4 class="mb-4 h5">Product Information</h4>
                <div class="row">
                  <!-- input -->
                  <div class="mb-3 col-lg-6">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" v-model="product.name" placeholder="Product Name" required>
                  </div>
                  <!-- input -->
                  <div class="mb-3 col-lg-6">
                    <label class="form-label">Product Category</label>
                    <select name="category" v-model="product.category_id" class="form-select" id="category">
                        <option v-for="(i) in getCategories" :value="i.id" selected :key="i">{{ i.name }}</option>
                    </select>
                  </div>
                  <div class="mb-3 col-lg-6">
                    <label class="form-label">Product Price</label>
                    <input type="number" v-model="product.price" class="form-control" required>
                  </div>
                  <div class="mb-3 col-lg-6">
                    <label class="form-label">Maximum Price</label>
                    <input type="number" v-model="product.max_price" class="form-control" required>
                  </div>
                  <!-- input -->
                  <div class="mb-3 col-lg-6">
                    <label class="form-label">Weight in Grams</label>
                    <input type="number" v-model="product.weight" class="form-control" placeholder="Weight" required>
                  </div>
                  <!-- input -->
                  <div class="mb-3 col-lg-6">
                    <label class="form-label">Quantity</label>
                    <input type="number" v-model="product.quantity" class="form-control" placeholder="Quantity" required>
                  </div>
                  <div>
                    <div class="mb-3 col-lg-12 mt-5">
                      <h4 class="mb-3 h5">Product Image</h4>
                        <label for="file-upload" class="custom-file-upload h5">                      <i class="bi bi-image-fill h4 mx-1"></i>
Click to select your product's picture {{fileName ? `:${fileName}` : ''}}</label>
                        <input id="file-upload" type="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
                    </div>
                  </div>
                  <div class="mb-3 col-lg-12 mt-5">
                    <h4 class="mb-3 h5">Product Description</h4>
                    <textarea v-model="product.description" rows="5" cols="5" class="form-control" required></textarea>
                  </div>
                </div>
                <button class="btn btn-primary" @click="addProduct" :disabled="addProductButtonDisabled">Add Product</button>

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
import store from '../store';


export default {
    name: "DashboardProducts",
    data() {
        return {
            product: {
                category_id: null,
                name: null,
                quantity: null,
                weight: null,
                image_url: null,
                price: null,
                max_price: null,
                description: null
            },
            imageFile: null,
            fileName: null,
            addProductButtonDisabled: false
        }
    },
    methods: {
        handleFileUpload(e) {
            const file = this.$refs.file.files[0];
            this.fileName = file.name;
            this.imageFile = this.$refs.file.files[0];
            // this.imageUrl = URL.createObjectURL(file)
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
      getCategories() {
        return store.getters.categories;
      },
        async addProduct() {
            this.addProductButtonDisabled = true;

            const formData = new FormData();
            formData.append("name", this.product.name);
            formData.append("weight", this.product.weight);
            formData.append("image_url", this.imageFile);
            formData.append("description", this.product.description);
            formData.append("quantity", this.product.quantity);
            formData.append("price", this.product.price);
            formData.append("max_price", this.product.max_price);
            formData.append("category_id", this.product.category_id);

            const result = await this.$store.dispatch('addProduct', formData);
            console.log("result", result);
            if (result) {
                this.$toast.open({
                    message: 'Product added successfully',
                    type: 'success'
                })
            }

            this.addProductButtonDisabled = false;
        },
        fetchStoreProducts() {
            var products = this.$store.getters.storeProducts;

            if (this.productSearchTerm !== '') {
                products = products.filter(product => {
                    return product.name.toLowerCase() === this.productSearchTerm.toLowerCase();
                })

                return products;
            }

            if (this.productStatusFilter !== '' && this.productStatusFilter === 'available') {

                products = products.filter(product => {
                    return product.available
                });

                return products;
            }

            if (this.productStatusFilter !== '' && this.productStatusFilter === 'not-available') {
                products = products.filter(product => {
                    return product.available === 0
                });

                return products;
            }

           

            return products;
        },
    },
    created() {
        this.$store.dispatch("getStoreProducts");
    },
    mounted() {
        let script0 = document.createElement('script')
        script0.setAttribute('src', '/assets/libs/quill/dist/quill.min.js')
        document.head.appendChild(script0)

        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', '/assets/libs/quill/dist/quill.min.js')
        document.head.appendChild(recaptchaScript)

        let script = document.createElement('script')
        script.setAttribute('src', '/assets/js/vendors/editor.js')
        document.head.appendChild(script)

        // let script2 = document.createElement('script')
        // script2.setAttribute('src', '/assets/libs/dropzone/dist/min/dropzone.min.js')
        // document.head.appendChild(script2)   
        
        let script3 = document.createElement('script')
        script3.setAttribute('src', '/assets/libs/simplebar/dist/simplebar.min.js')
        document.head.appendChild(script3) 
    },
}
</script>

<style scoped>
input[type="file"] {
    display: none;
}
.custom-file-upload {
    display: inline-block;
    padding: 6px 2px;
    cursor: pointer;
}
</style>