import React from "react";
import {getMobileOperatingSystem} from "../../utils/platform";

interface AppleWrapperProps {
    webComponent: React.ReactNode;
}

export function AppleWrapper({
    webComponent,
}: AppleWrapperProps) {
    const [os, setOs] = React.useState('');

    React.useEffect(() => {
        const platform = getMobileOperatingSystem();
        setOs(platform);
    }, []);


    // Probably this is why on initial render it takes a long time to load
    if (os === "")
        return <></>;

    return <>{webComponent}</>;
}
