import { IconTypes, getIcon } from "@eythorsson-dev/common-utils";
import { ContextMenuItem, ContextMenuItemProps } from "./contextMenuItem";


export interface ContextMenuOptionConfig {
    get icon(): IconTypes;
    get type(): "Option";
    get name(): string;

    isDisabled?: boolean | (() => boolean);

    execute(): void;
}
export class ContextMenuOption extends ContextMenuItem<ContextMenuOptionConfig> {
    #config: ContextMenuOptionConfig;

    constructor(props: ContextMenuItemProps<ContextMenuOptionConfig>) {
        super(props);

        this.#config = props.config;
    }

    render(): HTMLElement {
        const wrapper = document.createElement("div");
        wrapper.className = "context-menu-group";
        wrapper.tabIndex = 0;

        const icon = document.createElement("div");
        icon.className = "icon";
        icon.append(getIcon(this.#config.icon));

        const name = document.createElement("div");
        name.className = "title";
        name.innerText = this.#config.name;

        wrapper.append(
            icon,
            name
        );

        wrapper.addEventListener("keydown", event => event.key == "Enter" && this.execute());
        wrapper.addEventListener("click", event => {
            event.stopPropagation();
            this.execute()
        });

        return wrapper;
    }

    execute() {
        this.context.hide();
        this.#config.execute();
    }
}
