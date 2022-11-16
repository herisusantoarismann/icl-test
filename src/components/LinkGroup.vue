<template>
  <div class="flex flex-col gap-8">
    <p class="xl:text-lg font-medium">{{ title }}</p>
    <div class="flex flex-col gap-2 text-sm">
      <p
        v-for="(link, i) in links"
        class="underline cursor-pointer hover:text-[#4BB543]"
        :key="i"
      >
        {{ link }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownComponent',
  props: ['title', 'links'],
};
</script>

<style></style>
