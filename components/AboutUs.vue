<template>
  <SectionLayout id="tentang">
    <div class="flex flex-col items-center lg:flex-row gap-4 lg:gap-12">
      <NuxtImg src="/assets/images/about-us.webp" alt="Interview Session" class="w-full rounded-lg max-w-xl" width="860"
        height="560" loading="lazy" :placeholder="[860, 560]" size="100vw sm:860px" />
      <div class="space-y-2">
        <h3 class="text-2xl font-bold text-dark">Apa itu GlowUp Career Consultant?</h3>
        <article class="leading-relaxed text-justify text-dark">
          <!-- GlowUp Career Consultant adalah start-up pengembangan karir yang menawarkan layanan lengkap, termasuk
          pembuatan/review CV, optimasi portofolio, LinkedIn, pelatihan interview, serta career coaching. Career
          coaching dirancang untuk membantu individu menetapkan strategi karir yang efektif dan mencapai tujuan
          profesional. Dilengkapi dengan bonus seperti revisi tanpa batas, konsultasi, e-book psikotes, dan akses grup
          lowongan kerja, GlowUp Career Consultant menjadi solusi holistik untuk meningkatkan peluang kerja dan personal
          branding di dunia kerja modern. -->
          GlowUp Career Consultant adalah perusahaan yang bergerak di bidang jasa pengembangan karier, didirikan pada
          Februari 2025 dengan tujuan membantu para profesional dan pencari kerja untuk meningkatkan daya saing di dunia
          kerja. Kami menyediakan layanan yang dirancang secara profesional untuk membantu klien mencapai kesuksesan
          dalam perjalanan karier mereka.
        </article>
      </div>
    </div>
  </SectionLayout>
  <SectionLayout bgColor="bg-background text-white">
    <h1 class="font-bold text-center text-3xl mb-16">Visi dan Misi</h1>
    <div class="space-y-10">
      <div class="px-2">
        <h1 class="font-bold text-2xl mb-3">Visi</h1>
        <ul>
          <li>Menjadi mitra terpercaya dalam pengembangan karier dan membantu klien mencapai potensi maksimal di dunia
            kerja.</li>
        </ul>
      </div>
      <div class="px-2">
        <h1 class="font-bold text-2xl mb-3">Misi</h1>
        <ul class="list-disc pl-5">
          <li>
            Memberikan layanan berkualitas tinggi dan berorientasi pada hasil.
          </li>
          <li>
            Meningkatkan daya saing klien di pasar kerja melalui strategi yang terarah.
          </li>
          <li>
            Menjadi konsultan karier yang mendukung pertumbuhan dan kesuksesan jangka panjang klien.
          </li>
        </ul>
      </div>
    </div>
  </SectionLayout>
</template>

<script lang="ts" setup>
import SectionLayout from '~/layouts/SectionLayout.vue';
</script>