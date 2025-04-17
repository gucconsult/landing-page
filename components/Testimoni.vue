<template>
  <SectionLayout id="testimoni">
    <Heading position="center" title="Apa kata mereka?"
      subtitle="Testimoni pengguna layanan GlowUp Career Consultant" />
    <div class="relative overflow-hidden mt-8 py-1">
      <div class="flex w-max gap-5 animate-slide">
        <div class="flex gap-5">
          <TestimoniCard v-for="testimoni in testimonials" :key="'first-' + testimoni.id" :name="testimoni.name"
            :job="testimoni.job" :review="testimoni.review" :date="testimoni.date" />
        </div>
        <div class="flex gap-5" aria-hidden="true">
          <TestimoniCard v-for="testimoni in testimonials" :key="'second-' + testimoni.id" :name="testimoni.name"
            :job="testimoni.job" :review="testimoni.review" :date="testimoni.date" />
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue';
import Heading from '~/components/ui/Heading.vue';
import TestimoniCard from '~/components/ui/TestimoniCard.vue';
import { testimonials } from "~/data/data";
</script>