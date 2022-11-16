<template>
  <footer
    class="mx-0.5 py-6 px-12 xl:px-48 flex flex-col gap-12 bg-[#033d2e] text-white"
  >
    <div class="flex gap-12 xl:gap-24">
      <div class="basis-4/5 xl:basis-2/3 grid grid-cols-5">
        <LinkGroup
          title="About"
          :links="[
            'About FLOU Cloud',
            'Pricing Model',
            'Product',
            'Solutions',
            'Customer',
            'Partners',
            'Latest Update',
          ]"
        />
        <LinkGroup
          title="Promotion"
          :links="[
            'Free Trial',
            'Refer a friend',
            'Starter Package',
            'Web Hosting',
            'Affiliate Program',
          ]"
        />
        <LinkGroup
          title="Explore"
          :links="[
            'Indonesia Gateway',
            'Getting Started',
            'Blog',
            'Marketplace',
            'Availability Zone',
          ]"
        />
        <LinkGroup
          title="Support"
          :links="[
            'Contact Sales',
            'After-sales Support',
            'Pricing Calculator',
            'FAQ',
          ]"
        />
        <LinkGroup
          title="Resource"
          :links="['Document Center', 'Security & Compliance', 'Press Room']"
        />
      </div>
      <div
        class="basis-1/5 xl:basis-1/3 xl:px-32 flex flex-col font-medium text-center items-center gap-4"
      >
        <Button text="Sign in console" size="medium" :block="true" />
        <p>Our Social Media</p>
        <div class="space-x-3 xl:space-x-4">
          <Icon icon="fa-brands fa-instagram" />
          <Icon icon="fa-brands fa-facebook-f" />
          <Icon icon="fa-brands fa-twitter" />
          <Icon icon="fa-brands fa-linkedin" />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <p class="cursor-pointer hover:text-[#4BB543]">Bahasa</p>
      <span class="border-l-2 border-white"></span>
      <p class="cursor-pointer hover:text-[#4BB543]">English</p>
    </div>
  </footer>
</template>

<script>
import LinkGroup from '../components/LinkGroup.vue';
import Icon from '../components/Icon.vue';
import Button from '../components/Button.vue';

export default {
  name: 'FooterComponent',
  components: { LinkGroup, Icon, Button },
};
</script>

<style></style>
