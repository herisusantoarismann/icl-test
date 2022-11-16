<template>
  <div
    class="min-h-screen flex flex-col gap-4 mx-6 my-8 md:w-2/4 md:m-auto lg:w-2/6 xl:w-1/6"
  >
    <div class="text-center">
      <img class="mx-auto w-48" src="../assets/logo.png" alt="logo" />
      <h4 class="text-xl font-semibold mt-1 pb-1">Login</h4>
    </div>
    <div>
      <Input title="Email" type="email" v-model:modelValue="email" />
      <Input title="Password" type="password" v-model:modelValue="password" />
      <div class="text-center pt-1 pb-1">
        <Button text="Login" :block="true" @click="login()" />
      </div>
      <p class="mt-4 text-sm text-center">
        Don`t have an account? Register here.
      </p>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

export default {
  name: 'LoginPage',
  components: { Input, Button },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password);
    },
  },
};
</script>

<style></style>
