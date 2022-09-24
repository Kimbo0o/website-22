<template>
  <div class="h-screen">
    <TheHeader class="fixed w-full" />
    <div class="pt-24 flex flex-col justify-between h-full">
      <div class="py-8">
        <slot />
      </div>
      <TheFooter />
    </div>
  </div>
</template>

<style>
body {
  @apply bg-bg;
}
</style>
