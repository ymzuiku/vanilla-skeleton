import { IOptions, ICellType } from './interface';
/** 创建一个 cell 类型对象 */
export declare const cell: (value: ICellType) => ICellType;
export declare const renderCells: (options: IOptions) => HTMLElement;
