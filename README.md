# Metrica Yandex component for Nuxt & Vue 2.x

## Installation

```
npm i nuxt-vue-yandex-metrica --save
```

## Usage

```
import NuxtVueYandexMetrica from 'nuxt-vue-yandex-metrica'

components: {
    NuxtVueYandexMetrica
    //....
}

<nuxt-vue-yandex-metrica :id="123456" enable-webvisor></nuxt-vue-yandex-metrica>
```

The numeric attribute `id` **is required**; `enable-webvisor` are optional flags.

## License

MIT
