import { IconTypes } from '@eythorsson-dev/common-utils';
import { ContextMenuItem, ContextMenuItemProps } from './contextMenuItem';

export interface ContextMenuOptionConfig {
    get icon(): IconTypes;
    get type(): "Option";
    get name(): string;
    isDisabled?: boolean | (() => boolean);
    execute(): void;
}
export declare class ContextMenuOption extends ContextMenuItem<ContextMenuOptionConfig> {
    #private;
    constructor(props: ContextMenuItemProps<ContextMenuOptionConfig>);
    render(): HTMLElement;
    execute(): void;
}
