import $ from 'jquery'
import {debounce} from "@/utils";

export const init = () => {
  $(window).resize(function () {
    resizeAsidePanelHide()
  });

  $('#aside-close').click(function () {
    let main = $('#main');
    main.toggleClass('aside-panel-hide')
  });
  
  asideLiSelectedHigh()
}

export const pjaxComplete = () => {
  asideLiSelectedHigh()
  
}

/**
 * 侧边栏选中的菜单增加高亮北京
 */
const asideLiSelectedHigh = () => {
  let asideLis = $('.aside-wrapper ul li');
  let href = window.location.href;
  for (let i = 0; i < asideLis.length; i++) {
    let li = $(asideLis[i]);
    let path = li.attr('path');
    if (path === href) {
      li.addClass('nav-active')
    } else {
      li.removeClass('nav-active')
    }
  }
  // 首页
  if (window.location.pathname === '/') {
    $(asideLis[0]).addClass('nav-active')
  }
}

/**
 * 侧边栏响应式隐藏处理
 */
const resizeAsidePanelHide = debounce(() => {
  let width = $(window).width();
  if (width && width <= 1024) {
    let main = $('#main');
    if (!main.hasClass('aside-panel-hide')) {
      main.addClass('aside-panel-hide')
      main.removeClass('mini-aside')
    }
  } 
  // else if (width && width > 1024) {
  //   let main = $('#main');
  //   if (main.hasClass('aside-panel-hide')) {
  //     main.removeClass('aside-panel-hide')
  //   }
  // }
}, 300)
