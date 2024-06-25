import { ContextMenuItem, ContextMenuItemProps } from "./contextMenuItem";

export interface ContextMenuDividerConfig {
    name?: string;
    get type(): "Divider";
}
export class ContextMenuDivider extends ContextMenuItem<ContextMenuDividerConfig> {

    constructor(config: ContextMenuItemProps<ContextMenuDividerConfig>) {
        super(config);
    }

    render(): HTMLElement {
        const divider = document.createElement("hr");
        divider.className = "context-menu-divider";

        return divider;
    }
}