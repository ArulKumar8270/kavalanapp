import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";
import Footer from "@/components/Footer";
import { styles } from "./style/style";
import { router, useLocalSearchParams } from "expo-router";

function CandidateDetails() {
  const local = useLocalSearchParams();

  console.log(local, "route.params");
  const [apiDatas, setApiDatas] = useState(null);

  console.log(apiDatas , "apiDatas34254")

  useEffect(() => {
    fetchData();
  }, [local?.userName]);

  const fetchData = async () => {
    try {
      const url = `https://nodebackend.kavalarnalantn.in:5000/job_fair/${local?.userName}`;
      const response = await axios.get(url);
      setApiDatas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View style={styles.emploaymentExchange}>
      <Image
        source={require("./images/logo.png")}
        style={{ width: 50, height: 50 }}
      />
      <View style={styles.app}>
        <View style={styles.homeTitle}>
          <Text style={styles.titleText}>தமிழ்நாடு காவலர் நலன்</Text>
        </View>
      </View>
      <View style={styles.homeOptions}>
        {/* {apiDatas?.length === 0 && ( */}
        <TouchableOpacity
          onPress={() =>
            router.navigate(
              `/ApplyJob?userName=${local.userName}&candidateName=${local?.candidateName}`
            )
          }
        >
          <View style={styles.dashBoradCard}>
            <View>
              <Text style={styles.cardText}>Apply Job</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* )} */}

        <TouchableOpacity
          onPress={() =>
            router.navigate(
              `/ViewJob?userName=${local.userName}&candidateName=${local?.candidateName}`
            )
          }
        >
          <View style={styles.dashBoradCard}>
            <View>
              <Text style={styles.cardText}>View Applied Job</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity>
          <View style={styles.dashBoradCard}>
            <View>
              <Text variant="displayLarge" style={styles.cardText}>
                Nitifications
              </Text>
            </View>
          </View>
        </TouchableOpacity> */}
      </View>
      {/* <TouchableOpacity
        onPress={() =>
          router.navigate(
            `/ViewJob?userName=${local.userName}&candidateName=${local?.candidateName}`
          )
        }
      >
        <View style={styles.dashBoradCard}>
          <View>
            <Text style={styles.cardText}>Notifications</Text>
          </View>
        </View>
      </TouchableOpacity> */}
      {/* </ImageBackground> */}
      <Footer background={"white"} />
    </View>
  );
}
export default CandidateDetails;
