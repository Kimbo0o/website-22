<template>
  <li
    class="bg-white border-black border-[3px] rounded shadow-bold transition-all hover:-translate-y-2 ease-in-out duration-300"
    :class="props.project.hoverShadowClass"
  >
    <a :href="props.project.demoUrl || props.project.githubUrl" target="_blank">
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
              title="React"
              src="/react.png"
              alt="React"
            />
            <img
              v-else-if="technology === Technology.Next"
              title="Next.js"
              src="/next.png"
              alt="Next.js"
            />
            <img
              v-else-if="technology === Technology.Redux"
              title="Redux"
              src="/redux.png"
              alt="Redux"
            />
            <img
              v-else-if="technology === Technology.Sass"
              title="Sass"
              src="/sass.png"
              alt="Sass"
            />
            <img
              v-else-if="technology === Technology.Tailwindcss"
              title="Tailwindcss"
              src="/tailwind.png"
              alt="Tailwindcss"
            />
            <img
              v-else-if="technology === Technology.ThreeJS"
              title="ThreeJS"
              src="/threejs.svg"
              alt="ThreeJS"
              class="w-6 h-6"
            />
            <img
              v-else-if="technology === Technology.Vue"
              title="Vue.js"
              src="/vue.svg"
              alt="Vue.js"
              class="w-6 h-6"
            />
            <img
              v-else-if="technology === Technology.Tauri"
              title="Tauri"
              src="/tauri.svg"
              alt="Tauri"
              class="w-6 h-6"
            />
          </li>
        </ul>
        <ul class="flex gap-4">
          <li>
            <a
              class="font-gothic flex items-center gap-2"
              :href="props.project.githubUrl"
              target="_blank"
            >
              <span> GitHub </span>
              <ArrowTopRightOnSquareIcon class="w-4 h-4" />
            </a>
          </li>
          <li v-if="props.project.demoUrl">
            <a
              class="font-gothic flex items-center gap-2"
              :href="props.project.demoUrl"
              target="_blank"
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
  ThreeJS,
  Vue,
  Tauri,
}
export type Project = {
  imageUrl: string;
  title: string;
  technologies: Technology[];
  githubUrl: string;
  demoUrl?: string;
  hoverShadowClass:
    | "hover:shadow-pink-500"
    | "hover:shadow-blue-600"
    | "hover:shadow-purple-600"
    | "hover:shadow-red-500";
};
</script>

<script lang="ts" setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid";
const props = defineProps<{
  project: Project;
}>();
</script>
