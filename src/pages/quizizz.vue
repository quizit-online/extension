<script setup lang="ts">
import GoBackButton from '../components/GoBackButton.vue'
import Button from "../components/Button.vue";
import { ref } from 'vue';
import Alert from '../components/Alert.vue'

const errorMessage = ref("")

const getCurrentTab = async () => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    return tabs[0]
}

const executeScript = async () => {
    const currentTab = await getCurrentTab()
    if (currentTab.url && /\/\/quizizz.com\//.test(currentTab.url)) {
        chrome.scripting.executeScript({
            target: {
                tabId: currentTab.id || 0,
            },
            world: "MAIN",
            files: ["src/inject/quizizz.js"],
        });

        errorMessage.value = ""

    } else { errorMessage.value = "You need to have quizizz tab open" }
}

</script>

<template>
    <div class="py-3 h-full box-border mb-9">
        <GoBackButton class="mb-5" />
        <Alert v-if="errorMessage">{{ errorMessage }}</Alert>

        <h2 class="text-3xl font-bold tracking-wide text-center ">
            Quizizz
        </h2>
        <p class="text-base max-w-full font-normal text-gray-600 mb-3 mt-1 text-center">
            Join a quiz and click the button below. More detailed instructions can be found in
        </p>
        <Button class="mx-auto" @click="executeScript">Get answers</Button>
    </div>
</template>