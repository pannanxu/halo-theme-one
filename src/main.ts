import "@/main.scss";
import $ from 'jquery'
import * as aside from "@/aside";

$(document).ready(function () {
  aside.init()
  // if ($.support.pjax) {
  //   $(document).on('pjax:send', function () {
  //     // @ts-ignore
  //     NProgress.start();
  //   })
  //   $(document).on('pjax:complete', function () {
  //     aside.pjaxComplete();
  //     // @ts-ignore
  //     NProgress.done();
  //   })
  //   // @ts-ignore
  //   $(document).pjax('a[target!=_blank]', '#container', {fragment: '#container', timeout: 8000});
  // }
});
