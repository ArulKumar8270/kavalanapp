import React from "react";
import { View, Text } from "react-native";
import { styles } from "../app/style/style";
export default function Footer(props) {
  return (
    <View style={props.content ? styles.footer1 : styles.footer}>
      <Text style={{ color: props.content ? "white" : "#212761", fontSize: 8 }}>
        {props.content
          ? props.content
          : "Copyright © 2022. Tamil Nadu Police Employment Exchange. All Rights Reserved. Designed By IBSS"}
      </Text>
    </View>
  );
}
