import { addons } from '@storybook/manager-api';
//import baseTheme from './BaseTheme';
import {themes} from '@storybook/theming';

addons.setConfig({
    //theme: baseTheme,
    theme: themes.dark,
});

//FIXME: manager not working!
