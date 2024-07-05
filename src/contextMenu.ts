import { popupPosition, popupContainer } from "@eythorsson-dev/common-utils"
import { CustomContextMenuItem, initContextMenuItem } from "./contextMenuItem";
import { ContextMenuOption } from "./contextMenuOption";
import { ContextMenuDivider } from "./contextMenuDivider";
import { ContextMenuConfigs, ContextMenuOptionGroup } from "./contextMenuOptionGroup";
import { selectNextFocusItem } from "./helpers/selectNextFocusItem";

export interface ContextMenuConfig {
    target: HTMLElement,
    options: (ContextMenuConfigs[] | (() => ContextMenuConfigs[])),
    itemByType?: { [key: string]: CustomContextMenuItem<any> },
    beforeExecute?(): void,
}

function getOptionsValue(options: (ContextMenuConfigs[] | (() => ContextMenuConfigs[]))): ContextMenuConfigs[] {
    if (typeof (options) == "function") return options();
    else return options;
}

export class ContextMenu {
    #config: ContextMenuConfig;

    constructor(config: ContextMenuConfig) {
        this.#config = {
            ...config,
            itemByType: {
                "Option": ContextMenuOption,
                "Divider": ContextMenuDivider,
                "Group": ContextMenuOptionGroup,
                ...config.itemByType
            }
        };

        config.target
            .addEventListener("contextmenu", event => {
                event.preventDefault();
                event.stopPropagation();

                this.show(event.pageX, event.pageY)
            });
    }

    #container: HTMLElement | undefined
    show(x: number, y: number): void {
        this.#container = this.createMenu(getOptionsValue(this.#config.options));
        const popup = popupPosition(this.#container, x, y, { closeOnEsc: true, backsplachClassName: "outline-none" });
        popup.backsplash?.focus();

        // TODO: using context menu should reopen the context menu...
        popup.backsplash?.addEventListener("contextmenu", event => {
            event.preventDefault();
            popup.element.remove();
        })
    }

    hide(): void {
        this.#container?.remove();
    }

    createMenu(config: ContextMenuConfigs[]): HTMLElement {
        const items = config.map(x => initContextMenuItem(
            this.#config.itemByType![x.type],
            {
                context: this,
                config: x,
                beforeExecute: this.#config.beforeExecute
            }
        ));

        const container = popupContainer(items.map(x => x.render()), "context-menu");

        document.addEventListener("keydown", event => onKeydown(event))
        container.addEventListener("keydown", event => onKeydown(event))

        return container;

        function onKeydown(event: KeyboardEvent) {
            if (event.key == "ArrowDown" || event.key == "ArrowUp") {
                const selectNext = event.key == "ArrowDown";

                const activeElement = document.activeElement as HTMLElement;
                selectNextFocusItem(container, activeElement, selectNext);
                event.stopPropagation();
            }
        }
    }
}


