import React from 'react';
import clsx from 'clsx';

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
export const Button = ({ variant = 'primary', theme, label, ...props }: ButtonProps) => {
    return (
        <button
            style={{fontFamily: 'Roboto'}}
            className={clsx(
                //base styles
                'focus:ring-3 rounded border-none px-4 py-2 text-lg font-medium focus:ring focus:ring-blue-500 focus:ring-offset-1',

                //variant styles
                variant === 'primary'
                    ? 'bg-indigo-800 text-white hover:bg-neutral-900'
                    : variant === 'secondary'
                    ? 'bg-white text-indigo-800 ring-2 ring-inset ring-indigo-800 hover:bg-neutral-900 hover:text-white'
                    : variant === 'tertiary'
                    ? 'bg-white text-indigo-800 hover:bg-gray-200'
                    : ''
            )}
            {...props}>
            {label}
        </button>
    );
};
