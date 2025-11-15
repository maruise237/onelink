<template>
  <li class="bg-white shadow rounded-lg hover:shadow-md transition-shadow duration-300">
    <a
      :href="url"
      target="_blank"
      class="flex items-center space-x-4 px-6 py-3"
    >
      <span class="flex-1 text-slate-800 text-center text-md font-semibold">
        {{ label }}
      </span>
    </a>
  </li>
</template>
<script setup>
const props = defineProps({
  label: String,
  icon: String,
  url: String,
});
</script>
