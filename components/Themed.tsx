/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from "react-native";
export function Text(props) {
  const { ...otherProps } = props;
  return <DefaultText {...otherProps} />;
}

export function View(props) {
  const { ...otherProps } = props;
  return <DefaultView {...otherProps} />;
}
