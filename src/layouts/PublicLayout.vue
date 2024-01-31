<template>
  <div>
    <NavBar />
    <div class="h-100">
      
    <router-view />
    </div>
    <FooterComp />

  </div>
  <div id="messagingPopup" :class="{ 'show': isPopupOpen }">
    <span @click="togglePopup" class="close-btn">&times;</span>
    <div class="popup-content mont ">
      <div class="px-4 pt-3 fw-semibold">
        Messaging

        
      </div>
      <hr />
       <div style="height: 35px;" class="mx-3 d-flex align-items-center mb-1 gap-3 px-3 shadow-sm w-75  bg-light rounded-1">
          <i class="bi bi-search search-icon"></i>
        <input placeholder="search messages" type="text" class=" border-0 bg-light">
        
        </div>
      <div class="px-3"  style="overflow-y: scroll; height: 250px;">
       
<hr />
<div>
  <div style="cursor: pointer;" class="d-flex justify-content-between px-2 border-bottom pb-3 mb-2" v-for="(category, index) in 4" :key="index">
    <div class="d-flex gap-3 align-items-center">
      <div><img src="/assets/images/avatar-12.jpg" width="40px" height="40px" alt="user" class="rounded-circle"></div>
    <div class="">
      <div class="fw-semibold">Tootbrush</div>
      <em class="" style="font-size:11px;">Hello, how much would you like to sell? </em>
    </div>
    </div>
    <div class="fw-light " style="font-size:10px;">
      Dec 2, 2023
    </div>
    
  </div>
</div>
      </div>
      <!-- Your messaging content goes here -->
      
    </div>
  </div>
  <div v-show="!isPopupOpen && authenticated" @click="togglePopup" class="fixed-icon " :class="{ 'bounce-animation': animateIcon }">
    <!-- Add an icon for messaging -->
    <div class="position-relative">
      <img id="messageIcon" src="/assets/images/msg.png" alt="Message Icon" width="40" height="40">
    <span class="position-absolute  mont top-0 start-100 translate-middle badge rounded-pill bg-success">
                  0
                </span>
    </div>
   
  </div>
</template>

<script>
// Import the NavBar component
import store from '../store'
import NavBar from '../components/Header.vue';
import FooterComp from "../components/Footer.vue";

export default {
  components: {
    NavBar, // Register the NavBar component
    FooterComp,
  },
  data(){
    return {
      isPopupOpen: false,
      animateIcon: false,
      currentPage: '',
    };
  },
  methods:{
    togglePopup() {
    $('#quickViewModal').modal('hide');
      this.isPopupOpen = !this.isPopupOpen;
    }
  },
  computed: {
    authenticated () {
        return this.$store.getters.isAuthenticated;
      }  
  },
  created() {
    this.currentPage = this.$route.name; 
    setInterval(() => {
      this.animateIcon = true;
      setTimeout(() => {
        this.animateIcon = false;
      }, 1000); // Duration of the animation in milliseconds
    }, 5000); // Interval in milliseconds (15 seconds)
  },
  // Any other logic or data for this component goes here
};
</script>

<style>
#messagingPopup {
      position: fixed;
      bottom: 0px;
      right: 10px;
      width: 400px;
      height: 400px;
      background-color: #fff;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      display: none;
    }

    #messagingPopup.show {
      display: block;
    }

    /* Styles for the close button */
    .close-btn {
      position: absolute;
      top: 5px;
      right: 10px;
      cursor: pointer;
      font-size: 20px;
      color: #999;
    }
    .fixed-icon {
      position: fixed;
      bottom: 20px;
      right: 20px;
      cursor: pointer;
      z-index: 1001;
    }
    #messageIcon {
      filter: hue-rotate(220deg)
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.bounce-animation {
  animation: bounce 1s infinite;
}
</style>
