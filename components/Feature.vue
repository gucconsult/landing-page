<template>
  <SectionLayout>
    <Heading title="Kami akan menemani perjalanan sukses anda" subtitle="Bersama kami anda akan mendapatkan" />
    <div class="mt-8 flex gap-5 flex-col md:flex-row">
      <FeatureDetail v-for="feature in features" :key="feature.id" :title="feature.title"
        :description="feature.description" :icon="feature.icon" />
    </div>
  </SectionLayout>
</template>

<script lang="ts" setup>
import SectionLayout from "~/layouts/SectionLayout.vue";
import Heading from "./ui/Heading.vue";
import FeatureDetail from "./ui/FeatureDetail.vue";
import { features } from "~/data/data";
</script>