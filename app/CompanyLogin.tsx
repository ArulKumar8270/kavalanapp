import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./style/style";
import { formStyles } from "./style/fromStyle";
import { Link } from "expo-router";

function CompanyLogin() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailId: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <View style={styles.flex}>
      <ImageBackground
        resizeMode="repeat"
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
              <Text style={styles.titleText}>Company Login</Text>
            </View>
            <View
              style={{
                backgroundColor: "#ffffff3b",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputBox}
                    placeholder="Enter your Username"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="emailId"
              />
              {errors.emailId && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <View>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      secureTextEntry={!isPasswordVisible}
                      style={styles.inputBox}
                      placeholder="Enter your Password"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="password"
                />

                {/* IconButton to toggle between hide/show password */}
                <FontAwesome
                  style={{
                    position: "absolute",
                    right: 8,
                    top: 18,
                    fontSize: 20,
                  }}
                  name={isPasswordVisible ? "eye-slash" : "eye"}
                  // icon={isPasswordVisible ? "eye-off" : "eye"}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              </View>
              {errors.password && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <View style={formStyles.flexRow}>
                <Link href={"/ForgetUsername"}>
                  <Text style={styles.forgetText}>Forget UserName?</Text>
                </Link>
                <Link href={"/ForgetPassword"}>
                  <Text style={styles.forgetText}>Forget Password?</Text>
                </Link>
              </View>
            </View>
            <View style={styles.center}>
              <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Submit</Text>
              </Pressable>
            </View>
            <View>
              <Text style={styles.signup}>Don't have an account?</Text>
              <Link href={"/CompanyRegister"}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: 14,
                    marginLeft: 10,
                    textAlign: "center",
                  }}
                >
                  Register
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
export default CompanyLogin;
