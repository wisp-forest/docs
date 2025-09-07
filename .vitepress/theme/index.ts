// https://vitepress.dev/guide/custom-theme
import 'iconify-icon';
import type { Theme } from 'vitepress';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import Icon from '../../components/Icon.vue';
import VersionMarker from '../../components/VersionMarker.vue';
import './custom.css';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app)
    app.component('Icon', Icon);
    app.component('VersionMarker', VersionMarker);
  }
} satisfies Theme
