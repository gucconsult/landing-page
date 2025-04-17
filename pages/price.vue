<template>
  <Navbar />
  <main class="mt-16">
    <SectionLayout>
      <Button as="NuxtLink" to="/" size="text" variant="text" :icon="ArrowLeft" icon-position="left" class="mb-5">
        Kembali
      </Button>
      <Heading title="Paket Spesial" subtitle="Dapatkan paket spesial dengan harga yang terjangkau." />
      <div
        class="grid w-full grid-cols-1 gap-5 mt-8 place-items-center sm:place-items-stretch sm:grid-cols-2 lg:grid-cols-4">
        <PricingCard v-for="service in servicesPrice" :key="service.id" :title="service.title" :price="service.price"
          :benefits="service.benefits" :isShowMore="service.benefits.length > LIMIT" :link="service.link" />
      </div>
    </SectionLayout>
    <SectionLayout>
      <Heading title="Harga Satuan" subtitle="Anda juga dapat memilih layanan satuan berikut." />
      <div class="grid w-full grid-cols-1 gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <PricingCard v-for="service in servicePriceUnits" :key="service.id" :title="service.title"
          :price="service.price" :link="service.link" />
      </div>
    </SectionLayout>
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import { servicesPrice, servicePriceUnits } from "~/data/data";
import PricingCard from "~/components/ui/PricingCard.vue";
import SectionLayout from "~/layouts/SectionLayout.vue";
import Heading from "~/components/ui/Heading.vue";
import Button from "~/components/ui/Button.vue";
import ArrowLeft from "~/components/icon/ArrowLeft.vue";
const LIMIT = 7
</script>
