import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./style/style";
import { formStyles } from "./style/fromStyle";
import { Link, router } from "expo-router";

function CandidateLogin() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data, "454234");
    try {
      const response = await axios.post(
        "https://nodebackend.kavalarnalantn.in:5000/son_Register/authenticate",
        data
      );
      console.log(response, "response4352345");
      router.navigate(
        `/CandidateDetails?userName=${data?.userName}&candidateName=${response.data?.CandidateName}`
      );
    } catch (error) {
      Alert.alert("Username or Password is incorrect");
      console.log("Error:", error);
    }
  };

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
            <Text style={styles.titleText}>Candidate Login</Text>
          </View>

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
            name="userName"
          />
          {errors.userName && (
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
              <Text
                style={styles.forgetText}
                // onPress={() => navigation.navigate("ForgetPassword")}
              >
                Forget Password?
              </Text>
            </Link>
          </View>
          <View style={styles.center}>
            <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
export default CandidateLogin;
