import StyleSheet from 'stilr';

const map = new StyleSheet.Map();
export const getCss = ({ pretty = false } = {}) => StyleSheet.render({ pretty }, map);
export const px = val => `${val}px`;

export default class StyleSheetWrapper {
  static create(styles) {
    const sheet = StyleSheet.create(styles, map);
    sheet.getStyles = () => styles;
    return sheet;
  }
}
