<template>
  <SiteNavigation />
  <NuxtLayout>
    <main id="main">
      <NuxtPage />
      <div class="t-page-main__cover">
        <div class="w-full h-full grid place-content-center">
          <div class="w-full h-full">
            <div class="t-page-main__cover-text flex w-full h-full">
              <span>W</span>
              <span>&lt;</span>
              <span>/</span>
              <span>></span>
              <span>L</span>
              <span>K</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </NuxtLayout>
  <SiteFooter />
</template>

<script setup></script>

<style lang="postcss">
.t-page-main-enter-active,
.t-page-main-leave-active {
  @apply duration-1000 ease-in-out;
}
.t-page-main-enter {
  @apply opacity-80 -translate-y-20;
}
.t-page-main-leave-to {
  @apply opacity-80 translate-y-20;
}

.t-page-main__cover {
  @apply hidden fixed justify-center items-center left-0 top-0 w-full h-full bg-secondary dark:bg-dark-secondary;
  /* background: radial-gradient(circle, rgba(96, 142, 144, 1) 0%, rgba(53, 92, 116, 1) 50%, rgba(21, 39, 64, 1) 100%); */
  background-color: rgb(224, 229, 235);
  z-index: 1100;
}
.t-page-main__cover:first-child,
.t-page-main-leave-active ~ .t-page-main__cover {
  @apply flex;
  animation: t-page-main__cover--part-1 500ms forwards;
  animation-iteration-count: 1;
}
.t-page-main-enter-active ~ .t-page-main__cover {
  @apply flex;
  animation: t-page-main__cover--part-2 1000ms forwards;
  animation-iteration-count: 1;
}

@keyframes t-page-main__cover--part-1 {
  0% {
    clip-path: inset(0 0 100% 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}
@keyframes t-page-main__cover--part-2 {
  0% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(100% 0 0 0);
  }
}

.t-page-main__cover-text span {
  /* font-family: 'Poppins', sans-serif; */
  font-size: 15vw;
  color: rgb(224, 229, 235);
  text-shadow: -0.3rem -0.6rem 1rem rgba(242, 242, 242, 0.502), 0.3rem 0.6rem 1rem rgba(0, 0, 0, 0.05);
  outline: none;
}

/* @media screen and (prefers-color-scheme: dark) {
  .t-page-main__cover-text span {
    color: #344955;
    text-shadow: -0.3rem -0.6rem 1rem #374e5c, 0.3rem 0.6rem 1rem #2e414b;
  }
} */
.t-page-main__cover-text {
  gap: 2.5vw;
}
.t-page-main__cover:first-child .t-page-main__cover-text,
.t-page-main-leave-active ~ .t-page-main__cover .t-page-main__cover-text {
  animation: spread-text 1000ms cubic-bezier(0, 0.55, 0.45, 1) forwards;
  animation-iteration-count: 1;
}

@keyframes spread-text {
  0% {
    gap: 0;
    opacity: 0;
  }
  100% {
    gap: 2.5vw;
  }
}
</style>
