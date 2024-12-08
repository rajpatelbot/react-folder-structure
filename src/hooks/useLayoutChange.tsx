import { useEffect, useState } from "react";

const useLayoutChange = (containerRef: React.RefObject<HTMLElement>, handleRef: React.RefObject<HTMLElement>) => {
    const [layout, setLayout] = useState({ left: 20, right: 80 });

    useEffect(() => {
        const selectedElement = containerRef.current;
        const handle = handleRef.current;

        if (!selectedElement || !handle) return;

        // This function is updating the latest width for left and right div.
        const handleMouseMovement = (event: MouseEvent) => {
            const containerWidth = selectedElement.offsetWidth,
                newLeftWidth = (event.clientX / containerWidth) * 100;

            if (newLeftWidth > 10 && newLeftWidth < 90) {
                setLayout({ left: newLeftWidth, right: 100 - newLeftWidth });
            }
        };

        // This function will remove event listeners for mouse movement and removed clicked, to stop the updating the width after user stop moving from mouse.
        const handleMouseUp = () => {
            selectedElement.removeEventListener("mousemove", handleMouseMovement);
            selectedElement.removeEventListener("mouseup", handleMouseUp);
        };

        // This function will call when user will click to the mouse and start moving to change the layout.
        const startMovement = () => {
            selectedElement.addEventListener("mousemove", handleMouseMovement);
            selectedElement.addEventListener("mouseup", handleMouseUp);
        };

        // This will add the listner on the click of the handle.
        handle.addEventListener("mousedown", startMovement);

        // Ṭhis will remove all the applied listners.
        return () => {
            handle.removeEventListener("mousedown", startMovement);
            selectedElement.removeEventListener("mouseup", handleMouseUp);
            selectedElement.removeEventListener("mousemove", handleMouseMovement);
        };
    }, [containerRef, handleRef]);

    return { leftWidth: layout.left.toPrecision(2), rightWidth: layout.right.toPrecision(2) };
};

export default useLayoutChange;
