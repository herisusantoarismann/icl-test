<template>
  <h4 class="text-[#4BB543] text-lg font-medium">{{ title }}</h4>
  <ul class="mt-6 flex flex-col gap-2 border-l border-gray-400">
    <li
      v-for="(product, i) in products"
      class="my-1 pl-6 cursor-pointer hover:text-[#4BB543]"
      :class="{ 'text-[#4BB543] border-l-2 border-green-600': i === 0 }"
      :key="i"
    >
      {{ product }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['title', 'products'],
};
</script>

<style></style>
