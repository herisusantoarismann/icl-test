<template>
  <section
    class="relative mx-0.5 px-16 xl:px-52 py-20 xl:py-40 flex overflow-hidden"
  >
    <img
      src="../assets/planning.jpg"
      alt="bg-banner"
      class="absolute right-0 top-0"
    />
    <div class="z-10 text-white flex flex-col gap-10">
      <h3 class="text-4xl font-semibold">FLOU Cloud Product</h3>
      <p class="w-[60%]">
        Explore FLOU Cloud's expanding range of high-performance cloud products
        including large-scale computing, storage resources, and Big Data
        processing capabilities for users around the world.
      </p>
      <div class="flex gap-8">
        <Button text="Get Started for Free" size="large" />
        <Button text="Contact Sales" variant="light" size="large" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  components: { Button },
};
</script>

<style></style>
