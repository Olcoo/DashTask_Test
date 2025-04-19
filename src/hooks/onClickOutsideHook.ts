import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
    ref: RefObject<HTMLElement | null>,
    handler: () => void
) => {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if(!ref.current || ref.current.contains(event.target as Node)) return;

            handler();
        };

        document.addEventListener('click', listener);

        return () => document.removeEventListener('click', listener);

    }, [ref, handler]);
};