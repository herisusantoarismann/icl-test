<template>
  <div
    class="flex items-center gap-2 xl:gap-3 cursor-pointer hover:text-[#4BB543]"
  >
    <p class="text-sm" :class="{ 'text-[#4BB543]': isActive }">
      {{ options[0] }}
    </p>
    <font-awesome-icon
      v-if="options.length > 1"
      icon="fa-solid fa-caret-down"
      class="text-xs"
    />
  </div>
</template>

<script>
export default {
  name: 'DropdownComponent',
  props: ['options', 'isActive'],
};
</script>

<style></style>
