import React from "react";
import { StandardDivider } from "./StandardDivider";

interface Props {
    children: React.ReactNode
}

export function TitleDivider({children}: Props){
    return (
        <div className={"lineContainer"}>
            <StandardDivider className={"line1"}/>
            <div className={"lineContent"}>
                {children}
            </div>
            <StandardDivider className={"line2"}/>
        </div>
    );
}