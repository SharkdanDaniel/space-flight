import { EffectCallback, useEffect, useRef } from "react";

export const useNonInitialEffect = (effect: EffectCallback, deps?: any[]) => {
    const initialRender = useRef(true);
    useEffect(() => {
        let effectReturns: any | (() => void | undefined) = () => { };
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            effectReturns = effect();
        }
        if (effectReturns && typeof effectReturns === "function") {
            return effectReturns;
        }
    }, deps);
};