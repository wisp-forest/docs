import { readFileSync } from 'fs';
import kbd from 'markdown-it-kbd';
import { defineConfig } from 'vitepress';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';

const mcfunction = JSON.parse(readFileSync('mcfunction-grammar.json', 'utf-8'));

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wisp Forest Docs",
  description: "Here at Wisp Forest© we employ Wisp Tech Support™ magic, which solves your problem when you ask",
  cleanUrls: true,
  base: "/next/",
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
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

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
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wisp-forest/docs' }
    ]
  }
})
