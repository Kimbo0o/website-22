<template>
  <BaseCenter>
    <main class="flex items-center justify-center gap-16">
      <div class="flex flex-col items-center lg:items-start">
        <div>
          <div>Hello there, I'm</div>
          <div class="relative">
            <h1
              class="my-2 font-fancy text-7xl font-bold uppercase leading-tight"
            >
              Kim Daniel <br />
              Koch
            </h1>
            <img
              src="~/assets/underline1.svg"
              class="absolute left-0 top-[4.5rem]"
            />
            <img
              src="~/assets/underline2.svg"
              class="absolute left-0 bottom-1"
            />
          </div>
        </div>
        <img class="mt-6 lg:hidden" src="~/assets/hero.png" />
        <div class="mt-4">
          I am a <b>Web Developer</b> from <b>Paderborn, Germany</b>. I work as
          a Frontend Developer at <b>enra GmbH</b> where I mainly use
          <b>Vue.js, Tailwind CSS, TypeScript</b> and <b>GraphQL</b> to build
          great user experiences.<br />
          In my free time I like to tinker with new technologies and frameworks.
          Being able to always have a new challenge that needs to be solved is
          what I love the most about Programming. I also like to ride bikes and
          listen to Podcasts. My current favorites are Syntax. and
          programmier.bar.
        </div>

        <div class="flex gap-6 w-full justify-center mt-12">
          <img src="~/assets/hello-arrow.svg" />
          <a href="mailto:contact@kimdanielkoch.de" class="inline-block">
            <BaseBox class="bg-accent-green -rotate-3">Say Hello!</BaseBox>
          </a>
        </div>
      </div>
      <img class="hidden lg:block" src="~/assets/hero.png" />
    </main>
  </BaseCenter>
</template>
