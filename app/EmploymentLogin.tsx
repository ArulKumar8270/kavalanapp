import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./style/style";
import Footer from "@/components/Footer";
import { Link, router } from "expo-router";

function EmploymentLogin() {
  return (
    <View style={styles.emploaymentExchange}>
      <Image
        source={require("./images/logo.png")}
        style={{ width: 50, height: 50 }}
      />
      <View style={styles.app}>
        <View style={styles.homeTitle}>
          <Text style={styles.titleText}>தமிழ்நாடு காவலர் நலன்</Text>
          <Text style={{ color: "white", marginTop: 20, textAlign: "center" }}>
            Employment Exchange
          </Text>
        </View>
      </View>
      <View style={styles.homeOptions}>
        <TouchableOpacity onPress={() => router.push("/Login")}>
          <View style={styles.dashBoradCard}>
              <Text style={styles.cardText}>LOGIN / REGISTER</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/CandidateLogin")}>
          <View style={styles.dashBoradCard}>
              <Text style={styles.cardText}>CANDIDATE LOGIN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/CompanyLogin")}>
          <View style={styles.dashBoradCard}>
            <Text style={styles.cardText}>COMPANY LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
      <Footer background={"white"} />
    </View>
  );
}
export default EmploymentLogin;
