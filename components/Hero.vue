<template>
  <section class="w-full h-dvh lg:h-[580px] overflow-hidden relative">
    <NuxtImg src="assets/images/hero.webp" alt="GlowUp Career Consultant"
      class="object-cover object-center w-full h-dvh lg:h-[580px]" width="1024" height="580" :placeholder="[1024, 580]"
      sizes="100vw sm:580px" />
    <div class="absolute top-0 left-0 w-full h-full bg-background/80">
      <div class="max-w-7xl mx-auto px-4 flex items-center h-full">
        <div class="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 class="text-[42px] font-bold text-white leading-snug">Temukan Versi Profesional Terbaik Dirimu</h1>
          <p class="text-white">Bersama Glowup Career Consultant, bangun personal branding yang kuat dan raih
            karier impianmu dengan
            bimbingan ahli yang terpercaya.</p>
          <div class="flex gap-3">
            <Button as="a" size="lg" href="https://api.whatsapp.com/send/?phone=6285920284085" :icon="Whatsapp"
              icon-position="left" :target="'_blank'">
              Konsultasi
            </Button>
            <Button as="NuxtLink" variant="secondary" size="lg" to="/price">
              Layanan Kami
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Button from '~/components/ui/Button.vue';
import Whatsapp from '~/components/icon/Whatsapp.vue';
</script>