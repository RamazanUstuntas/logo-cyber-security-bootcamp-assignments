import { createApp } from 'vue'
import App from './App.vue'

// call the necessary scss and css for the project style here.
// in order to compile scss files, you must install the sass and sass loader modules.
// npm i -D sass sass-loader
import './assets/scss/sb-admin-2.scss'
import './assets/vendor/fontawesome-free/css/all.min.css'

/* Creating Vue instance in Version 3 */
createApp(App).mount('#app')
