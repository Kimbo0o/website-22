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
