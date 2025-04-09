<template>
  <SectionLayout bgColor="bg-primary">
    <Heading title="Layanan yang kami sediakan" subtitle="Pilih layanan yang sesuai dengan kebutuhanmu" />
    <div
      class="grid w-full grid-cols-1 gap-5 mt-8 place-items-center sm:place-items-stretch sm:grid-cols-2 lg:grid-cols-4">
      <template v-for="service in servicesPrice" :key="service.id">
        <PricingCard :title="service.title" :price="service.price" :benefits="service.benefits"
          :isShowMore="service.benefits.length > LIMIT" />
      </template>
    </div>
    <Button>
      Lihat semua
      <Arrow />
    </Button>
  </SectionLayout>
</template>

<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue';
import Heading from '~/components/ui/Heading.vue';
import PricingCard from '~/components/ui/PricingCard.vue';
import Arrow from '~/components/icon/Arrow.vue';
import Button from '~/components/ui/Button.vue';
import { servicesPrice } from '~/data/services.ts';
const LIMIT = 7
</script>