import {useEffect, useRef} from "react";

export function useClickOutside(handler: () => void) {
    const domNode = useRef<any>(null);

    useEffect(() => {
        function maybeHandler(event: MouseEvent) {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        }

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return domNode;
}