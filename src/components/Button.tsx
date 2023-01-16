import React from 'react';
import clsx from "clsx";


type ButtonProps = {
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
export const Button = ({
                           variant = 'primary',
                           theme,
                           label,
                           ...props
                       }: ButtonProps) => {
    const variantStyle: string  = '';
    const themeStyle: string  = '';
    return (
        <button
            className={clsx(
                //base styles
                'rounded focus:ring focus:ring-3 focus:ring-offset-1 focus:ring-blue-500',

                //variant styles
                variant === 'primary'
                    ? 'bg-indigo-800 text-white'

                : variant === 'secondary'
                    ? 'bg-white text-indigo-800 border-indigo-800 border-2'
                : ''
            )}
            {...props}
        >
            {label}
        </button>
    );
};
