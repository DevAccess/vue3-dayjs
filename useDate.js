/*!
 * vue3-dayjs-plugin
 * Copyright(c) 2022 Raul Peña
 * MIT Licensed
 */

import { getCurrentInstance } from "vue";

export function useDate() {
    const vm = getCurrentInstance();
    return vm.appContext.config.globalProperties.$date;
}