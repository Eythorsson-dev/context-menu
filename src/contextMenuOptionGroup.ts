import { IconTypes, getIcon } from "@eythorsson-dev/common-utils";
import { ContextMenuItem, ContextMenuItemProps } from "./contextMenuItem";
import { ContextMenuDividerConfig } from "./contextMenuDivider";
import { ContextMenuOptionConfig } from "./contextMenuOption";
import { selectNextFocusItem } from "./helpers/selectNextFocusItem";

export type ContextMenuConfigs = ContextMenuOptionConfig | ContextMenuDividerConfig | ContextMenuOptionGroupConfig

export interface ContextMenuOptionGroupConfig {
    get icon(): IconTypes;
    get type(): "Group";
    get name(): string;

    get items(): ContextMenuConfigs[]
}

export class ContextMenuOptionGroup extends ContextMenuItem<ContextMenuOptionGroupConfig> {
    #config: ContextMenuOptionGroupConfig;


    constructor(props: ContextMenuItemProps<ContextMenuOptionGroupConfig>) {
        super(props);

        this.#config = props.config;
    }

    render(): HTMLElement {
        const wrapper = document.createElement("div");
        wrapper.className = "context-menu-item";
        wrapper.tabIndex = 0;

        const icon = document.createElement("div");
        icon.className = "icon";
        icon.append(getIcon(this.#config.icon));

        const name = document.createElement("div");
        name.className = "title";
        name.innerText = this.#config.name;

        const arrow = document.createElement("div");
        arrow.className = "icon caret";
        arrow.append(getIcon("arrow-chevron-right"));

        wrapper.append(
            icon,
            name,
            arrow
        );

        const subMenu = this.context.createMenu(this.#config.items);
        wrapper.append(subMenu);

        wrapper
            .addEventListener("focus", () => {
                let _alignBottom = alignBottom();
                let _alignLeft = alignLeft();

                subMenu.style.setProperty(_alignBottom ? "bottom" : "top", "0");
                subMenu.style.removeProperty(_alignBottom ? "top" : "bottom");
                subMenu.style.setProperty(_alignLeft ? "right" : "left", "100%");
                subMenu.style.removeProperty(_alignLeft ? "left" : "right");
            })

        wrapper
            .addEventListener("keydown", event => {
                const _alignLeft = alignLeft();

                // focus on first child
                if (event.key == "ArrowLeft" && _alignLeft
                    || event.key == "ArrowRight" && _alignLeft == false) {

                    selectNextFocusItem(subMenu, subMenu, true);
                }
                // focus on parent
                else if (event.key == "ArrowLeft" && _alignLeft == false
                || event.key == "ArrowRight" && _alignLeft) {
                    
                    wrapper.focus();
                }
                
            })
        return wrapper;

        function alignBottom() {
            const subMenuRect = subMenu.getBoundingClientRect();
            const parentRect = wrapper.getBoundingClientRect();

            const mTop = parentRect.bottom - subMenuRect.height;
            const mBottom = window.innerHeight - parentRect.top - subMenuRect.height;

            let alignBottom = mTop >= 0 && mBottom < 0;
            return alignBottom;
        }

        function alignLeft() {
            const subMenuRect = subMenu.getBoundingClientRect();
            const parentRect = wrapper.getBoundingClientRect();

            const mLeft = parentRect.left - subMenuRect.width;
            const mRight = window.innerWidth - parentRect.right - subMenuRect.width;

            let alignLeft = mLeft >= 0 && mRight < 0;
            return alignLeft;
        }
    }
}
