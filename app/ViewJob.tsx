import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import axios from "axios";
import { styles } from "./style/style";
import { formStyles } from "./style/fromStyle";
import { router, useLocalSearchParams } from "expo-router";

const ViewJob = () => {
  const local = useLocalSearchParams();
  const [steps, setSteps] = useState(["", "", "", ""]);
  const [apiData, setApiData] = useState(null);

  console.log(apiData, "apiDataapiData", local);

  useEffect(() => {
    if (local?.userName) {
      fetchData();
    }
  }, [local?.userName]);

  const fetchData = async () => {
    try {
      const url = `https://nodebackend.kavalarnalantn.in:5000/job_fair/${local?.userName}`;
      const response = await axios.get(url);
      setApiData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let keys = {
    empName: "Employee Name",
    empNameInit: "Initial",
    email: "Email Id",
    relEmp: "Relationship to the Employee",
    empStatus: "Status of Employee",
    policePersonnel: "Wards / Spouse of",
    spouseCertificate: "Wards/Spouse Certificate",
    dob: "Date Of Birth",
    ranks: "Rank",
    gpfcpsNumber: "GPF/CPS/PPO Number",
    stationUnit: "Police Station / Unit ",
    workingDistrict: "Kanniyakumari",
    lastDistrict: "Last Served District",
    policeMobilePhone: "Mobile Number",
    CandidateNname: "Candidate's Name",
    CandidateNnameInit: "Initial",
    gender: "Gender",
    dobDate: "Date Of Birth",
    email1: "Email",
    phone1: "Mobile Number",
    address1: "Address Line 1 ",
    address2: "Address Line 2",
    address3: "Address Line 3",
    CityDistrict: "City/District",
    state1: "State",
    pincode: "Pincode",
    aadharNumber: "Aadhar Number ",
    myCheckboxes: "Languages Known",
    perference1: "Preference 1",
    preference2: "Preference 2",
    preference3: "Preference 3",
    otherPreferred: "Other Preferred",
    workPreference1: "Work Preference 1",
    workPreference2: "Work Preference 2",
    workPreference3: "Work Preference 3",
    skills: "Skills",
    candPhoto: "Candidate's Photo",
    resume: "Your Resume ",
    Qualification: "Highest Qualification",
    studied: "Qualification",
    Board: "10th Board",
    pass10: "10th Month & Year of Passing",
    Percentage: "10th Percentage",
    Board12: "12th Board",
    Passing: "12th Month & Year of Passing",
    Percentage12: "12th Percentage",
    course: "ITI Name of the course",
    Passingiti: "ITI Month & Year of Passing",
    Percentageiti: "ITI Percentage",
    courseDip: "Diploma Name of the course",
    PassingDip: "Diploma Month & Year of Passing",
    PercentageDip: "Diploma Percentage",
    GraduationDg: "Under Graduation Name of the Degree",
    Institute: "Under Graduation Name of the Institute / University",
    Subject: "Under Graduation Name of the Major Subject",
    Passinghigi: "Under Graduation Month & Year of Passing",
    Percentagehigi: "Under Graduation Percentage",
    Degreename: "Post Graduation Name of the Degree",
    University: "Post Graduation Name of the Institute / University",
    MajorSubject: "Post Graduation Name of the Major Subject",
    passedYear: "Post Graduation Month & Year of Passing",
    Percentageunder: "Post Graduation Percentage",
    Universityphd: "phd Name of the Institute / University",
    Subjectphd: "PhD Name of the Major Subject",
    Passingphd: "PHD Month & Year of Passing",
    Percentagephd: "PHP Percentage",
    BoardBelow: "Board",
    below10thpass: "Month & Year of Passing",
    belowPercentage: "Percentage",
    Pursuing: "Pursuing Any Degree",
    UniversityOther: "Name of the Institute / University",
    SubjectOther: "Name of the Major Subject",
    Employment: "Employment Status",
    experience: "Year of experience",
    CompanyName: "Name of the Company",
    Designation: "Job Designation",
    Workingplz: "Place of Working",
    fromDate: "From Date",
    toDate: "To Date",
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#212761",
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
        <Text style={styles.titleText}>Applied Job</Text>
      </View>
      <View style={formStyles.flexRow}>
        <View style={styles.left}>
          <Pressable
            style={styles.button}
            onPress={() => router.navigate("/CandidateLogin")}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </Pressable>
        </View>
        <View style={styles.right}>
          <Pressable
            style={styles.button}
            onPress={() =>
              router.navigate(
                `/ApplyJob?userName=${local?.userName}&candidateName${local?.CandidateName}`
              )
            }
          >
            <Text style={styles.buttonText}>Edit</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView>
        <View style={styles.card}>
          {apiData?.length > 0 ? (
            Object.entries(apiData[0]).map((res, index) =>
              res[1] !== "undefined" &&
              res[1] !== "/" &&
              res[1] !== "--" &&
              res[1] !== "Choose" &&
              res[1] !== "/--" &&
              res[0] !== "updatedAt" &&
              res[0] !== "createdAt" &&
              res[0] !== "userName" &&
              res[0] !== "id" ? (
                <View key={index}>
                  <Text style={styles.Details}>{keys[res[0]]}</Text>
                  <Text style={styles.DetailsData}>{res?.[1]}</Text>
                </View>
              ) : null
            )
          ) : (
            <Text style={styles.titleText}>No Data</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewJob;
