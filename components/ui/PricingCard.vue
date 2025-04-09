<template>
    <div class="flex flex-col items-center max-w-sm gap-3 px-5 py-6 bg-white rounded-sm">
        <span class="text-2xl font-extrabold">{{ title }}</span>
        <span class="text-3xl font-black text-black">{{ price }}</span>
        <a href="#" class="block w-full px-3 py-2 font-bold text-center text-white rounded-sm bg-secondary">
            Pesan Sekarang
        </a>
        <ul class="w-full space-y-2">
            <li v-for="benefit in benefits" :key="benefit.id" class="flex gap-1">
                <Check />
                <span class="text-sm">{{ benefit }}</span>
            </li>
        </ul>
        <button class="text-sm font-semibold cursor-pointer text-secondary" v-if="isShowMore"
            @click="toggleFullBenefit">
            {{ showFullBenefit ? 'Lebih sedikit' : 'Lebih banyak' }}
        </button>
    </div>
</template>

<script lang="ts" setup>
import Check from '~/components/icon/Check.vue';
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
    return showFullBenefit.value ? props.benefits : props.benefits.slice(0, LIMIT);
});

const toggleFullBenefit = () => {
    showFullBenefit.value = !showFullBenefit.value;
}
</script>