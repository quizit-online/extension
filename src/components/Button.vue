<script lang="ts" setup>
withDefaults(
  defineProps<{
    loading?: boolean
  }>(),
  {
    loading: false,
  },
)
</script>
<template>
  <button
    class="flex justify-center items-center w-max sm:w-max h-10 px-5 bg-blue-500 font-medium text-white rounded-2xl whitespace-nowrap hover:opacity-80 duration-300 text-sm focus:outline-none focus-visible:outline-none cursor-pointer"
  >
    <svg
      v-show="loading"
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <slot />
  </button>
</template>
