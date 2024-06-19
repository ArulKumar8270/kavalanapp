import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
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
import MenuBar from "./MenuBar";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "Home",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
          headerLeft: () => (
            <View>
              <MenuBar />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="EmploymentLogin"
        options={{
          title: "Employment Exchange",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CandidateLogin"
        options={{
          title: "Candidate Login",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CandidateRegister"
        options={{
          title: "Candidate Register",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CanteenDetails"
        options={{ 
          title: "Welfare Canteen",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CompanyLogin"
        options={{
          title: "Company Login",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CompanyRegister"
        options={{
          title: "Company Register",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CompassinateGround"
        options={{
          title: "Compassinate Ground Appointment",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        options={{
          title: "Forget Password",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ForgetUsername"
        options={{
          title: "Forget UserName",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="FundDetails"
        options={{
          title: "Benevolent Fund",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="HealthCare"
        options={{
          title: "Health scheme",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          title: "Login",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Pension"
        options={{
          title: "Pesnsion & CMPRF",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="PostJobs"
        options={{
          title: "Apply Job",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Register"
        options={{
          title: "Register",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ViewJob"
        options={{
          title: "Job Details",
          headerRight: () => (
            <Image
              source={require("./images/logo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Stack>
  );
}
