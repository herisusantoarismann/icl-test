<template>
  <button
    class="text-sm rounded-lg"
    :class="[padding, color, { 'w-full': block }]"
  >
    <font-awesome-icon
      v-if="icon && iconStart === 'start'"
      :icon="icon"
      class="mr-1"
    />
    {{ text }}
    <font-awesome-icon
      v-if="icon && iconStart === 'end'"
      :icon="icon"
      class="ml-1"
    />
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: ['text', 'size', 'variant', 'block', 'icon', 'iconStart'],
  methods: {
    convertSizes(size) {
      let paddingSize = '';
      switch (size) {
        case 'large':
          paddingSize = 'px-4 py-3';
          break;
        case 'medium':
          paddingSize = 'px-4 py-2';
          break;
        case 'small':
          paddingSize = 'px-4 py-1';
          break;
        default:
          paddingSize = 'px-4 py-2';
          break;
      }

      return paddingSize;
    },
    convertVariants(variant) {
      let color = '';
      switch (variant) {
        case 'light':
          color = 'bg-white text-[#4BB543] hover:text-white hover:bg-[#4BB543]';
          break;
        case 'outline':
          color =
            'bg-transparent text-white border border-white hover:text-[#4BB543] hover:border-[#4BB543]';
          break;
        default:
          color = 'text-white bg-[#4BB543] hover:bg-[#419a3b]';
          break;
      }

      return color;
    },
  },
  data() {
    return {
      padding: this.convertSizes(this.size),
      color: this.convertVariants(this.variant),
    };
  },
};
</script>

<style></style>
