<template>
  <div class="pb-7 pt-4 w-full content-center flex flex-col gap-4">
    <h1 class="text-2xl md:text-4xl font-bold tracking-wide mx-auto my-2">
      <a href="https://quizit.online" target="_blank">Quizit</a>
    </h1>

    <div
      class="shadow-card m-auto flex items-center rounded-xl p-4 cursor-pointer w-full h-16 r"
      v-for="service in services"
      :key="service.name"
      @click="$router.push({ name: service.name })"
    >
      <img :src="service.icon" class="h-8 rounded" />
      <p class="font-medium text-lg text-gray-800 ml-4">{{ service.name }}</p>
    </div>
  </div>
</template>

<script>
import quizizz from "../../assets/services/quizizz.png";
import edpuzzle from "../../assets/services/edpuzzle.png";
import brainly from "../../assets/services/brainly.png";
import testportal from "../../assets/services/testportal.png";

export default {
  data() {
    return {
      services: [
        {
          name: "Quizizz",
          icon: quizizz,
        },
        {
          name: "Edpuzzle",
          icon: edpuzzle,
        },
        {
          name: "Brainly",
          icon: brainly,
        },
        {
          name: "Testportal",
          icon: testportal,
        },
      ],
    };
  },
};
</script>
