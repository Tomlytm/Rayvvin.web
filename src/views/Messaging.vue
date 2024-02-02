<template>
  <DashboardHeader />

  <div class="main-wrapper mont">
    <!-- navbar vertical -->

    <DashboardSideNav />

    <!-- main wrapper -->
    <main class="main-content-wrapper">
      <div class="container">
        <div class="row mb-8">
          <div class="col-md-12">
            <!-- page header -->
            <div class="d-md-flex justify-content-between align-items-center">
              <div>
                <h2>Messaging</h2>
                <!-- breacrumb -->
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                      <a href="#" class="text-inherit">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Messaging
                    </li>
                  </ol>
                </nav>
              </div>
              <!-- button -->
              <!-- <div>
                <router-link :to="{name: 'AddProductView'}" class="btn btn-primary">Add Product</router-link>
              </div> -->
            </div>
          </div>
        </div>
        <!-- row -->
        <div class="row">
          <div class="col-xl-12 col-12 mb-5">
            <!-- card -->
            <div class="card h-100 card-lg shadow">
              <!-- card body -->
              <div class="card-body p-4 row">
                <div
                  class=""
                  :class="{ ' col-12': !isChatOpen, ' col-4': isChatOpen }"
                >
                  <!-- <span  class="close-btn">&times;</span> -->
                  <div class="popup-content mont">
                    <div class="px-4 pt-3 fw-semibold">Messaging</div>
                    <hr />
                    <div
                      style="height: 35px"
                      class="mx-3 d-flex align-items-center mb-1 gap-3 px-3 shadow-sm w-75 bg-light rounded-1"
                    >
                      <i class="bi bi-search search-icon"></i>
                      <input
                        placeholder="search messages"
                        type="text"
                        class="border-0 bg-light"
                      />
                    </div>
                    <div class="px-3" style="overflow-y: scroll; height: 350px">
                      <hr />
                      <div>
                        <div
                          style="cursor: pointer"
                          class="d-flex justify-content-between px-2 border-bottom pb-3 mb-2"
                          v-for="(convo, index) in fetchConversations"
                          :key="index"
                        >
                          <div class="d-flex gap-3 align-items-center">
                            <div>
                              <img
                                src="/assets/images/avatar-12.jpg"
                                width="40px"
                                height="40px"
                                alt="user"
                                class="rounded-circle"
                              />
                            </div>
                            <div
                              class=""
                              @click="showChat(convo.id, convo.store_name)"
                            >
                              <div class="fw-semibold">
                                {{ convo.store_name }}
                              </div>
                              <em class="" style="font-size: 11px"
                                >{{ convo.product_name }}
                              </em>
                            </div>
                          </div>
                          <div class="fw-light" style="font-size: 10px">
                            Dec 2, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Your messaging content goes here -->
                  </div>
                </div>
                <div
                  class="col-8"
                  style="background: transparent !important"
                  id=""
                  :class="{ ' d-none': !isChatOpen, ' d-solid': isChatOpen }"
                >
                  <div class="position-relative">
                    <span @click="closeChat" class="close-btn">&times;</span>
                    <div class="popup-content mont">
                      <div
                        class="px-4 py-3 fw-bold bg-white shadow rounded-4 mb-3"
                      >
                        <div>
                          {{ storeName }}
                        </div>
                      </div>

                      <div class="bg-white shadow rounded-4 py-2">
                        <div
                          ref="chatContainer"
                          class="px-3 w-100"
                          style="overflow-y: scroll; height: 350px"
                        >
                          <div class="text-center" style="font-size: 9px">
                            August 15
                          </div>
                          <hr />
                          <div
                            class="mb-3"
                            v-for="msg in fetchConversation.messages"
                            :key="msg.timestamp"
                          >
                            <div :class="messageClasses(msg)">
                              <div
                                class="p-3 rounded-3 W-100"
                                :class="messageClasses1(msg)"
                                style="font-size: 12px; max-width: 50%"
                              >
                                {{ msg.message }}
                              </div>
                            </div>
                            <div
                              style="font-size: 9px"
                              :class="messageClasses(msg)"
                            >
                              {{ formatDate(msg.updated_at) }}
                            </div>
                          </div>
                        </div>
                        <div
                          class="mb-2 d-flex w-100 gap-2"
                          style="font-size: 12px; width: 90%"
                        >
                          <input
                            type="text"
                            class="form-control w-100"
                            v-model="msgText"
                            placeholder="Write message"
                            required
                          />
                          <div
                            class="p-3 rounded-3 pointer"
                            style="background-color: #65b741; cursor: pointer"
                            @click="sendMessage(msgText, conversationId)"
                          >
                            <svg
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.97422 14.9326C1.64089 15.066 1.32422 15.0366 1.02422 14.8446C0.724219 14.6526 0.574219 14.3736 0.574219 14.0076V10.2826C0.574219 10.0493 0.640885 9.84095 0.774219 9.65762C0.907552 9.47429 1.09089 9.35762 1.32422 9.30762L8.57422 7.50762L1.32422 5.70762C1.09089 5.65762 0.907552 5.54095 0.774219 5.35762C0.640885 5.17429 0.574219 4.96595 0.574219 4.73262V1.00762C0.574219 0.640953 0.724219 0.36162 1.02422 0.16962C1.32422 -0.0223801 1.64089 -0.0513805 1.97422 0.0826195L17.3742 6.58262C17.7909 6.76595 17.9992 7.07429 17.9992 7.50762C17.9992 7.94095 17.7909 8.24929 17.3742 8.43262L1.97422 14.9326Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        </div>
                        <!-- Your messaging content goes here -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="border-top d-md-flex justify-content-between align-items-center px-6 py-6"
              >
                <!-- <Bootstrap5Pagination
                    :data="fetchStoreProducts"
                    @pagination-change-page="getResults"
                /> -->
                <!-- <span>Showing 1 to 8 of 12 entries</span>
                <nav class="mt-2 mt-md-0">
                  <ul class="pagination mb-0 ">
                    <li class="page-item disabled"><a class="page-link " href="#!">Previous</a></li>
                    <li class="page-item"><a class="page-link active" href="#!">1</a></li>
                    <li class="page-item"><a class="page-link" href="#!">2</a></li>
                    <li class="page-item"><a class="page-link" href="#!">3</a></li>
                    <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                  </ul>
                </nav> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>


<script>
import DashboardHeader from "../components/DashboardHeader.vue";
import DashboardSideNav from "../components/DashboardSideNav.vue";
import { Bootstrap5Pagination } from "laravel-vue-pagination";

import moment from "moment";

export default {
  name: "DashboardProducts",
  data() {
    return {
      productStatusFilter: "",
      productSearchTerm: "",
      conversationId: null,
      msgText: "",
      storeName: "",
      isChatOpen: false,
      sendMessageDisabled: false,
    };
  },
  methods: {
    dateTime(value) {
      return moment(value).format("LL HH:mm a");
    },

    async getResults(page) {
      if (typeof page === "undefined") {
        page = 1;
      }

      await this.$store.dispatch("fetchStoreProducts", page);
    },
    scrollToBottom() {
      // Get the reference to the scroll container
      const container = this.$refs.chatContainer;

      container.scrollTop = container.scrollHeight;
    },
    async showChat(id, name) {
      // $("#quickViewModal").modal("hide");
      this.$store.dispatch("getConversation", id);
      this.conversationId = id;
      this.storeName = name;
      const container = this.$refs.chatContainer;

      container.scrollTop = container.scrollHeight;
      this.$nextTick(() => {
        const chatContainer = this.$refs.chatContainer;
        chatContainer.scrollTop = chatContainer.scrollHeight;
      });
      if (!this.isChatOpen) {
        this.isChatOpen = !this.isChatOpen;
      }

      // console.log(this.conversationId)
    },
    async closeChat() {
      // $("#quickViewModal").modal("hide");
      this.isChatOpen = !this.isChatOpen;

      // console.log(this.conversationId)
    },
    async sendMessage(msg, conversation_id) {
      const messageData = {
        message: msg,
        conversation_id,
      };
      try {
        // Call the sendMessage action from the store
        const result = await this.$store.dispatch("sendMessage", messageData);
        if (result) {
          this.msgText = "";
          this.$store.dispatch("getConversation", conversation_id);
          this.$nextTick(() => {
            const chatContainer = this.$refs.chatContainer;
            chatContainer.scrollTop = chatContainer.scrollHeight;
          });
          return this.$toast.open({
            message: "Message sent!",
            type: "success",
          });
        } else {
          console.error("Failed to send message");
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
    messageClasses(msg) {
      const id = this.$store.getters.loggedInUser.id;
      return {
        "d-flex justify-content-start ": msg.user_id !== id,
        "d-flex justify-content-end": msg.user_id === id,
      };
    },
    messageClasses1(msg) {
      const id = this.$store.getters.loggedInUser.id;
      return {
        "bg-light ": msg.user_id !== id,
        "bg-greenn": msg.user_id === id,
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
      const formattedTime = inputDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

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
  computed: {
    fetchStoreProducts() {
      var products = this.$store.getters.storeProducts;

      if (this.productSearchTerm !== "") {
        products = products.filter((product) => {
          var matches =
            product.name
              .toLowerCase()
              .indexOf(this.productSearchTerm.toLowerCase()) >= 0
              ? true
              : false;
          return matches;
        });

        return products;
      }

      if (
        this.productStatusFilter !== "" &&
        this.productStatusFilter === "available"
      ) {
        if (this.productStatusFilter === "all") return products;

        products = products.filter((product) => {
          return product.available;
        });

        return products;
      }

      if (
        this.productStatusFilter !== "" &&
        this.productStatusFilter === "not-available"
      ) {
        if (this.productStatusFilter === "all") return products;

        products = products.filter((product) => {
          return product.available === 0;
        });

        return products;
      }

      return products;
    },
    fetchConversations() {
      return this.$store.getters.conversations;
    },
    fetchConversation() {
      if (this.conversationId !== null) {
        return this.$store.getters.conversation;
      } else {
        return [];
      }
    },
  },
  created() {
    this.productStatusFilter = "all";

    this.$store.dispatch("getStoreProducts");
    this.$store.dispatch("getAllConversations");
  },
  mounted() {
    this.scrollToBottom();
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "/assets/js/vendors/slick-slider.js");
    document.head.appendChild(recaptchaScript);

    let script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js"
    );
    document.head.appendChild(script);

    let script2 = document.createElement("script");
    script.setAttribute("src", "/assets/js/vendors/countdown.js");
    document.head.appendChild(script2);
  },
};
</script>