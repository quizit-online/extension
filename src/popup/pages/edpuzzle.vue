<template>
  <div class="py-3 h-full box-border">
    <Return />
    <div class="mt-20" v-if="tokens.length == 0">
      <h2 class="text-3xl md:text-4xl font-bold tracking-wide text-center mb-2">Edpuzzle</h2>
      <p class="text-base max-w-full font-normal text-gray-600 leading-relaxed mb-5 2xl:px-80 text-center">
        Click button to get edpuzzle tokens
      </p>

      <Button class="mx-auto" @click="getTokens">Get tokens</Button>
    </div>
    <div class="mt-20" v-else>
      <div
        v-for="(token, i) in tokens.slice(0, 3)"
        :key="i"
        class="p-3 shadow rounded-md mb-4 cursor-pointer"
        @click="copyToken(token, i)"
      >
        <p class="font-semibold text-base text-gray-800 text-center" v-if="token !== 'copied'">
          Token {{ i + 1 }} {{ i === 0 ? "(click to copy)" : null }}
        </p>
        <p v-else class="font-semibold text-base text-gray-800 text-center">Copied successfully</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/button.vue";
import Return from "../../components/return.vue";

export default {
  components: { Button, Return },
  data() {
    return {
      tokens: [],
    };
  },
  mounted() {
    this.tokens = [];
  },
  methods: {
    copyToken(token, index) {
      if (token === "copied") return;

      navigator.clipboard.writeText(token);
      this.tokens[index] = "copied";

      this.$forceUpdate();
    },
    getTokens() {
      chrome.runtime.sendMessage({ type: "token" }, (tokens) => {
        this.tokens = tokens;
      });
    },
  },
};
</script>
