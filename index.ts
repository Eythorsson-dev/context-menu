import { ContextMenu } from "./src/contextMenu";

const contextMenu = new ContextMenu({
    target: document.querySelector("#app")! ,
    options: [
        { type: "Option", icon: "file-document", name: "Create File", execute() { } },
        { type: "Option", icon: "file-document", name: "Create Canvas", execute() { } },
        { type: "Option", icon: "file-document", name: "Create Table", execute() { } },
        { type: "Divider" },
        { type: "Group", icon: "file-document", name: "Create", items: [
            { type: "Option", icon: "file-document", name: "File", execute() { } },
            { type: "Option", icon: "file-document", name: "Canvas", execute() { } },
            { type: "Option", icon: "file-document", name: "Table", execute() { } },
        ] },
    ]
})
