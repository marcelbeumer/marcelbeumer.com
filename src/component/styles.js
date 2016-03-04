import StyleSheet from 'stilr';

const map = new StyleSheet.Map();
export const getCss = ({ pretty = false } = {}) => StyleSheet.render({ pretty }, map);

export default class StyleSheetWrapper {
  static create(styles) {
    const sheet = StyleSheet.create(styles, map);
    sheet.getStyles = () => styles;
    return sheet;
  }
}

export const px = val => `${val}px`;
export const em = val => `${val}em`;
export const rem = val => `${val}rem`;
export const perc = val => `${val}%`;
export const vh = val => `${val}vh`;
export const vw = val => `${val}vw`;
