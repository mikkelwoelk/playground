import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    siteNavigation: [
      { title: 'home', info: "let's go home", url: '/' },
      { title: 'vue directives', info: 'a list of all the built-in directives within Vue.', url: 'directives' },
      { title: 'testarea', info: 'a place to quickly test code.', url: 'testarea' },
      { title: 'todo list', info: 'a todo list project.', url: 'todo' },
      {
        title: 'scroll animations',
        info: 'A practice place for making modern web animations.',
        url: 'scroll-animation',
      },
      { title: 'custom loaders', info: 'A practice place for making custom loaders', url: 'custom-loaders' },
    ],
  }),
  actions: {
    setSiteNavigation(data) {
      this.siteNavigation = data;
    },
  },
});
