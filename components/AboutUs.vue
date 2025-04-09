<template>
  <SectionLayout>
    <div class="flex flex-col items-center gap-5 lg:flex-row">
      <img :src="aboutImage" alt="Interview Session" class="w-full rounded-sm lg:w-1/2">
      <div class="space-y-2">
        <h3 class="text-2xl font-bold">Apa itu GlowUp Career Consultant?</h3>
        <article class="text-sm leading-relaxed text-justify">
          GlowUp Career Consultant adalah start-up pengembangan karir yang menawarkan layanan lengkap, termasuk
          pembuatan/review CV, optimasi portofolio, LinkedIn, pelatihan interview, serta career coaching. Career
          coaching dirancang untuk membantu individu menetapkan strategi karir yang efektif dan mencapai tujuan
          profesional. Dilengkapi dengan bonus seperti revisi tanpa batas, konsultasi, e-book psikotes, dan akses grup
          lowongan kerja, GlowUp Career Consultant menjadi solusi holistik untuk meningkatkan peluang kerja dan personal
          branding di dunia kerja modern.
        </article>
      </div>
    </div>
  </SectionLayout>
</template>

<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue';
import aboutImage from "~/assets/images/about-us.webp"
</script>