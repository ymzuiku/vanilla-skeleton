import { IStyle } from './setStyle';
export {};
export interface ICellType {
    /** 描述cell的内容，它由 image、title、info、empty 四种类型组成
     * 逗号分割横向，减号分割纵向，随意组合
     * 例子：image 表示，这一行只有一个image
     * 例子: image, title 表示这一行由左边一个image，右边一行title
     * 例子：image, title, info, 表示这一行由左边一个左边一个image，中间一个title，右边一个info
     * 例子：image, title-info, info, 表示这一行由左边一个左边一个image，中间第一行为title，中间第二行为info，右边一个info
     */
    layout: string;
    /** 描述这一个行的容器样式 */
    style?: IStyle;
    /** 描述 titl e类型元素样式 */
    titleStyle?: IStyle;
    /** 描述 image 类型元素样式 */
    imageStyle?: IStyle;
    /** 描述 info 类型元素样式 */
    infoStyle?: IStyle;
    /** 描述 empty 类型元素样式 */
    emptyStyle?: IStyle;
}
export interface Iheader {
    /** 当点击骨架的返回按钮时 */
    onBack?: any;
    /** 顶部中间的title */
    title?: string;
    /** 是否显示返回按钮，默认为 true */
    isShowBackButton?: boolean;
    /** header 的容器样式 */
    style?: IStyle;
    /** title 的元素样式 */
    titleStyle?: IStyle;
    backStyle?: IStyle;
    rightStyle?: IStyle;
    /** header的paddingTop，若为 auto，则使用 iOS的安全区域设置paddingTop */
    safeTop?: string;
}
export interface IBottomBar {
    /** 底部item元素的个数 */
    count?: number;
    /** 底部容器的样式 */
    style?: IStyle;
    /** header的paddingBottom，若为 auto，则使用 iOS的安全区域设置paddingBottom */
    safeBottom?: string;
    /** 底部item的样式 */
    itemStyle?: IStyle;
}
/** cells中，执行动画的元素类型 */
export interface IAnimeTypes {
    image?: boolean;
    info?: boolean;
    title?: boolean;
}
export interface IOptions {
    /** 元素 id */
    id?: string;
    /** 渲染headder的属性 */
    header?: Iheader;
    /** 渲染bottom的属性 */
    bottomBar?: IBottomBar;
    /** 渲染估计内部行的描述 */
    cells?: ICellType[];
    /** 元素之间的空隙 */
    space?: string;
    /** 每行cell的样式 */
    cellStyle?: IStyle;
    /** 获取整个骨架元素 */
    ref?: (view: HTMLDivElement) => any;
    /** 当骨架被关闭时 */
    onClose?: Function;
    /** 整个骨架的div样式 */
    style?: IStyle;
    /** 整个骨架每个元素的样式 */
    eleStyle?: IStyle;
    /** 渐变动画的颜色 */
    gradientAnimeColor?: string;
    /** 执行渐变动画的元素类型 */
    useAnimeTypes?: IAnimeTypes;
    /** 渐变动画过渡的时长 */
    gradientAnimeTime?: number;
    /** 开启透明度动画 */
    opacityAnime?: boolean;
    /** 透明度动画过渡的时长 */
    opacityAnimeTime?: number;
    /** 向下移动一定距离，关闭时再移动回原位的动画 */
    moveDownAnime?: 'string';
}
