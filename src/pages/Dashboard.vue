<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div>
      <Header />
      <BannerSection />
      <ProductSection />
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BannerSection from '../components/BannerSection.vue';
import ProductSection from '../components/ProductSection.vue';

export default {
  name: 'DashboardPage',
  components: {
    Header,
    Footer,
    BannerSection,
    ProductSection,
  },
};
</script>

<style></style>
