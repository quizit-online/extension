<template>
  <button
    class="flex justify-center items-center w-max h-13 px-8 py-3 bg-blue text-base font-medium text-white rounded-xl whitespace-nowrap hover:shadow-primary transition-shadow duration-300"
    @click="$emit('click')"
  >
    <svg
      v-show="loading"
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "ButtonComponent",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
