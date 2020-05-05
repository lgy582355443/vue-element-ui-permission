// 验证是否为外链
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export function debounce(func, wait, immediate) {
  let timeout = null;
  return function() {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        func.apply(this, arguments);
        timeout = null;
      }, wait);
      if (callNow) {
        func.apply(this, arguments);
      }
    } else {
      timeout = setTimeout(() => {
        func.apply(this, arguments);
      }, wait);
    }
  };
}
