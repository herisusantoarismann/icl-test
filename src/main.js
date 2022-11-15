import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faMagnifyingGlass,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faMagnifyingGlass,
  faCaretDown,
  faEnvelope,
  faInstagram,
  faFacebookF,
  faTwitter,
  faLinkedin
);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
