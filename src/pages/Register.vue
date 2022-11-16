<template>
  <div
    class="min-h-screen flex flex-col gap-4 mx-6 my-8 md:w-2/4 md:m-auto lg:w-2/6 xl:w-1/6"
  >
    <div class="text-center">
      <img class="mx-auto w-48" src="../assets/logo.png" alt="logo" />
      <h4 class="text-xl font-semibold mt-1 pb-1">Register</h4>
    </div>
    <div>
      <Input title="Email" type="email" v-model:modelValue="email" />
      <Input title="Password" type="password" v-model:modelValue="password" />
      <Input
        title="Password Confirmation"
        type="password"
        v-model:modelValue="confpassword"
      />
      <div class="text-center pt-1 pb-1">
        <Button text="Register" :block="true" @click="register()" />
      </div>
      <p class="mt-4 text-sm text-center">
        Have an account?
        <router-link to="/login" class="underline text-[#4BB543]"
          >Login here.</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import axios from 'axios';

export default {
  name: 'RegisterPage',
  components: {
    Input,
    Button,
  },
  data() {
    return {
      email: '',
      password: '',
      confpassword: '',
    };
  },
  methods: {
    async register() {
      console.log(this.email, this.password, this.confpassword);

      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('confpassword', this.confpassword);

      await axios.post('http://interview.pluginesia.com/register', formData);
    },
  },
};
</script>

<style></style>
