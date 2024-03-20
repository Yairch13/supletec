// router/index.js

import HeaderComponent from '../components/Header.vue';
import FooterComponent from '../components/Footer.vue';
import PageWithHeaderAndFooter from '../views/PageWithHeaderAndFooter.vue';

const routes = [
  {
    path: '/page',
    name: 'page',
    components: {
      header: HeaderComponent,
      default: PageWithHeaderAndFooter,
      footer: FooterComponent,
    }
  },
  // Otras rutas...
];

export default routes;
