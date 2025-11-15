<template>
  <div class="h-screen grid grid-cols-3 divide-x bg-gray-50">
    <div class="col-span-2 h-screen flex flex-col bg-slate-50">
      <div class="flex-1 overflow-y-auto p-12">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <app-form-profile
            v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.t"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:email="data.e"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
        />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
        <app-form-hr />
        <app-form-theme v-model="data.theme" />
        </div>
      </div>
      <div class="border-t bg-white flex items-center">
        <button
          @click="prefillDemoData"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> {{ $t('addDemoData') }} </span>
        </button>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> {{ $t('publish') }} </span>
        </button>
        <a
          href="https://github.com/fayazara/onelink"
          target="_blank"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> {{ $t('github') }} </span>
        </a>
        <div class="flex-1" />
        <button
          @click="toggleLang"
          class="h-12 flex items-center space-x-2 px-4 border-l text-xs font-medium bg-white text-slate-700"
        >
          <span>{{ locale === 'en' ? 'Français' : 'English' }}</span>
        </button>
      </div>
    </div>
    <app-form-preview :data="data" />
    <a
      href="https://wa.me/237676634549"
      target="_blank"
      class="absolute bottom-4 right-4 bg-white rounded-lg shadow px-4 py-2 font-medium text-sm text-gray-600 hover:bg-gray-100"
    >
      Made by kamtech
    </a>
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";

const { locale, setLocale } = useI18n();
const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  ls: [],
  theme: 'light',
});

const prefillDemoData = () => {
  data.value = {
    n: "John Snow",
    d: "I’m John Snow, the king in the north. I know Nothing.",
    i: "https://i.insider.com/56743fad72f2c12a008b6cc0",
    f: "https://www.facebook.com/john_snow",
    t: "https://twitter.com/john_snow",
    ig: "https://www.instagram.com/john_snow",
    e: "mail@john_snow.cc",
    gh: "https://github.com/john_snow",
    tg: "https://t.me/john_snow",
    w: "+918888888888",
    y: "https://youtube.com/@john_snow",
    l: "https://linkedin.com/john_snow",
    ls: [
      {
        l: "My Website",
        i: "ph:globe-duotone",
        u: "https://example.com",
      },
      {
        l: "Amazon wishlist",
        i: "ant-design:amazon-outlined",
        u: "https://amazon.in",
      },
      {
        l: "React JS course",
        i: "grommet-icons:reactjs",
        u: "https://reactjs.org/",
      },
      {
        l: "Donate for our cause",
        i: "iconoir:donate",
        u: "https://who.int",
      },
      {
        l: "Download my resume",
        i: "ph:file-pdf",
        u: "https://google.com",
      },
    ],
  };
};

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};

const toggleLang = () => {
  setLocale(locale.value === 'en' ? 'fr' : 'en');
};
</script>
