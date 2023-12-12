import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Importing the global css file
// import './assets/css/bootstrap.css'
// import './assets/css/maicons.css'
// import './assets/css/themify-icons.css'
// import './assets/vendor/animate/animate.css'
// import './assets/vendor/owl-carousel/owl.carousel.css'
// import './assets/vendor/perfect-scrollbar/css/perfect-scrollbar.css'
// import './assets/vendor/nice-select/css/nice-select.css'
// import './assets/vendor/fancybox/css/jquery.fancybox.min.css'
// import './assets/css/virtual.css'
// import './assets/css/virtual.css'


// import './assets/css/virtual.css'
createApp(App).use(store).use(router).mount('#app')
