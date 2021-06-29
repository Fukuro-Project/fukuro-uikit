export declare type ColorplateTheme = {
    background: string;
};
export declare const variants: {
    readonly failure: "failure";
    readonly primary: "primary";
    readonly primaryBright: "primaryBright";
    readonly primaryDark: "primaryDark";
    readonly secondary: "secondary";
    readonly success: "success";
    readonly warning: "warning";
    readonly binance: "binance";
    readonly overlay: "overlay";
    readonly background: "background";
    readonly backgroundDisabled: "backgroundDisabled";
    readonly backgroundAlt: "backgroundAlt";
    readonly cardBorder: "cardBorder";
    readonly contrast: "contrast";
    readonly dropdown: "dropdown";
    readonly dropdownDeep: "dropdownDeep";
    readonly invertedContrast: "invertedContrast";
    readonly input: "input";
    readonly inputSecondary: "inputSecondary";
    readonly tertiary: "tertiary";
    readonly text: "text";
    readonly textDisabled: "textDisabled";
    readonly textSubtle: "textSubtle";
    readonly disabled: "disabled";
    readonly gradients: {
        readonly bubblegum: "gradients.bubblegum";
        readonly inverseBubblegum: "gradients.inverseBubblegum";
        readonly cardHeader: "gradients.cardHeader";
        readonly blue: "gradients.blue";
        readonly violet: "gradients.violet";
        readonly violetAlt: "gradients.violetAlt";
        readonly gold: "gradients.gold";
    };
};
export declare type Variants = typeof variants[keyof typeof variants];
export interface ColorPaletteProps {
    variant?: Variants;
}
