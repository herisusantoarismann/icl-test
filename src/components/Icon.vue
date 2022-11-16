<template>
  <font-awesome-icon
    :icon="icon"
    class="py-2 px-2.5 text-black bg-white rounded-full cursor-pointer hover:bg-[#4BB543] hover:text-white"
  />
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: ['icon'],
};
</script>

<style></style>
