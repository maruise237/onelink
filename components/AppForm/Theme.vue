<template>
  <base-form-section title="Theme" description="Select a theme for your page">
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="grid grid-cols-2 gap-8 bg-white px-4 py-5 sm:p-6">
        <div>
          <label for="theme" class="block text-sm font-medium text-gray-700"
            >Theme</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <select
              id="theme"
              name="theme"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
              class="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const props = defineProps(["modelValue"]);
</script>
