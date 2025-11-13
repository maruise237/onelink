<template>
  <main class="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
    <div class="text-center">
      <div
        v-if="acc.i"
        class="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto"
      >
        <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
      </div>
      <h1 v-if="acc.n" class="text-2xl font-bold mt-4 text-slate-800">
        {{ acc.n }}
      </h1>
      <p v-if="acc.d" class="text-sm mt-2 text-slate-600">
        {{ acc.d }}
      </p>
    </div>
    <div
      v-if="!allSocialLinksAreEmpty"
      class="flex items-center justify-center flex-wrap"
    >
      <span v-if="acc.f" class="p-1">
        <a :href="acc.f" target="_blank" rel="noopener | noreferrer">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3.5 6H13V6h2.5V4h-4v6h4v2h-4v8h-2v-8H7v-2h2.5V6H7V4h4.5v2H14v2.5z"
            />
          </svg>
        </a>
      </span>
      <span v-if="acc.t" class="p-1">
        <a :href="acc.t" target="_blank" rel="noopener | noreferrer">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M22.46 6c-.8.35-1.65.58-2.5.68a4.37 4.37 0 0 0 1.9-2.4c-.88.52-1.85.9-2.88 1.1a4.36 4.36 0 0 0-7.44 3.97A12.39 12.39 0 0 1 3.32 5.1a4.36 4.36 0 0 0 1.35 5.82a4.32 4.32 0 0 1-2-.55v.05a4.36 4.36 0 0 0 3.5 4.27a4.41 4.41 0 0 1-1.97.07a4.36 4.36 0 0 0 4.07 3.03a8.77 8.77 0 0 1-5.4 1.86a8.9 8.9 0 0 1-1.04-.06a12.32 12.32 0 0 0 6.67 1.95c8 0 12.38-6.62 12.38-12.38c0-.19 0-.38-.01-.56a8.83 8.83 0 0 0 2.16-2.24z"
            />
          </svg>
        </a>
      </span>
      <span v-if="acc.ig" class="p-1">
        <a :href="acc.ig" target="_blank" rel="noopener | noreferrer">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m6.4 2.4a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 0 1 0-2.4M12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6z"
            />
          </svg>
        </a>
      </span>
      <span v-if="acc.m" class="p-1">
        <a :href="acc.m" target="_blank" rel="noopener | noreferrer">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z" />
          </svg>
        </a>
      </span>
      <span v-if="acc.tg" class="p-1">
        <a :href="acc.tg" target="_blank" rel="noopener | noreferrer">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="m9.417 15.181l.398 4.145c.298 2.522 1.77 3.125 3.48 2.064l3.396-3.353a2.404 2.404 0 0 0 .148-.124l4.282-3.953c2.096-1.942.593-4.962-2.126-5.467l-13.59-2.617C2.964 2.378.847 4.18.91 6.702l1.493 9.479c.073 2.523 1.83 3.03 3.498 1.999l3.518-2.001z"
            />
          </svg>
        </a>
      </span>
      <span v-if="acc.w" class="p-1">
        <a :href="`https://wa.me/${acc.w}`" target="_blank" rel="noopener | noreferrer">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.42 1.29 4.88L2 22l5.29-1.42c1.4.78 2.98 1.21 4.66 1.21h.01c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.91-9.91zM12.04 20.1c-1.47 0-2.88-.4-4.1-1.12l-.29-.17l-3.06.82l.84-2.99l-.19-.31c-.8-1.28-1.23-2.76-1.23-4.31c0-4.49 3.65-8.13 8.13-8.13c2.21 0 4.29.87 5.75 2.33c1.46 1.46 2.33 3.54 2.33 5.75c0 4.49-3.65 8.13-8.13 8.13zm4.24-6.19c-.23-.12-1.35-.67-1.56-.74c-.21-.07-.36-.12-.52.12c-.15.23-.59.74-.72.89c-.13.15-.26.17-.48.05c-.23-.12-1.02-.38-1.95-1.2c-.72-.64-1.2-1.43-1.34-1.68c-.14-.25-.01-.38.11-.5c.1-.11.23-.28.34-.43c.11-.14.15-.25.23-.41c.07-.16.04-.3-.02-.42c-.06-.12-.52-1.25-.71-1.7c-.19-.45-.38-.39-.52-.39c-.13-.01-.28-.01-.44-.01c-.16 0-.41.06-.62.3c-.22.25-.83.81-.83 1.97c0 1.16.85 2.29 1 2.44c.14.15 1.67 2.56 4.05 3.57c.59.25 1.05.4 1.41.51c.59.19 1.13.16 1.56.1c.48-.07 1.35-.55 1.54-1.08c.19-.53.19-.98.13-1.08c-.06-.1-.21-.16-.44-.28z"
            />
          </svg>
        </a>
      </span>
      <span v-if="acc.y" class="p-1">
        <a :href="acc.y" target="_blank" rel="noopener | noreferrer">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.9.25-2.22.4-4.24.46c-2.02.07-3.8.1-5.02.1h-.14c-1.22 0-2.99-.03-5.01-.1c-2.02-.06-3.34-.19-4.24-.46c-.9-.25-1.48-.83-1.73-1.73C.16 15.8 0 14.19 0 12l.01-1.71c.06-.8.15-1.49.28-1.9c.25-.9.83-1.48 1.73-1.73c.9-.25 2.22-.4 4.24-.46c2.02-.07 3.8-.1 5.01-.1h.14c1.22 0 2.99.03 5.01.1c2.02.06 3.34.19 4.24.46c.9.25 1.48.83 1.73 1.73z"
            />
          </svg>
        </a>
      </span>
      <span v-if="acc.e" class="p-1">
        <a :href="`mailto:${acc.e}`" target="_blank" rel="noopener | noreferrer">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z" />
          </svg>
        </a>
      </span>
      <span v-if="acc.gh" class="p-1">
        <a :href="acc.gh" target="_blank" rel="noopener | noreferrer">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.89 1.53 2.34 1.09 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.94c0-1.1.39-1.99 1.03-2.69c-.1-.25-.45-1.27.1-2.64c0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.82a9.58 9.58 0 0 1 2.5-.34c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.37.2 2.39.1 2.64c.64.7 1.03 1.6 1.03 2.69c0 3.84-2.33 4.68-4.57 4.93c.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12A10 10 0 0 0 12 2z"
            />
          </svg>
        </a>
      </span>
      <span v-if="acc.l" class="p-1">
        <a :href="acc.l" target="_blank" rel="noopener | noreferrer">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.16v7.38h2.16v-3.57a1.68 1.68 0 0 1 1.68-1.68c.93 0 1.58.63 1.58 1.58v3.67h2.16zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm.25 1.7h-2.16v7.38h2.16V10.26z"
            />
          </svg>
        </a>
      </span>
    </div>
    <ul class="space-y-2">
      <ExternalLink
        v-for="(link, id) in acc.ls"
        :label="link.l"
        :icon="link.i"
        :url="link.u"
        :key="id"
      />
    </ul>
  </main>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const allSocialLinksAreEmpty = computed(() => {
  return (
    !props.acc.f &&
    !props.acc.t &&
    !props.acc.ig &&
    !props.acc.m &&
    !props.acc.tg &&
    !props.acc.w &&
    !props.acc.y &&
    !props.acc.e &&
    !props.acc.gh &&
    !props.acc.l
  );
});
</script>
<style scoped></style>
