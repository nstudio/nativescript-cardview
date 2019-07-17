import Vue from 'nativescript-vue';
import Home from './components/Home';

// register the CardView plugin
Vue.registerElement(
    'card-view',
    () => require('@nstudio/nativescript-cardview').CardView
);

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
