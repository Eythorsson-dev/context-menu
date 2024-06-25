import { ContextMenu } from "./contextMenu";

export interface ContextMenuItemProps<TConfig> {
    context: ContextMenu
    get config(): TConfig;
}

export abstract class ContextMenuItem<TConfig> {
    #context: ContextMenu;
    get context(): ContextMenu { return this.#context; }

    constructor(props: ContextMenuItemProps<TConfig>) {
        this.#context = props.context;
    }

    abstract render(): HTMLElement;
}


export type CustomContextMenuItem<TConfig> = (
    typeof ContextMenuItem<TConfig> & (new (props: ContextMenuItemProps<TConfig>) => ContextMenuItem<TConfig>)
);


function createContextMenuItemInstance<
    T extends ContextMenuItem<TConfig>,
    TConfig
>(
    constructor: new (props: ContextMenuItemProps<TConfig>) => T,
    props: ContextMenuItemProps<TConfig>
): T {
    return new constructor(props);
}

export function initContextMenuItem<TConfig>(
    constructor: new (props: ContextMenuItemProps<TConfig>) => ContextMenuItem<TConfig>,
    props: ContextMenuItemProps<TConfig>
): ContextMenuItem<TConfig> {
    return createContextMenuItemInstance(constructor, props);
}