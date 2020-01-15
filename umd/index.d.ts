import { IOptions } from './interface';
declare const vSkeleton: {
    render: (options: IOptions) => HTMLDivElement;
    close: (id?: string) => void;
    cell: (value: import("./interface").ICellType) => import("./interface").ICellType;
};
export { vSkeleton };
