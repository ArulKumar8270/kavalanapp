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

function FundDetails({ navigation }) {
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
              தமிழ்நாடு காவல் அங்காடிகள்
            </Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <FlatList
            data={[
              {
                key: "தமிழ்நாடு அரசு 1957-ம் ஆண்டு காவல் துறையில், அரசிதழ் பதிவு பெறாத காவல் பணியாளர் மற்றும் அமைச்சுப் பணியாளர்கள் நலனுக்காக, அரசாணை (நிலை) எண்.1097, உள்துறை கருணைக் கொடைத் திட்டம் நாள் 23.04.1957-ன் படி தமிழ்நாடு காவலர் சேம நல நிதி திட்டம் உருவாக்கப்பட்டது .",
              },
              {
                key: "தமிழ்நாடு காவலர் சேம நல நிதி அரசிதழ் பதிவு பெறாத காவல் பணியாளர் மற்றும் அமைச்சுப் பணியாளர்கள் தேவைகளை நிறைவேற்றுதற்காக உருவாக்கப்பட்டது .",
              },
              {
                key: "இத்திட்டம் துவங்கப்பட்ட போது அரசு மானியமாக ரூ.50,000 வழங்கப்பட்டது. தற்சமயம் ரூ.1.2 கோடியாக உயர்த்தப்பட்டு 2018 முதல் வழங்கப்படுகிறது.",
              },
              {
                key: "இதற்கான நிதியம் அரசு மானியத்திலிருந்தும், பயனாளர்களின் சந்தா மற்றும் உறுப்பினர்களின் நன்கொடையிலிருந்தும் உருவாக்கப்பகிறது .",
              },
              {
                key: "அரசிதழ் பதிவு பெறாத காவலர் முதல் ஆய்வாளர்கள் வரை மற்றும் அலுவலக கண்காணிப்பாளர்கள் வரை இதன் பயனாளர்கள் ஆவார்.",
              },
              {
                key: "தமிழ்நாடு காவலர் சேம நல நிதியம் 74 மாவட்டக் குழுக்களை கொண்டுள்ளது .",
              },
              {
                key: "மாவட்ட குழுக்களின் கணக்குகளை மத்திய குழு கண்காணிக்கிறது .",
              },
              {
                key: "மத்திய குழு தலைவராக காவல்துறை தலைமை இயக்குநர் பொறுப்பு வகிக்கிறார் .",
              },
              {
                key: "மாவட்ட குழு தலைவராக காவல் கண்காணிப்பாளர்/தளவாய்/காவல் ஆணையாளர் பொறுப்பு வகிக்கிறனர் .",
              },
              {
                key: "இதற்கான உறுப்பினர் என்பது சுய விருப்பம் சார்ந்ததாகும், அரசிதழ் பதிவு பெறாத (காவல் ஆளிநர்கள்/அமைச்சுப் பணியாளர்கள் ) காவலர் ஆய்வாளர்கள் மற்றும் அலுவலல் கண்காணிப்பாளர்கள் மட்டுமே பயனாளர்கள் ஆவார்.",
              },
              {
                key: "இரண்டு தவணைகள் தொடச்சியாக செலுத்தாத சந்தாதாரர் உறுப்பினராக நீடிக்க இயலாது. நிலுவையில் உள்ள சந்தாத தொகையை செலுத்தி திரும்ப சந்தாதாரர்களாக இணையலாம்.",
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
        <View>
          <Text
            style={{ paddingHorizontal: 25, fontSize: 18, fontWeight: "700", marginBottom : 20 }}
          >
            EDUCATIONAL SCHOLARSHIP
          </Text>
          <TouchableWithoutFeedback>
            <DownloadPDF from={"education"} />
          </TouchableWithoutFeedback>
        </View>
        {/* <View>
          <Text
            style={{ paddingHorizontal: 25, fontSize: 18, fontWeight: "700" }}
          >
            EX-GRATIA GRANTS
          </Text>
          <TouchableWithoutFeedback>
            <DownloadPDF from={"gratita"} />
          </TouchableWithoutFeedback>
        </View> */}
      </ScrollView>
      <Footer />
    </View>
  );
}
export default FundDetails;
