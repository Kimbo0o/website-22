<template>
  <NuxtLink class="inline-block mx-2 md:mx-4">
    <BaseBox class="bg-accent-green">
      <slot />
    </BaseBox>
  </NuxtLink>
</template>

<style scoped>
a.router-link-active {
  text-decoration: underline;
  font-weight: 500;
}
</style>
