<template>
    <div
        class="flex flex-col items-center max-w-sm gap-3 px-5 py-6 bg-white rounded-sm shadow-sm border border-gray-200">
        <span class="text-2xl font-extrabold text-dark">{{ title }}</span>
        <span class="text-3xl font-black text-dark">{{ price }}</span>
        <Button as="a" :href="link" variant="primary" size="lg" class="w-full" target="_blank">Pesan Sekarang</Button>
        <ul class="w-full space-y-2">
            <li v-for="(benefit, index) in benefits" :key="index" class="flex gap-1">
                <Check />
                <span class="text-sm text-dark">{{ benefit }}</span>
            </li>
        </ul>
        <Button class="hover:text-amber-400" variant="text" v-if="isShowMore" @click="toggleFullBenefit">
            {{ showFullBenefit ? 'Lebih sedikit' : 'Lebih banyak' }}
        </Button>
    </div>
</template>

<script lang="ts" setup>
import Check from '~/components/icon/Check.vue';
import Button from './Button.vue';
const props = defineProps({
    title: String,
    price: String,
    link: String,
    benefits: Array,
    isShowMore: {
        type: Boolean,
        default: false
    }
})

const showFullBenefit = ref(false);
const LIMIT = 7;

const benefits = computed(() => {
    return showFullBenefit.value ? props.benefits : props.benefits?.slice(0, LIMIT);
});

const toggleFullBenefit = () => {
    showFullBenefit.value = !showFullBenefit.value;
}
</script>