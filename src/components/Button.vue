<template>
  <button class="py-1 px-4 text-sm text-white bg-[#4BB543] rounded">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: ['text'],
};
</script>

<style></style>
