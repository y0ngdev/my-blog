<script lang="ts" setup>
import {Button} from "~/components/ui/button";
import {Icon} from '@iconify/vue'

const colorMode = useColorMode()

const toggleTheme = () => {
  if (colorMode.preference == 'dark') {

    colorMode.preference = 'light'
  } else {

    colorMode.preference = 'dark'
  }
}


</script>

<template>
  <div>

    <div class="h-dvh">


      <header
          class="header-font   bg-background-bg z-20 sticky top-0 py-4 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200">
        <div class="container mx-auto flex items-center justify-between">
          <NuxtLink to="/">


            <NuxtImg

                src="/assets/img/yongdev.svg"
                alt="Company Logo"
                class="h-8 object-contain lg:h-12"
                title="Company Logo"
            />

          </NuxtLink>
          <nav class="sm:flex hidden items-center gap-5">
            <NuxtLink
                v-for="l in ['About', 'Projects','Blog']"
                :key="l"
                class=" text-muted-foreground transition-colors hover:text-foreground duration-300 dark:text-white"
                to="/"
            >{{ l }}
            </NuxtLink
            >
          </nav>
          <div class="flex items-center gap-x-4">
            <Button class="rounded-full text-foreground " size="icon" variant="outline" @click="toggleTheme">
              <Icon class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-180 dark:scale-0"
                    icon="radix-icons:moon"/>
              <Icon
                  class="absolute h-[1.2rem] w-[1.2rem] rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100"
                  icon="radix-icons:sun"/>
            </Button>
          </div>
        </div>
      </header>

    </div>

  </div>

  <!--  <div class="px-6 md:px-16">-->

  <!--    <section class="mb-16">-->
  <!--      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">-->
  <!--        <div class="mr-auto place-self-center lg:col-span-7">-->
  <!--          <p class="text-base">Hello-->
  <!--            <Twemoji class="motion-safe:animate-bounce" emoji="1F590"/>-->
  <!--          </p>-->
  <!--          <div-->
  <!--              class="sirin-font mb-6 text-3xl font-semibold tracking-tight  sm:text-5xl xl:text-6xl lg:leading-[3.7rem] leading-tight lg:min-w-[700px]"-->
  <!--          >-->
  <!--            I'm <span class="text-[#7456FF]">Prosper Ugbovo</span>-->
  <!--          </div>-->
  <!--          <p class="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">-->
  <!--            Technical Writer & Backend Engineer.-->
  <!--          </p>-->
  <!--          <div class=" my-6 w-20 bg-[#999999] h-0.5 rounded-md"></div>-->

  <!--          <p class="mt-6 text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">-->
  <!--            I'm a person who has a keen interest in the design layout. I think presenting an attractive design is a matter of concern in developing a branding of products. To creates a good design,  I focus on proper composition and visual decoration details in order to make it more professional. For the time being, I’m developing the skill for acquiring the UI/UX design for dynamic application and web development.-->
  <!--          </p>-->
  <!--        </div>-->
  <!--        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">-->
  <!--          <div style="opacity: 1; transform: none;">-->
  <!--            <svg class="lg:w-[450px] lgl:h-[450px] w-full h-full" fill="none" viewBox="0 0 1273 906"-->
  <!--                 xmlns="http://www.w3.org/2000/svg">-->
  <!--              <g>-->
  <!--                <path class="path"-->
  <!--                      d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898"-->
  <!--                      stroke="url(#paint-linear)" stroke-opacity="0.6" stroke-width="2"></path>-->
  <!--              </g>-->
  <!--              <path-->
  <!--                  d="M154 586C154 583.239 156.239 581 159 581V581C161.761 581 164 583.239 164 586V586C164 588.761 161.761 591 159 591V591C156.239 591 154 588.761 154 586V586Z"-->
  <!--                  fill="#27B173"></path>-->
  <!--              <path-->
  <!--                  d="M154 393C154 390.239 156.239 388 159 388V388C161.761 388 164 390.239 164 393V393C164 395.761 161.761 398 159 398V398C156.239 398 154 395.761 154 393V393Z"-->
  <!--                  fill="#27B173"></path>-->
  <!--              <path-->
  <!--                  d="M788 551C788 548.239 790.239 546 793 546V546C795.761 546 798 548.239 798 551V551C798 553.761 795.761 556 793 556V556C790.239 556 788 553.761 788 551V551Z"-->
  <!--                  fill="#27B173"></path>-->
  <!--              <path-->
  <!--                  d="M1108 551C1108 548.239 1110.24 546 1113 546V546C1115.76 546 1118 548.239 1118 551V551C1118 553.761 1115.76 556 1113 556V556C1110.24 556 1108 553.761 1108 551V551Z"-->
  <!--                  fill="#27B173"></path>-->
  <!--              <path-->
  <!--                  d="M1108 398C1108 395.239 1110.24 393 1113 393V393C1115.76 393 1118 395.239 1118 398V398C1118 400.761 1115.76 403 1113 403V403C1110.24 403 1108 400.761 1108 398V398Z"-->
  <!--                  fill="#27B173"></path>-->
  <!--              <path-->
  <!--                  d="M788 237C788 234.239 790.239 232 793 232V232C795.761 232 798 234.239 798 237V237C798 239.761 795.761 242 793 242V242C790.239 242 788 239.761 788 237V237Z"-->
  <!--                  fill="#27B173"></path>-->
  <!--              <defs>-->
  <!--                <linearGradient id="paint-linear" gradientUnits="userSpaceOnUse" x1="1272.23" x2="506.242" y1="479.474"-->
  <!--                                y2="-216.277">-->
  <!--                  <stop stop-color="#27b173"></stop>-->
  <!--                  <stop offset="0.619553" stop-color="#1a663f"></stop>-->
  <!--                  <stop offset="0.93102" stop-color="#26312d"></stop>-->
  <!--                </linearGradient>-->
  <!--                <clipPath>-->
  <!--                  <rect fill="white" height="906" width="1273"></rect>-->
  <!--                </clipPath>-->
  <!--              </defs>-->
  <!--            </svg>-->
  <!--          </div>-->
  <!--        </div>-->

  <!--      </div>-->
  <!--      <div class="flex justify-end items-center gap-3">-->
  <!--        Find Me On:-->
  <!--        <Button class="rounded-full text-foreground bg-background-bg" size="icon"-->
  <!--                variant="outline">-->
  <!--          <img alt="github"-->
  <!--               class=" h-[1.2rem] w-[1.2rem]"-->
  <!--               src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"/>-->

  <!--        </Button>-->
  <!--      </div>-->
  <!--    </section>-->
  <!--    <section class="mb-16">-->
  <!--      <h1 class="text-4xl font-bold tracking-tight mb-16">Latest Writings</h1>-->

  <!--      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">-->
  <!--        <Card class=" bg-secondary-bg">-->
  <!--          <CardHeader>-->

  <!--            <div class="h-56 rounded-sm overflow-clip  relative contain-size">-->

  <!--              <img-->
  <!--                  alt=""-->
  <!--                  class="h-56 w-full object-cover  hover:scale-125 hover:rotate-2 duration-300"-->
  <!--                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"-->
  <!--              />-->
  <!--            </div>-->
  <!--            <CardTitle class="text-2xl font-semibold tracking-tight max-w-sm">-->
  <!--              Sanity Webhooks and On-demand Revalidation in Nextjs-->
  <!--            </CardTitle>-->
  <!--            <CardDescription>-->
  <!--              <div class="flex items-center gap-x-4 text-sm">-->
  <!--                <div class="flex items-center gap-x-2">-->
  <!--                  <svg aria-hidden="true" fill="currentColor" height="1em" stroke="currentColor" stroke-width="0"-->
  <!--                       viewBox="0 0 20 20" width="1em" xmlns="http://www.w3.org/2000/svg">-->
  <!--                    <path clip-rule="evenodd"-->
  <!--                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"-->
  <!--                          fill-rule="evenodd"></path>-->
  <!--                  </svg>-->
  <!--                  <time datetime="2023-12-14T17:46:11.500Z">Dec 14, 2023</time>-->
  <!--                </div>-->
  <!--                <div class="flex items-center gap-x-2">-->
  <!--                  <svg fill="currentColor" height="1em" stroke="currentColor" stroke-width="0" viewBox="0 0 24 24"-->
  <!--                       width="1em" xmlns="http://www.w3.org/2000/svg">-->
  <!--                    <path-->
  <!--                        d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z"></path>-->
  <!--                  </svg>-->
  <!--                  <div class="">5 min</div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </CardDescription>-->

  <!--          </CardHeader>-->
  <!--          <CardContent class="grid gap-4">-->
  <!--            <p class="dark:text-zinc-400 text-zinc-600 text-[0.95rem]">Learn how to set up and trigger content updates-->
  <!--              in your Sanity Headless CMS site built in Nextjs using on-demand revalidation and GROQ-powered webhooks-->
  <!--              for delivering fast and non-cached content updates</p>-->


  <!--          </CardContent>-->

  <!--        </Card>-->
  <!--        <Card class=" bg-secondary-bg">-->
  <!--          <CardHeader>-->

  <!--            <div class="h-56 rounded-sm overflow-clip  relative contain-size">-->

  <!--              <img-->
  <!--                  alt=""-->
  <!--                  class="h-56 w-full object-cover  hover:scale-125 duration-300"-->
  <!--                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"-->
  <!--              />-->
  <!--            </div>-->
  <!--            <CardTitle class="text-2xl font-semibold tracking-tight max-w-sm">-->
  <!--              Sanity Webhooks and On-demand Revalidation in Nextjs-->
  <!--            </CardTitle>-->
  <!--            <CardDescription>-->
  <!--              <div class="flex items-center gap-x-4 text-sm">-->
  <!--                <div class="flex items-center gap-x-2">-->
  <!--                  <svg aria-hidden="true" fill="currentColor" height="1em" stroke="currentColor" stroke-width="0"-->
  <!--                       viewBox="0 0 20 20" width="1em" xmlns="http://www.w3.org/2000/svg">-->
  <!--                    <path clip-rule="evenodd"-->
  <!--                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"-->
  <!--                          fill-rule="evenodd"></path>-->
  <!--                  </svg>-->
  <!--                  <time datetime="2023-12-14T17:46:11.500Z">Dec 14, 2023</time>-->
  <!--                </div>-->
  <!--                <div class="flex items-center gap-x-2">-->
  <!--                  <svg fill="currentColor" height="1em" stroke="currentColor" stroke-width="0" viewBox="0 0 24 24"-->
  <!--                       width="1em" xmlns="http://www.w3.org/2000/svg">-->
  <!--                    <path-->
  <!--                        d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z"></path>-->
  <!--                  </svg>-->
  <!--                  <div class="">5 min</div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </CardDescription>-->

  <!--          </CardHeader>-->
  <!--          <CardContent class="grid gap-4">-->
  <!--            <p class="dark:text-zinc-400 text-zinc-600 text-[0.95rem]">Learn how to set up and trigger content updates-->
  <!--              in your Sanity Headless CMS site built in Nextjs using on-demand revalidation and GROQ-powered webhooks-->
  <!--              for delivering fast and non-cached content updates</p>-->


  <!--          </CardContent>-->

  <!--        </Card>-->
  <!--        <Card class=" bg-secondary-bg">-->
  <!--          <CardHeader>-->

  <!--            <div class="h-56 rounded-sm overflow-clip  relative contain-size">-->

  <!--              <img-->
  <!--                  alt=""-->
  <!--                  class="h-56 w-full object-cover  hover:scale-125 duration-300"-->
  <!--                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"-->
  <!--              />-->
  <!--            </div>-->
  <!--            <CardTitle class="text-2xl font-semibold tracking-tight max-w-sm">-->
  <!--              Sanity Webhooks and On-demand Revalidation in Nextjs-->
  <!--            </CardTitle>-->
  <!--            <CardDescription>-->
  <!--              <div class="flex items-center gap-x-4 text-sm">-->
  <!--                <div class="flex items-center gap-x-2">-->
  <!--                  <svg aria-hidden="true" fill="currentColor" height="1em" stroke="currentColor" stroke-width="0"-->
  <!--                       viewBox="0 0 20 20" width="1em" xmlns="http://www.w3.org/2000/svg">-->
  <!--                    <path clip-rule="evenodd"-->
  <!--                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"-->
  <!--                          fill-rule="evenodd"></path>-->
  <!--                  </svg>-->
  <!--                  <time datetime="2023-12-14T17:46:11.500Z">Dec 14, 2023</time>-->
  <!--                </div>-->
  <!--                <div class="flex items-center gap-x-2">-->
  <!--                  <svg fill="currentColor" height="1em" stroke="currentColor" stroke-width="0" viewBox="0 0 24 24"-->
  <!--                       width="1em" xmlns="http://www.w3.org/2000/svg">-->
  <!--                    <path-->
  <!--                        d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zM18 13h-6.75V6h2v5H18v2z"></path>-->
  <!--                  </svg>-->
  <!--                  <div class="">5 min</div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </CardDescription>-->

  <!--          </CardHeader>-->
  <!--          <CardContent class="grid gap-4">-->
  <!--            <p class="dark:text-zinc-400 text-zinc-600 text-[0.95rem]">Learn how to set up and trigger content updates-->
  <!--              in your Sanity Headless CMS site built in Nextjs using on-demand revalidation and GROQ-powered webhooks-->
  <!--              for delivering fast and non-cached content updates</p>-->


  <!--          </CardContent>-->

  <!--        </Card>-->

  <!--      </div>-->
  <!--      <div class="flex justify-center">-->

  <!--        <Button class="mt-16 bg-secondary-bg h-12" variant="outline">-->
  <!--          <NuxtLink to="/blog">-->

  <!--            <p class="flex items-center">View all Posts  </p>-->
  <!--          </NuxtLink>-->
  <!--        </Button>-->
  <!--      </div>-->

  <!--    </section>-->
  <!--    <section class="mb-16">-->
  <!--      <h1 class="text-4xl font-bold tracking-tight">-->
  <!--        Tools and Skills-->
  <!--      </h1>-->

  <!--    </section>-->
  <!--    <section class="mb-16">-->
  <!--      <h1 class="text-4xl font-bold tracking-tight">-->
  <!--        Newest Project-->
  <!--      </h1>-->

  <!--      <section>-->
  <!--        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">-->
  <!--          <header>-->
  <!--            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>-->

  <!--            <p class="mt-4 max-w-md text-gray-500">-->
  <!--              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure-->
  <!--              dicta incidunt est ipsam, officia dolor fugit natus?-->
  <!--            </p>-->
  <!--          </header>-->

  <!--          <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">-->
  <!--            <li>-->
  <!--              <a href="#" class="group block overflow-hidden">-->
  <!--                <img-->
  <!--                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"-->
  <!--                    alt=""-->
  <!--                    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"-->
  <!--                />-->

  <!--                <div class="relative bg-white pt-3">-->
  <!--                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">-->
  <!--                    Basic Tee-->
  <!--                  </h3>-->

  <!--                  <p class="mt-2">-->
  <!--                    <span class="sr-only"> Regular Price </span>-->

  <!--                    <span class="tracking-wider text-gray-900"> £24.00 GBP </span>-->
  <!--                  </p>-->
  <!--                </div>-->
  <!--              </a>-->
  <!--            </li>-->

  <!--            <li>-->
  <!--              <a href="#" class="group block overflow-hidden">-->
  <!--                <img-->
  <!--                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"-->
  <!--                    alt=""-->
  <!--                    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"-->
  <!--                />-->

  <!--                <div class="relative bg-white pt-3">-->
  <!--                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">-->
  <!--                    Basic Tee-->
  <!--                  </h3>-->

  <!--                  <p class="mt-2">-->
  <!--                    <span class="sr-only"> Regular Price </span>-->

  <!--                    <span class="tracking-wider text-gray-900"> £24.00 GBP </span>-->
  <!--                  </p>-->
  <!--                </div>-->
  <!--              </a>-->
  <!--            </li>-->

  <!--            <li>-->
  <!--              <a href="#" class="group block overflow-hidden">-->
  <!--                <img-->
  <!--                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"-->
  <!--                    alt=""-->
  <!--                    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"-->
  <!--                />-->

  <!--                <div class="relative bg-white pt-3">-->
  <!--                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">-->
  <!--                    Basic Tee-->
  <!--                  </h3>-->

  <!--                  <p class="mt-2">-->
  <!--                    <span class="sr-only"> Regular Price </span>-->

  <!--                    <span class="tracking-wider text-gray-900"> £24.00 GBP </span>-->
  <!--                  </p>-->
  <!--                </div>-->
  <!--              </a>-->
  <!--            </li>-->

  <!--            <li>-->
  <!--              <a href="#" class="group block overflow-hidden">-->
  <!--                <img-->
  <!--                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"-->
  <!--                    alt=""-->
  <!--                    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"-->
  <!--                />-->

  <!--                <div class="relative bg-white pt-3">-->
  <!--                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">-->
  <!--                    Basic Tee-->
  <!--                  </h3>-->

  <!--                  <p class="mt-2">-->
  <!--                    <span class="sr-only"> Regular Price </span>-->

  <!--                    <span class="tracking-wider text-gray-900"> £24.00 GBP </span>-->
  <!--                  </p>-->
  <!--                </div>-->
  <!--              </a>-->
  <!--            </li>-->
  <!--          </ul>-->
  <!--        </div>-->
  <!--      </section>-->
  <!--    </section>-->
  <!--  </div>-->

</template>

<style scoped></style>
