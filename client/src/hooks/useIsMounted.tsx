// https://www.codemzy.com/blog/ismounted-hook-with-useeffect-reactjs
import {useCallback, useEffect, useRef, useState} from 'react';
import {useWallet} from "@solana/wallet-adapter-react";

export function useIsMounted() {
    const isMounted = useRef(false); // unmounted by default

    useEffect(() => {
        isMounted.current = true; // mounted

        return () => {
            isMounted.current = false; // unmounted
        };
    }, []); // run once on mount

    return useCallback(() => isMounted.current, []); // return function that checks mounted status
}

export function useIsMounted2() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}


export function useMountedWallet() {
    const { connected} = useWallet();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [connected]);

    return {mounted, connected};
}