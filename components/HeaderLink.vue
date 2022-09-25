<template>
  <NuxtLink class="inline-block">
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
