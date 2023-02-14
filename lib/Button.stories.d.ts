/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ variant, theme, label, ...props }: import("./Button").ButtonProps) => JSX.Element;
    tags: string[];
    argTypes: {
        variant: {
            control: string;
        };
        theme: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
//# sourceMappingURL=Button.stories.d.ts.map