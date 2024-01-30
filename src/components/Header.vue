<template>
    <div class="m-0">
    <img src="/assets/images/top.svg" class="w-100"/>
  
  <div class="" style="background: url(/assets/images/navbg.svg);">
    <div class="container py-5 mont">
      <div class=" m-0 row w-100 align-items-center gx-lg-2 gx-0">
        <div class="col-xxl-4 col-lg-4 ">
          <router-link class="navbar-brand d-none d-lg-block" to="/">
            <img src="/assets/images/newlogo.svg"/>
            <!-- <h2 class="mx-4">Rayvvin</h2> -->
    </router-link>
          <div class="d-flex justify-content-between w-100 d-lg-none">
            <router-link class="navbar-brand" to="/">
              <img src="/assets/images/Rayvvin_logo1.png" height="100"/>

              <!-- <h1 class="mx-4">Rayvvin</h1> -->
            </router-link>

            <div class="d-flex align-items-center lh-1">
              <div class="list-inline me-4">
                <div class="list-inline-item">
              <li class="nav-item dropdown w-100 w-lg-auto">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-user">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                </a>
                <ul class="dropdown-menu">
                  <li v-show="!authenticated"><router-link to="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#loginModal">Login</router-link></li>
                  <li v-show="!authenticated"><router-link to="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#customerRegistrationModal">Register to buy</router-link></li>
                  <li v-show="!authenticated"><router-link to="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#merchantRegistrationModal">Register to sell</router-link></li>
                  <li v-show="authenticated"><router-link to="/my-orders" class="dropdown-item">My Orders</router-link></li>
                  <li v-show="authenticated"><router-link to="/settings" class="dropdown-item">Settings</router-link></li>
                  <li v-show="authenticated" @click="logoutUser"><router-link to="#" class="dropdown-item">Logout</router-link></li>

                </ul>
              </li>
            </div>
                <div class="list-inline-item" v-show="authenticated">
              
              <a class="text-muted position-relative " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-shopping-bag">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {{ getCartLength }}
                  <span class="visually-hidden">cart</span>
                </span>
              </a>
            </div>

              </div>
              <!-- Button -->
              <button class="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                  class="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                  <path
                    d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
              </button>

            </div>
          </div>

        </div>
        <div class="col-xxl-4 col-lg-4 d-none d-lg-block">
          <!--search for products-->
            <!-- <div class="row">
              <div class="col-sm-6">
                <div class="input-group ">
                  <input class="form-control rounded" type="search" v-model="searchTerm" placeholder="Search for products">
                </div>
              </div>
              <div class="col-sm-6">
                <button class="btn btn-primary" @click="searchForProduct">
                  Search
                </button>
              </div>
            </div> -->
          <!-- end search for products-->
          <div class="w-100 ">
            <div class=" align-items-center d-flex justify-content-center">
              <div class="nav-item w-100 w-lg-auto mx-4">
                <router-link to="/" class="nav-link text-white mont" aria-expanded="false" style="font-size:17px;" :class="{ 'active-link': isRouteActive('/') }"><span class="mb-5">Home</span> </router-link>
              </div>
              <div class="nav-item w-100 w-lg-auto mx-4">
                <router-link to="/shop" class="nav-link text-white mont" aria-expanded="false" style="font-size:17px;" :class="{ 'active-link': isRouteActive('/shop') }">Shop</router-link>
              </div>
              <div class="nav-item w-100 w-lg-auto mx-4">
                <router-link to="/stores" class="nav-link text-white"  aria-expanded="false" style="font-size:17px;" :class="{ 'active-link': isRouteActive('/stores') }">Stores</router-link>
              </div>
              <div class="nav-item w-100 w-lg-auto mx-4">
                <router-link to="/blog" class="nav-link text-white" aria-expanded="false" style="font-size:17px;" :class="{ 'active-link': isRouteActive('/blog') }">Blog</router-link>
              </div>
            </div>
          </div>
        </div>
       
        <!-- big screen-->
        <div class="col-md-2 col-xxl-4 col-lg-4 text-end d-none d-lg-block">
          <div class="list-inline">
            <div class="list-inline-item me-5" v-show="authenticated">
              <router-link to="/wish-list" class="text-muted position-relative">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather mt-1 feather-heart">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                  </path>
                </svg>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {{ fetchWishListLength }}
                  <span class="visually-hidden">Wish List</span>
                </span>
              </router-link>
            </div>

    
            <div class="list-inline-item me-">
              <li class="nav-item dropdown w-100 w-lg-auto">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.256 24.0627V21.8127C23.256 20.6193 22.7819 19.4747 21.938 18.6308C21.0941 17.7869 19.9495 17.3127 18.756 17.3127H9.75604C8.56257 17.3127 7.41798 17.7869 6.57406 18.6308C5.73015 19.4747 5.25604 20.6193 5.25604 21.8127V24.0627" stroke="#FFFFFF" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.256 12.8127C16.7413 12.8127 18.756 10.798 18.756 8.31274C18.756 5.82746 16.7413 3.81274 14.256 3.81274C11.7708 3.81274 9.75604 5.82746 9.75604 8.31274C9.75604 10.798 11.7708 12.8127 14.256 12.8127Z" stroke="#FFFFFF" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </a>
                <ul class="dropdown-menu">
                  <li v-show="!authenticated"><router-link to="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#loginModal">Login</router-link></li>
                  <li v-show="!authenticated"><router-link to="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#customerRegistrationModal">Register to buy</router-link></li>
                  <li v-show="!authenticated"><router-link to="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#merchantRegistrationModal">Register to sell</router-link></li>
                  <li v-show="authenticated"><router-link to="/my-orders" class="dropdown-item">My Orders</router-link></li>
                  <li v-show="authenticated"><router-link to="/settings" class="dropdown-item">Settings</router-link></li>
                  <li v-show="authenticated" @click="logoutUser"><router-link to="#" class="dropdown-item">Logout</router-link></li>

                </ul>
              </li>
            </div>
            <div class="list-inline-item" v-show="authenticated">
              
              <a class="text-muted position-relative " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_228_555)">
<path d="M10.756 25.1877C11.3774 25.1877 11.881 24.6841 11.881 24.0627C11.881 23.4414 11.3774 22.9377 10.756 22.9377C10.1347 22.9377 9.63104 23.4414 9.63104 24.0627C9.63104 24.6841 10.1347 25.1877 10.756 25.1877Z" stroke="#ffffff" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.131 25.1877C23.7524 25.1877 24.256 24.6841 24.256 24.0627C24.256 23.4414 23.7524 22.9377 23.131 22.9377C22.5097 22.9377 22.006 23.4414 22.006 24.0627C22.006 24.6841 22.5097 25.1877 23.131 25.1877Z" stroke="#ffffff" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.75604 1.56274H6.25604L9.27104 16.6265C9.37392 17.1444 9.65569 17.6097 10.067 17.9408C10.4784 18.272 10.9931 18.4479 11.521 18.4377H22.456C22.984 18.4479 23.4987 18.272 23.9101 17.9408C24.3214 17.6097 24.6032 17.1444 24.706 16.6265L26.506 7.18774H7.38104" stroke="#ffffff" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_228_555">
<rect width="27" height="27" fill="white" transform="translate(0.631042 0.437744)"/>
</clipPath>
</defs>
</svg>

                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {{ getCartLength }}
                  <span class="visually-hidden">cart</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <!-- end big sreen-->
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-0 " aria-label="Offcanvas navbar large">
    <div class="container">


      <div class="offcanvas offcanvas-start" tabindex="-1" id="navbar-default" aria-labelledby="navbar-defaultLabel">
        <div class="offcanvas-header pb-1">
          <router-link to="/">
            <h2 class="mx-4">Rayvvin</h2>
          </router-link>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="d-block d-lg-none mb-4">
            <form action="#">
              <div class="input-group ">
                <input class="form-control rounded" type="search" placeholder="Search for products">
                <span class="input-group-append">
                  <button class="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-search">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div class="d-block d-lg-none mb-4">
            <a class="btn btn-primary w-100 d-flex justify-content-center align-items-center" data-bs-toggle="collapse"
              href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              <span class="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-grid">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg></span> All Categories
            </a>
            <div class="collapse mt-2" id="collapseExample">
              <div class="card card-body">
                <ul class="mb-0 list-unstyled">
                  <li v-for="(category, index) in fetchCategories" :key="index">
                    <router-link :to="{name: 'shop', query: {'categoryId': category.id}}" class="dropdown-item">{{ category.name }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <div class="dropdown me-3 d-none d-lg-block">
            <button class="btn btn-primary px-6 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
              aria-expanded="false">
              <span class="me-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-grid">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg></span> All Categories
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li v-for="(category, index) in fetchCategories" :key="index">
                <router-link :to="{name: 'shop', query: {'categoryId': category.id}}" class="dropdown-item">{{ category.name }}</router-link>
              </li>
            </ul>
          </div> -->
          <div class="d-lg-none">
            <ul class="navbar-nav align-items-center ">
              <li class="nav-item w-100 w-lg-auto mx-4">
                <router-link to="/" class="nav-link" aria-expanded="false" style="font-size:15px;">Home</router-link>
              </li>
              <li class="nav-item w-100 w-lg-auto mx-4">
                <router-link to="/shop" class="nav-link" aria-expanded="false" style="font-size:15px;">Shop</router-link>
              </li>
              <li class="nav-item w-100 w-lg-auto mx-4">
                <router-link :to="{name: 'stores'}" class="nav-link"  aria-expanded="false" style="font-size:15px;">Stores</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>


    </div>

    <!--sign in  Modal -->
    <div class="modal fade" ref="loginModal" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-header border-0">
            <h5 class="modal-title fs-3 fw-bold" id="loginModalLabel">Sign In For the Best Experience</h5><br />
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" v-model="data.email" class="form-control" id="email" placeholder="" required="">
                <small class="form-text">We won't share your email address</small>
              </div>

              <div class="mb-5">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="data.password" class="form-control" id="password" placeholder="Enter Password" required="">
                
              </div>
            </form>
            <div class="text-center">

            <button type="submit" @click="signIn" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Get me In</button>
            <p class="mt-4">Forgot your password? <a href="#" @click="showResetPasswordModal">Reset here</a></p>
            Don't have an account? 
            <a href="#" @click="showRegisterCustomerModal">Register to buy</a>
            <span class="mx-2">or</span>
            <a href="#" @click="showRegisterMerchantModal">Register to sell</a>
          </div>


          </div>
          <div class="modal-footer border-0 justify-content-center">
            <!-- Don't have an account? 
            <a href="#" @click="showRegisterCustomerModal">Register to buy</a>
            <span>or</span>
            <a href="#" @click="showRegisterMerchantModal">Register to sell</a> -->

          </div>
        </div>
      </div>
    </div>

    <!-- reset password modal -->
    <div class="modal fade" ref="resetPasswordModal" id="resetPasswordModal" tabindex="-1" aria-labelledby="resetPasswordModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-header border-0">
            <h5 class="modal-title fs-3 fw-bold" id="loginModalLabel">No judgement, it happens to everyone</h5><br />
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" v-model="resetPasswordEmail" class="form-control" id="email" placeholder="" required="">
                <small class="form-text">We won't share your email address</small>
              </div>

              <div class="mb-5" v-show="showPasswordResetInputs">
                <label for="password" class="form-label">Code</label>
                <input type="text" v-model="resetPasswordRequest.passwordToken" class="form-control" id="password" placeholder="" required="">
              </div>

              <div class="mb-5" v-show="showPasswordResetInputs">
                <label for="password" class="form-label">New Password</label>
                <input type="text" v-model="resetPasswordRequest.password" class="form-control" id="password" placeholder="Enter Password" required="">
              </div>

              <div class="mb-5" v-show="showPasswordResetInputs">
                <label for="password" class="form-label">Confirm New Password</label>
                <input type="text" v-model="confirmPassword" class="form-control" id="password" placeholder="Enter Password" required="">
                <small class="form-text text-danger" v-show="resetPasswordRequest.password !== confirmPassword">Passwords do not match</small>

              </div>


            </form>
            <div class="text-center">

            <button type="submit" @click="sendPasswordResetCode" class="btn btn-primary" :disabled="resetCodeSent" v-if="!showPasswordResetInputs">
              Send code to my email
              <div class="spinner-border spinner-border-sm text-white mx-2" role="status" v-show="resetCodeSent">
              </div>
            </button>

            <button type="submit" @click="resetPassword" class="btn btn-primary" :disabled="resetPasswordSent" v-else>
              Reset Password
              <div class="spinner-border spinner-border-sm text-white mx-2" role="status" v-show="resetPasswordSent">
              </div>
            </button>


          </div>


          </div>
          <div class="modal-footer border-0 justify-content-center">
          </div>
        </div>
      </div>
    </div>

    <!--customer register modal-->
    <div class="modal fade" ref="customerRegistrationModal" id="customerRegistrationModal" tabindex="-1" aria-labelledby="customerRegistrationModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-header border-0">
            <h5 class="modal-title fs-3 fw-bold" id="customerRegistrationModalLabel">Register For the Best Experience</h5><br />
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-if="!showSendOtpCode">
              <form>
                <div class="mb-3">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" v-model="data.first_name" class="form-control" id="email" placeholder="" required="">
                </div>

                <div class="mb-3">
                  <label for="firstName" class="form-label">Last Name</label>
                  <input type="text" v-model="data.last_name" class="form-control" id="email" placeholder="" required="">
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Phone Number</label>
                  <input type="text" v-model="data.phone" class="form-control" id="email" placeholder="" required="">
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" v-model="data.email" class="form-control" id="email" placeholder="" required="">
                  <small class="form-text" v-if="!emailExists">We won't share your email address</small>
                  <small class="form-text text-danger" v-else>An account with this email already exists</small>
                </div>

                <div class="mb-5">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" v-model="data.password" class="form-control" id="password" placeholder="Enter Password" required="">
                  
                </div>
              </form>
              <button type="submit" @click="showOtpCodeForm" class="btn btn-primary" :disabled="disableContinueToOtpButton || emailExists">Continue</button>

            </div>
            <div v-else>
              <form>
                <div class="mb-3">
                  <label for="firstName" class="form-label">Enter OTP code sent to {{ data.email }}</label>
                  <input type="text" v-model="otpCode" class="form-control" id="otpcode" placeholder="E.g 1234" required="">
                </div>
              </form>
              <button type="submit" @click="showSendOtpCode = false" class="btn btn-secondary mx-2">Change email address</button>

              <button type="submit" @click="verifyOtpCode" class="btn btn-primary" :disabled="!otpCodeSent">Verify Code</button>
            </div>
           

            <!-- <button type="submit" @click="registerCustomer" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Get me in</button> -->
          </div>
          <div class="modal-footer border-0 justify-content-center">
            <!-- Don't have an account? <a href="#" @click="showRegisterModal">Register to get access</a> -->
          </div>
        </div>
      </div>
    </div>

    <!--seller register modal-->
    <div class="modal fade" ref="merchantRegistrationModal" id="merchantRegistrationModal" tabindex="-1" aria-labelledby="merchantRegistrationModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-4">
          <div class="modal-header border-0">
            <h5 class="modal-title fs-3 fw-bold" id="customerRegistrationModalLabel">Get access to millions of customers</h5><br />
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="progress mb-4">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10100" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ 'width': progressStep + '%' }"></div>
            </div>
            <section v-show="step === 1">
              <form>
                <div class="mb-3">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" v-model="sellerBio.first_name" class="form-control" id="email" placeholder="" required="">
                </div>

                <div class="mb-3">
                  <label for="firstName" class="form-label">Last Name</label>
                  <input type="text" v-model="sellerBio.last_name" class="form-control" id="email" placeholder="" required="">
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Phone Number</label>
                  <input type="text" v-model="sellerBio.phone" class="form-control" id="email" placeholder="" required="">
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" v-model="sellerBio.email" class="form-control" id="email" placeholder="" required="">
                  <small class="form-text" v-if="!emailExists">We won't share your email address</small>
                  <small class="form-text text-danger" v-else>An account with this email already exists</small>                </div>

                <div class="mb-5">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" v-model="sellerBio.password" class="form-control" id="password" placeholder="Enter Password" required="">
                  
                </div>
              </form>
              <button  @click="nextStep" :disabled="emailExists" class="btn btn-primary">Next: Fill in store details</button>
            </section>

            <section v-show="step === 2">
              <form>
                <div class="mb-3">
                  <label for="firstName" class="form-label">Enter OTP code sent to {{ sellerBio.email }}</label>
                  <input type="text" v-model="otpCode" class="form-control" id="otpcode" placeholder="E.g 1234" required="">
                </div>
              </form>
              <button type="submit" @click="step--" class="btn btn-secondary mx-2">Change email address</button>

              <button type="submit" @click="verifyOtpCode" class="btn btn-primary" :disabled="!otpCodeSent">Verify Code</button>

            </section>
            
            <section v-show="step === 3">
              <form>
                <div class="mb-3">
                  <label for="firstName" class="form-label">Store Name</label>
                  <input type="text" v-model="sellerStore.name" class="form-control" id="email" placeholder="" required="">
                </div>

                <div class="mb-3">
                  <label for="firstName" class="form-label">Store Email Address</label>
                  <input type="text" v-model="sellerStore.email" class="form-control" id="email" placeholder="" required="">
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Store Contact Phone Number</label>
                  <input type="text" v-model="sellerStore.phone_number" class="form-control" id="email" placeholder="" required="">
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">City</label>
                  <input type="text" v-model="sellerAddress.city" class="form-control" id="email" placeholder="" required="">
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Post Code</label>
                  <input type="text" v-model="sellerAddress.post_code" class="form-control" id="email" placeholder="" required="">
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">State</label>
                  <input type="text" v-model="sellerAddress.state" class="form-control" id="email" placeholder="" required="">
                </div>
              </form>
              <button @click="step--" class="btn btn-secondary mx-4"><i class="bi bi-arrow-bar-left mx-1"></i>Previous</button>
              <button @click="submitMerchantRegistrationRequest" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-door-open mx-1"></i>Get me in</button>
            </section>
            </div>
          <div class="modal-footer border-0 justify-content-center">
            <!-- Don't have an account? <a href="#" @click="showRegisterModal">Register to get access</a> -->
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
import store from '../store'
import axios from 'axios'

export default {
    name: "Header",
    data() {
        return {
          emailExists: false,
          showSendOtpCode: false,
          otpCode: '',
          otpCodeSent: false,
          searchTerm: '',
          confirmPassword: '',
          resetPasswordRequest: {passwordToken: '', password: ''},
          step: 1,
          resetPasswordEmail: '',
          resetCodeSent: false,
          resetPasswordSent: false,
          showPasswordResetInputs: false,
          data: {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            phone: '',
            role: 'customer'
          },
          sellerBio: {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            phone: '',
            role: 'merchant'
          },
          sellerStore: {
            name: '',
            email: '',
            phone_number: ''
          },
          sellerAddress: {
            city: '',
            state: '',
            post_code: ''
          }
        }
    },
    methods: {

      async nextStep() {

        if (this.step === 1) {
          this.step++;
          return this.showOtpCodeForm();
        }

        const result = await axios.post('/api/v1/check-email-exists', {email: this.sellerBio.email});
        if(result.data.data === true) {
          this.emailExists = true;
          return this.$toast.open({
            message: "An account with this email already exists",
            type: 'error'
          });
        }

        this.step++;
      },
      isRouteActive(route) {
      return this.$route.path === route || this.$route.name === route;
    },
      async showOtpCodeForm() {
        let email = this.sellerBio.email !== '' ? this.sellerBio.email : this.data.email;

        const result = await axios.post('/api/v1/check-email-exists', {email: email});
        if(result.data.data) {
          this.emailExists = true;
          return this.$toast.open({
            message: "An account with this email already exists",
            type: 'error'
          });
        }

        this.showSendOtpCode = true;
        const sent = await this.$store.dispatch('sendOtpCode', email)
        
        if (sent) {
          this.otpCodeSent = true;
          return this.$toast.open({
            message: "OTP sent to your email",
            type: 'success'
          })
        }

        this.otpCodeSent = false;
        return this.$toast.open({
            message: "Failed please try again",
            type: 'error'
          })
      },
      async verifyOtpCode() {
        let email = this.sellerBio.email !== '' ? this.sellerBio.email : this.data.email;

        const otpData = {
          token: this.otpCode,
          email: email
        };
        
        const verified = await this.$store.dispatch('verifyOtpCode', otpData);

        if (verified) {
          this.$toast.open({
            message: 'Your account has been verified successfully',
            type: 'success'
          })

          // seller ttrying to verify
          if (this.sellerBio.email !== '') {
            this.step++;
          } else {
            this.registerCustomer();   
          }

          return $('#customerRegistrationModal').modal('hide')
        }

        this.otpCodeSent = false;
        return this.$toast.open({
            message: 'Failed please try again',
            type: error
          })


      },
      async searchForProduct() {
        const data = {
                pageNumber: 1,
                searchTerm: this.searchTerm
            };
      
        await this.$store.dispatch('fetchProducts', data);


         this.$router.push({ path: '/shop', query: { search: this.searchTerm } })
      },
      async resetPassword() {
        this.resetPasswordSent = true;

        this.resetPasswordRequest.email = this.resetPasswordEmail;


        const result = await this.$store.dispatch('resetPassword', this.resetPasswordRequest);

        if (result) {
          this.resetPasswordSent = false;
          this.showPasswordResetInputs = false;
          $('#resetPasswordModal').modal('hide')
          $('#loginModal').modal('show')

          this.$toast.open({
            message: "Reset successful, please login to continue",
            type: 'success'
          })
        }

      },
      async sendPasswordResetCode() {
        this.resetCodeSent = true;
      
        const result = await this.$store.dispatch('passwordResetCodeRequest', this.resetPasswordEmail);

        if (result) {
          this.resetCodeSent = false;
          this.showPasswordResetInputs = true;
          this.$toast.open({
            message: "Kindly check your email for the reset code",
            type: 'success'
          })
        }

      },
      showResetPasswordModal() {
        $('#loginModal').modal('hide')
        $('#resetPasswordModal').modal('show')
      },
      showStoreDetails() {
        this.step = 2;
      },
      async logoutUser() {
        const result = await this.$store.dispatch('logoutUser');

        if (result) {
          this.$router.push({ name: 'home' })

          return this.$toast.open({
            message: 'Logout successful',
            type:'success'
          })
        }

        return this.$toast.open({
            message: 'Failed, please try again',
            type:'error'
          })
      },
      async submitMerchantRegistrationRequest() {
        const data = {
          "userData": this.sellerBio,
          "address": this.sellerAddress,
          "storeData": this.sellerStore
        };

        const stripeLink = await this.$store.dispatch('registerMerchant', data);

        if (stripeLink) {
          this.$store.dispatch("fetchUserWishLists");
          this.$store.dispatch("fetchCart");

          this.$toast.open({
            message: 'Welcome to a new dispensation, routing you to Stripe to finish your onboarding',
            duration: 5000,
            type:'success',
            dismissible: true,
            onDismiss: function() {
              window.open(resp.data.data, "_blank")
            }
          })

          return window.open(stripeLink, '_blank');

          // return this.$router.push({ name: 'dashboard'})
        }

        return this.$toast.open({
            message: 'Failed, please try again',
            type:'error'
          })
      },
      async registerCustomer() {
        const result = await this.$store.dispatch('registerUser', this.data);

        if (result) {
          this.$store.dispatch("fetchUserWishLists");
          this.$store.dispatch("fetchCart");

          return this.$toast.open({
            message: 'Welcome to a new dispensation',
            type:'success'
          })
        }

        return this.$toast.open({
            message: 'Failed, please try again',
            type:'error'
          })

      },
      async signIn() {
        const result = await this.$store.dispatch('loginUser', this.data);

        if (result) {

          this.$store.dispatch("fetchUserWishLists");
          this.$store.dispatch("fetchCart");
          // location.reload();

          return this.$toast.open({
            message: 'Welcome to a new dispensation',
            type:'success'
          })
        }

        return this.$toast.open({
            message: 'Failed, please try again',
            type:'error'
          })

      }
    },

    created() {
      this.$store.dispatch("fetchUserWishLists");
      this.$store.dispatch("fetchCategories");

      console.log(this.showSendOtpCode)

    },
    computed: {
      disableContinueToOtpButton () {
        if(this.data.first_name === '' || 
        this.data.last_name === '' || 
        this.data.phone === '' ||
        this.data.email === '' || 
        this.data.password === '') {
          return true;
        }

        return false;
      },

      getCartLength() {
        return store.getters.cart.length;
      },
      progressStep() {
        var result = 0;
        if (this.sellerBio.first_name !== '') {
          result += 10;
        }  
        
        if (this.sellerBio.last_name !== '') {
          result += 10;
        }   
        
        
        if (this.sellerBio.email !== '' ) {
          result += 10;
        }   

        if (this.sellerBio.phone !== '' ) {
          result += 10;
        }  

        if (this.sellerBio.password !== '' ) {
          result += 10;
        }  

        if (this.sellerStore.name !== '' ) {
          result += 10;
        }  

        if (this.sellerStore.email !== '' ) {
          result += 10;
        } 

        if (this.sellerStore.phone_number !== '' ) {
          result += 10;
        } 

        if (this.sellerAddress.city !== '' ) {
          result += 10;
        } 

        if (this.sellerAddress.state !== '' ) {
          result += 10;
        } 

        if (this.sellerAddress.post_code !== '' ) {
          result += 9;
        } 

        return result;
      },
      fetchCategories() {
        return store.getters.categories;
      },
      fetchWishListLength() {
        return store.getters.wishList.length;
      },
      authenticated () {
        return this.$store.getters.isAuthenticated;
      }      
    }
}
</script>
<style>
.active-link {
  /* Add your underline or active styles here */
  /* text-decoration: underline;
   */
  /* You can add more styles like color, font-weight, etc. */
  border-bottom: 2px solid rgb(255, 255, 255);
  font-weight: 600;
}
</style>