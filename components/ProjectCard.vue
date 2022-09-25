<template>
  <li class="bg-white border-black border-[3px] rounded shadow-bold">
    <div class="flex flex-col items-center gap-2 mb-4">
      <img
        :src="props.project.imageUrl"
        class="rounded-b border-black border-l-[3px] border-b-[3px] border-r-[3px] shadow-sm"
      />
      <h3 class="font-gothic font-medium text-2xl">
        {{ props.project.title }}
      </h3>
      <ul class="flex gap-2">
        <!-- <li v-for="technology in props.project.technologies" :key="technology">
          <img
            v-if="technology === Technology.React"
            src="~/assets/react.png"
          />
          <img
            v-else-if="technology === Technology.Next"
            src="~/assets/Next.png"
          />
          <img
            v-else-if="technology === Technology.Redux"
            src="~/assets/Redux.png"
          />
          <img
            v-else-if="technology === Technology.Sass"
            src="~/assets/Sass.png"
          />
          <img
            v-else-if="technology === Technology.Tailwindcss"
            src="~/assets/Tailwind.png"
          />
        </li> -->
      </ul>
      <ul class="flex gap-4">
        <li>
          <a
            class="font-gothic flex items-center gap-2"
            :href="props.project.githubUrl"
          >
            <span> GitHub </span>
            <ArrowTopRightOnSquareIcon class="w-4 h-4" />
          </a>
        </li>
        <li>
          <a
            class="font-gothic flex items-center gap-2"
            :href="props.project.demoUrl"
          >
            <span> Demo </span>
            <ArrowTopRightOnSquareIcon class="w-4 h-4" />
          </a>
        </li>
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
export enum Technology {
  React,
  Redux,
  Sass,
  Next,
  Tailwindcss,
}
export type Project = {
  imageUrl: string;
  title: string;
  technologies: Technology[];
  githubUrl: string;
  demoUrl: string;
};
</script>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid";
const props = defineProps<{
  project: Project;
}>();
</script>
