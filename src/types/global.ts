import { Dispatch, SetStateAction } from "react";

export interface FileTreeType {
    id: string;
    name: string;
    isFolder: boolean;
    parentId: string;
    childrens: string[];
}

export interface ContextChildren {
    children: JSX.Element;
}

export interface ContextType {
    fileTree: FileTreeType | null;
    setFileTree: Dispatch<SetStateAction<FileTreeType | null>>;
}
