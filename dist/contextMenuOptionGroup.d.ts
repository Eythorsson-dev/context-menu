import { IconElement } from '@eythorsson-dev/common-utils';
import { ContextMenuItem, ContextMenuItemProps } from './contextMenuItem';
import { ContextMenuDividerConfig } from './contextMenuDivider';
import { ContextMenuOptionConfig } from './contextMenuOption';

export type ContextMenuConfigs = ContextMenuOptionConfig | ContextMenuDividerConfig | ContextMenuOptionGroupConfig;
export interface ContextMenuOptionGroupConfig {
    get icon(): IconElement;
    get type(): "Group";
    get name(): string;
    get items(): ContextMenuConfigs[];
}
export declare class ContextMenuOptionGroup extends ContextMenuItem<ContextMenuOptionGroupConfig> {
    #private;
    constructor(props: ContextMenuItemProps<ContextMenuOptionGroupConfig>);
    render(): HTMLElement;
}
