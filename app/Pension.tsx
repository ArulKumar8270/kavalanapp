import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "./style/style";
import Footer from "@/components/Footer";
import { Link } from "expo-router";
import DownloadPDF from "./DownloadPDF";

function Pension() {
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
              தமிழ்நாடு முதலமைச்சரின் பொது நிவாரண நிதி
            </Text>
          </View>
        </View>
        <View style={{ padding: 20, paddingBottom: 0 }}>
          <FlatList
            data={[
              {
                key: "பணியிலிருக்கும் போது இறக்கும் காவலர்களின் குடும்பத்தினருக்கு நிவாரண நிதி வழங்க அந்த நிதியம் உருவாக்கப்பட்டது .",
              },
              {
                key: "கோவிட்-19 பாதிப்பினால் இறந்த 124 காவலர்களின் குடும்பத்தினருக்கு நிவாரண நிதியாக 30.37 கோடி வழங்கப்பட்டது.",
              },
            ]}
            renderItem={({ item }) => {
              return (
                <View style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 18, textAlign: "justify" }}>
                    <EvilIcons
                      name="arrow-right"
                      size={20}
                      color="black"
                      type="entypo"
                    />
                    {item.key}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{ padding: 20 }}>
          <Text style={{ paddingBottom: 20, fontSize: 18, fontWeight: "700" }}>
            ஓய்வு பெற்ற காவல் அதிகாரிகளுக்கான நல வாரியம்
          </Text>
          <FlatList
            data={[
              {
                key: "அரசாணை எண்.157 உள் (காவல்-9) நாள்.08.03.2019-ன்படி ஓய்வு பெற்ற காவல் அதிகாரிகளுக்கான நலவாரியம் ஒன்று உருவாக்கப்படும் என தமிழக அரசால் நிர்வாக ஆணை வெளியிடப்பட்டது.",
              },
              {
                key: "மேற்கண்ட நலவாரியம் அமைப்பது தொடர்பாக மாவட்டம், நகரம் மற்றும் பெருநகரம் அளவில் குழுக்கள் அமைப்பதற்கு அரசிடமிருந்து ஆணை பெறப்பெற்றுள்ளது.",
              },
            ]}
            renderItem={({ item }) => {
              return (
                <View style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 18, textAlign: "justify" }}>
                    <EvilIcons
                      name="arrow-right"
                      size={20}
                      color="black"
                      type="entypo"
                    />
                    {item.key}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{ padding: 20 }}>
          <Text style={{ paddingBottom: 20, fontSize: 18, fontWeight: "700" }}>
            மோர் மற்றும் எலுமிச்சை பழச்சாறு வழங்குதல்
          </Text>
          <FlatList
            data={[
              {
                key: "போக்குவரத்தை கட்டுப்படுத்தும் காவல்துறையினருக்கு அரசாணை எண்.902, உள்(காவல்.13)துறை, நாள்.14.12.2015-ன்படி கோடைக்காலத்தில் மோர் மற்றும் எலுமிச்சம் பழச்சாறு வழங்கும் திட்டம் அறிமுகப்படுத்தப்பட்டுள்ளது.",
              },
              {
                key: "ஒவ்வொரு ஆண்டும் கோடைக் காலத்தில் மார்ச் முதல் ஜீன் வரையிலான நான்கு மாதங்களுக்கு காலை 8 மணி முதல் மாலை 4 மணி வரை உள்ள நேரத்தில் இரண்டு மணி நேரத்திற்கு ஒருமுறை அவர்களின் விருப்பத்திற்கு ஏற்ப மோர் மற்றும் எலுமிச்சம் பழச்சாறு வழங்கப்பட்டு வருகிறது.",
              },
            ]}
            renderItem={({ item }) => {
              return (
                <View style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 18, textAlign: "justify" }}>
                    <EvilIcons
                      name="arrow-right"
                      size={20}
                      color="black"
                      type="entypo"
                    />
                    {item.key}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <TouchableWithoutFeedback>
          <DownloadPDF from={"pensionLink"} />
        </TouchableWithoutFeedback>
      </ScrollView>
      <Footer />
    </View>
  );
}
export default Pension;
