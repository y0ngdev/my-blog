<script lang="ts" setup>
import {Button} from "~/components/ui/button";
import {Icon} from '@iconify/vue'
import Avatar from "~/components/ui/avatar/Avatar.vue";

const colorMode = useColorMode()

const toggleTheme = () => {
  if (colorMode.preference == 'dark') {

    colorMode.preference = 'light'
  } else {

    colorMode.preference = 'dark'
  }
}

const headline = "Design";
const title = "UX review presentations";
const alt = "UX review presentations";
const image =
    "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const description =
    "How do you create compelling presentations that wow your colleagues and impress your managers?";
const date = "30 Jan 2024";
const userImage = "https://api.dicebear.com/7.x/lorelei/svg?flip=false";
const userName = "John Doe";
const link = "#";
</script>


<template>


    <div class="h-dvh">
      <header
          class="header-font  focus:backdrop-blur bg-background-bg z-20 sticky top-0 py-4 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200">
        <div class="flex items-center justify-between">
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

      <div class="container mx-auto px-6">

        <section class="mb-16">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <p class="text-base">Hello
                <!--            <Twemoji class="motion-safe:animate-bounce" emoji="1F590"/>-->
              </p>
              <div
                  class="header-font mb-6 text-3xl font-semibold tracking-tight  sm:text-5xl xl:text-6xl lg:leading-[3.7rem] leading-tight lg:min-w-[700px]"
              >
                I'm <span class="text-[#7456FF]">Prosper Ugbovo</span>
              </div>
              <p class="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                Technical Writer & Backend Engineer.
              </p>
              <div class=" my-6 w-20 bg-[#999999] h-0.5 rounded-md"></div>

              <p class="mt-6 text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                I'm a person who has a keen interest in the design layout. I think presenting an attractive design is a
                matter of concern in developing a branding of products. To creates a good design, I focus on proper
                composition and visual decoration details in order to make it more professional. For the time being, I’m
                developing the skill for acquiring the UI/UX design for dynamic application and web development.
              </p>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <div style="opacity: 1; transform: none;">
                <svg class="lg:w-[450px] lgl:h-[450px] w-full h-full" fill="none" viewBox="0 0 1273 906"
                     xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path class="path"
                          d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898"
                          stroke="url(#paint-linear)" stroke-opacity="0.6" stroke-width="2"></path>
                  </g>
                  <path
                      d="M154 586C154 583.239 156.239 581 159 581V581C161.761 581 164 583.239 164 586V586C164 588.761 161.761 591 159 591V591C156.239 591 154 588.761 154 586V586Z"
                      fill="#27B173"></path>
                  <path
                      d="M154 393C154 390.239 156.239 388 159 388V388C161.761 388 164 390.239 164 393V393C164 395.761 161.761 398 159 398V398C156.239 398 154 395.761 154 393V393Z"
                      fill="#27B173"></path>
                  <path
                      d="M788 551C788 548.239 790.239 546 793 546V546C795.761 546 798 548.239 798 551V551C798 553.761 795.761 556 793 556V556C790.239 556 788 553.761 788 551V551Z"
                      fill="#27B173"></path>
                  <path
                      d="M1108 551C1108 548.239 1110.24 546 1113 546V546C1115.76 546 1118 548.239 1118 551V551C1118 553.761 1115.76 556 1113 556V556C1110.24 556 1108 553.761 1108 551V551Z"
                      fill="#27B173"></path>
                  <path
                      d="M1108 398C1108 395.239 1110.24 393 1113 393V393C1115.76 393 1118 395.239 1118 398V398C1118 400.761 1115.76 403 1113 403V403C1110.24 403 1108 400.761 1108 398V398Z"
                      fill="#27B173"></path>
                  <path
                      d="M788 237C788 234.239 790.239 232 793 232V232C795.761 232 798 234.239 798 237V237C798 239.761 795.761 242 793 242V242C790.239 242 788 239.761 788 237V237Z"
                      fill="#27B173"></path>
                  <defs>
                    <linearGradient id="paint-linear" gradientUnits="userSpaceOnUse" x1="1272.23" x2="506.242"
                                    y1="479.474"
                                    y2="-216.277">
                      <stop stop-color="#27b173"></stop>
                      <stop offset="0.619553" stop-color="#1a663f"></stop>
                      <stop offset="0.93102" stop-color="#26312d"></stop>
                    </linearGradient>
                    <clipPath>
                      <rect fill="white" height="906" width="1273"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <!---->
          </div>
          <div class="flex justify-end items-center gap-3">
            Find Me On:
            <Button class="rounded-full text-foreground bg-background-bg" size="icon"
                    variant="outline">
              <img alt="github"
                   class=" h-[1.2rem] w-[1.2rem]"
                   src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"/>
              <!---->
            </Button>
          </div>
        </section>
        <div class=" py-12">
          <div class="flex flex-col md:flex-row md:justify-between">
            <div>
              <h3 class="mb-5 text-3xl font-semibold lg:text-4xl capitalize">My latest articles</h3>
              <p class="text-lg text-muted-foreground lg:text-xl">
                Here are a few past design projects I've worked on. Want to see more? <span>Email me</span>
              </p>
            </div>
            <Button class="hidden shrink-0 whitespace-nowrap md:flex">View all posts</Button>
          </div>

          <div class="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-3">
            <div v-for="item in 3" class="group" :key="item">
              <NuxtLink :to="link">
                <div class="relative mb-5 overflow-clip">
                  <img
                      v-if="image"
                      :alt="alt"
                      :src="image"
                      class="object-fill h-[240px] w-full group-hover:scale-125 group-hover:rotate-2 duration-300"
                  />

                </div>
              </NuxtLink>
              <p v-if="headline" class="mb-2 text-sm font-semibold text-primary">{{ headline }}</p>
              <NuxtLink :to="link">
                <p class="mb-2 text-xl font-semibold lg:text-2xl">{{ title }}</p>
              </NuxtLink>
              <p v-if="description" class="mb-5 line-clamp-2 text-ellipsis text-muted-foreground">
                {{ description }}
              </p>
              <div class="flex items-center">
                <Avatar
                    v-if="userImage"
                    :src="userImage"
                    :alt="userName"
                    class="mr-3 rounded-full bg-background shadow ring-1 ring-ring/30"
                />
                <div>
                  <p v-if="userName" class="text-sm font-semibold">{{ userName }}</p>
                  <p v-if="date" class="text-sm text-muted-foreground">{{ date }}</p>
                </div>
              </div>
            </div>
          </div>
          <Button class="mt-10 w-full shrink-0 whitespace-nowrap md:hidden">View all posts</Button>
        </div>
    </div>
    </div>




</template>
<!---->
<style scoped></style>
