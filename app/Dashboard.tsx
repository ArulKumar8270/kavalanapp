import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { styles } from "./style/style";
import { Col, Row } from "./style/rowAndColumn";
import { Link, router } from "expo-router";

function Dashboard() {
  return (
    <View style={[styles.flex]}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
        </View>
        <Row>
          <Col numRows={2}>
            <TouchableOpacity onPress={() => router.push("/CandidateRegister")}>
              <View style={styles.dashBoradCard}>
                <View>
                  <Text style={styles.cardText}>Employment Exchange</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
          <Col numRows={2}>
            <TouchableOpacity onPress={() => router.push("/CanteenDetails")}>
              <View style={styles.dashBoradCard}>
                <View>
                  <Text style={styles.cardText}>
                    Tamil Nadu Police Welfare Canteen
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <TouchableOpacity
              onPress={() => router.push("/CompassinateGround")}
            >
              <View style={styles.dashBoradCard}>
                <View>
                  <Text style={styles.cardText}>
                    Compassinate Ground Appointment
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
          <Col numRows={2}>
            <TouchableOpacity onPress={() => router.push("/Pension")}>
              <View style={styles.dashBoradCard}>
                <View>
                  <Text style={styles.cardText}>Pension & CMPRF</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
        </Row>
        <Row>
          <Col numRows={2}>
            <TouchableOpacity onPress={() => router.push("/HealthCare")}>
              <View style={styles.dashBoradCard}>
                <View>
                  <Text style={styles.cardText}>Health Scheme</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
          <Col numRows={2}>
            <TouchableOpacity onPress={() => router.push("/FundDetails")}>
              <View style={styles.dashBoradCard}>
                <View>
                  <Text style={styles.cardText}>
                    Tamil Nadu Police Benevolent Fund
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Col>
        </Row>
        <View style={styles.center}>
          <Link href={"/HomePage"}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>LogOut</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

export default Dashboard;
