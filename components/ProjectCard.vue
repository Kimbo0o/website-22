<template>
  <li
    class="bg-white border-black border-[3px] rounded shadow-bold transition-all hover:-translate-y-2 ease-in-out duration-300"
    :class="props.project.hoverShadowClass"
  >
    <a :href="props.project.demoUrl">
      <div class="flex flex-col items-center gap-2 mb-4">
        <img
          :src="props.project.imageUrl"
          class="rounded-b border-black border-l-[3px] border-b-[3px] border-r-[3px] shadow-sm"
          alt="Project Preview"
        />
        <h3 class="font-gothic font-medium text-2xl">
          {{ props.project.title }}
        </h3>
        <ul class="flex gap-2">
          <li
            v-for="technology in props.project.technologies"
            :key="technology"
          >
            <img
              v-if="technology === Technology.React"
              src="/react.png"
              alt="React"
            />
            <img
              v-else-if="technology === Technology.Next"
              src="/next.png"
              alt="Next.js"
            />
            <img
              v-else-if="technology === Technology.Redux"
              src="/redux.png"
              alt="Redux"
            />
            <img
              v-else-if="technology === Technology.Sass"
              src="/sass.png"
              alt="Sass"
            />
            <img
              v-else-if="technology === Technology.Tailwindcss"
              src="/tailwind.png"
              alt="Tailwindcss"
            />
          </li>
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
    </a>
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
  hoverShadowClass:
    | "hover:shadow-pink-500"
    | "hover:shadow-blue-600"
    | "hover:shadow-purple-600";
};
</script>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid";
const props = defineProps<{
  project: Project;
}>();
</script>
