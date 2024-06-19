import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-native-modal";
import axios from "axios";
import { styles } from "./style/style";
import { Link, router, useLocalSearchParams } from "expo-router";

function CandidateRegister() {
  const local = useLocalSearchParams();
  const [otpModal, setOtpModal] = useState(false);
  const [otp, setOtp] = useState(null);
  const [sentOtp, setSentOtp] = useState(null);
  const [buttonDisable, setButtonDisable] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      fullName: "",
      canNameInit: "",
      mobileNo: "",
      emailId: "",
      aadhaarNo: "",
      userName: "",
      password: "",
      conPassword: "",
      CandidateName: local?.username,
    },
  });
  const password = watch("password");
  const watchedFields = watch();
  const onSubmit = async () => {
    setButtonDisable(true);
    try {
      let data = {
        number: watchedFields.emailId,
      };
      const response = await axios.post(
        "https://nodebackend.kavalarnalantn.in:5000/user_Register/generateEmailOtp",
        data
      );
      setSentOtp(response.data);
      console.log(response.data, "responseresponse");
      setOtpModal(true);
    } catch (error) {
      setSentOtp(null);
      setOtp(null);
      setButtonDisable(false);
      setOtpModal(false);
      console.log("Error:", error);
    }
  };

  const submitOtp = async (data) => {
    if (sentOtp === Number(otp)) {
      try {
        const response = await axios.post(
          "https://nodebackend.kavalarnalantn.in:5000/son_Register/register",
          data
        );
        setButtonDisable(false);
        router.navigate("/CandidateLogin");
        setOtpModal(null);
      } catch (error) {
        setButtonDisable(false);
        setOtpModal(null);
        setSentOtp(null);
        setOtp(null);
        console.log("Error:", error);
      }
    } else {
      Alert.alert("Entered Worng Otp");
    }
  };

  return (
    <View style={styles.flex}>
      <Modal isVisible={otpModal}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
        <Text
            style={{
              color: "Black",
              fontSize: 20,
              paddingTop: 18,
              paddingBottom: 18,
              justifyContent: "center",
            }}
          >
            Enter OTP sent your registered email id
          </Text>
          <TextInput
            placeholder="Enter Otp"
            style={styles.inputBox}
            value={otp}
            onChangeText={(value) => setOtp(value)}
            keyboardType="numeric"
          />
          <View>
            <Pressable style={styles.button} onPress={handleSubmit(submitOtp)}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => setOtpModal(null)}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ImageBackground
        resizeMode="repeat"
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#212761",
        }}
      >
        <ScrollView>
          <View style={styles.card}>
            <View>
              <View style={styles.center}>
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
                <Text style={styles.titleText}>Candidate Registration</Text>
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
                      placeholder="Enter Name"
                      style={styles.inputBox}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="fullName"
                />
                {errors.fullName && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Enter Initial"
                      style={styles.inputBox}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="canNameInit"
                />
                {errors.canNameInit && (
                  <Text style={styles.errorMessage}>This is required.</Text>
                )}
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^\d{0,10}$/,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Enter mobile No"
                      style={styles.inputBox}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      keyboardType="numeric"
                    />
                  )}
                  name="mobileNo"
                />
                {errors.mobileNo && (
                  <Text style={styles.errorMessage}>Maximum of 10 digits</Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Enter E-mail id"
                      style={styles.inputBox}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="emailId"
                />
                {errors.emailId && (
                  <Text style={styles.errorMessage}>
                    Please check your email id
                  </Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^\d{0,12}$/,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Enter Aadhaar No"
                      style={styles.inputBox}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      keyboardType="numeric"
                    />
                  )}
                  name="aadhaarNo"
                />
                {errors.aadhaarNo && (
                  <Text style={styles.errorMessage}>
                    Enter Valid Aadhaar Number
                  </Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Enter User Name"
                      style={styles.inputBox}
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

                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Enter Password"
                      style={styles.inputBox}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="password"
                />
                {errors.password && (
                  <Text style={styles.errorMessage}>
                    Password must contain at least one uppercase letter, one
                    lowercase letter, one number, and one special character, and
                    must be at least 8 characters long.
                  </Text>
                )}

                <Controller
                  control={control}
                  rules={{
                    required: true,
                    validate: (value) =>
                      value === password || "Passwords do not match.",
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Confirm Password."
                      style={styles.inputBox}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="conPassword"
                />
                {errors.conPassword && (
                  <Text style={styles.errorMessage}>
                    Passwords do not match.
                  </Text>
                )}
              </View>
              <View style={styles.center}>
                <Pressable
                  style={styles.button}
                  onPress={handleSubmit(onSubmit)}
                >
                  <Text style={styles.buttonText}>{buttonDisable ? "Sending..." : "Submit"}</Text>
                </Pressable>
                <Link href={"/Login"}>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "700",
                      fontSize: 14,
                      marginLeft: 10,
                      textAlign: "center",
                    }}
                  >
                    Back
                  </Text>
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default CandidateRegister;
