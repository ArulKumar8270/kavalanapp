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

function HealthCare({ navigation }) {
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
              HEALTH SCHEME
            </Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Text style={{ paddingBottom: 20, fontSize: 18, fontWeight: "700" }}>
            சிறப்பு மருத்துவ உதவி திட்டம்
          </Text>
          <FlatList
            data={[
              {
                key: "காவல் தலைமை இயக்குநர் அவர்களது நடைமுறைகள் ந.க.எண்.106867/TNPBF-1/2009, நாள் 13.04.2010 –ன் படி சிறப்பு மருத்துவ உதவி திட்டம் சந்தாதாரர்களுக்கும் மற்றும் தகுதி வாய்ந்த குடும்ப உறுப்பினர்களுக்கும் தமிழ்நாடு காவலர் சேம நலத் திட்டத்தின் கீழ் மருத்துவ நிதிக்காக வழங்கப்படுகிறது.",
              },
              {
                key: "இத்திட்டத்தின் கீழ் குணப்படுத்த முடியாத தீவிர நோயால் பாதிக்கப்பட்டவருக்கு, ஒரு சந்தாதாரருக்கு அதிகபட்சமாக ரூ.5 லட்சம் வழங்கப்படுகிறது. இதற்காக வருடம் ரூ.8 கோடி அளவில் தமிழ்நாடு காவலர் சேம நல நிதியிலிருந்து மத்திய குழுவால் ஒதுக்கப்படுகிறது.",
              },
              {
                key: "தமிழ்நாடு காவலர் சேம நல நிதியிலிருந்து காவல் ஆளிநர் முதல் ஆய்வாளர் வரை அமைச்சுப்பணியாளர் அலுவலக கண்காணிக்பபாளர் வரை 2022-ம் ஆண்டு, ரூ.6,30,65,656/- சிறப்பு மருத்துவ உதவி குழுவினால் வழங்கப்பட்டுள்ளது.",
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
            உணவு மானியத் திட்டம்
          </Text>
          <FlatList
            data={[
              {
                key: "தமிழ்நாடு அரசு அரசாணை எண் 2497 உள்துறை(Pol.XIV) நாள். 25.09.1980 மூலமாக காவலர் முதல் ஆய்வாளர் வரையிலான காவல் பணியாளர்களுக்கு நியாய விலை கடைகள் மூலம் வழங்கப்படும் அத்தியாவசியப் பொருட்களுக்கான அரிசி, சர்க்கரை, சமையல் எண்ணெய் போன்றவை பொது விநியோக திட்டத்தில் மானிய விலையில் வழங்கப்படுகிறது .",
              },
              {
                key: "இதற்காக அரசு ஆணை எண்.1381, உள்துறை(Pol.XII) நாள்.14.10,2008-ன் படி அவர்களுக்கு காக்கி நிறத்தில் தனித் தன்மையான குடும்ப அட்டை வழங்கும் திட்டத்தில் 63,205 காவலர்களுக்கு வழங்கப்பட்டுள்ளன. தற்போது அந்த அட்டை ஸ்மார்ட் கார்டாக மேம்படுத்தப்பட்டுள்ளது.",
              },
              {
                key: "2022-2023 நிதியாண்டில் இந்த திட்டத்திற்கு 7 கோடி ஒதுக்கப்படுகிறது .",
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
            காவலர் மருத்துவமனைகள்/ புறநோயாளிக்கான அலகு மருத்துவ மனைகள்
          </Text>
          <FlatList
            data={[
              {
                key: "பணியிலிருக்கும்/பணியிலிருந்து ஓய்வு பெற்ற காவலர்கள்/ காவலர் குடும்ப உறுப்பினர்களுக்கு கீழ்க்கண்ட 13 இடங்களில் காவலர் மருத்துவமனைகள் இயங்கி வருகின்றன.",
              },
              {
                key: "அரசாணை (நிலை) எண். 707, உள் (காவல் -14) துறை, நாள் 28.10.2011-ன்படி காவல் பணியாளர்கள் மற்றும் அவர்கள் குடும்ப உறுப்பினர்களுக்கு பயனளிக்கும் வகையில் 26 ஆயுதப்படை தலைமையிடங்களிலும், 10 தமிழ்நாடு சிறப்பு காவல் படை தலைமையிடங்களிலும், புறநோயாளிகள் மருத்துவமனைகள் உருவாக்கப்பட்டுள்ளன.",
              },
              {
                key: "கீழ்க்காணும் இடங்களில் காவலர்கள் மருத்துவமனைகள் தரம் உயர்த்தும் கருத்து பரிசீலனையில் உள்ளன. (1.சென்னை 2.கோயம்புத்தூர் 3.மதுரை 4.திருச்சி 5.சேலம் 6.திருநெல்வேலி 7.பரங்கி மலை 8.ஆவடி அணி).",
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
            முழு உடல் மருத்துவப் பரிசோதனை
          </Text>
          <FlatList
            data={[
              {
                key: "அரசாணை (நிலை) எண். 142, உள் (காவல் -9) துறை, நாள் 24.02.2014-ன்படி 40 வயது நிரம்பிய காவல் பணியாளர்களுக்கு ஆண்டிற்கு ஒருமுறை அரசு மருத்துவமனைகளில் இலவச முழு உடல் மருத்துவப் பரிசோதனை அளிக்க, ஆணை பிறப்பிக்கப்பட்டது.",
              },
              {
                key: "தொடர்ந்து அரசாணை எண்.1008 உள் (காவல் 9) துறை நாள் 20.08.2018-ன்படி 30 வயதிற்கு மேற்பட்ட காவல் ஆளிநர்களுக்கும் முழு உடல்பரிசோதனை இலவசமாக மேற்கொள்வதற்காக ஆணை வழங்கப்பட்டு செயல்பாட்டில் உள்ளது .",
              },
              {
                key: "அரசாணை எண்.542 உள் (காவல் 9) துறை நாள் 01.12.2021-ன் படி காவலர்களுக்கு அரசு மருத்துவமனைகளில் ஆண்டுக்கு ஒருமுறை இலவசமாக வழங்கப்படும் முழு உடல் பரிசோதனை, அவர்களின் வாழ்க்கைத் துணைக்கும் நீட்டித்து வழங்கப்பட்டுள்ளது. மேலும் 30 வயது முடிவடைந்த பெண் காவலர்களுக்கு வழங்கப்படும் சிறப்பு முழு உடல் பரிசோதனை திட்டத்தில், பெண்களுக்கான சிறப்பு மருத்துவ பரிசோதனையும் சேர்க்கப்பட்டுள்ளது.",
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
            காவலர் நிறைவாழ்வு பயிற்சி
          </Text>
          <FlatList
            data={[
              {
                key: "தமிழ்நாட்டிலுள்ள அனைத்து காவலர்களும் மன அழுத்தமின்றி பணி செய்யத் தமிழக அரசு, அரசாணை எண்.516, உள் (காவல் -9) துறை நாள் 11.06.2018-ன் படி ரூபாய் 10 கோடி நிதி ஒதுக்கீடு செய்யப்பட்டது.",
              },
              {
                key: "பெங்களூரில் உள்ள நிம்ஹான்ஸ் (NIMHANS) என்றழைக்கப்படும் தேசிய மனநலம் மற்றும் நரம்பியல் அறிவியல் நிறுவனத்துடன் தமிழக காவல் துறை இணைந்து தமிழ்நாட்டிலுள்ள அனைத்து காவலர்களுக்கும் மன அழுத்தம் நீக்கி அவர்களின் பணித்திறனை மேம்படுத்தும் விதமாக காவலர் நிறைவாழ்வு பயிற்சி வழங்கப்பட்டு வருகிறது .",
              },
              {
                key: "இப்பயிற்சியானது, காவலர்களுக்கு 3 நாள் பயிற்சியாகவும், காவலர் உள்ளிட்ட 3 குடும்ப உறுப்பினர்களுக்கு ஒரு நாள் பயிற்சியும் வழங்கப்பட்டது.",
              },
              {
                key: "காவலர் நிறைவாழ்வு பயிற்சி காவலர்களின் மன அழுத்தத்தை போக்குவதற்கும் பணியில் திறமையாக செயல்படவும் நடத்தப்பட்டுள்ளது. கிட்டத்தட்ட 90 சதவீத காவலர்களுக்கு பயிற்சி அளிக்கப்பட்டுள்ளது. 90000 காவலர்களுக்கு பயிச்சி நிறைவு பெற்று, தற்போது சுமார் 9000 காவலர்களுக்கு பயிற்சி அளிக்கப்பட்டு வருகின்றது .",
              },
              {
                key: "இப்பயிற்சியை நடத்தும் பயிற்றுநர்களுக்காக, நலவாழ்வு பட்டப்படிப்பு பயிற்சியும் வழங்கப்படுகிறது .",
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
            style={{ paddingHorizontal: 25, fontSize: 18, fontWeight: "700" }}
          >
            Police Well Being
          </Text>
          <TouchableWithoutFeedback>
            <View style={styles.HomeHeader}>
              <View style={styles.homeTitle}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#a52a2a" }}
                >
                  Download
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Text
            style={{ paddingHorizontal: 25, fontSize: 18, fontWeight: "700" }}
          >
            Digital Data Annual Checkup
          </Text>
          <TouchableWithoutFeedback>
            <View style={styles.HomeHeader}>
              <View style={styles.homeTitle}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#a52a2a" }}
                >
                  Download
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Text
            style={{ paddingHorizontal: 25, fontSize: 18, fontWeight: "700" }}
          >
            New Health Insurance Scheme
          </Text>
          <TouchableWithoutFeedback>
            <Link href={"/DownloadPDF"}>
              <View style={styles.HomeHeader}>
                <View style={styles.homeTitle}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#a52a2a",
                    }}
                  >
                    Download
                  </Text>
                </View>
              </View>
            </Link>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Text
            style={{ paddingHorizontal: 25, fontSize: 18, fontWeight: "700" }}
          >
            Network Hospitals
          </Text>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("DownloadPDF", {
                link: [
                  {
                    name: "Network Hospitals",
                    link: "https://kavalarnalantn.in/pdf/TNPHF-Section/Network-Hospitals/ListofApprovedHospitals.pdf",
                  },
                ],
              })
            }
          >
            <View style={styles.HomeHeader}>
              <View style={styles.homeTitle}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#a52a2a" }}
                >
                  Download
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Text
            style={{ paddingHorizontal: 25, fontSize: 18, fontWeight: "700" }}
          >
            Medical Procedures
          </Text>
          <TouchableWithoutFeedback>
            <DownloadPDF from={"healthLink"} />
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
export default HealthCare;
