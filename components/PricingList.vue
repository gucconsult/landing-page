<template>
  <SectionLayout bgColor="bg-background" id="layanan">
    <Heading variant="white" title="Layanan yang kami sediakan"
      subtitle="Pilih layanan yang sesuai dengan kebutuhanmu" />
    <div
      class="grid w-full grid-cols-1 gap-5 mt-8 place-items-center sm:place-items-stretch sm:grid-cols-2 lg:grid-cols-4">
      <PricingCard v-for="service in servicesPrice" :key="service.id" :title="service.title" :price="service.price"
        :benefits="service.benefits" :isShowMore="service.benefits.length > LIMIT" :link="service.link" />
    </div>
    <div class="w-full flex justify-center hover:underline lg:justify-end mt-5">
      <Button as="NuxtLink" to="/price" size="text" variant="text" :icon="ArrowRight" icon-position="right">
        Lihat Semua
      </Button>
    </div>
  </SectionLayout>
</template>

<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue';
import Heading from '~/components/ui/Heading.vue';
import PricingCard from '~/components/ui/PricingCard.vue';
import ArrowRight from '~/components/icon/ArrowRight.vue';
import { servicesPrice } from '~/data/data';
import Button from './ui/Button.vue';
const LIMIT = 7
</script>