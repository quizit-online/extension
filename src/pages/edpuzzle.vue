
<script setup lang="ts">
import Button from "../components/Button.vue";
import GoBackButton from '../components/GoBackButton.vue'
import { ref } from "vue";
import Card from "../components/Card.vue";
import Alert from '../components/Alert.vue'
import { IResponse } from '../background/messages-events'
import Link from "../components/Link.vue";

const tokens = ref<string[]>([]);
const errorMessage = ref("")

const copyToken = (token: string, index: number) => {
  if (token === "copied") return;
  navigator.clipboard.writeText(token);
  tokens.value[index] = "copied";
};


const getTokens = async () => {
  const response: IResponse = await chrome.runtime.sendMessage({ type: "edpuzzleToken" });

  if (!response.success) {
    errorMessage.value = response.message
    return
  }

  errorMessage.value = ""

  tokens.value = response.data
};
</script>

<template>
  <div class="py-3 h-full box-border mb-9">
    <GoBackButton class="mb-5" />

    <Alert v-if="errorMessage">{{ errorMessage }}</Alert>
    <div v-if="tokens.length == 0">
      <h2 class="text-3xl md:text-4xl font-bold tracking-wide text-center ">
        Edpuzzle
      </h2>
      <p class="text-base max-w-full font-normal text-gray-600 mb-3 mt-1 text-center">
        Allows you to gather tokens that you can use later to log in on our
        <Link to="https://quizit.online/services/edpuzzle">
        edpuzzle cheat
        </Link>
      </p>

      <Button class="mx-auto" @click="getTokens">Get tokens</Button>
    </div>
    <div v-else>
      <Card v-for="(token, i) in tokens.slice(0, 3)" :key="i" @click="copyToken(token, i)" style="padding: 0.75rem;">
        <p class="font-medium text-base text-gray-700 text-center">
          {{ token !== 'copied' ? ` ${i + 1}. Token ${i === 0 ? "(click to copy)" : ''}` : `Copied to clipboard` }}
        </p>
      </Card>
    </div>
  </div>
</template>