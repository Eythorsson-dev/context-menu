import { IconElement } from "@eythorsson-dev/common-utils";
import { ContextMenuItem, ContextMenuItemProps } from "./contextMenuItem";


export interface ContextMenuOptionConfig {
    get icon(): IconElement;
    get type(): "Option";
    get name(): string;

    isDisabled?: boolean | (() => boolean);

    execute(): void;
}

function getValue(item: boolean | (() => boolean)) {
    if (typeof item === 'boolean') return item;
    else if (typeof item === 'function') return item();

    return false;
}

export class ContextMenuOption extends ContextMenuItem<ContextMenuOptionConfig> {
    #config: ContextMenuOptionConfig;

    #beforeExecute: (() => void) | undefined;

    constructor(props: ContextMenuItemProps<ContextMenuOptionConfig>) {
        super(props);

        this.#config = props.config;
        this.#beforeExecute = props.beforeExecute;
    }

    render(): HTMLElement {
        const wrapper = document.createElement("div");
        wrapper.className = "context-menu-item";
        wrapper.tabIndex = 0;

        const icon = document.createElement("div");
        icon.className = "icon";

        if (this.#config.icon)
            icon.append(this.#config.icon);

        const name = document.createElement("div");
        name.className = "title";
        name.innerText = this.#config.name;

        wrapper.append(
            icon,
            name
        );

        if (getValue(this.#config.isDisabled ?? false)) {
            wrapper.classList.add("disabled");
        }
        else {
            wrapper.addEventListener("keydown", event => event.key == "Enter" && this.execute());
            wrapper.addEventListener("click", event => {
                event.stopPropagation();
                this.execute()
            });
        }

        return wrapper;
    }

    execute() {
        this.context.hide();
        this.#beforeExecute?.();
        this.#config.execute();
    }
}
