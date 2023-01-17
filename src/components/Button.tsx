import React from 'react';
import clsx from "clsx";


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
export const Button = ({
                           variant = 'primary',
                           theme,
                           label,
                           ...props
                       }: ButtonProps) => {
    return (
        <button
            className={clsx(
                //base styles
                'border-none font-medium text-lg rounded focus:ring focus:ring-3 focus:ring-offset-1 focus:ring-blue-500 px-4 py-2',

                //variant styles
                variant === 'primary'
                    ? 'bg-indigo-800 text-white'

                : variant === 'secondary'
                    ? 'bg-white text-indigo-800 ring-2 ring-indigo-800 ring-inset'
                : ''
            )}
            {...props}
        >
            {label}
        </button>
    );
};
