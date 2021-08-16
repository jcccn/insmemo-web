// container 选择器
export const PAGE_CONTAINER_SELECTOR = "div#page-container";

// 移动端样式适配额外类名
export const MOBILE_ADDITION_CLASSNAME = "show-user-banner-dialog";

// 每次获取 memo 的数量
export const FETCH_MEMO_AMOUNT = 20;

// 默认动画持续时长
export const ANIMATION_DURATION = 200;

// toast 动画持续时长
export const TOAST_ANIMATION_DURATION = 400;

// 一天的毫秒数
export const DAILY_TIMESTAMP = 3600 * 24 * 1000;

// 图片路由正则
export const IMAGE_URL_REG = /(https?:\/\/[^\s<\\*>']+\.(jpeg|jpg|gif|png|svg))/g;

// 标签 正则
export const TAG_REG = /#([^\n]+?)#/g;

// URL 正则
export const LINK_REG = /(https?:\/\/[^\s<\\*>']+)/g;

// memo 关联正则
export const MEMO_LINK_REG = /\[@(.+?)\]\((.+?)\)/g;
