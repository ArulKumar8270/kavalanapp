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
import DownloadPDF from "./DownloadPDF";

function CompassinateGround({ navigation }) {
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
              கருணை அடிப்படையில் பணி நியமனம்
            </Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <FlatList
            data={[
              {
                key: "தமிழ்நாடு அரசால் அரசாணை எண்.225, (தொழிலாளர் துறை) நாள்.15.02.1972 –ன்படி குடும்பத்தை ஏழ்மை மற்றும் துன்ப நிலையில் விட்டுவிட்டு பணியிடையே இறந்த அரசு ஊழியர்களின் காவலர்களின் தகுதிவாய்ந்த வாரிசுகளுக்கு இந்த திட்டம் அறிமுகப்படுத்தப்பட்டுள்ளது.",
              },
              {
                key: "2021-22 ஆண்டில் 1480 பேருக்குத் தகவல் பதிவு உதவியாளர், 56பேர் அலுவலக உதவியாளர், 16 பேர் அடிப்படை அரசு பணியாளர்களாக நியமிக்கப்பட்டுள்ளனர். இதைத் தவிர 1 இளநிலை உதவியாளர், 1 தட்டச்சர் சிறப்பு நிகழ்வாக நியமிக்கப்பட்டுள்ளார்கள் .",
              },
              {
                key: "மாண்புமிகு தமிழக முதலமைச்சர் அவர்கள் அரசாணை (நிலை) எண்.203, உள்(காவல் 15) துறை, நாள்:24.02.2022-ன்படி 1132 தகவல் பதிவு உதவியாளர் / காவல் நிலைய வரவேற்பாளர் பணியிடங்கள் புதிதாக தோற்றுவிக்கப்பட்டுள்ளது. 1132 இரண்டாம் நிலை காவலர் பணியிடங்களை அரசுக்கு ஒப்புவிப்பு செய்து அதற்குப் பதிலாக கருணை அடிப்படையில் காத்திருப்போர் பட்டியலில் உள்ள தகுதியுள்ள நபர்களை தகவல் பதிவு உதவியாளர் / காவல் நிலைய வரவேற்பாளர் பதவிக்கு நியமிக்கும் பொருட்டு அரசாணை பெறப்பட்டுள்ளது.",
              },
              {
                key: "கருணை அடிப்படையிலான இளநிலை உதவியாளர் / தட்டச்சர் காத்திருப்போர் பட்டியலில் உள்ள நபர்களிலிருந்து முதல் கட்டமாக (880 + 32 COVID = 912) நபர்களும் இரண்டாம் கட்டமாக (80+32 COVID = 112) நபர்களும் மற்றும் மூன்றாம் கட்டமாக (48+28 COVID=76) நபர்பகளும் தகவல் பதிவு உதவியாளர்/காவல் நிலைய வரவேற்பாளர் பணியிடம் வழங்கப்பட்டுள்ளது.",
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
        <TouchableWithoutFeedback
        >
          <DownloadPDF from={"Ground"}/>
        </TouchableWithoutFeedback>
      </ScrollView>
      <Footer />
    </View>
  );
}
export default CompassinateGround;
