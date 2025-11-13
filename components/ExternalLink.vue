<template>
  <li class="bg-white shadow rounded-lg">
    <a
      :href="url"
      target="_blank"
      class="flex items-center space-x-4 px-4 py-2"
    >
      <span class="flex-1 text-slate-800 text-center text-sm font-medium">
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
