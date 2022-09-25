<template>
  <div class="h-screen">
    <TheHeader class="fixed w-full z-10" />
    <div class="pt-[4.5rem] md:pt-24 h-full grid grid-rows-[1fr_min-content]">
      <slot class="justify-self-center" />
      <TheFooter />
    </div>
  </div>
</template>

<style>
body {
  @apply bg-bg;
}
</style>

<script lang="ts" setup>
useHead({
  title: "Kim Daniel Koch",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/icon-180.png",
    },
  ],
  meta: [
    {
      name: "description",
      content: "Web Developer from Paderborn",
    },
    {
      name: "og:description",
      content: "Web Developer from Paderborn",
    },
    {
      name: "og:title",
      content: "Kim Daniel Koch",
    },
    {
      name: "og:url",
      content: "kimdanielkoch.de",
    },
    {
      name: "og:type",
      content: "website",
    },
  ],
});
</script>
