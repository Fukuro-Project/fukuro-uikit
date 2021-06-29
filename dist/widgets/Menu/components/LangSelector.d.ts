import React from "react";
import { Language } from "../types";
import { Position } from "../../../components/Dropdown/types";
interface Props {
    currentLang: string;
    langs: Language[];
    setLang: (lang: Language) => void;
    position?: Position;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
