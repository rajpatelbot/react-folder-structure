import { createContext, useState } from "react";
import { ContextChildren, ContextType, FileTreeType } from "../types/global";

const intiailFileTree: ContextType = {
    fileTree: null,
    setFileTree: () => {},
};

const Context = createContext<ContextType>(intiailFileTree);

const Provider = ({ children }: ContextChildren) => {
    const [fileTree, setFileTree] = useState<FileTreeType | null>(null);

    return <Context.Provider value={{ fileTree, setFileTree }}>{children}</Context.Provider>;
};

export default Provider;
