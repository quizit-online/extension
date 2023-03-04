<script setup lang="ts">
import GoBackButton from '../components/GoBackButton.vue'
import { ref } from 'vue'

const solutions = ref(0)

chrome.storage.local.get('solutionsUnlocked', ({ solutionsUnlocked }) => {
  solutions.value = solutionsUnlocked
})
</script>
<template>
  <div class="py-3 h-full box-border mb-9">
    <GoBackButton class="mb-5" />
    <h2 class="text-3xl font-bold tracking-wide text-center">Brainly</h2>
    <p
      class="text-base max-w-full font-normal text-gray-600 mb-3 mt-1 text-center"
    >
      Unlimited access to all solutions on brainly.com with no limits and no
      ads.
    </p>

    <div
      class="text-base text-gray-600 flex flex-col justify-center text-center"
    >
      <p class="font-bold text-xl text-black">{{ solutions }}</p>
      Solutions unlocked thanks to us.
    </div>
  </div>
</template>
