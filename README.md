# vue3-dayjs
[![NPM Version][npm-version-image]][npm-url] ![size] ![license]

A wrapper for integrating Day.js into Vue.js 3

[Day.js](https://github.com/iamkun/dayjs) is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.

### You can use Day.js without using this plugin
This plugin allows you to easily include Day.js globally. This is not recommended with Vue 3, and they recommend using provide/inject instead. But if you're just getting started with Day.js or know you prefer it global, you can use this plugin to make your coding life a bit easier.

## Installation

```bash
npm install vue3-dayjs-plugin
```

## Setup Globally

```js
import VueDayjs from 'vue3-dayjs-plugin'

Vue.use(VueDayjs) // in your createApp call
```

## Usage Example
Day.js will be available in your Vue templates using $date or $dayjs.


### JS
```js
    // you can call like this when using the old syntax
    this.$date('2018-08-08').format('DD/MM/YYYY');

    // when using the new <script setup> syntax you have to bring Day.js in manually
    // this means import Day.js into the script yourself or you can use the useDate composable included with this package.
    import { useDate } from 'vue3-dayjs-plugin/useDate';
    <script setup>
        const date = useDate();
        // then anywhere you need to use Day.js
        date('2018-08-08').format('DD/MM/YYYY');
    </script>
    // this is because global properties are not accessible within <script setup> :(
```
### HTML
```html
    <!-- this method of using Day.js ($date or $dayjs) will be globally available in all your components -->
    <div>{{ $date('2023-04-12').format('DD/MM/YYYY') }}</div>
    <div>{{ $dayjs('2023-04-12').format('DD/MM/YYYY') }}</div>
```

## License

[MIT](LICENSE)

[npm-url]: https://npmjs.org/package/vue3-dayjs-plugin
[license]: https://badgen.net/npm/license/vue3-dayjs-plugin
[dependencies]: https://badgen.net/npm/dependencies/vue3-dayjs-plugin
[size]: https://badgen.net/packagephobia/install/vue3-dayjs-plugin
[npm-version-image]: https://badgen.net/npm/v/vue3-dayjs-plugin
