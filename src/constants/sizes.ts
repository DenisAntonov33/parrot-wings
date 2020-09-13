import { Dimensions } from 'react-native';

const LAYOUT_HEIGHT = 640;
const LAYOUT_WIDTH = 360;

export const { height, width } = Dimensions.get('window');

export const kh = LAYOUT_HEIGHT / height; // scaling heigth depends on layout screen
export const kw = LAYOUT_WIDTH / width; // scaling width depends on layout screen
export const borderRad = 10;
export const containerHorizontalPadding = 15;
