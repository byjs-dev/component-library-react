/// <reference types="react" />
export interface ButtonProps {
    /**
     * What variant to use
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'icon';
    /**
     * What theme to use - overrides the global/outer theme
     */
    theme?: 'cat' | 'rental' | 'zeppelin' | 'neutral';
    /**
     * Button text/title
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ variant, theme, label, ...props }: ButtonProps) => JSX.Element;
//# sourceMappingURL=Button.d.ts.map