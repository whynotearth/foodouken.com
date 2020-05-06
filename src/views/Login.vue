<template>
  <div class="login">
    <div class="my-8">
      <div class="mx-auto h-40 w-40 p-5">
        <img :src="foodoukenImage" alt="Logo image" />
      </div>
      <div>
        <div class="login-text">Welcome to</div>
        <div class="login-text">Foodouken</div>
      </div>
      <div class="login-content">
        <fb-signin-button
          class="login-button text-white"
          :params="fbSignInParams"
          @success="onSignFacebookInSuccess"
          @error="onSignFacebookInError"
        >
          <font-awesome-icon class="login-icons" :icon="facebookIcon" /> Sign in
          with Facebook
        </fb-signin-button>

        <g-signin-button
          class="login-button text-white"
          :params="googleSignInParams"
          @success="onSignGoogleInSuccess"
          @error="onSignGoogleInError"
        >
          <font-awesome-icon class="login-icons" :icon="googleIcon" /> Sign in
          with Google
        </g-signin-button>
      </div>
    </div>
  </div>
</template>

<script>
import foodouken from '../assets/foodouken.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faGoogle);

export default {
  name: 'Login',
  data() {
    return {
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      },
      foodoukenImage: foodouken,
      googleSignInParams: {
        clientId: 'YOUR_APP_CLIENT_ID.apps.googleusercontent.com'
      }
    };
  },

  methods: {
    // eslint-disable-next-line no-unused-vars
    onSignFacebookInSuccess(response) {
      // eslint-disable-next-line no-undef
      FB.getLoginStatus(function(response) {
        console.log(response);
        if (response.status === 'connected') {
          var accessToken = response.authResponse.accessToken;
          console.log(accessToken);
        }
      });
    },
    onSignFacebookInError(error) {
      console.log('OH NOES', error);
    },
    onSignGoogleInSuccess(googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile(); // etc etc
      console.log(profile);
    },
    onSignGoogleInError(error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error);
    }
  },
  computed: {
    googleIcon() {
      return faGoogle;
    },
    facebookIcon() {
      return faFacebook;
    }
  }
};
</script>
<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}

.login-text {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
}

.login-icons {
  margin-right: 39px;
  margin-left: 12px;
  font-size: 20px;
}

.login-content {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.login-button {
  display: flex;
  text-align: center;
  width: 320px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  background: #0e9ec2;
  border-radius: 50px;
  margin-bottom: 24px;
  margin-left: 16px;
  margin-right: 16px;
  padding-left: 4px;
  padding-bottom: 8px;
  padding-top: 8px;
}
</style>
