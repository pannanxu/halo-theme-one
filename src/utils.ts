
export function debounce(fn: Function, time: number) {
  let timer: any = null;
  return function (...arg: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, arg);
    }, time);
  };
}
