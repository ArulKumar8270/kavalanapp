import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { styles } from "./style/style";
import Footer from "@/components/Footer";

function DownloadPDF({ from }) {
  const gratita = [
    {
      name: "EX-GRATIA GRANTS",
      link: "https://kavalarnalantn.in/pdf/TNPBF/EX-GRATIA/1.pdf",
    },
  ];
  const education = [
    {
      name: "Centenary Scholarship",
      link: "https://kavalarnalantn.in/pdf/TNPBF/EDUCATIONALSCHOLARSHIP/1.pdf",
    },
    {
      name: "CM Announcement of Spl.Scholarship",
      link: "https://kavalarnalantn.in/pdf/TNPBF/EDUCATIONALSCHOLARSHIP/2.pdf",
    },
    {
      name: "Enhancement of Spl.Scholarship",
      link: "https://kavalarnalantn.in/pdf/TNPBF/EDUCATIONALSCHOLARSHIP/3.pdf",
    },
  ];
  const Ground = [
    {
      name: "Appointment on Compassionate Ground Rules",
      link: "https://kavalarnalantn.in/pdf/CA/1.pdf",
    },
    {
      name: "Compassionate Ground-Comprehensive Guidelines - Tamil",
      link: "https://kavalarnalantn.in/pdf/CA/2.pdf",
    },
    {
      name: "Compassionate Ground-Comprehensive Guidelines-English",
      link: "https://kavalarnalantn.in/pdf/CA/3.pdf",
    },
  ];
  const walfare = [
    {
      name: "VAT Exemption",
      link: "https://kavalarnalantn.in/pdf/Canteen/1.pdf",
    },
    {
      name: "VAT exemption for CPC goods",
      link: "https://kavalarnalantn.in/pdf/Canteen/2.pdf",
    },
    {
      name: "Finacial sanction for 3 canteens",
      link: "https://kavalarnalantn.in/pdf/Canteen/3.pdf",
    },
    {
      name: "Extension of canteen for Prison, Rescue and Fire",
      link: "https://kavalarnalantn.in/pdf/Canteen/4.pdf",
    },
    {
      name: "Utilising the facilities of Police Canteen by Forest personnel",
      link: "https://kavalarnalantn.in/pdf/Canteen/5.pdf",
    },
    {
      name: "Utilising the facilities of Police Canteen by Forest personnel",
      link: "https://kavalarnalantn.in/pdf/Canteen/6.pdf",
    },
    {
      name: "Establishing of 44 TNPC additonally",
      link: "https://kavalarnalantn.in/pdf/Canteen/7.pdf",
    },
    {
      name: "Establishment of Pudupet Canteen",
      link: "https://kavalarnalantn.in/pdf/Canteen/8.pdf",
    },
    {
      name: "Establishment of Kondithope Canteen",
      link: "https://kavalarnalantn.in/pdf/Canteen/9.pdf",
    },
    {
      name: "Establishment of TNPA (Oonamencherry) Canteen",
      link: "https://kavalarnalantn.in/pdf/Canteen/10.pdf",
    },
    {
      name: "Extension of canteen facilities to the Ministerial Staff of Tamilnadu Fire and Rescue Services",
      link: "https://kavalarnalantn.in/pdf/Canteen/11.pdf",
    },
    {
      name: "Extension of Canteen facility to Ministerial Staff of Prison Dept",
      link: "https://kavalarnalantn.in/pdf/Canteen/12.pdf",
    },
    {
      name: "Amount sanction for establishing 44 additional Canteen - Amendment",
      link: "https://kavalarnalantn.in/pdf/Canteen/13.pdf",
    },
    {
      name: "Sanction of unforeseen expenditure for 44 addtional Canteen - Contingent Fund",
      link: "https://kavalarnalantn.in/pdf/Canteen/14.pdf",
    },
    {
      name: "Amendment for 44 addtional canteen",
      link: "https://kavalarnalantn.in/pdf/Canteen/15.pdf",
    },
    {
      name: "50% Refund of GST -Commercial Tax and Registration Dept",
      link: "https://kavalarnalantn.in/pdf/Canteen/16.pdf",
    },
    {
      name: "Six Canteen Establishment in Newly formed Districts",
      link: "https://kavalarnalantn.in/pdf/Canteen/17.pdf",
    },
    {
      name: "Financial sanction for Egmore canteen construction",
      link: "https://kavalarnalantn.in/pdf/Canteen/18.pdf",
    },
  ];

  const pensionLink = [
    {
      name: "Committee for the Retired Police Welfare Board",
      link: "https://kavalarnalantn.in/pdf/Pension/1.pdf",
    },
    {
      name: "Formation of Retired Personnel Welfare Board",
      link: "https://kavalarnalantn.in/pdf/Pension/2.pdf",
    },
    {
      name: "Tamil Nadu Pension Rules",
      link: "https://kavalarnalantn.in/pdf/Pension/3.pdf",
    },
  ];
  const fundLink = [
    {
      name: "Group Insurance Scheme",
      link: "https://kavalarnalantn.in/pdf/TNPBF/GROUPINSURANCESCHEME/1.pdf",
    },
    {
      name: "Police Insurance enhancement",
      link: "https://kavalarnalantn.in/pdf/TNPBF/GROUPINSURANCESCHEME/2.pdf",
    },
  ];

  const healthLink = [
    {
      name: "CERTIFICATE TO BE ISSUED IN LIEU OF IDENTITY CARD UNDER THENEW HEALTH INSURANCE SCHEME",
      link: "https://kavalarnalantn.in/pdf/TNPHF-Section/NewhealthInsuranceScheme/G.O.%20Annexure3-FormsNodalofficers.pdf",
    },
    {
      name: "MEDICAL AID",
      link: "https://kavalarnalantn.in/pdf/TNPHF-Section/NewhealthInsuranceScheme/G.O.160Maincontain.pdf",
    },
    {
      name: "THE GUIDELINES FOR IMPLEMENTATION OF NEW HEALTH INSURANCE SCHEME, 2021 FOR EMPLOYEES OF GOVERNMENT DEPARTMENTS, STATE PUBLIC SECTOR UNDERTAKINGS, STATUTORY BOARDS, LOCAL BODIES, STATE GOVERNMENT UNIVERSITIES ETC., AND THEIR ELIGIBLE FAMILY MEMBERS",
      link: "https://kavalarnalantn.in/pdf/TNPHF-Section/NewhealthInsuranceScheme/G.O.160-AnnexureA-Guidelines.pdf",
    },
  ];

  const tempValues =
    from === "walfare"
      ? walfare
      : from === "gratita"
      ? gratita
      : from === "education"
      ? education
      : from === "Ground"
      ? Ground
      : from === "pensionLink"
      ? pensionLink
      : from === "healthLink"
      ? healthLink
      : null;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
        backgroundColor: "#212761",
      }}
    >
      <ScrollView style={{ marginBottom: 20 }}>
        <View style={styles.homeStyles}>
          <View>
            <View style={styles.pdfOptions}>
              {tempValues?.map((items) => {
                return (
                  <TouchableOpacity onPress={() => Linking.openURL(items.link)}>
                    <View style={styles.dashBoradCard}>
                      <View>
                        <Text style={styles.cardText}>{items.name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={styles.HomeHeader}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("https://www.tnpolicecanteen.com/")
                }
              >
                <View style={styles.homeTitle}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "#212761",
                    }}
                  >
                    Go To Official Site
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default DownloadPDF;
