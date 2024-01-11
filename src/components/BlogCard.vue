<template>
    
    <div class="col-sm-4  mont pointer"  style=" margin-bottom: 50px;">
        <div class="card border-0 " style="background: transparent;">
            <div class="card-image mb-3">
                <img class="w-100 shadow-sm" style="height: 250px;" :src="imgPath" alt="blog">
            </div>
            <div class="mb-3 border p-3" style="background: transparent; height: 400px;">
                <div class="">
                    <div class="mb-5"><span class="bg-light p-2">Category</span>&nbsp;&nbsp;<span
                      >5 min read</span
                    ></div>
                    
                </div>
                <div class="mb-5 h6">{{ title }}</div>
                  <div class="mb-5 fs-6 text-container w-100" >
                   {{ body }}
                  </div>
                  <div @click="navigateToBlog"
                    class="d-flex align-items-center gap-3 btn fw-normal p-0"
                  >
                    Read more<svg
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.96028 6.29322C7.17996 6.5129 7.17996 6.869 6.96028 7.08867L1.22541 12.8235C1.00573 13.0432 0.649631 13.0432 0.429956 12.8235L0.164756 12.5584C-0.0549187 12.3387 -0.0549187 11.9825 0.164756 11.7629L5.23671 6.69095L0.164756 1.619C-0.0549186 1.39932 -0.0549186 1.04322 0.164756 0.823545L0.429956 0.558346C0.649631 0.338671 1.00573 0.338671 1.22541 0.558346L6.96028 6.29322Z"
                        fill="#011E2C"
                      />
                    </svg>
                  </div>
            </div>
        
    </div>
    </div>
    
   
 <!-- Category Section End-->
</template>

<script setup>
 import {ref} from 'vue'
//  import { useRouter } from 'vue-router'

// const router = useRouter()

 import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToBlog = () => {
  router.push('/blogpost')
}

// Ensure navigateToBlog is returned to make it accessible in the template

</script>

<script>

export default {
    
   name: "BlogCard",

   data() {
       return {
       }

   },
 
   props: {
    // Define a prop named 'imgPath' to receive the image path
    imgPath: {
      type: String,
      required: true // You can set this to false if the prop is not mandatory
    },
    title: {
      type: String,
      required: true // You can set this to false if the prop is not mandatory
    },
    body: {
      type: String,
      required: true // You can set this to false if the prop is not mandatory
    },
  
  },
   
}
</script>
<style scoped>
.text-container {
  height: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Number of lines to show */
  -webkit-box-orient: vertical;
}
</style>