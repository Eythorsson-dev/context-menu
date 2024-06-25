import { popupPosition, popupContainer } from "@eythorsson-dev/common-utils"
import { CustomContextMenuItem, initContextMenuItem } from "./contextMenuItem";
import { ContextMenuOption } from "./contextMenuOption";
import { ContextMenuDivider } from "./contextMenuDivider";
import { ContextMenuConfigs, ContextMenuOptionGroup } from "./contextMenuOptionGroup";
import { selectNextFocusItem } from "./helpers/selectNextFocusItem";

interface ContextMenuConfig {
    target: HTMLElement,
    get options(): ContextMenuConfigs[],

    itemByType?: { [key: string]: CustomContextMenuItem<any> }
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

                this.show(event.pageX, event.pageY)
            });
    }

    #container: HTMLElement | undefined
    show(x: number, y: number): void {
        this.#container = this.createMenu(this.#config.options);
        popupPosition(this.#container, x, y);
    }

    hide(): void {
        this.#container?.remove();
    }

    createMenu(config: ContextMenuConfigs[]): HTMLElement {
        const items = config.map(x => initContextMenuItem(
            this.#config.itemByType![x.type],
            {
                context: this,
                config: x
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


