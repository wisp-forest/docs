import { readFileSync } from 'fs';
import kbd from 'markdown-it-kbd';
import { defineConfig, HeadConfig } from 'vitepress';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';
import { projectMeta } from '../components/meta.ts';

const mcfunction = JSON.parse(readFileSync('mcfunction-grammar.json', 'utf-8'));

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wisp Forest Docs",
  description: "Here at Wisp Forest© we employ Wisp Tech Support™ magic, which solves your problem when you ask",
  cleanUrls: true,
  markdown: {
    math: true,
    shikiSetup(shiki) {
      shiki.loadLanguageSync(mcfunction);
    },
    config(md) {
      md.use(kbd);
      md.use(tabsMarkdownPlugin);
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  sitemap: {
    hostname: 'https://docs.wispforest.io/'
  },
  lastUpdated: true,

  transformHead(ctx) {
    const entryDir = ctx.pageData.filePath.split('/')[0];
    if (!(entryDir in projectMeta)) return [];

    const headData: HeadConfig[] = [];
    headData.push(['meta', { property: 'og:site_name', content: ctx.siteData.title }]);

    if (ctx.pageData.filePath != 'index.md') {
      headData.push(['meta', { property: 'og:title', content: ctx.pageData.title }]);
    } else {
      headData.push(['meta', { property: 'og:title', content: 'Home' }]);
    }

    const { icon, description } = projectMeta[entryDir];

    headData.push(['meta', { property: 'og:description', content: description }]);
    headData.push(['meta', { property: 'og:image', content: `https://docs.wispforest.io${ctx.siteData.base}${icon}` }]);

    if ('color' in projectMeta[entryDir]) {
      const { color } = projectMeta[entryDir];
      headData.push(['meta', { property: 'theme-color', content: color }]);
    }

    return headData;
  },

  themeConfig: {
    logo: '/icon-header.png',

    // nav: [
    //   { text: 'Home', link: '/' },
    // ],

    outline: 'deep',

    editLink: {
      pattern: 'https://github.com/wisp-forest/docs/edit/main/:path'
    },

    sidebar: {
      '/isometric-renders/': [
        { text: 'Home', link: '/isometric-renders/home' },
        { text: '/isorender', link: '/isometric-renders/slash_isorender' },
        { text: 'Options', link: '/isometric-renders/options' },
      ],
      '/owo/': [
        { text: 'Setup', link: '/owo/setup' },
        { text: 'Features', link: '/owo/features' },
        { text: 'Registration', link: '/owo/registration' },
        { text: 'Item Groups', link: '/owo/item-groups' },
        { text: 'Recipe Remainders', link: '/owo/recipe-remainders' },
        { text: 'Networking', link: '/owo/networking' },
        { text: 'Endecs', link: '/owo/endec' },
        { text: 'Rich Translations', link: '/owo/rich-translations' },
        { text: 'System Properties', link: '/owo/system-properties' },
        { text: 'RenderDoc Integration', link: '/owo/renderdoc' },
        {
          text: 'Config',
          link: '/owo/config/index',
          items: [
            { text: 'Getting Started', link: '/owo/config/getting-started.md' },
            { text: 'Constraints', link: '/owo/config/constraints.md' },
            { text: 'Annotations', link: '/owo/config/annotations.md' },
            { text: 'Synchronization', link: '/owo/config/synchronization.md' },
            { text: 'Options', link: '/owo/config/options.md' },
          ]
        },
        {
          text: 'UI',
          link: '/owo/ui/index',
          items: [
            { text: 'Getting Started', link: '/owo/ui/getting-started.md' },
            { text: 'owo-ui Academy', link: '/owo/ui/academy.md' },
            { text: 'Component Basics', link: '/owo/ui/component-basics.md' },
            { text: 'Layout Basics', link: '/owo/ui/layout-basics.md' },
            { text: 'Utility Components', link: '/owo/ui/utility-components.md' },
            {
              text: 'owo-ui components',
              link: '/owo/ui/components/index.md',
              collapsed: true,
              items: [
                { text: 'Button', link: '/owo/ui/components/button.md', },
                { text: 'Checkbox', link: '/owo/ui/components/checkbox.md', },
                { text: 'Collapsible Container', link: '/owo/ui/components/collapsible-container.md', },
                { text: 'Dropdown', link: '/owo/ui/components/dropdown.md', },
                { text: 'Flow Layout', link: '/owo/ui/components/flow-layout.md', },
                { text: 'Grid Layout', link: '/owo/ui/components/grid-layout.md', },
                { text: 'Label', link: '/owo/ui/components/label.md', },
                { text: 'Scroll Container', link: '/owo/ui/components/scroll-container.md', },
                { text: 'Slider', link: '/owo/ui/components/slider.md', },
                { text: 'Templates', link: '/owo/ui/components/templates.md', },
              ]
            },
          ]
        },
      ],
      '/numismatic-overhaul/': [
        { text: 'Home', link: '/numismatic-overhaul/home' },
        { text: 'Shops', link: '/numismatic-overhaul/shop' },
        { text: 'Villager Trade Data Format', link: '/numismatic-overhaul/trades' },
      ],
      '/lavender/': [
        { text: 'Setup', link: '/lavender/setup' },
        { text: 'Getting Started', link: '/lavender/getting-started' },
        { text: 'Metadata Format', link: '/lavender/metadata-format' },
        { text: 'Markdown Syntax', link: '/lavender/markdown-syntax' },
        { text: 'Structures', link: '/lavender/structures' },
        { text: 'Writing Extensions', link: '/lavender/writing-extensions' },
      ],
      '/accessories/': [
        { text: 'Home', link: '/accessories/home' },
        { text: 'FAQ', link: '/accessories/faq' },
        {
          text: 'General',
          items: [
            { text: 'Creating and Modifying Slots', link: '/accessories/general/slot_types', },
            { text: 'Default Slots', link: '/accessories/general/defaulted_slots', },
            { text: 'Adjusting Accessory Equipablity', link: '/accessories/general/binding_accessories_to_slots', },
            { text: 'Binding Slots to Entities', link: '/accessories/general/binding_slots_to_entities', },
            { text: 'Creating Slot Groups', link: '/accessories/general/slot_groups', },
            { text: 'Adjusting Slot Amount', link: '/accessories/general/adjusting_slot_amount', },
          ]
        },
        {
          text: 'Developer',
          items: [
            { text: 'Setup Environment', link: '/accessories/developer/dev_setup', },
            { text: 'API Fundamentals', link: '/accessories/developer/api_fundamentals', },
            { text: 'Rendering API Breakdown', link: '/accessories/developer/rendering_api', },
            { text: 'Available API Events', link: '/accessories/developer/api_events', },
            { text: 'ItemStack Data Components', link: '/accessories/developer/itemstack_components', },
          ]
        },
      ],
      '/alloy-forgery/': [
        { text: 'Home', link: '/alloy-forgery/home' },
        { text: 'Adding Recipes and Fuels', link: '/alloy-forgery/adding-recipes-and-fuels' },
        { text: 'How to build a Forge', link: '/alloy-forgery/building-a-forge' },
        { text: 'Recipe Adaptation', link: '/alloy-forgery/recipe-adaptation' },
        { text: 'Defining new Forges though Data', link: '/alloy-forgery/defining-a-forge' },
      ],
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/xrwHKktV2d' },
      { icon: 'github', link: 'https://github.com/wisp-forest/docs' },
    ]
  }
})
