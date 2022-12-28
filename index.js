/*!
 * vue3-dayjs-plugin
 * Copyright(c) 2022 Raul Peña
 * MIT Licensed
 */

import dayjs from 'dayjs';

export default {
  /**
    * Vue
    * @param {Vue} Vue
  */
  install: (app, options) => {
    // inject dayjs to be globally available (as $dayjs and $date)
    app.config.globalProperties.$dayjs = dayjs;
    app.config.globalProperties.$date = dayjs;
  }
};