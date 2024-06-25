import { ContextMenuItem, ContextMenuItemProps } from './contextMenuItem';

export interface ContextMenuDividerConfig {
    name?: string;
    get type(): "Divider";
}
export declare class ContextMenuDivider extends ContextMenuItem<ContextMenuDividerConfig> {
    constructor(config: ContextMenuItemProps<ContextMenuDividerConfig>);
    render(): HTMLElement;
}
