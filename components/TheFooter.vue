<template>
  <footer class="border-t-[3px] border-black">
    <BaseCenter class="flex justify-between items-center py-6">
      <NuxtLink to="/privacy" class="font-gothic text-xl">
        Imprint & Privacy Policy
      </NuxtLink>
      <div class="hidden md:block font-gothic text-xl justify-self-center">
        <span>Made with&nbsp;</span>
        <HeartIcon class="w-8 h-8 inline-block" />
        <span>&nbsp;in Paderborn </span>
      </div>
      <BaseBox class="bg-accent-orange flex gap-4 py-4">
        <a href="https://github.com/Kimbo0o">
          <img src="~/assets/github.svg" />
        </a>
        <a href="https://www.linkedin.com/in/kim-daniel-koch-5785ab191/">
          <img src="~/assets/linkedin.svg" />
        </a>
        <a href="https://twitter.com/KimDanielKoch">
          <img src="~/assets/twitter.svg" />
        </a>
        <a href="mailto:contact@kimdanielkoch.de">
          <img src="~/assets/mail.svg" />
        </a>
      </BaseBox>
    </BaseCenter>
  </footer>
</template>

<script lang="ts" setup>
import { HeartIcon } from "@heroicons/vue/24/outline";
</script>
