import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "../app/style/style";
import Footer from "./Footer";
import { Link, router } from "expo-router";
export const HomePage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
      }}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.HomeHeader}>
          <View style={styles.homeTitle}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#212761" }}
            >
              தமிழ்நாடு காவலர் நலன்
            </Text>
            <Text style={{ marginTop: 10 }}>TAMIL NADU POLICE WELFARE</Text>
          </View>
        </View>

        <View style={styles.homeStyles}>
          <Image
            source={require("../assets/images/Banner1.jpeg")}
            style={{ width: "100%", height: 200, borderRadius: 10 }}
          />
          <View style={styles.homeOptions}>
            <TouchableWithoutFeedback
              onPress={() => router.push("/EmploymentLogin")}
            >
              <View style={styles.serviceCard}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/services/exchange.png")}
                    style={{ width: 40, height: 40, margin: 10 }}
                  />
                  <Text style={styles.textWhite}> Employment Exchange </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => router.push("/CanteenDetails")}
            >
              <View style={styles.serviceCard}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/services/canteen.png")}
                    style={{ width: 40, height: 40, margin: 10 }}
                  />
                  <Text style={styles.textWhite}>
                    {" "}
                    Tamil Nadu Police Welfare Canteen
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => router.push("/CompassinateGround")}
            >
              <View style={styles.serviceCard}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/services/appointment.png")}
                    style={{ width: 40, height: 40, margin: 10 }}
                  />
                  <Text style={styles.textWhite}>
                    {" "}
                    Compassinate Ground Appointment{" "}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => router.push("/Pension")}>
              <View style={styles.serviceCard}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/services/retirement.png")}
                    style={{ width: 40, height: 40, margin: 10 }}
                  />
                  <Text style={styles.textWhite}> Pension CMPRF</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => router.push("/HealthCare")}
            >
              <View style={styles.serviceCard}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/services/health-insurance.png")}
                    style={{ width: 40, height: 40, margin: 10 }}
                  />
                  <Text style={styles.textWhite}>Health Scheme</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => router.push("/FundDetails")}
            >
              <View style={styles.serviceCard}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={require("../assets/services/fund.png")}
                    style={{ width: 40, height: 40, margin: 10 }}
                  />
                  <Text style={styles.textWhite}>
                    Tamil Nadu Police Benevolent Fund
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};
