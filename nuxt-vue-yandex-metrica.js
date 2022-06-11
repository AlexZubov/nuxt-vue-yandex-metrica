import Vue from 'vue'
const NuxtVueYandexMetrica = Vue.component('NuxtVueYandexMetrica', {
    name: 'NuxtVueYandexMetrica',
    render: function (createElement) {
        return createElement('div')
    },
    props: {
        'id' : {
            required: true,
            type: Number
        },
        'enableWebvisor': {
            type: Boolean
        }
    },
    mounted: function() {
        const cId = this.$props.id;
        if(!cId){
            throw new Error('Yandex Metrica id is not provided');
            return;
        }
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(cId, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: !!this.$propsenableWebvisor,
      });
    }
});

export default NuxtVueYandexMetrica
