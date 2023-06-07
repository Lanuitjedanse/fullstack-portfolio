import "./MyGifWrapper.css";
import GifPlayer from "react-gif-player";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

export default function MyGifWrapper() {
    const [play, setPlay] = useState(false);

    useEffect(() => {}, [setPlay]);
    return (
        <>
            <GifPlayer
                onMouseEnter={() => setPlay(true)}
                onMouseLeave={() => setPlay(false)}
            />
        </>
    );
}
