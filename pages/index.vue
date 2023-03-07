<template>
  <BaseCenter class="h-full">
    <main class="py-8 flex items-center justify-center gap-16 h-full">
      <div class="flex flex-col items-center lg:items-start">
        <div>
          <div>Hello there, I'm</div>
          <div class="relative">
            <h1
              class="my-2 font-fancy font-bold uppercase !leading-tight text-5xl md:text-7xl"
            >
              Kim Daniel <br />
              Koch
            </h1>
            <img
              src="~/assets/underline1.svg"
              class="absolute left-0 top-[2.9rem] md:top-[4.5rem]"
              alt=""
            />
            <img
              src="~/assets/underline2.svg"
              class="absolute left-0 bottom-[0.15rem] md:bottom-1"
              alt=""
            />
          </div>
        </div>
        <img
          class="mt-6 lg:hidden"
          srcset="
            ~/assets/profile-image.png    1x,
            ~/assets/profile-image@2x.png 2x
          "
          alt="profile-image"
        />
        <p class="mt-4">
          I am a <b>Frontend Developer</b> from <b>Paderborn, Germany</b>. I
          work at <b>enra GmbH</b> where I mainly use
          <b>Vue.js, Tailwind CSS, TypeScript</b> and <b>GraphQL</b> to build
          great user experiences.<br />
          In my free time I like to tinker with new technologies and web
          frameworks. Being able to always have a new challenge that needs to be
          solved is what I love the most about programming. I also like to ride
          bikes and listen to Podcasts. My current favorite Podcasts are
          <b>Syntax.</b> and <b>programmier.bar</b>.
        </p>

        <div class="flex gap-6 w-full justify-center mt-12">
          <img src="~/assets/hello-arrow.svg" alt="" />
          <a href="mailto:contact@kimdanielkoch.de" class="inline-block">
            <BaseBox class="bg-accent-green -rotate-3">Say Hello!</BaseBox>
          </a>
        </div>
      </div>
      <img
        class="hidden lg:block"
        srcset="~/assets/profile-image.png 1x, ~/assets/profile-image@2x.png 2x"
        alt="profile-image"
      />
    </main>
  </BaseCenter>
</template>
