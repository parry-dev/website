import { defineStore } from 'pinia';
import { ref } from 'vue';
import { SocialLinks } from 'src/models/common';

export default defineStore('common', () => {
  const socialLinks = ref<SocialLinks[]>([
    {
      title: 'Github',
      icon: 'fa-brands fa-github',
      link: 'https://github.com/rahulyadev',
    },
    {
      title: 'LinkedIn',
      icon: 'fa-brands fa-linkedin',
      link: 'https://www.linkedin.com/in/rahulyadev/',
    },
    {
      title: 'Twitter',
      icon: 'fa-brands fa-twitter',
      link: 'https://twitter.com/rahulyadevx',
    },
    {
      title: 'Leet code',
      icon: 'img:public/icons/leetcode.svg',
      link: 'https://leetcode.com/rahulyadev/',
    },
  ]);

  return {
    socialLinks,
  };
});
