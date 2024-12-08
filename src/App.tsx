import { useRef } from "react";
import "./App.css";
import useLayoutChange from "./hooks/useLayoutChange";

function App() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const handle = useRef<HTMLDivElement | null>(null);
    const { leftWidth, rightWidth } = useLayoutChange(containerRef, handle);

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="flex min-h-screen" ref={containerRef}>
                <div className="bg-gray-800 text-white flex items-center justify-center" style={{ width: `${leftWidth}%` }}>
                    <h1 className="text-xl font-bold">Left Section ({leftWidth}%)</h1>
                </div>

                <div className="w-[2px] bg-gray-700 hover:w-[5px] hover:bg-blue-500 cursor-col-resize" ref={handle} />

                <div className="flex items-center justify-center" style={{ width: `${rightWidth}%` }}>
                    <h1 className="text-xl text-white font-bold">Right Section ({rightWidth}%)</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
