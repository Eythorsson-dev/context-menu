import { ContextMenu } from './contextMenu';

export interface ContextMenuItemProps<TConfig> {
    context: ContextMenu;
    get config(): TConfig;
    beforeExecute?(): void;
}
export declare abstract class ContextMenuItem<TConfig> {
    #private;
    get context(): ContextMenu;
    constructor(props: ContextMenuItemProps<TConfig>);
    abstract render(): HTMLElement;
}
export type CustomContextMenuItem<TConfig> = (typeof ContextMenuItem<TConfig> & (new (props: ContextMenuItemProps<TConfig>) => ContextMenuItem<TConfig>));
export declare function initContextMenuItem<TConfig>(constructor: new (props: ContextMenuItemProps<TConfig>) => ContextMenuItem<TConfig>, props: ContextMenuItemProps<TConfig>): ContextMenuItem<TConfig>;
