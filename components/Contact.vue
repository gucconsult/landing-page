<template>
  <SectionLayout id="kontak" className="flex flex-col gap-5 lg:flex-row justify-between pt-12" :withPadding=false>
    <div class="space-y-4">
      <Heading title="Kirim pesan anda ke kami" subtitle="Anda dapat menghubungi kami melalui media sosial kami" />
      <ContactItem v-for="contact in contacts" :key="contact.id" :icon="contact.icon" :text="contact.text"
        :link="contact.link" />
    </div>
    <component :is="PersonMessage" class="w-full max-w-xl h-auto" />
  </SectionLayout>
</template>

<script lang="ts" setup>
import Heading from '~/components/ui/Heading.vue';
import ContactItem from '~/components/ui/ContactItem.vue';
import { contacts } from '~/data/data';
import SectionLayout from '~/layouts/SectionLayout.vue';
import PersonMessage from './ui/PersonMessage.vue';
</script>