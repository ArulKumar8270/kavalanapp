import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { styles } from "./style/style";
import { Link } from "expo-router";

function ForgetPassword() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#212761",
      }}
    >
      <View style={styles.card}>
        <View>
          <View style={styles.logoStyle}>
            <Image
              style={{
                width: 100,
                height: 110,
                margin: "auto",
                marginBottom: 10,
                marginTop: 10,
              }}
              source={require("./images/logo.png")}
            />
            <Text style={styles.titleText}>Employee Login</Text>
          </View>

          <TextInput
            placeholder="Enter your Mobile Number"
            style={styles.inputBox}
            keyboardType="numeric"
          />
          <View style={styles.center}>
            <Link href={"/Login"}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Send OTP</Text>
              </Pressable>
            </Link>
          </View>
          <View>
            <Text style={styles.signup}>
              <Link href={"/Login"}>
                <Text style={{ color: "white", fontWeight: "700" }}>Back</Text>
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default ForgetPassword;
