<template>
  <header class="text-white">
    <div
      class="mb-0.5 mx-0.5 px-16 xl:px-52 py-4 flex justify-between bg-[#033d2e]"
    >
      <img src="../assets/logo.png" alt="logo" class="w-12" />
      <div class="flex items-center gap-4">
        <Icon icon="fa-solid fa-magnifying-glass" />
        <Button
          text="Contact Us"
          size="small"
          variant="outline"
          icon="fa-regular fa-envelope"
          iconStart="start"
        />
        <Button
          text="English"
          size="small"
          variant="outline"
          icon="fa-solid fa-caret-down"
          iconStart="end"
        />
        <Button text="Login" size="small" />
      </div>
    </div>
    <div class="px-16 xl:px-52 py-6 mx-0.5 flex justify-between bg-[#033d2e]">
      <div class="flex gap-6 xl:gap-8">
        <Dropdown :options="['Why FLOU', 'B']" :isActive="true" />
        <Dropdown :options="['Products', 'B']" />
        <Dropdown :options="['Solutions', 'B']" />
        <Dropdown :options="['Partners', 'B']" />
        <Dropdown :options="['Pricing', 'B']" />
        <Dropdown :options="['Resources']" />
        <Dropdown :options="['Support']" />
        <Dropdown :options="['Marketplace']" />
      </div>
      <Button text="Let's Get Started" size="medium" />
    </div>
  </header>
</template>

<script>
import Button from '../components/Button.vue';
import Dropdown from '../components/Dropdown.vue';
import Icon from '../components/Icon.vue';

export default {
  name: 'HeaderComponent',
  components: { Button, Dropdown, Icon },
};
</script>

<style></style>
