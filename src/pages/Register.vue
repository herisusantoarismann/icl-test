<template>
  <div
    class="min-h-screen flex flex-col gap-4 mx-6 my-8 md:w-2/4 md:m-auto lg:w-2/6 xl:w-1/6"
  >
    <div class="text-center">
      <img class="mx-auto w-48" src="../assets/logo.png" alt="logo" />
      <h4 class="text-xl font-semibold mt-1 pb-1">Register</h4>
    </div>
    <form>
      <Input title="Email" type="email" />
      <Input title="Password" type="password" />
      <Input title="Password Confirmation" type="password" />
      <div class="text-center pt-1 pb-1">
        <Button text="Register" :block="true" />
      </div>
      <p class="mt-4 text-sm text-center">Have an account? Login here.</p>
    </form>
  </div>
</template>

<script>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

export default {
  name: 'RegisterPage',
  components: {
    Input,
    Button,
  },
};
</script>

<style></style>
