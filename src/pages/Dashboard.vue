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
import axios from 'axios';
import { useStore } from 'vuex';
import { onMounted } from '@vue/runtime-core';

export default {
  name: 'DashboardPage',
  components: {
    Header,
    Footer,
    BannerSection,
    ProductSection,
  },
  setup() {
    const store = useStore();

    // cors error
    const getData = async () => {
      return await axios.get('http://interview.pluginesia.com/jsonTest', {
        headers: {
          Authorization: `Bearer ${store.state.token}`,
        },
      });
    };

    onMounted(() => {
      getData();
    });
  },
};
</script>

<style></style>
