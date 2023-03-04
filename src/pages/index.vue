<script lang="ts" setup>
import quizizz from '../assets/quizizz.png'
import edpuzzle from '../assets/edpuzzle.png'
import brainly from '../assets/brainly.png'
import testportal from '../assets/testportal.png'
import Card from '../components/Card.vue'

const services = [
  {
    name: 'Quizizz',
    icon: quizizz,
  },
  {
    name: 'Edpuzzle',
    icon: edpuzzle,
  },
  {
    name: 'Brainly',
    icon: brainly,
  },
  {
    name: 'Testportal',
    icon: testportal,
  },
]

const version = chrome.runtime.getManifest().version
</script>

<template>
  <div class="pb-7 pt-4 w-full content-center flex flex-col gap-4">
    <div class="mx-1 flex">
      <span class="text-slate-700 cursor-pointer font-medium flex-grow">
        <p class="inline-flex items-center text-lg">
          <span class="text-blue-700">Quizit</span>.online
        </p>
      </span>

      <p class="text-lg font-medium text-slate-700">v.{{ version }}</p>
    </div>

    <Card
      v-for="service in services"
      :key="service.name"
      @click="$router.push({ name: service.name })"
    >
      <div class="flex items-center gap-x-3">
        <img :src="service.icon" class="h-8 rounded" />
        <p class="text-lg font-medium text-slate-700">{{ service.name }}</p>
      </div>
    </Card>
  </div>
</template>
