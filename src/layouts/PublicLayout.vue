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
  <div style="cursor: pointer;" class="d-flex justify-content-between px-2 border-bottom pb-3 mb-2" v-for="(convo, index) in fetchConversations" :key="index">
    <div class="d-flex gap-3 align-items-center">
      <div><img src="/assets/images/avatar-12.jpg" width="40px" height="40px" alt="user" class="rounded-circle"></div>
    <div class="" @click="togglePopuppp(convo.id, convo.store_name)">
      <div class="fw-semibold">{{ convo.store_name }}</div>
      <em class="" style="font-size:11px;">{{ convo.product_name }} </em>
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
  <div style="background: transparent !important; " id="messagingPopup1" :class="{ show: isPopupOpen1 }" >
    <div class="position-relative">
      <span @click="togglePopuppp" class="close-btn">&times;</span>
    <div class="popup-content mont">

      <div
        class="px-4 py-3  fw-bold bg-white shadow rounded-4 mb-3"
      >
        <div>
          {{ storeName }}
        </div>
      </div>

      <div class="bg-white shadow rounded-4 py-2">
      
      <div class="px-3 w-100" style="overflow-y: scroll; height: 300px">
        <div class="text-center " style="font-size: 9px;">August 15 </div>
        <hr />
        <div class="mb-3" v-for="msg in fetchConversation.messages" :key="msg.timestamp">
    <div :class="messageClasses(msg)">
      <div class="p-3 rounded-3 W-100" :class="messageClasses1(msg)" style="font-size: 12px; max-width: 50%; ">
    {{ msg.message }}
</div>
    </div>
    <div style="font-size: 9px;" :class="messageClasses(msg)">
        {{ formatDate(msg.updated_at) }}
    </div>
</div>


      </div>
      <div class="mb-2 d-flex w-100 gap-2 " style=" font-size: 12px; width: 90%;">
                    <input type="text" class="form-control w-100" v-model="msgText" placeholder="Write message" required>
                    <div class=" p-3 rounded-3 pointer" style="background-color: #65b741; cursor: pointer;" @click="sendMessage(msgText, conversationId)">
                       <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.97422 14.9326C1.64089 15.066 1.32422 15.0366 1.02422 14.8446C0.724219 14.6526 0.574219 14.3736 0.574219 14.0076V10.2826C0.574219 10.0493 0.640885 9.84095 0.774219 9.65762C0.907552 9.47429 1.09089 9.35762 1.32422 9.30762L8.57422 7.50762L1.32422 5.70762C1.09089 5.65762 0.907552 5.54095 0.774219 5.35762C0.640885 5.17429 0.574219 4.96595 0.574219 4.73262V1.00762C0.574219 0.640953 0.724219 0.36162 1.02422 0.16962C1.32422 -0.0223801 1.64089 -0.0513805 1.97422 0.0826195L17.3742 6.58262C17.7909 6.76595 17.9992 7.07429 17.9992 7.50762C17.9992 7.94095 17.7909 8.24929 17.3742 8.43262L1.97422 14.9326Z" fill="white"/>
</svg>
                    </div>
                   

                  </div>
      <!-- Your messaging content goes here -->
    </div>
      </div>
    
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
      isPopupOpen1: false,
      animateIcon: false,
      currentPage: '',
      conversationId: null,
      msgText: "",
      storeName: "",
      sendMessageDisabled: false,
    };
  },
  methods:{
    togglePopup() {
    $('#quickViewModal').modal('hide');
    if(!this.isPopupOpen){
      
    this.$store.dispatch("getAllConversations");
    }
      this.isPopupOpen = !this.isPopupOpen;
    },
    async togglePopuppp(id, name) {
        // $("#quickViewModal").modal("hide");
        this.isPopupOpen1 = !this.isPopupOpen1;
        this.conversationId =id;
      this.storeName = name;
      this.$store.dispatch('getConversation', id);
      // console.log(this.conversationId)
    },
    async sendMessage(msg, conversation_id) {
      const messageData ={
        message: msg, 
        conversation_id
      }
      try {
        // Call the sendMessage action from the store
        const result = await this.$store.dispatch('sendMessage', messageData);
        if (result) { 
          this.msgText = "" 
          this.$store.dispatch('getConversation', conversation_id);
          return this.$toast.open({
            message: "Message sent!",
            type: "success"
          })
         
        } else {
          console.error('Failed to send message');
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    },
    messageClasses(msg) {
      const id = this.$store.getters.loggedInUser.id;
      return {
        'd-flex justify-content-start ': msg.user_id !== id ,
        'd-flex justify-content-end': msg.user_id === id,
      };
    },
    messageClasses1(msg) {
      const id = this.$store.getters.loggedInUser.id;
      return {
        'bg-light ': msg.user_id !== id,
        'bg-greenn': msg.user_id === id,
      };
    },
    formatDate(timestamp) {
      const inputDate = new Date(timestamp);

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - inputDate;

  // Calculate the number of days
  const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

  // Format the time to 10:00 PM
  const formattedTime = inputDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  if (daysAgo === 0) {
    // If within the same day, return the formatted time
    return formattedTime;
  } else if (daysAgo === 1) {
    // If it was yesterday, return 'Yesterday at [formatted time]'
    return `Yesterday at ${formattedTime}`;
  } else {
    // If it was more than one day ago, return '[daysAgo] days ago'
    return `${daysAgo} days ago`;
  }
    },
  },
  
  // watch: {
  //   conversationId: function(newConversationId, oldConversationId) {
  //     // Check if the conversationId has changed
  //     if (newConversationId !== oldConversationId) {
  //       // Dispatch the action with the new conversationId
  //       this.$store.dispatch('getConversation', newConversationId);
  //     }
  //   }
  //   },
  computed: {
    authenticated () {
        return this.$store.getters.isAuthenticated;
      }  ,
      fetchConversations() {
      return this.$store.getters.conversations;
    },
      fetchConversation() {
        if(this.conversationId !== null){
          
      return this.$store.getters.conversation;
        }else {
          return []
        }
    },
    selectedProduct() {
      return this.$store.state.selectedProduct; // Assuming the state in your store is named 'selectedProduct'
    },
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
