<template>
  <div class="auth d-flex flex-column flex-sm-row fill-height">
    <div class="auth__left d-flex flex-column justify-space-between fill-height pa-6 px-md-16 py-md-8">
      <div class="nav mb-auto">
        <p class="grey--text subtitle-2 font-weight-light">
          Don't have an account ?
          <nuxt-link to="/auth/signup" class="account-link font-weight-medium">Create your account</nuxt-link>
        </p>
      </div>
      <div class="form mb-auto">
        <h1 class="font-weight-black">Welcome back 🎉</h1>
        <p class="mb-8 mb-sm-16">We're happy to see you again !</p>
        <form ref="form">
          <v-text-field
            label="Email"
            placeholder="example@mail.com"
            v-model="auth.email"
            type="email"
            outlined
            :rules="emailRules"
            required
            color="primary"
            class="mb-4 rounded-lg"
          ></v-text-field>
          <v-text-field
            label="Password"
            placeholder="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="auth.password"
            outlined
            required
            color="primary"
            class="mb-2 rounded-lg"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <a class="account-link d-flex justify-center font-weight-medium caption">Forgot your password ?</a>
          <v-btn 
            class="white--text rounded-lg auth__button mt-6"
            block
            x-large
            color="primary" 
            @click="handleForm()"
          >
          Sign in
          </v-btn>
        </form>
      </div>
    </div>
    <div class="auth__right fill-height"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import NotifierFactory from '~/services/NotifierFactory';

export default {
  name: 'SignInPage',
  layout: 'auth',
  data(){
    return {
      showPassword: false,
      auth: {
        email: '',
        password: ''
      },
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
    }
  },
  methods: {
    ...mapActions('auth', [
      'setUserInfo'
    ]),
    handleForm() {
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .then((userCredential) => {
        this.setUserInfo(userCredential.user.uid).then(() => {
          this.clearForm();
          this.$router.push('/dashboard');
        });
      })
      .catch((error) => {
        NotifierFactory.error({
          message: this.errorCodeToMessage(error.code)
        });
      });
    },
    errorCodeToMessage(code) {
      var message = '';
      if(code === 'auth/credential-already-in-use') {
        message = 'An account already uses those credentials.'
      } else if (code === 'auth/wrong-password') {
        message = 'The password is wrong.'
      } else if (code === 'auth/user-not-found') {
        message = 'This users does not exist.'
      } else {
        message = 'An error occured during the authentication process. Please try later.'
      }
      return message;
    },
    clearForm() {
      this.$refs.form.reset();
    }
  }
}
</script>

<style lang="scss" scoped>
  .auth{
    width: 100%;
    
    &__left{
      flex: .5;

      .account-link {
        color: var(--v-primary-base);
        text-decoration: underline;
      }

      .form {
        max-width: 400px;
      }
    }
    &__right{
      flex: .5;
      height: 100%;
      background-color: var(--v-primary-base);
    }

    &__button {
      text-transform: none;
    }
  }
</style>