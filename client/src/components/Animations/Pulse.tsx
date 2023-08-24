import React from "react";
import palette from "@styles/palette.module.scss";
export function PulseComponent() {
    return (
        <span className="relative flex h-3 w-3 self-start">
            <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}
                style={{backgroundColor: palette.accentYellow}}
            />
            <span
                className={`relative inline-flex rounded-full h-3 w-3`}
                style={{backgroundColor: palette.baseYellow}}
            />
        </span>
    );
}