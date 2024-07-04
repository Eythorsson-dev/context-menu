import { ContextMenu } from "./src/contextMenu";
import "./src/index.css"

const contextMenu = new ContextMenu({
    target: document.querySelector("#app")!,
    options: [
        { type: "Option", icon: "file-document", name: "Create File", execute() { } },
        { type: "Option", icon: "file-document", name: "Create Canvas", execute() { } },
        { type: "Option", icon: "file-document", name: "Create Table", execute() { } },
        { type: "Divider" },
        {
            type: "Group", icon: "file-document", name: "Create", items: [
                { type: "Option", icon: "file-document", name: "File", execute() { } },
                { type: "Option", icon: "file-document", name: "Canvas", execute() { }, isDisabled: true },
                { type: "Option", icon: "file-document", name: "Table", execute() { }, isDisabled: () => true },
            ]
        },
    ]
})
