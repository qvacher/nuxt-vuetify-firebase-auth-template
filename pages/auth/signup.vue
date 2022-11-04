<template>
  <div class="auth d-flex flex-column flex-sm-row fill-height">
    <div class="auth__left d-flex flex-column justify-space-between fill-height pa-6 px-md-16 py-md-8">
      <div class="nav mb-auto">
        <p class="grey--text subtitle-2 font-weight-light">
          Already have an account ?
          <nuxt-link to="/auth/signin" class="account-link font-weight-medium">Sign in</nuxt-link>
        </p>
      </div>
      <div class="form mb-auto">
        <h1 class="font-weight-black">Create your account 🌱</h1>
        <p class="mb-8 mb-sm-16">Free forever. No credit card needed.</p>
        <form ref="form">
          <v-text-field
            label="Email"
            placeholder="example@mail.com"
            v-model="auth.email"
            type="email"
            :rules="emailRules"
            required
            outlined
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
          Create my account
          </v-btn>
        </form>
      </div>
    </div>
    <div class="auth__right fill-height"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SignUpPage',
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
      passwordRules: [ 
        v => !!v || 'Password is required', 
        // v => (v && v.length >= 5) || 'Password must have 5+ characters',
        // v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character', 
        // v => /(?=.*\d)/.test(v) || 'Must have one number', 
        // v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]' 
      ]
    }
  },
  methods: {
    ...mapActions('auth', [
      'setAuthUser'
    ]),
    handleForm() {
      this.$fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)
      .then((userCredential) => {
        this.$router.push('/get-started');
        this.clearForm();
        this.setAuthUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          theme: {
            id: '1'
          }
        });
      }); 
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