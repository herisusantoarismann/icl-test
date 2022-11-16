<template>
  <section class="pt-8 pb-48 px-12 xl:px-48 flex">
    <div class="basis-1/3">
      <ProductList
        title="Flou Cloud Product"
        :products="[
          'Infrastructure as a Service',
          'Software as a Service',
          'Platform as a Service',
          'Hybrid Multicloud',
          'Services',
          'Private Cloud',
        ]"
      />
    </div>
    <div class="basis-2/3 flex flex-col gap-4">
      <div class="relative">
        <input
          type="text"
          placeholder="Search Products"
          class="w-full py-2 pl-4 pr-10 bg-gray-100 rounded outline-none"
        />
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="absolute top-2/4 -translate-y-2/4 right-4 text-gray-400"
        />
      </div>
      <hr />
      <div class="flex flex-col gap-1">
        <p class="text-lg underline text-[#4BB543] font-medium cursor-pointer">
          Explore Infrastructure as a Service Products (IaaS)
        </p>
        <p c>
          Helping to accelerate the business through strong and resilient
          infrastructure for unlimited customer experience.
        </p>
      </div>
      <div class="mt-12 flex gap-16">
        <ProductDetail
          title="FLOU Cloud"
          :products="[
            {
              name: 'FLOU Compute',
              description:
                'Elastic Compute Service, Compute High Performance, Auto Scaling, Container',
            },
            {
              name: 'FLOU Network',
              description: 'Elastic IP, Server Load Balancer',
            },
            {
              name: 'FLOU Security',
              description:
                'Anti DDoS, Web Application Firewall WAF, Server Guard',
            },
            {
              name: 'FLOU Storage',
              description: 'Object Storage Service, Block Storage',
            },
          ]"
        />
        <div class="flex-1 flex flex-col gap-8">
          <ProductDetail
            title="Telkom Cloud"
            :products="[
              {
                name: 'Telkom Cloud Compute',
                description:
                  ' Virtual server service with CPU and RAM resources',
              },
              {
                name: 'Telkom Cloud Network',
                description:
                  'Public or Private Cloud infrastructure support service that enable communication',
              },
            ]"
          />
          <ProductDetail
            title="Backup Service"
            :products="[
              {
                name: 'Cloud BackUp Service Veem',
                description:
                  'Object Storage Service (OSS) is an encrypted object storage service',
              },
              {
                name: 'Cloud BackUp HBR',
                description:
                  'Object Storage Service (OSS) is an encrypted object storage service',
              },
            ]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductList from '../components/ProductList.vue';
import ProductDetail from '../components/ProductDetail.vue';

export default {
  components: { ProductList, ProductDetail },
};
</script>

<style></style>
