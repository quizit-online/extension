<template>
  <div class="py-3 h-full box-border">
    <Return />
    <div class="mt-16">
      <h2 class="text-3xl md:text-4xl font-bold tracking-wide text-center mb-2">Quizizz</h2>
      <p class="text-base max-w-full font-normal text-gray-600 leading-relaxed mb-5 text-center">
        Join a quiz and click the button below. More detailed instructions can be found in
        <a href="https://quizit.online/docs" target="_blank" class="text-blue font-medium">Docs</a>
      </p>

      <Button class="mx-auto" @click="executeScript">Open answers</Button>
    </div>
  </div>
</template>

<script>
import Button from "../../components/button.vue";
import Return from "../../components/return.vue";

export default {
  components: { Button, Return },
  methods: {
    executeScript() {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (/\/\/quizizz.com\//.test(tabs[0].url)) {
          chrome.scripting.executeScript({
            target: {
              tabId: tabs[0].id,
            },
            world: "MAIN",
            files: ["content-scripts/quizizz.js"],
          });
        }
      });
    },
  },
};
</script>
