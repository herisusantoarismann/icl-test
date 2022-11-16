<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div>
      <header class="text-white">
        <div
          class="mb-0.5 mx-0.5 px-16 xl:px-52 py-4 flex justify-between bg-[#033d2e]"
        >
          <img src="../assets/logo.png" alt="logo" class="w-12" />
          <div class="flex items-center gap-4">
            <Icon icon="fa-solid fa-magnifying-glass" />
            <Button
              text="Contact Us"
              size="small"
              variant="outline"
              icon="fa-regular fa-envelope"
              iconStart="start"
            />
            <Button
              text="English"
              size="small"
              variant="outline"
              icon="fa-solid fa-caret-down"
              iconStart="end"
            />
            <Button text="Login" size="small" />
          </div>
        </div>
        <div
          class="px-16 xl:px-52 py-6 mx-0.5 flex justify-between bg-[#033d2e]"
        >
          <div class="flex gap-6 xl:gap-8">
            <Dropdown :options="['Why FLOU', 'B']" :isActive="true" />
            <Dropdown :options="['Products', 'B']" />
            <Dropdown :options="['Solutions', 'B']" />
            <Dropdown :options="['Partners', 'B']" />
            <Dropdown :options="['Pricing', 'B']" />
            <Dropdown :options="['Resources']" />
            <Dropdown :options="['Support']" />
            <Dropdown :options="['Marketplace']" />
          </div>
          <Button text="Let's Get Started" size="medium" />
        </div>
      </header>
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
            Explore FLOU Cloud's expanding range of high-performance cloud
            products including large-scale computing, storage resources, and Big
            Data processing capabilities for users around the world.
          </p>
          <div class="flex gap-8">
            <Button text="Get Started for Free" size="large" />
            <Button text="Contact Sales" variant="light" size="large" />
          </div>
        </div>
      </section>
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
            <p
              class="text-lg underline text-[#4BB543] font-medium cursor-pointer"
            >
              Explore Infrastructure as a Service Products (IaaS)
            </p>
            <p c>
              Helping to accelerate the business through strong and resilient
              infrastructure for unlimited customer experience.
            </p>
          </div>
          <div class="mt-12 flex gap-16">
            <div class="flex-1 flex flex-col gap-2">
              <h4 class="font-medium text-[#4BB543] text-lg">FLOU Cloud</h4>
              <hr />
              <div class="my-4 flex flex-col gap-12">
                <div class="flex items-center">
                  <img src="../assets/logo.png" alt="" class="w-16" />
                  <div class="flex flex-col gap-2">
                    <p class="text-lg text-[#4BB543]">FLOU Compute</p>
                    <p class="text-sm">
                      Elastic Compute Service, Compute High Performance, Auto
                      Scaling, Container
                    </p>
                  </div>
                </div>
                <div class="flex items-center">
                  <img src="../assets/logo.png" alt="" class="w-16" />
                  <div class="flex flex-col gap-2">
                    <p class="text-lg text-[#4BB543]">FLOU Network</p>
                    <p class="text-sm">Elastic IP, Server Load Balancer</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <img src="../assets/logo.png" alt="" class="w-16" />
                  <div class="flex flex-col gap-2">
                    <p class="text-lg text-[#4BB543]">FLOU Security</p>
                    <p class="text-sm">
                      Anti DDoS, Web Application Firewall WAF, Server Guard
                    </p>
                  </div>
                </div>
                <div class="flex items-center">
                  <img src="../assets/logo.png" alt="" class="w-16" />
                  <div class="flex flex-col gap-2">
                    <p class="text-lg text-[#4BB543]">FLOU Storage</p>
                    <p class="text-sm">Object Storage Service, Block Storage</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-1 flex flex-col gap-8">
              <div class="flex flex-col gap-2">
                <h4 class="text-lg text-[#4BB543] font-medium">Telkom Cloud</h4>
                <hr />
                <div class="my-4 flex flex-col gap-12">
                  <div class="flex items-center">
                    <img src="../assets/logo.png" alt="" class="w-16" />
                    <div class="flex flex-col gap-2">
                      <p class="text-lg text-[#4BB543]">Telkom Cloud Compute</p>
                      <p class="text-xs">
                        Virtual server service with CPU and RAM resources
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <img src="../assets/logo.png" alt="" class="w-16" />
                    <div class="flex flex-col gap-2">
                      <p class="text-lg text-[#4BB543]">Telkom Cloud Network</p>
                      <p class="text-xs">
                        Public or Private Cloud infrastructure support service
                        that enable communication
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <h4 class="text-lg text-[#4BB543] font-medium">
                  Backup Service
                </h4>
                <hr />
                <div class="my-4 flex flex-col gap-12">
                  <div class="flex items-center">
                    <img src="../assets/logo.png" alt="" class="w-16" />
                    <div class="flex flex-col gap-2">
                      <p class="text-lg text-[#4BB543]">
                        Cloud BackUp Service Veem
                      </p>
                      <p class="text-xs">
                        Object Storage Service (OSS) is an encrypted object
                        storage service
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <img src="../assets/logo.png" alt="" class="w-16" />
                    <div class="flex flex-col gap-2">
                      <p class="text-lg text-[#4BB543]">Cloud BackUp HBR</p>
                      <p class="text-xs">
                        Object Storage Service (OSS) is an encrypted object
                        storage service
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
  </div>
</template>

<script>
import Button from '../components/Button.vue';
import Icon from '../components/Icon.vue';
import Dropdown from '../components/Dropdown.vue';
import LinkGroup from '../components/LinkGroup.vue';
import ProductList from '../components/ProductList.vue';

export default {
  name: 'DashboardPage',
  components: { Button, Icon, Dropdown, LinkGroup, ProductList },
};
</script>

<style></style>
