import { Likesprop } from "./components-main/icons";
import { Lista } from "./components-main/lista";
import { Logo } from "./images";

export function Menu() {
    return (
        <main>
            <div className="logo"><Logo></Logo></div>
            <Likesprop></Likesprop>
            <Lista></Lista>
        </main>
    )
}

