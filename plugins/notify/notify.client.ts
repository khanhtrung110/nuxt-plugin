import CustomerNotify from './Notify.vue';
import { createApp } from 'vue';
export default {
    install: (app) => {
        const nuxtApp = useNuxtApp();
        let comp:any = null;
        console.log('run123');
        
        const createComp = (text:string) => {
            const div = document.createElement('div');
            document.querySelector('body').appendChild(div);
            app.component('CustomerNotify', CustomerNotify);
            const Component = createApp(app.component('CustomerNotify'), {
                text: text
            });
            Component.mount(div);
            return Component;
        }
        const alertComponents = (text:string) => {
            comp = createComp(text);
            nuxtApp.$listen("close", () => {
                console.log('run-sucess');
                
                if(comp) {
                    comp.unmount();
                }
                comp = null;
            });
        }
        const init = (text:string) => {
            // nuxtApp.$bus.$emit('close');
            alertComponents(text);
        } 

        nuxtApp.provide('useNotify',(text:string) => init(text))

    }
}

