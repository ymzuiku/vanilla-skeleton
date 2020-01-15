import { IOptions } from './interface';
declare const vSkeleton: {
    render: (options: IOptions) => void;
    close: (id: string) => void;
    cell: (value: import("./interface").ICellType) => import("./interface").ICellType;
};
export { vSkeleton };
