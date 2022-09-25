<template>
  <BaseCenter>
    <div class="py-8">
      <h1 class="font-gothic font-medium text-5xl">Recent Projects</h1>
      <img src="~/assets/underline-projects.svg" class="mt-2" />
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </ul>
    </div>
  </BaseCenter>
</template>

<script lang="ts" setup>
import { Project, Technology } from "~~/components/ProjectCard.vue";
const projects: Project[] = [
  {
    imageUrl: "/pomodoro.png",
    title: "Pomodoro Timer",
    technologies: [Technology.React, Technology.Redux, Technology.Sass],
    githubUrl: "https://github.com/Kimbo0o/pomodoro-timer-pwa",
    demoUrl: "https://kk-pomodoro.netlify.app/",
  },
  {
    imageUrl: "/iptracker.png",
    title: "IP Address Tracker",
    technologies: [Technology.React, Technology.Next, Technology.Sass],
    githubUrl: "https://github.com/Kimbo0o/ip-address-tracker",
    demoUrl: "https://ip-tracker.kimdanielkoch.de/",
  },
  {
    imageUrl: "/chatapp.png",
    title: "Chat App Illustration",
    technologies: [Technology.React, Technology.Tailwindcss],
    githubUrl: "https://github.com/Kimbo0o/chat-app-illustration",
    demoUrl: "https://kk-chat-app-illustration.netlify.app/",
  },
];
</script>
