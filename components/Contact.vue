<template>
  <div class="flex flex-col lg:flex-row justify-between max-w-7xl mt-8 mx-auto px-4 gap-5">
    <div class="space-y-4">
      <Heading title="Kirim pesan anda ke kami" subtitle="Anda dapat menghubungi kami melalui media sosial kami" />
      <ContactItem v-for="contact in contacts" :key="contact.id" :icon="contact.icon" :text="contact.text" />
    </div>
    <img :src="personMessage" alt="Send me a message">
  </div>
</template>

<script lang="ts" setup>
import Heading from '~/components/ui/Heading.vue';
import personMessage from '~/assets/images/person-message.svg';
import ContactItem from '~/components/ui/ContactItem.vue';
import { contacts } from '~/data/data';
</script>