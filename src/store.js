import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from './router';

// axios.defaults.baseURL = import.meta.env.VITE_APP_SERVER_BASE_URL;
axios.defaults.baseURL = 'http://ec2-13-60-29-67.eu-north-1.compute.amazonaws.com';

const store = createStore({
    plugins: [createPersistedState({
        'key': 'dev2'
    })],
    state: {
        loggedInUser: {},
        token: '',
        categories: [],
        categoriesproduct: [],
        topTenPopularProducts: [],
        topThreeDailyBestSellers: [],
        cart: [],
        wishList: [],
        products: [],
        recentproducts: [],
        merchantStripeOnboarding: {
            stripeOnboardingLink: '',
            completedProcess: false
        },
        store: [],
        conversations: [],
        conversation: [],
        merchantStore: {},
        customerOrders: [],
        storeProducts: [],
        blogs: null,
        storeOrders: [],
        dashboardData: {},
        singleStoreOrder: {},
        selectedProduct: {
            id: null,
            storeId: null,
            merchantId: null,
            storeName: null,
            name: '',
            price: null,
            imageUrl: '',
            description: ''
          },
    },
    getters: {
        singleStoreOrder: state => {
            return state.singleStoreOrder;
        },
        storeOrders: state => {
            return state.storeOrders;
        },
        dashboardData: state => {
            return state.dashboardData;
        },
        storeProducts: state => {
            return state.storeProducts;
        },
        customerOrders: state => {
            return state.customerOrders;
        },
        stores: state => {
            return state.stores;
        },
        products: state => {
            return state.products;
        },
        conversations: state => {
            return state.conversations;
        },
        conversation: state => {
            return state.conversation;
        },
        recentproducts: state => {
            return state.recentproducts;
        },
        wishList: state => {
            return state.wishList;
        },
        loggedInUser: state => {
            return state.loggedInUser;
        },
        token: state => {
            return state.token;
        },
        isAuthenticated: state => {
            if (state.token === '' || state.token === null) {
                return false
            }

            return true;
        }, 
        categories: state => {
            return state.categories;
        },
        cart: state => {
            return state.cart;
        },
        blogs: state => {
            return state.blogs;
        },
        topThreeDailyBestSellers: state => {
            return state.topThreeDailyBestSellers;
        },
        topTenPopularProducts: state => {
            return state.topTenPopularProducts;
        },
        merchantStore: state => {
            return state.merchantStore;
        },
        merchantStripeOnboarding: state => {
            return state.merchantStripeOnboarding;
        }
    },
    actions: {  
        async verifyOtpCode({ commit }, data) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/verify-email-vetification-token', data);
                return result.data.success;
            } catch (error) {
                console.log("verifyOtpCode", error);
                return false;
            }

        },
        async sendOtpCode({ commit }, email) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/send-email-vetification-token', {email: email});
                return result.data.success;
            } catch (error) {
                console.log("sendOtpCode", error);
                return false;
            }
            
        },
        async checkMerchantHasCompletedStripeOnboarding({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/merchant-completed-onboarding');
                commit('setMerchantHasCompletedOnboardingStatus', result.data.data);
                
                return result.data.data.hasSubmittedAccountDetails;
            } catch (error) {
                console.log("setMerchantHasCompletedOnboardingStatus", error);
                return false;
            }
        },
        async fetchCustomerOrders({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/logged-in-customer-order-history')
                commit('setCustomerOrders', result.data.data);
            } catch (error) {
                console.log("fetchCustomerOrders", error);
            }
        },
        async fetchStores({ commit }, pageNumber) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/stores-paginated?page=' + pageNumber);
                commit('setStores', result.data.data);
            } catch (error) {
                console.log("fetchStores", error);
            }
        },
        async fetchProducts({ commit }, data) {
            try {
                var url = '/api/v1/products-paginated?page=' + data.pageNumber;
                console.log('data prod', data);

                if ('storeId' in data) {
                    url = url.concat("&storeId=" + data.storeId);
                }

                if ('categoryId' in data) {
                    url = url.concat("&categoryId=" + data.categoryId);
                }

                if ('searchTerm' in data) {
                    url = url.concat("&searchTerm=" + data.searchTerm);
                }

                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get(url);
                commit('setProducts', result.data.data);
            } catch (error) {
                console.log("fetchProducts", error);
            }
        },
        async fetchRecentProducts({ commit }, data) {
            try {
                var url = '/api/v1/products-paginated?page=3';
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get(url);
                commit('setRecentProducts', result.data.data);
            } catch (error) {
                console.log("fetchRecentProducts", error);
            }
        },
        async addProductToWishList({ commit }, productId) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/add-product-to-wishlist', {productId: productId});
                if (result.data.success) {
                    commit('setUserWishList', result.data.data);
                    return true;
                }

                return false;
                 
            } catch (error) {
                console.log("addProductToWishList", error);
            }   
        },
        async fetchUserWishLists({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/get-auth-user-wishlist');
                commit('setUserWishList', result.data.data);
                 
            } catch (error) {
                console.log("fetchUserWishLists", error);
            }
        },
        async fetchTopThreeDailyBestSellers({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/get-three-best-selling-previous-day-products');
                commit('setTopThreeDailyBestSellers', result.data.data);
                 
            } catch (error) {
                console.log("topThreeDailyBestSellers", error);
            }
        },
        async fetchTopTenPopularProducts({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/popular-products');
                commit('setTopTenPopularProducts', result.data.data);
                 
            } catch (error) {
                console.log("fetchTopTenPopularProducts", error);
            }
        },
        async fetchCategories({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/get-categories');
                commit('setCategories', result.data.data);
                 
            } catch (error) {
                console.log("fetchCategories", error);
            }
        },
        async fetchCategoriesProduct({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/get-category-with-products');
                commit('setCategoriesProduct', result.data.data);
                 
            } catch (error) {
                console.log("fetchCategories", error);
            }
        },
        async fetchCart({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/fetch-loggedin-user-cart');
                commit('setCart', result.data.data);

            } catch (error) {
                console.log("fetchCart", error);
            }
        },
        async addSingleProductToCart({ commit}, productId) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/add-product-to-cart', {productId: productId});
                if (result.data.success) {
                    commit('addSingleProductToCart', productId);
                    return true;
                }

            } catch (error) {
                console.log("addSingleProductToCart", error);
                return false;
            }
        },
        
        async reduceOrRemoveCartProductItem({commit}, productId) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/remove-or-reduce-product-from-cart/' + productId);
                if (result.data.success) {
                    commit('setCart', result.data.data);
                    
                    return true;
                }
            } catch (error) {
                console.log("reduceOrRemoveCartProductItem", error);
                return false;
            }
        },
        async removeWishListItem({ commit }, itemId) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/remove-wishlist-item/' + itemId);
                console.log(result.data);
                if (result.data.success) {
                    commit('setUserWishList', result.data.data);
                    return true;
                }
            } catch (error) {
                console.log("reduceOrRemoveCartProductItem", error);
                return false;
            }
        },
        async loginUser({ commit }, data) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/login', data);
                if (result.data.success) {
                   
                    commit('loginUser', result.data.data);
                    commit('setMerchantStore', result.data.data.store);

                    if (result.data.data.user.role === 'merchant') {
                        router.push({ path: '/dashboard' })
                    }
                    if (result.data.data.user.role === 'admin') {
                        router.push({ path: '/admin-dashboard' })
                    }


                    return true;
                }
            } catch (error) {
                console.log("loginUser", error);
                return false;
            }

        },
        async getMerchantStore({ commit }) {
            var loggedInUser = this.state.loggedInUser;

            commit('setMerchantStore', loggedInUser.store);
        },
        async logoutUser({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/logout');
                if (result.data.success) {
                    commit('logoutUser', result.data.data);
                    return true;
                }
            } catch (error) {
                console.log("logoutUser", error);
                return false;
            }
        },
        async updateProfile({ commit }, data) {
            try {
                const result = await axios.post('/api/v1/update-profile', data);
                if (result.data.success) {
                    commit('setProfile', data);
                    return true;
                }

                return false;
                 
            } catch (error) {
                console.log("updateProfile", error);
            } 
        },
        async registerUser({ commit }, data) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/customer-registration', data);
                if (result.data.success) {
                    commit('setRegisteredUser', data);
                    return true;
                }
                return false;

            } catch (error) {
                console.log("registerUser", error);
            }
        },
        async subscribe({ commit }, data) {
            try {
                const result = await axios.post('/api/v1/subscribe', data);
                if (result.data.success) {
                    commit('subscribe');
                    return true;
                }

            } catch (error) {
                console.log("subscribe", error);
                return false;
            }
        },
        async registerMerchant({ commit }, data) {
            try {
                const result = await axios.post('/api/v1/merchant-registration', data);
                if (result.data.success) {
                    commit('setMerchantStore', result.data.data.store);
                    commit('setRegisteredUser', data.userData);
                    return result.data.data.stripeOnboardingLink;
                }
                return false;

            } catch (error) {
                console.log("registerMerchant", error);
            }
        },
        async getStoreProducts({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/store-products');
                commit('setStoreProducts', result.data.data);
            } catch (error) {
                console.log("getStoreProducts", error);
            }
        },
        async getStoreOrders({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/store-orders');
                commit('setStoreOrders', result.data.data);
            } catch (error) {
                console.log("getStoreOrders", error);
            }
        },
        async addProduct({ commit}, product) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/product', product);
                if (result.data.success) {
                    commit('setStoreProducts', result.data.data);
                    return true;
                }
            } catch (error) {
                console.log("addProduct", error);
                return false;
            }
        },
        async getDashboardData({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/dashboard-data');
                commit('setDashboardData', result.data.data);
            } catch (error) {
                console.log("getDashboardData", error);
            }
            
        },
        async fetchSingleStoreOrder({ commit }, orderNumber) {
            var orderIndex = this.state.storeOrders.findIndex(order => order.order_number === orderNumber);
            var order = this.state.storeOrders[orderIndex];

            commit('setSingleStoreOrder', order);
        },
        async updateOrderStatus({ commit }, data) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.put('/api/v1/order/' + data.orderId, {status: data.status});

                if (result.data.success) {
                    var orderIndex = this.state.storeOrders.findIndex(order => order.order_number === data.orderNumber);
                    this.state.storeOrders[orderIndex] = result.data.data;

                    commit('setSingleStoreOrder', result.data.data);
                    
                    return true;
                }

            } catch (error) {
                console.log("updateOrderStatus", error);
                return false;
            }
        },
        async updateStore({ commit }, store) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/update-store', {name: store.name});
                if (result.data.success) {
                    this.state.loggedInUser.store = store;
                    commit('setMerchantStore', store);

                    return true;

                }

            } catch(error) {
                console.log("updateStore", error);
                return false;

            }
        },
        async passwordResetCodeRequest({ commit }, email) {
            try {
                const result = await axios.post('/api/v1/reset-password-request', {email: email});
                if (result.data.success) {        
                    return true;
                }

            } catch(error) {
                console.log("passwordResetCodeRequest", error);
                return false;

            }  
        },
        async resetPassword({ commit }, data) {
            try {
                const result = await axios.post('/api/v1/update-password', data);
                if (result.data.success) {        
                    return true;
                }

            } catch(error) {
                console.log("resetPassword", error);
                return false;

            } 
            
        },
        async sendMessage({ commit }, data) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/chat/message', data);
                if (result.data) {
                    return true;
                }

            } catch(error) {
                console.log("sendMessage", error);
                return false;

            } 
            
        },
        async getBlogs({ commit }) {
            try {
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/blog/get-blogs');
                if(result.status ==200){
                   console.log(result.data, 'ghvvvvvvvvvvvv') 
                }
                
                commit('setBlogs', result.data);

            } catch(error) {
                console.log("sendMessage", error);
                return false;

            } 
            
        },
        async ViewBlog({ commit }, id) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/blog/view-blog/'+ id);
                if (result.data.success) {        
                    return true;
                }

            } catch(error) {
                console.log("sendMessage", error);
                return false;

            } 
            
        },
        async SearchBlog({ commit }, tag, category, query) {
            try {
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post(`/api/v1/blog/search?tag=${tag}&category=${category}&esearch=${query}/`);
                if (result.data.success) {        
                    return true;
                }

            } catch(error) {
                console.log("sendMessage", error);
                return false;

            } 
            
        },
        async startConversation({ commit }, data) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.post('/api/v1/chat/conversation', data);
                if (result.data) {

                    return result.data;
                }
                return false;
            } catch (error) {
                console.log("startConversation", error);
                return false;
            }
        },
        async getAllConversations({ commit }) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/chat/conversation');
                if(result.status ==200){
                   console.log(result.data) 
                }
                console.log(result.data.data) 
                commit('setConversations', result.data.data);

            } catch(error) {
                console.log("sendMessage", error);
                return false;

            } 
            
        },
        async getConversation({ commit }, id) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.getters.token;
                const result = await axios.get('/api/v1/chat/conversation/show/'+ id);
                if(result.status ==200){
                   console.log(result.data[0])
                   console.log(result)
                }
                console.log(result.data.data) 
                commit('setConversation', result.data[0]);

            } catch(error) {
                console.log("sendMessage", error);
                return false;

            } 
            
        },

    },
    mutations: {
        setMerchantHasCompletedOnboardingStatus(state, data) {
            if (data.hasSubmittedAccountDetails) {
                state.merchantStripeOnboarding.completedProcess = true;
            }  else {
                state.merchantStripeOnboarding.completedProcess = false;
            }
            state.merchantStripeOnboarding.stripeOnboardingLink = data.stripeOnboardingLink;
        },
        subscribe(state) {
            if (state.loggedInUser.role === 'merchant') {
                state.merchantStore.status = 'active';
            } else {
                state.loggedInUser.exclusive_user = 1;
            }
        },
        setSingleStoreOrder(state, order) {
            state.singleStoreOrder = order;
        },
        setStoreOrders(state, data) {
            state.storeOrders = data;
        },
        setDashboardData(state, data) {
            state.dashboardData = data;
        },
        setStoreProducts(state, products) {
            state.storeProducts = products;
        },
        setMerchantStore(state, store) {
            state.merchantStore = store;
        },
        setRegisteredUser(state, data) {
            const cred = {
                email: data.email,
                password: data.password
            };

            this.dispatch('loginUser', cred);           
        },
        loginUser(state, data) {
            state.loggedInUser = data.user;
            state.token = data.token;
        },
        setProfile(state, data) {
            state.loggedInUser.first_name = data.first_name;
            state.loggedInUser.last_name = data.last_name;
            state.loggedInUser.email = data.email;
            state.loggedInUser.phone = data.phone;
        },
        setCustomerOrders(state, orders) {
            state.customerOrders = orders;
        },
        setStores(state, stores) {
            state.stores = stores;
        },
        setProducts(state, products) {
            state.products = products;
        },
        setRecentProducts(state, products) {
            state.recentproducts = products;
        },
        setUserWishList(state, wishList) {
            state.wishList = wishList;
        },
        setTopThreeDailyBestSellers(state, products) {
            state.topThreeDailyBestSellers = products;
        },
        setTopTenPopularProducts(state, products) {
            state.topTenPopularProducts = products;
        },
        addSingleProductToCart(state, productId) {
            let cartItemIndex = state.cart.findIndex(o => o.product_id === productId);

            if (cartItemIndex === -1) {
                return this.dispatch('fetchCart');
            }

            state.cart[cartItemIndex].quantity = state.cart[cartItemIndex].quantity + 1;
        },
        setCart(state, cart) {
            state.cart = cart;
        },
        setBlogs(state, blogs) {
            state.blogs = blogs;
        },
        setConversations(state, convo) {
            state.conversations = convo;
        },
        setConversation(state, convo) {
            state.conversation = convo;
        },
        setCategories(state, categories) {
            state.categories = categories;
        },
        setCategoriesProduct(state, categories) {
            state.categoriesproduct = categories;
        },
        logoutUser(state) {
            state.token = '';
            state.user = {};
        },
        setSelectedProduct(state, productDetails) {
            state.selectedProduct = { ...productDetails };
          },
          clearSelectedProduct(state) {
            state.selectedProduct = {
              id: null,
              storeId: null,
              merchantId: null,
              storeName: null,
              name: '',
              price: null,
              imageUrl: '',
              description: ''
              // other details you want to clear
            };
          },
    }
})

export default store