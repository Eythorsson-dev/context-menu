import { CustomContextMenuItem } from './contextMenuItem';
import { ContextMenuConfigs } from './contextMenuOptionGroup';

export interface ContextMenuConfig {
    target: HTMLElement;
    options: (ContextMenuConfigs[] | (() => ContextMenuConfigs[]));
    itemByType?: {
        [key: string]: CustomContextMenuItem<any>;
    };
}
export declare class ContextMenu {
    #private;
    constructor(config: ContextMenuConfig);
    show(x: number, y: number): void;
    hide(): void;
    createMenu(config: ContextMenuConfigs[]): HTMLElement;
}
