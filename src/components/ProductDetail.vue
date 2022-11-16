<template>
  <div class="flex-1 flex flex-col gap-2">
    <h4 class="font-medium text-[#4BB543] text-lg">{{ title }}</h4>
    <hr />
    <div v-for="(product, i) of products" class="my-4 flex gap-12" :key="i">
      <div class="flex items-center">
        <img src="../assets/logo.png" alt="" class="w-16" />
        <div class="flex flex-col gap-2">
          <p class="text-lg text-[#4BB543] cursor-pointer">
            {{ product.name }}
          </p>
          <p class="text-sm">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'products'],
};
</script>

<style></style>
