import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  Image,
  Pressable,
  ActivityIndicator,
  Button,
  Alert,
  // Checkbox,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import SelectDropdown from "react-native-select-dropdown";
import DatePicker from "./DatePicker";
import axios from "axios";
import * as DocumentPicker from "expo-document-picker";
import MultiSelect from "react-native-multiple-select";
import { styles } from "./style/style";
import { formStyles } from "./style/fromStyle";
import { router, useLocalSearchParams } from "expo-router";

function ApplyJob() {
  const local = useLocalSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(["", "", "", ""]);
  const [apiDatas, setApiDatas] = useState(null);
  const [prefrence2, setPrefrence2] = useState(null);
  const [prefrence3, setPrefrence3] = useState(null);
  const [prefrence4, setPrefrence4] = useState(null);
  const [workPreference2, setWorkPrefrence2] = useState(null);
  const [workPreference3, setWorkPrefrence3] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(local, "local23423", apiDatas);
  const handleButtonPress = () => {
    // Set isLoading to true to indicate loading
    setIsLoading(true);

    // Simulate an asynchronous task
    setTimeout(() => {
      // Set isLoading to false after the task is complete
      setIsLoading(false);
    }, 2000);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      empName: "",
      empNameInit: "",
      relEmp: "",
      empStatus: "",
      policePersonnel: "", //missing
      spouseCertificate: "",
      dob: "",
      ranks: "", //missing
      gpfcpsNumber: "",
      // ploliceGradeNnumber: ploliceGradeNnumber,
      stationUnit: "",
      workingDistrict: "",
      lastDistrict: "",
      policeMobilePhone: "",
      CandidateNname: "",
      CandidateNnameInit: "",
      gender: "",
      dobDate: "",
      email1: "",
      phone1: "",
      address1: "",
      address2: "",
      address3: "",
      CityDistrict: "",
      state1: "",
      pincode: "",
      aadharNumber: "",
      myCheckboxes: "",
      perference1: "",
      preference2: "",
      preference3: "",
      otherPreferred: "",
      workPreference1: "",
      workPreference2: "",
      workPreference3: "",
      skills: "",
      candPhoto: "",
      resume: "",
      Qualification: "",
      studied: "",
      Board: "",
      pass10: "",
      Percentage: "",
      Board12: "",
      Passing: ``,
      Percentage12: "",
      course: "",
      Passingiti: "",
      Percentageiti: "",
      courseDip: "",
      PassingDip: "",
      PercentageDip: "",
      GraduationDg: "",
      Institute: "",
      Subject: "",
      Passinghigi: "",
      Percentagehigi: "",
      Degreename: "",
      University: "",
      MajorSubject: "",
      Percentageunder: "",
      passedYear: "",
      Universityphd: "",
      Subjectphd: "",
      Passingphd: "",
      Percentagephd: "",
      BoardBelow: "",
      below10thpass: "",
      belowPercentage: "",
      Pursuing: "",
      UniversityOther: "",
      SubjectOther: "",
      detailsdeg: "",
      Employment: "",
      experience: "",
      CompanyName: "",
      Designation: "",
      Workingplz: "",
      fromDate: "",
      toDate: "",
      companyDet: "",
      userName: "",
    },
  });

  const [isPickerShow, setIsPickerShow] = useState(null);
  const [isChecked, setChecked] = useState(null);
  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const [selectedItems3, setSelectedItems3] = useState([]);
  const [selectedItems4, setSelectedItems4] = useState([]);
  const [selectedItems5, setSelectedItems5] = useState([]);
  const [selectedItems6, setSelectedItems6] = useState([]);
  const [selectedItems7, setSelectedItems7] = useState([]);
  const [selectedItems8, setSelectedItem8] = useState([]);
  const [selectedItems9, setSelectedItems9] = useState([]);
  const items = [
    {
      id: "1",
      name: "Read",
    },
    {
      id: "2",
      name: "Write",
    },
    {
      id: "3",
      name: "Speak",
    },
  ];

  const dob = watch("dob");
  const dobDate = watch("dobDate");
  const pass10 = watch("pass10");
  const Passing = watch("Passing");
  const Passingiti = watch("Passingiti");
  const PassingDip = watch("PassingDip");
  const Passinghigi = watch("Passinghigi");
  const passedYear = watch("passedYear");
  const Passingphd = watch("Passingphd");
  const below10thpass = watch("below10thpass");
  const fromDate = watch("fromDate");
  const toDate = watch("toDate");
  const formDtass = watch();
  console.log(
    formDtass,
    "formDtass452345234",
    formDtass?.["spouseCertificate"]
  );
  useEffect(() => {
    setIsPickerShow(null);
  }, [dob, dobDate]);

  useEffect(() => {
    getInitData();
    handleButtonPress();
  }, []);

  useEffect(() => {
    if (local.userName) {
      fetchData();
    }
  }, [local?.userName]);

  React.useEffect(() => {
    console.log(errors, "errors4352345");
    if (Object.entries(errors).length !== 0) {
      Alert.alert("Please fill all required fileds");
    }
  }, [errors]);

  useEffect(() => {
    let filteredData = perferenceData.filter(
      (value) => value !== formDtass?.perference1
    );
    let filteredData1 = perferenceData.filter(
      (value) =>
        value !== formDtass?.preference2 && value !== formDtass?.perference1
    );
    let filteredData2 = perferenceData.filter(
      (value) =>
        value !== formDtass?.preference2 &&
        value !== formDtass?.perference1 &&
        value !== formDtass?.["perference3"]
    );
    setPrefrence2(filteredData);
    setPrefrence3(filteredData1);
    setPrefrence4(filteredData2);
    console.log(filteredData, "filteredData", filteredData1);
  }, [formDtass?.perference1, formDtass?.preference2, formDtass?.preference3]);

  useEffect(() => {
    let filteredData = perferenceDataLocation.filter(
      (value) => value !== formDtass?.workPreference1
    );
    let filteredData1 = perferenceDataLocation.filter(
      (value) =>
        value !== formDtass?.workPreference2 &&
        value !== formDtass?.workPreference1
    );
    setWorkPrefrence2(filteredData);
    setWorkPrefrence3(filteredData1);
    console.log(filteredData, "filteredData", filteredData1);
  }, [
    formDtass?.workPreference1,
    formDtass?.workPreference2,
    formDtass?.otherPreferred,
  ]);

  useEffect(() => {
    if (apiDatas) {
      let initObj = {
        email: apiDatas[0]?.email,
        empName: apiDatas[0]?.empName,
        empNameInit: apiDatas[0]?.empNameInit,
        relEmp: apiDatas[0]?.relEmp,
        empStatus: apiDatas[0]?.empStatus,
        policePersonnel: apiDatas[0]?.policePersonnel, //missing
        spouseCertificate: apiDatas[0]?.spouseCertificate,
        dob: apiDatas[0]?.dob,
        ranks: apiDatas[0]?.ranks, //missing
        gpfcpsNumber: apiDatas[0]?.gpfcpsNumber,
        // ploliceGradeNnumber: ploliceGradeNnumber,
        stationUnit: apiDatas[0]?.stationUnit,
        workingDistrict: apiDatas[0]?.workingDistrict,
        lastDistrict: apiDatas[0]?.lastDistrict,
        policeMobilePhone: apiDatas[0]?.policeMobilePhone,
        CandidateNname: apiDatas[0]?.CandidateNname,
        CandidateNnameInit: apiDatas[0]?.CandidateNnameInit,
        gender: apiDatas[0]?.gender,
        dobDate: apiDatas[0]?.dobDate,
        email1: apiDatas[0]?.email1,
        phone1: apiDatas[0]?.phone1,
        address1: apiDatas[0]?.address1,
        address2: apiDatas[0]?.address2,
        address3: apiDatas[0]?.address3,
        CityDistrict: apiDatas[0]?.CityDistrict,
        state1: apiDatas[0]?.state1,
        pincode: apiDatas[0]?.pincode,
        aadharNumber: apiDatas[0]?.aadharNumber,
        myCheckboxes: apiDatas[0]?.myCheckboxes,
        perference1: apiDatas[0]?.perference1,
        preference2: apiDatas[0]?.preference2,
        preference3: apiDatas[0]?.preference3,
        otherPreferred: apiDatas[0]?.otherPreferred,
        workPreference1: apiDatas[0]?.workPreference1,
        workPreference2: apiDatas[0]?.workPreference2,
        workPreference3: apiDatas[0]?.workPreference3,
        skills: apiDatas[0]?.skills,
        candPhoto: apiDatas[0]?.candPhoto,
        resume: apiDatas[0]?.resume,
        Qualification: apiDatas[0]?.Qualification,
        studied: apiDatas[0]?.studied,
        Board: apiDatas[0]?.Board,
        pass10: apiDatas[0]?.pass10,
        Percentage: apiDatas[0]?.Percentage,
        Board12: apiDatas[0]?.Board12,
        Passing: apiDatas[0]?.Passing,
        Percentage12: apiDatas[0]?.Percentage12,
        course: apiDatas[0]?.course,
        Passingiti: apiDatas[0]?.Passingiti,
        Percentageiti: apiDatas[0]?.Percentageiti,
        courseDip: apiDatas[0]?.courseDip,
        PassingDip: apiDatas[0]?.PassingDip,
        PercentageDip: apiDatas[0]?.PercentageDip,
        GraduationDg: apiDatas[0]?.GraduationDg,
        Institute: apiDatas[0]?.Institute,
        Subject: apiDatas[0]?.Subject,
        Passinghigi: apiDatas[0]?.Passinghigi,
        Percentagehigi: apiDatas[0]?.Percentagehigi,
        Degreename: apiDatas[0]?.Degreename,
        University: apiDatas[0]?.University,
        MajorSubject: apiDatas[0]?.MajorSubject,
        Percentageunder: apiDatas[0]?.Percentageunder,
        passedYear: apiDatas[0]?.passedYear,
        Universityphd: apiDatas[0]?.Universityphd,
        Subjectphd: apiDatas[0]?.Subjectphd,
        Passingphd: apiDatas[0]?.Passingphd,
        Percentagephd: apiDatas[0]?.Percentagephd,
        BoardBelow: apiDatas[0]?.BoardBelow,
        below10thpass: apiDatas[0]?.below10thpass,
        belowPercentage: apiDatas[0]?.belowPercentage,
        Pursuing: apiDatas[0]?.Pursuing,
        UniversityOther: apiDatas[0]?.UniversityOther,
        SubjectOther: apiDatas[0]?.SubjectOther,
        detailsdeg: apiDatas[0]?.detailsdeg,
        Employment: apiDatas[0]?.Employment,
        experience: apiDatas[0]?.experience,
        CompanyName: apiDatas[0]?.CompanyName,
        Designation: apiDatas[0]?.Designation,
        Workingplz: apiDatas[0]?.Workingplz,
        fromDate: apiDatas[0]?.fromDate,
        toDate: apiDatas[0]?.toDate,
        companyDet: apiDatas[0]?.companyDet,
      };
      Object.keys(initObj).forEach((fieldName: any) =>
        setValue(fieldName, initObj[fieldName])
      );
    }
  }, [apiDatas]);

  const fetchData = async () => {
    try {
      const url = `https://nodebackend.kavalarnalantn.in:5000/job_fair/${local.userName}`;
      const response = await axios.get(url);
      console.log(response, "response523452345");
      console.log(response);
      setApiDatas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getInitData = async () => {
    try {
      const url = `https://nodebackend.kavalarnalantn.in:5000/son_Register/${local.userName}`;
      const url1 = `https://nodebackend.kavalarnalantn.in:5000/User_Register/${local?.candidateName}`;
      const [response1, response2] = await axios.all([
        axios.get(url),
        axios.get(url1),
      ]);

      console.log(response1, response2, "response1response1");

      let initObj = {
        empName: response2?.data?.empName?.slice(0, -2),
        empNameInit: response2?.data?.empName?.charAt(
          response2?.data?.empName?.length - 1
        ),
        relEmp: response2?.data?.empStatus,
        policePersonnel: response2?.data?.policePersonnel,
        dob: response2?.data?.dob,
        ranks: response2?.data?.rand,
        gpfcpsNumber: response2?.data?.gpfcpd,
        stationUnit: response2?.data?.unitName,
        lastDistrict: response2?.data?.District,
        policeMobilePhone: response2?.data?.mobileNo,
        CandidateNname: response1?.data?.CandidateName,
        CandidateNnameInit: response1?.data?.canNameInit,
        email1: response1?.data?.emailId,
        phone1: response1?.data?.mobileNo,
        aadharNumber: response1?.data?.aadhaarNo,
        userName: response1?.data?.userName,
      };
      Object.keys(initObj).forEach((fieldName: any) =>
        setValue(fieldName, initObj[fieldName])
      );

      console.log(response1.data, "sonDetail123s", response2.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const getCurrentDate = (value) => {
    const currentDate = value;
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  const showPicker = (name, value) => {
    setIsPickerShow((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const pickDocument = async (name: any, type?) => {
    console.log(name, "709780987sdh");
    try {
      const result: any = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/jpeg", "image/png"], // Specify the file type you want to pick (PDF in this case)
      });

      console.log(result, "resultresultresultresultresult");

      if (result?.assets) {
        // Handle the selected file (result.uri contains the file URI)
        console.log("Selected file URI:", result?.["uri"]);
        if (name === "certificate") {
          setValue("spouseCertificate", result?.assets[0]);
        } else if (name === "profile") {
          setValue("candPhoto", result?.assets[0]);
        } else {
          setValue("resume", result?.assets[0]);
        }
      }
    } catch (error) {
      console.log("Error picking document:", error);
    }
  };

  const onSubmit = async (data, name) => {
    if (name === "next") {
      if (
        currentStep + 1 < steps.length &&
        Object.entries(errors).length === 0
      ) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const onSubmitForm = async (data) => {
    let error = false;
    if (apiDatas?.[0]?.id) {
      try {
        const apiUrl = `https://nodebackend.kavalarnalantn.in:5000/job_fair/updateID/${apiDatas[0]?.id}`;
        const response = await axios.put(apiUrl, formDtass);
        console.log("API update successful:", response.data);
        router.navigate(
          `/ViewJob?userName=${local?.userName}&candidateName${local?.CandidateName}`
        );
        // Handle the response data as needed
      } catch (error) {
        console.error("API update error:", error);
        // Handle the error
      }
    } else {
      console.log(data, "data4523452345");
      const formData: any = new FormData();

      if (data?.spouseCertificate) {
        formData.append("spouseCertificate", {
          uri: data?.spouseCertificate?.uri,
          name: data.spouseCertificate.name,
          type: "application/jpeg",
        });
      } else {
        error = true;
        Alert.alert("Uplaod Certificate");
      }
      if (data.candPhoto) {
        formData.append("candPhoto", {
          uri: data.candPhoto.uri,
          name: data.candPhoto.name,
          type: "application/jpeg",
        });
      } else {
        error = true;
        Alert.alert("Uplaod Photo");
      }

      if (data.resume) {
        formData.append("resume", {
          uri: data.resume.uri,
          name: data.resume.name,
          type: "application/pdf",
        });
      } else {
        error = true;
        Alert.alert("Uplaod Resume");
      }

      for (const field in data) {
        if (
          field !== "spouseCertificate" &&
          field !== "candPhoto" &&
          field !== "resume" &&
          data.hasOwnProperty(field)
        ) {
          formData.append(field, data[field]);
        }
      }
      if (!error) {
        try {
          const response = await fetch(
            "https://nodebackend.kavalarnalantn.in:5000/job_fair/createEmployeement",
            {
              method: "POST",
              body: formData,
            }
          );
          console.log(response, "response356345643");
          router.navigate(`/ViewJob?userName=${local?.userName}`);
        } catch (error) {
          console.log("Error:", error);
        }
      }
    }
  };

  const itemsRelation = ["Brother", "Sister", "Spouse", "Son", "Daughter"];
  const itemsStatus = ["Serving", "Retired", "Deceased", "Others"];
  const itemsGender = ["Male", "Female", "Transgender"];
  const Employment = ["Fresher", "Working", "Unemployed"];

  let perferenceDataLocation = [
    "Choose",
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Kanniyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivagangai",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Tirupattur",
    "Thoothukudi",
    "Tirunelveli",
    "Tiruppur",
    "Thiruvallur",
    "Tiruvannamalai",
    "Thiruvarur",
    "Tiruchirappalli",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
    "ANY WHERE",
    "Others",
  ];

  let perferenceData = [
    "Choose",
    "Information Technology",
    "Automobile",
    "Architecture",
    "Accounts & Finance",
    "Agriculture",
    "Animation",
    "Civil",
    "Electrical & Electronics",
    "Legal",
    "Mass Communication",
    "Mechanical Engineering",
    "Medical",
    "Media",
    "Pharmaceutical",
    "Sales & Marketing",
    "Teaching",
    "Veterinary",
  ];

  const Board10 = [
    "Stateborad",
    "Matriculation",
    "CBSE",
    "ICSE",
    "OSLC",
    "IGCSE",
    "Others",
  ];

  const itemsQualification = [
    "Below 10th",
    "10th Standard (SSLC)",
    "12th Standard (HSC)",
    "ITI",
    "Diploma",
    "Under Graduation(UG)",
    "Post Graduation(PG)",
    "PhD(Doctorate)",
  ];

  const itemsGraduationDg = [
    "A.M.B.S",
    "B.A.",
    "B.A. L.L.B",
    "B.A.(Hons)",
    "B.A.M.S.",
    "B.Agri",
    "B.Arch",
    "B.ASLP",
    "B.B.A",
    "B.B.A. L.L.B",
    "B.C.A.",
    "B.Com",
    "B.Com.L.L.B",
    "B.Com(Hons)",
    "B.D.S.",
    "B.Des",
    "B.Des M.Des",
    "B.Des MBA",
    "B.E /B.Tech",
    "B.Ed.",
    "B.Ed. Spl.Ed",
    "B.El.Ed.",
    "B.F.A.",
    "B.F.L.",
    "B.F.Sc.",
    "B.H.Ed",
    "B.H.M.",
    "B.H.M.C.T.",
    "B.H.M.S.",
    "B.I.D.",
    "B.Ind.",
    "B.J.",
    "B.Lib.I.Sc.",
    "B.Lib.Sc.",
    "B.M.B.S.",
    "B.M.M.",
    "B.M.S",
    "B.N.Y.S.",
    "B.Nurs",
    "B.O.T.",
    "B.Optom",
    "B.Optom MBA",
    "B.P.A.",
    "B.P.Ed.",
    "B.P.O.",
    "B.P.T.",
    "B.Pharma",
    "B.Pharma MBA",
    "B.Plan",
    "B.R.S.",
    "B.R.Sc.",
    "B.S.M.S.",
    "B.S.Sc.",
    "B.S.W.",
    "B.Sc B.Ed",
    "B.Sc M.Sc",
    "B.Sc MBA",
    "B.Sc.",
    "B.Sc. L.L.B",
    "B.Sc.(Hons)",
    "B.Stat",
    "B.T.",
    "B.T.T.M.",
    "B.Tech M.Tech",
    "B.Tech MBA",
    "B.Text",
    "B.U.M.S.",
    "B.V.A.",
    "B.V.Sc.",
    "B.Voc.",
    "BA B.Ed",
    "BA MBA",
    "BAD",
    "BAG",
    "BAS",
    "BCA MCA",
    "BCJ",
    "BE",
    "BEM",
    "BFD",
    "BFIA",
    "BGD",
    "BHCT",
    "BLM",
    "BPR",
    "BPT MBA",
    "BS",
    "BTM",
    "CA",
    "CPL",
    "CS",
    "D.V.Sc.&A.H.",
    "ICWA",
    "L.L.B",
  ];

  const Degreename = [
    "--",
    "Executive MBA",
    "FPM",
    "L.L.M",
    "M.A",
    "M.Arch",
    "M.ASLP",
    "M.C.A",
    "M.C.M",
    "M.Com",
    "M.Com (Hons)",
    "M.D",
    "M.D.S",
    "M.Des",
    "M.E /M.Tech",
    "M.Ed",
    "M.Ed. Spl.Ed",
    "M.F.A",
    "M.F.Sc",
    "M.H.A",
    "M.H.M",
    "M.H.M.C.T",
    "M.I.D",
    "M.J",
    "M.Lib.I.Sc",
    "M.Lib.Sc",
    "M.M.S",
    "M.O",
    "M.Optom",
    "M.P.A",
    "M.P.Ed",
    "M.P.H",
    "M.P.O",
    "M.P.T",
    "M.Pharma",
    "M.Phil",
    "M.Plan",
    "M.R.S",
    "M.R.Sc",
    "M.S",
    "M.S.A.M",
    "M.S.W",
    "M.Sc",
    "M.Stat",
    "M.T.T.M",
    "M.Text",
    "M.V.A",
    "M.V.Sc",
    "M.Voc",
    "MBA",
    "MCJ",
    "MFM",
    "MFS",
    "MHCT",
    "MHoM",
    "MLM",
    "MOT",
    "MPS",
    "MTM",
    "P.G.D",
    "P.G.D.C.A",
    "P.G.D.M",
    "P.G.P",
    "PGC",
    "PGD in Engineering",
    "PGDA&M",
    "PGDFD",
    "PGDID",
    "PGPA&T",
  ];

  const policePersonnel = [
    "Police Personnel",
    "Ministerial Staff ",
    "Fire & Rescue Services",
    "Prison & Correctional Services",
    "Others",
  ];

  const itemsRank = [
    "Additional Director General of Police",
    "Additional Superintendent of Police",
    "Administrative Officer",
    "Assistant",
    "Assistant Commandant",
    "Assistant Director",
    "Assistant Manager",
    "Automobile Engineer",
    "Band Master",
    "Barber",
    "Batteryman",
    "Binder",
    "Blacksmith",
    "Chargemen",
    "Chief Manager",
    "Chief Reporter",
    "Chief Administrative Officer",
    "Cleaner",
    "Commandant",
    "Cook",
    "Data Entry Assistant",
    "Data Entry Operator",
    "Deputy Commandant",
    "Deputy Director",
    "Deputy Inspector General of Police",
    "Deputy Superintendent of Police",
    "Dhoby",
    "Director General of Police",
    "Dog Boy",
    "Duffadar",
    "Electrician / Fitter / Foreman / Hammerman / Helper",
    "Gardener",
    "Grade I PC",
    "Grade II PC",
    "Havildar",
    "Head Constable",
    "Imposer / Composer / Machine Minder",
    "Inspector General of Police",
    "Inspector of Police",
    "Junior Assistant",
    "Junior Reporter",
    "Lascar",
    "Lance Naik",
    "Legal Advisor",
    "Librarian",
    "Liner / Mechanic / Reborer",
    "Manager",
    "Naik",
    "Office Assistant",
    "Painter / Plumber / Carpenter",
    "Photo Assistant",
    "Photo Attendant",
    "Photographer",
    "Public Relation Officer",
    "Record Assistant",
    "Record Clerk",
    "Sanitary Worker / Scavenger / Scrubber",
    "Senior Reporter",
    "Senior Chief Reporter",
    "Senior Manager",
    "Senior Administrative Officer",
    "Shorthand Reporter",
    "Special Branch Assistant",
    "Special Sub Inspector of Police",
    "Statistical Assistant",
    "Statistical Inspector",
    "Statistical Officer",
    "Station Receptionist",
    "Steno-Typist",
    "Stenographer",
    "Storekeeper",
    "Superintendent of Police",
    "Superintendent",
    "Sub-Inspector of Police",
    "Syrang",
    "Tailor",
    "Technical Assistant",
    "Telephone Operator",
    "Toolkeeper / Turner / Tyreman",
    "Typist",
    "Water Carrier",
    "Works Manager",
  ];

  const itemsCity = [
    "Ariyalur",
    "Avadi Commissionerate",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Coimbatore City",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Kanniyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Madurai City",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "The Nilgiris",
    "Perambalur",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Salem city",
    "Sivagangai",
    "Tambaram comimissionerate",
    "Thanjavur",
    "Theni",
    "Tirupattur",
    "Thoothukudi",
    "Tirunelveli",
    "Tirunelveli City",
    "Tiruppur",
    "Tiruppur City",
    "Thiruvallur",
    "Tiruvannamalai",
    "Thiruvarur",
    "Tiruchirappalli",
    "Tiruchirappalli City",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];

  const multiSelectRef = useRef();

  const getErrorMessage = () => {
    if (
      !formDtass?.spouseCertificate ||
      !formDtass?.candPhoto ||
      !formDtass?.resume
    ) {
      Alert.alert("Please fill all required fields");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#212761",
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
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
            <Text style={styles.titleText}>Job Apply</Text>
          </View>
          <View style={formStyles.alignItemCenter}>
            <View style={formStyles.steperWidth}>
              <View style={formStyles.alignItemCenter}>
                <View style={formStyles.steperBorder} />
              </View>
              <View style={formStyles.steperCountList}>
                {steps.map((placeholder, i) => (
                  <View key={i} style={formStyles.steperlistWidth}>
                    {i > currentStep && i != currentStep /* Not selected */ && (
                      <View style={formStyles.steperunChecked}>
                        <Text style={{ fontSize: 15, color: "#ee5e30" }}>
                          {i + 1}
                        </Text>
                      </View>
                    )}
                    {i < currentStep /* Checked */ && (
                      <View style={formStyles.stepeChecked}>
                        <Ionicons name="checkmark" size={20} color="#fff" />
                      </View>
                    )}
                    {i == currentStep /* Selected */ && (
                      <View style={formStyles.stepSelected}>
                        <Text style={{ fontSize: 13, color: "#ffffff" }}>
                          {i + 1}
                        </Text>
                      </View>
                    )}
                    <Text style={{ fontSize: 12 }}>{placeholder}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <ScrollView>
            <View style={styles.card}>
              {currentStep == 0 && (
                <View>
                  <Text style={styles.cardHeader}>Personal Details</Text>
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Employee Name
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Employee Name"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="empName"
                  />
                  {errors.empName && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Employee Initial
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Employee Initial"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="empNameInit"
                  />
                  {errors.empNameInit && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Select Relationship
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <SelectDropdown
                        data={itemsRelation}
                        onSelect={onChange}
                        defaultValue={formDtass?.relEmp}
                        defaultButtonText="Select Relationship"
                        buttonStyle={styles.DropDownPicker}
                        renderDropdownIcon={() => (
                          <AntDesign name="down" size={16} color="black" />
                        )}
                        buttonTextStyle={styles.dropDownText}
                      />
                    )}
                    name="relEmp"
                  />
                  {errors.relEmp && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Select Status of Employee
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <SelectDropdown
                        data={itemsStatus}
                        onSelect={onChange}
                        defaultValue={formDtass?.empStatus}
                        defaultButtonText="Select Status of Employee"
                        buttonStyle={styles.DropDownPicker}
                        renderDropdownIcon={() => (
                          <AntDesign name="down" size={16} color="black" />
                        )}
                        buttonTextStyle={styles.dropDownText}
                      />
                    )}
                    name="empStatus"
                  />
                  {errors.empStatus && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Wards / Spouse of
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <SelectDropdown
                        data={policePersonnel}
                        onSelect={onChange}
                        defaultValue={formDtass?.policePersonnel}
                        defaultButtonText="Wards / Spouse of"
                        buttonStyle={styles.DropDownPicker}
                        renderDropdownIcon={() => (
                          <AntDesign name="down" size={16} color="black" />
                        )}
                        buttonTextStyle={styles.dropDownText}
                      />
                    )}
                    name="policePersonnel"
                  />
                  {errors.policePersonnel && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <View>
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Wards/Spouse Certificate
                    </Text>
                    <Pressable
                      style={styles.button}
                      onPress={() => pickDocument("certificate", "image")}
                    >
                      <Text style={styles.buttonText}>Select Document</Text>
                    </Pressable>
                    <Text
                      style={{ color: "white", marginTop: 3, marginBottom: 10 }}
                    >
                      {formDtass?.["spouseCertificate"]?.["name"]}
                    </Text>
                  </View>
                  {!formDtass?.["spouseCertificate"] && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <View>
                    {/* Display the selected date */}
                    <View>
                      <Text
                        onPress={() => showPicker("dob", true)}
                        style={styles.inputBox}
                      >
                        {dob ? dob : "Enter you DOB"}
                      </Text>
                    </View>

                    <DatePicker
                      // onGetDateValue={(value) => console.log(getCurrentDate(value), "valuevalue")}
                      onGetDateValue={(value) =>
                        setValue("dob", getCurrentDate(value))
                      }
                      onOpenDatePicker={isPickerShow?.dob}
                    />
                  </View>
                  {errors.dob && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>Rank</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <SelectDropdown
                        data={itemsRank}
                        onSelect={onChange}
                        defaultValue={formDtass?.ranks}
                        defaultButtonText="Rank"
                        buttonStyle={styles.DropDownPicker}
                        renderDropdownIcon={() => (
                          <AntDesign name="down" size={16} color="black" />
                        )}
                        buttonTextStyle={styles.dropDownText}
                      />
                    )}
                    name="ranks"
                  />
                  {errors.ranks && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    GPF/CPS/PPO Number
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="GPF/CPS/PPO Number"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="gpfcpsNumber"
                  />
                  {errors.gpfcpsNumber && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Police Station / Unit
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Police Station / Unit"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="stationUnit"
                  />
                  {errors.stationUnit && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Last Served District
                  </Text>
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <SelectDropdown
                        data={itemsCity}
                        onSelect={onChange}
                        defaultValue={formDtass?.lastDistrict}
                        defaultButtonText="Last Served District  "
                        buttonStyle={styles.DropDownPicker}
                        renderDropdownIcon={() => (
                          <AntDesign name="down" size={16} color="black" />
                        )}
                        buttonTextStyle={styles.dropDownText}
                      />
                    )}
                    name="lastDistrict"
                  />
                  {errors.lastDistrict && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Mobile Number
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Mobile Number"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="policeMobilePhone"
                  />
                  {errors.policeMobilePhone && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={styles.cardHeader}>
                    Candidate's Personal Information
                  </Text>
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Candidate's Name
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Candidate's Name"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="CandidateNname"
                  />
                  {errors.CandidateNname && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Candidate's Initial
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Candidate's Initial "
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="CandidateNnameInit"
                  />
                  {errors.CandidateNnameInit && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Gender
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <SelectDropdown
                        data={itemsGender}
                        onSelect={onChange}
                        defaultValue={formDtass?.gender}
                        defaultButtonText="gender"
                        buttonStyle={styles.DropDownPicker}
                        renderDropdownIcon={() => (
                          <AntDesign name="down" size={16} color="black" />
                        )}
                        buttonTextStyle={styles.dropDownText}
                      />
                    )}
                    name="gender"
                  />
                  {errors.gender && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <View>
                    {/* Display the selected date */}
                    <View>
                      <Text
                        onPress={() => showPicker("dobDate", true)}
                        style={styles.inputBox}
                      >
                        {dobDate !== "" ? dobDate : "Date of Birth"}
                      </Text>
                    </View>

                    <DatePicker
                      onGetDateValue={(value) =>
                        setValue("dobDate", getCurrentDate(value))
                      }
                      onOpenDatePicker={isPickerShow?.dobDate}
                    />
                  </View>
                  <Text style={{ color: "white", marginBottom: 5 }}>Email</Text>

                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Email"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="email1"
                  />
                  {errors.email1 && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Mobile Number
                  </Text>

                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Mobile Number"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="phone1"
                  />
                  {errors.phone1 && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Address Line 1
                  </Text>

                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Address Line 1"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="address1"
                  />
                  {errors.address1 && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Address Line 2
                  </Text>
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Address Line 2"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="address2"
                  />
                  {errors.address2 && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Address Line 3
                  </Text>
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Address Line 3"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="address3"
                  />
                  {errors.address3 && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    City / District
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <SelectDropdown
                        data={itemsCity}
                        onSelect={onChange}
                        defaultValue={formDtass?.CityDistrict}
                        defaultButtonText="City / District"
                        buttonStyle={styles.DropDownPicker}
                        renderDropdownIcon={() => (
                          <AntDesign name="down" size={16} color="black" />
                        )}
                        buttonTextStyle={styles.dropDownText}
                      />
                    )}
                    name="CityDistrict"
                  />
                  {errors.CityDistrict && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>State</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="State"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="state1"
                  />
                  {errors.state1 && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Pincode
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Pincode"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="pincode"
                  />
                  {errors.pincode && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Aadhar Number
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Aadhar Number"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="aadharNumber"
                  />
                  {errors.aadharNumber && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={styles.cardHeader}>Languages Known</Text>
                  <ScrollView>
                    <View style={{ flex: 1 }}>
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={multiSelectRef}
                        styleTextDropdown={{ paddingLeft: 10 }}
                        onSelectedItemsChange={(items) =>
                          setSelectedItems1(items)
                        }
                        selectedItems={selectedItems1}
                        selectText="TAMIL"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        submitButtonColor="#7C2927"
                        submitButtonText="Submit"
                      />
                      <View>
                        {(multiSelectRef.current as any) &&
                          (multiSelectRef.current as any).getSelectedItemsExt(
                            selectedItems1
                          )}
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={multiSelectRef}
                        styleTextDropdown={{ paddingLeft: 10 }}
                        onSelectedItemsChange={(items) =>
                          setSelectedItems2(items)
                        }
                        selectedItems={selectedItems2}
                        selectText="ENGLISH"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        submitButtonColor="#7C2927"
                        submitButtonText="Submit"
                      />
                      <View>
                        {(multiSelectRef.current as any) &&
                          (multiSelectRef.current as any).getSelectedItemsExt(
                            selectedItems2
                          )}
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={multiSelectRef}
                        styleTextDropdown={{ paddingLeft: 10 }}
                        onSelectedItemsChange={(items) =>
                          setSelectedItems3(items)
                        }
                        selectedItems={selectedItems3}
                        selectText="HINDI"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        submitButtonColor="#7C2927"
                        submitButtonText="Submit"
                      />
                      <View>
                        {(multiSelectRef.current as any) &&
                          (multiSelectRef.current as any)?.getSelectedItemsExt(
                            selectedItems3
                          )}
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={multiSelectRef}
                        styleTextDropdown={{ paddingLeft: 10 }}
                        onSelectedItemsChange={(items) =>
                          setSelectedItems4(items)
                        }
                        selectedItems={selectedItems4}
                        selectText="MALAYALAM"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        submitButtonColor="#7C2927"
                        submitButtonText="Submit"
                      />
                      <View>
                        {(multiSelectRef.current as any) &&
                          (multiSelectRef.current as any).getSelectedItemsExt(
                            selectedItems4
                          )}
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={multiSelectRef}
                        styleTextDropdown={{ paddingLeft: 10 }}
                        onSelectedItemsChange={(items) =>
                          setSelectedItems5(items)
                        }
                        selectedItems={selectedItems5}
                        selectText="TELUGU"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        submitButtonColor="#7C2927"
                        submitButtonText="Submit"
                      />
                      <View>
                        {(multiSelectRef.current as any) &&
                          (multiSelectRef.current as any).getSelectedItemsExt(
                            selectedItems5
                          )}
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={multiSelectRef}
                        styleTextDropdown={{ paddingLeft: 10 }}
                        onSelectedItemsChange={(items) =>
                          setSelectedItems6(items)
                        }
                        selectedItems={selectedItems6}
                        selectText="KANNADA"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        submitButtonColor="#7C2927"
                        submitButtonText="Submit"
                      />
                      <View>
                        {(multiSelectRef.current as any) &&
                          (multiSelectRef.current as any).getSelectedItemsExt(
                            selectedItems6
                          )}
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={multiSelectRef}
                        styleTextDropdown={{ paddingLeft: 10 }}
                        onSelectedItemsChange={(items) =>
                          setSelectedItems7(items)
                        }
                        selectedItems={selectedItems7}
                        selectText="FRENCH"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        submitButtonColor="#7C2927"
                        submitButtonText="Submit"
                      />
                      <View>
                        {(multiSelectRef.current as any) &&
                          (multiSelectRef.current as any).getSelectedItemsExt(
                            selectedItems7
                          )}
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={multiSelectRef}
                        styleTextDropdown={{ paddingLeft: 10 }}
                        onSelectedItemsChange={(items) =>
                          setSelectedItem8(items)
                        }
                        selectedItems={selectedItems8}
                        selectText="SANSKRIT"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        submitButtonColor="#7C2927"
                        submitButtonText="Submit"
                      />
                      <View>
                        {(multiSelectRef.current as any) &&
                          (multiSelectRef.current as any).getSelectedItemsExt(
                            selectedItems8
                          )}
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <MultiSelect
                        hideTags
                        items={items}
                        uniqueKey="id"
                        ref={multiSelectRef}
                        styleTextDropdown={{ paddingLeft: 10 }}
                        onSelectedItemsChange={(items) =>
                          setSelectedItems9(items)
                        }
                        selectedItems={selectedItems9}
                        selectText="URDU"
                        tagRemoveIconColor="#CCC"
                        tagBorderColor="#CCC"
                        tagTextColor="#CCC"
                        selectedItemTextColor="#CCC"
                        selectedItemIconColor="#CCC"
                        itemTextColor="#000"
                        displayKey="name"
                        submitButtonColor="#7C2927"
                        submitButtonText="Submit"
                      />
                      <View>
                        {(multiSelectRef.current as any) &&
                          (multiSelectRef.current as any).getSelectedItemsExt(
                            selectedItems9
                          )}
                      </View>
                    </View>
                  </ScrollView>
                  <Controller
                    control={control}
                    rules={{
                      required: false,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Languages Known"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="myCheckboxes"
                  />
                  {errors.myCheckboxes && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              {currentStep == 1 && (
                <View>
                  <Text style={styles.cardHeader}>Qualification Details</Text>
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Highest Qualification
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <SelectDropdown
                        data={itemsQualification}
                        onSelect={onChange}
                        defaultValue={formDtass?.Qualification}
                        defaultButtonText="Highest Qualification"
                        buttonStyle={styles.DropDownPicker}
                        renderDropdownIcon={() => (
                          <AntDesign name="down" size={16} color="black" />
                        )}
                        buttonTextStyle={styles.dropDownText}
                      />
                    )}
                    name="Qualification"
                  />
                  {errors.Qualification && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Qualification
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Qualification"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="studied"
                  />
                  {errors.studied && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  {formDtass?.Qualification !== "Below 10th" && (
                    <View>
                      <View>
                        <Text style={{ color: "white", marginBottom: 5 }}>
                          10th (SSLC)
                        </Text>
                        <Controller
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, onBlur, value } }) => (
                            <SelectDropdown
                              data={Board10}
                              onSelect={onChange}
                              defaultValue={formDtass?.Board}
                              defaultButtonText="Board"
                              buttonStyle={styles.DropDownPicker}
                              renderDropdownIcon={() => (
                                <AntDesign
                                  name="down"
                                  size={16}
                                  color="black"
                                />
                              )}
                              buttonTextStyle={styles.dropDownText}
                            />
                          )}
                          name="Board"
                        />
                        {errors.Board && (
                          <Text style={styles.errorMessage}>
                            This is required.
                          </Text>
                        )}

                        <View>
                          {/* Display the selected date */}
                          <View>
                            <Text style={{ color: "white", marginBottom: 5 }}>
                              Year
                            </Text>
                            <Text
                              onPress={() => showPicker("pass10", true)}
                              style={styles.inputBox}
                            >
                              {pass10 !== ""
                                ? pass10
                                : "Month & Year of Passing"}
                            </Text>
                          </View>

                          <DatePicker
                            onGetDateValue={(value) =>
                              setValue("pass10", getCurrentDate(value))
                            }
                            onOpenDatePicker={isPickerShow?.pass10}
                          />
                        </View>
                        {errors.pass10 && (
                          <Text style={styles.errorMessage}>
                            This is required.
                          </Text>
                        )}
                        <Text style={{ color: "white", marginBottom: 5 }}>
                          Percentage
                        </Text>
                        <Controller
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                              placeholder="Percentage"
                              style={styles.inputBox}
                              onBlur={onBlur}
                              onChangeText={onChange}
                              value={value}
                            />
                          )}
                          name="Percentage"
                        />
                        {errors.Percentage && (
                          <Text style={styles.errorMessage}>
                            This is required.
                          </Text>
                        )}
                      </View>
                      {formDtass?.Qualification === "12th Standard (HSC)" ||
                      formDtass?.Qualification === "ITI" ||
                      formDtass?.Qualification === "Diploma" ||
                      formDtass?.Qualification === "Under Graduation(UG)" ||
                      formDtass?.Qualification === "Post Graduation(PG)" ||
                      formDtass?.Qualification === "PhD(Doctorate)" ? (
                        <View>
                          <Text style={styles.cardHeader}>12th (HSC)</Text>
                          <Controller
                            control={control}
                            rules={{
                              required:
                                formDtass?.Qualification ===
                                  "12th Standard (HSC)" ||
                                formDtass?.Qualification ===
                                  "Under Graduation(UG)" ||
                                formDtass?.Qualification === "PhD(Doctorate)"
                                  ? true
                                  : false,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <SelectDropdown
                                data={Board10}
                                onSelect={onChange}
                                defaultValue={formDtass?.["Board10"]}
                                defaultButtonText="Board"
                                buttonStyle={styles.DropDownPicker}
                                renderDropdownIcon={() => (
                                  <AntDesign
                                    name="down"
                                    size={16}
                                    color="black"
                                  />
                                )}
                                buttonTextStyle={styles.dropDownText}
                              />
                            )}
                            name="Board12"
                          />
                          {errors.Board12 && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}

                          <View>
                            <Text style={{ color: "white", marginBottom: 5 }}>
                              Year
                            </Text>
                            <View>
                              <Text
                                onPress={() => showPicker("Passing", true)}
                                style={styles.inputBox}
                              >
                                {Passing !== ""
                                  ? Passing
                                  : "Month & Year of Passing"}
                              </Text>
                            </View>

                            <DatePicker
                              onGetDateValue={(value) =>
                                setValue("Passing", getCurrentDate(value))
                              }
                              onOpenDatePicker={isPickerShow?.Passing}
                            />
                          </View>
                          {errors.Passing && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            Percentage 12th
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required:
                                formDtass?.Qualification ===
                                  "12th Standard (HSC)" ||
                                formDtass?.Qualification ===
                                  "Under Graduation(UG)" ||
                                formDtass?.Qualification === "PhD(Doctorate)"
                                  ? true
                                  : false,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Percentage"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="Percentage12"
                          />
                          {errors.Percentage12 && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                        </View>
                      ) : null}
                      {formDtass?.Qualification === "ITI" ||
                      formDtass?.Qualification === "Under Graduation(UG)" ||
                      formDtass?.Qualification === "Post Graduation(PG)" ||
                      formDtass?.Qualification === "PhD(Doctorate)" ? (
                        <View>
                          <Text style={styles.cardHeader}>ITI</Text>
                          <Controller
                            control={control}
                            rules={{
                              required:
                                formDtass?.Qualification === "ITI"
                                  ? true
                                  : false,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Name of the course"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="course"
                          />
                          {errors.course && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}

                          <View>
                            <Text style={{ color: "white", marginBottom: 5 }}>
                              Year
                            </Text>
                            <View>
                              <Text
                                onPress={() => showPicker("Passingiti", true)}
                                style={styles.inputBox}
                              >
                                {Passingiti !== ""
                                  ? Passingiti
                                  : "Month & Year of Passing"}
                              </Text>
                            </View>

                            <DatePicker
                              onGetDateValue={(value) =>
                                setValue("Passingiti", getCurrentDate(value))
                              }
                              onOpenDatePicker={isPickerShow?.Passingiti}
                            />
                          </View>
                          {errors.Passingiti && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            Percentage ITI
                          </Text>

                          <Controller
                            control={control}
                            rules={{
                              required:
                                formDtass?.Qualification === "ITI"
                                  ? true
                                  : false,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Percentage"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="Percentageiti"
                          />
                          {errors.Percentageiti && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                        </View>
                      ) : null}
                      {formDtass?.Qualification === "Diploma" ||
                      formDtass?.Qualification === "Under Graduation(UG)" ||
                      formDtass?.Qualification === "Post Graduation(PG)" ||
                      formDtass?.Qualification === "PhD(Doctorate)" ? (
                        <View>
                          <Text style={styles.cardHeader}>Diploma</Text>
                          <Controller
                            control={control}
                            rules={{
                              required:
                                formDtass?.Qualification === "Diploma"
                                  ? true
                                  : false,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Name of the course"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="courseDip"
                          />
                          {errors.courseDip && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}

                          <View>
                            <Text style={{ color: "white", marginBottom: 5 }}>
                              Year
                            </Text>
                            <View>
                              <Text
                                onPress={() => showPicker("PassingDip", true)}
                                style={styles.inputBox}
                              >
                                {PassingDip !== ""
                                  ? PassingDip
                                  : "Month & Year of Passing"}
                              </Text>
                            </View>

                            <DatePicker
                              onGetDateValue={(value) =>
                                setValue("PassingDip", getCurrentDate(value))
                              }
                              onOpenDatePicker={isPickerShow?.PassingDip}
                            />
                          </View>
                          {errors.PassingDip && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            Percentage Diploma
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required:
                                formDtass?.Qualification === "Diploma"
                                  ? true
                                  : false,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Percentage"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="PercentageDip"
                          />
                          {errors.PercentageDip && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                        </View>
                      ) : null}
                      {formDtass?.Qualification === "Under Graduation(UG)" ||
                      formDtass?.Qualification === "Post Graduation(PG)" ||
                      formDtass?.Qualification === "PhD(Doctorate)" ? (
                        <View>
                          <Text style={styles.cardHeader}>
                            Under Graduation Degree
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required: true,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <SelectDropdown
                                data={itemsGraduationDg}
                                onSelect={onChange}
                                defaultValue={formDtass?.GraduationDg}
                                defaultButtonText="GraduationDg"
                                buttonStyle={styles.DropDownPicker}
                                renderDropdownIcon={() => (
                                  <AntDesign
                                    name="down"
                                    size={16}
                                    color="black"
                                  />
                                )}
                                buttonTextStyle={styles.dropDownText}
                              />
                            )}
                            name="GraduationDg"
                          />
                          {errors.GraduationDg && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            Name of the Major Subject
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required: true,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Name of the Major Subject"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="Subject"
                          />
                          {errors.Subject && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            Name of the Institute / University
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required: true,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Name of the Institute / University"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="Institute"
                          />
                          {errors.Institute && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <View>
                            <Text style={{ color: "white", marginBottom: 5 }}>
                              Year
                            </Text>
                            <View>
                              <Text
                                onPress={() => showPicker("Passinghigi", true)}
                                style={styles.inputBox}
                              >
                                {Passinghigi !== ""
                                  ? Passinghigi
                                  : "Month & Year of Passing"}
                              </Text>
                            </View>

                            <DatePicker
                              onGetDateValue={(value) =>
                                setValue("Passinghigi", getCurrentDate(value))
                              }
                              onOpenDatePicker={isPickerShow?.Passinghigi}
                            />
                          </View>
                          {errors.Passinghigi && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            Percentage Institute / University
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required: true,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Percentage"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="Percentagehigi"
                          />
                          {errors.Percentagehigi && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                        </View>
                      ) : null}
                      {formDtass?.Qualification === "Post Graduation(PG)" ||
                      formDtass?.Qualification === "PhD(Doctorate)" ? (
                        <View>
                          <Text style={styles.cardHeader}>
                            Post Graduation Degree
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required: true,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <SelectDropdown
                                data={Degreename}
                                onSelect={onChange}
                                defaultButtonText="Name of the Degree"
                                defaultValue={formDtass?.Degreename}
                                buttonStyle={styles.DropDownPicker}
                                renderDropdownIcon={() => (
                                  <AntDesign
                                    name="down"
                                    size={16}
                                    color="black"
                                  />
                                )}
                                buttonTextStyle={styles.dropDownText}
                              />
                            )}
                            name="Degreename"
                          />
                          {errors.Degreename && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            Name of the Major Subject
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required: true,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Name of the Major Subject"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="MajorSubject"
                          />
                          {errors.MajorSubject && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            Name of the Institute / University
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required: true,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Name of the Institute / University"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="University"
                          />
                          {errors.University && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <View>
                            <Text style={{ color: "white", marginBottom: 5 }}>
                              Year
                            </Text>
                            <View>
                              <Text
                                onPress={() => showPicker("passedYear", true)}
                                style={styles.inputBox}
                              >
                                {passedYear !== ""
                                  ? passedYear
                                  : "Month & Year of Passing"}
                              </Text>
                            </View>

                            <DatePicker
                              onGetDateValue={(value) =>
                                setValue("passedYear", getCurrentDate(value))
                              }
                              onOpenDatePicker={isPickerShow?.passedYear}
                            />
                          </View>
                          {errors.passedYear && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            Percentage Institute / University
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required: true,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Percentage"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="Percentageunder"
                          />
                          {errors.Percentageunder && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                        </View>
                      ) : null}
                      {formDtass?.Qualification === "PhD(Doctorate)" && (
                        <View>
                          <Text style={styles.cardHeader}>PhD</Text>
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            Name of the Major Subject
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required: true,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Name of the Major Subject"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="Subjectphd"
                          />
                          {errors.Subjectphd && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <View>
                            <Text style={{ color: "white", marginBottom: 5 }}>
                              Year
                            </Text>
                            <View>
                              <Text
                                onPress={() => showPicker("Passingphd", true)}
                                style={styles.inputBox}
                              >
                                {Passingphd !== ""
                                  ? Passingphd
                                  : "Month & Year of Passing"}
                              </Text>
                            </View>

                            <DatePicker
                              onGetDateValue={(value) =>
                                setValue("Passingphd", getCurrentDate(value))
                              }
                              onOpenDatePicker={isPickerShow?.Passingphd}
                            />
                          </View>
                          {errors.Passingphd && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                          <Text style={{ color: "white", marginBottom: 5 }}>
                            Percentage Institute / University
                          </Text>
                          <Controller
                            control={control}
                            rules={{
                              required: true,
                            }}
                            render={({
                              field: { onChange, onBlur, value },
                            }) => (
                              <TextInput
                                placeholder="Percentage"
                                style={styles.inputBox}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                              />
                            )}
                            name="Percentagephd"
                          />
                          {errors.Percentagephd && (
                            <Text style={styles.errorMessage}>
                              This is required.
                            </Text>
                          )}
                        </View>
                      )}
                    </View>
                  )}
                  {formDtass?.Qualification === "Below 10th" && (
                    <View>
                      <Text style={{ color: "white", marginBottom: 5 }}>
                        Educational Qualification
                      </Text>
                      <Controller
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <SelectDropdown
                            data={Board10}
                            defaultValue={formDtass?.BoardBelow}
                            onSelect={onChange}
                            defaultButtonText="Board"
                            buttonStyle={styles.DropDownPicker}
                            renderDropdownIcon={() => (
                              <AntDesign name="down" size={16} color="black" />
                            )}
                            buttonTextStyle={styles.dropDownText}
                          />
                        )}
                        name="BoardBelow"
                      />
                      {errors.BoardBelow && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                      <View>
                        <Text style={{ color: "white", marginBottom: 5 }}>
                          Year
                        </Text>
                        <View>
                          <Text
                            onPress={() => showPicker("below10thpass", true)}
                            style={styles.inputBox}
                          >
                            {below10thpass !== ""
                              ? below10thpass
                              : "Month & Year of Passing"}
                          </Text>
                        </View>

                        <DatePicker
                          onGetDateValue={(value) =>
                            setValue("below10thpass", getCurrentDate(value))
                          }
                          onOpenDatePicker={isPickerShow?.below10thpass}
                        />
                      </View>
                      {errors.below10thpass && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                      <Text style={{ color: "white", marginBottom: 5 }}>
                        Percentage
                      </Text>
                      <Controller
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            placeholder="Percentage"
                            style={styles.inputBox}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        )}
                        name="belowPercentage"
                      />
                      {errors.belowPercentage && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                    </View>
                  )}
                  <Text style={styles.cardHeader}>Pursuing</Text>
                  <Controller
                    control={control}
                    rules={{
                      required: false,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <SelectDropdown
                        data={["Yes", "No"]}
                        defaultValue={formDtass?.Pursuing}
                        onSelect={onChange}
                        defaultButtonText="No"
                        buttonStyle={styles.DropDownPicker}
                        renderDropdownIcon={() => (
                          <AntDesign name="down" size={16} color="black" />
                        )}
                        buttonTextStyle={styles.dropDownText}
                      />
                    )}
                    name="Pursuing"
                  />
                  {formDtass?.Pursuing === "Yes" && (
                    <View>
                      <Text style={styles.cardHeader}>Other Qualification</Text>

                      <Text style={{ color: "white", marginBottom: 5 }}>
                        University Other
                      </Text>

                      <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            placeholder="University Other"
                            style={styles.inputBox}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        )}
                        name="UniversityOther"
                      />
                      {errors.UniversityOther && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                      <Text style={{ color: "white", marginBottom: 5 }}>
                        Subject Other
                      </Text>
                      <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            placeholder="Subject Other"
                            style={styles.inputBox}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        )}
                        name="SubjectOther"
                      />
                      {errors.SubjectOther && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                    </View>
                  )}
                </View>
              )}
              {currentStep == 2 && (
                <View>
                  <Text style={styles.cardHeader}>Preference Details</Text>
                  <View>
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Preferred Industry
                    </Text>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <SelectDropdown
                          data={perferenceData}
                          defaultValue={formDtass?.perference1}
                          onSelect={onChange}
                          defaultButtonText="Preference 1"
                          buttonStyle={styles.DropDownPicker}
                          renderDropdownIcon={() => (
                            <AntDesign name="down" size={16} color="black" />
                          )}
                          buttonTextStyle={styles.dropDownText}
                        />
                      )}
                      name="perference1"
                    />
                    {errors.perference1 && (
                      <Text style={styles.errorMessage}>This is required.</Text>
                    )}
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Preference 2
                    </Text>
                    <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <SelectDropdown
                          data={prefrence2}
                          onSelect={onChange}
                          defaultButtonText="Preference 2"
                          defaultValue={formDtass?.preference2}
                          buttonStyle={styles.DropDownPicker}
                          renderDropdownIcon={() => (
                            <AntDesign name="down" size={16} color="black" />
                          )}
                          buttonTextStyle={styles.dropDownText}
                        />
                      )}
                      name="preference2"
                    />
                    {errors.preference2 && (
                      <Text style={styles.errorMessage}>This is required.</Text>
                    )}
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Preference 3
                    </Text>
                    <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <SelectDropdown
                          data={prefrence3}
                          onSelect={onChange}
                          defaultButtonText="Preference 3"
                          defaultValue={formDtass?.preference3}
                          buttonStyle={styles.DropDownPicker}
                          renderDropdownIcon={() => (
                            <AntDesign name="down" size={16} color="black" />
                          )}
                          buttonTextStyle={styles.dropDownText}
                        />
                      )}
                      name="preference3"
                    />
                    {errors.preference3 && (
                      <Text style={styles.errorMessage}>This is required.</Text>
                    )}
                  </View>
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Other Preferred Industry
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <SelectDropdown
                        data={prefrence4}
                        onSelect={onChange}
                        defaultButtonText="Other Preferred Industry"
                        defaultValue={formDtass?.otherPreferred}
                        buttonStyle={styles.DropDownPicker}
                        renderDropdownIcon={() => (
                          <AntDesign name="down" size={16} color="black" />
                        )}
                        buttonTextStyle={styles.dropDownText}
                      />
                    )}
                    name="otherPreferred"
                  />
                  {errors.otherPreferred && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}

                  <View>
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Preferred Work Location
                    </Text>
                    <Controller
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <SelectDropdown
                          data={perferenceDataLocation}
                          onSelect={onChange}
                          defaultButtonText="Preference 1"
                          defaultValue={formDtass?.workPreference1}
                          buttonStyle={styles.DropDownPicker}
                          renderDropdownIcon={() => (
                            <AntDesign name="down" size={16} color="black" />
                          )}
                          buttonTextStyle={styles.dropDownText}
                        />
                      )}
                      name="workPreference1"
                    />
                    {errors.workPreference1 && (
                      <Text style={styles.errorMessage}>This is required.</Text>
                    )}
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Preference 2
                    </Text>
                    <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <SelectDropdown
                          data={workPreference2}
                          onSelect={onChange}
                          defaultButtonText="Preference 2"
                          defaultValue={formDtass?.workPreference2}
                          buttonStyle={styles.DropDownPicker}
                          renderDropdownIcon={() => (
                            <AntDesign name="down" size={16} color="black" />
                          )}
                          buttonTextStyle={styles.dropDownText}
                        />
                      )}
                      name="workPreference2"
                    />
                    {errors.workPreference2 && (
                      <Text style={styles.errorMessage}>This is required.</Text>
                    )}
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Preference 3
                    </Text>
                    <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <SelectDropdown
                          data={workPreference3}
                          onSelect={onChange}
                          defaultButtonText="Preference 3"
                          defaultValue={formDtass?.workPreference3}
                          buttonStyle={styles.DropDownPicker}
                          renderDropdownIcon={() => (
                            <AntDesign name="down" size={16} color="black" />
                          )}
                          buttonTextStyle={styles.dropDownText}
                        />
                      )}
                      name="workPreference3"
                    />
                    {errors.workPreference3 && (
                      <Text style={styles.errorMessage}>This is required.</Text>
                    )}
                  </View>
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Skills
                  </Text>
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Skills"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="skills"
                  />
                  {errors.skills && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}

                  <View>
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Upload Profile
                    </Text>
                    <Pressable
                      style={styles.button}
                      onPress={() => pickDocument("profile", "image")}
                    >
                      <Text style={styles.buttonText}>Select Photo</Text>
                    </Pressable>

                    <Text
                      style={{ color: "white", marginTop: 3, marginBottom: 10 }}
                    >
                      {formDtass?.["candPhoto"]?.["name"]}
                    </Text>
                  </View>
                  {!formDtass?.["candPhoto"] && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  <View>
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Upload Resume
                    </Text>
                    <Pressable
                      style={styles.button}
                      onPress={() => pickDocument("resume")}
                    >
                      <Text style={styles.buttonText}>Select Resume</Text>
                    </Pressable>
                    <Text
                      style={{ color: "white", marginTop: 3, marginBottom: 10 }}
                    >
                      {formDtass?.["resume"]?.["name"]}
                    </Text>
                  </View>
                  {!formDtass?.["resume"] && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              {currentStep == 3 && (
                <View>
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Professional Experience
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <SelectDropdown
                        data={Employment}
                        onSelect={onChange}
                        defaultButtonText="Employment Status"
                        defaultValue={formDtass?.Employment}
                        buttonStyle={styles.DropDownPicker}
                        renderDropdownIcon={() => (
                          <AntDesign name="down" size={16} color="black" />
                        )}
                        buttonTextStyle={styles.dropDownText}
                      />
                    )}
                    name="Employment"
                  />
                  {errors.Employment && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                  {formDtass?.Employment === "Working" && (
                    <View>
                      <Text style={{ color: "white", marginBottom: 5 }}>
                        Year of experience
                      </Text>
                      <Controller
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            placeholder="Year of experience"
                            style={styles.inputBox}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        )}
                        name="experience"
                      />
                      {errors.experience && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                      <Text style={{ color: "white", marginBottom: 5 }}>
                        Name of the Company
                      </Text>
                      <Controller
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            placeholder="Name of the Company"
                            style={styles.inputBox}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        )}
                        name="CompanyName"
                      />
                      {errors.CompanyName && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                      <Text style={{ color: "white", marginBottom: 5 }}>
                        Job Designation
                      </Text>
                      <Controller
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            placeholder="Job Designation"
                            style={styles.inputBox}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        )}
                        name="Designation"
                      />
                      {errors.Designation && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                      <Text style={{ color: "white", marginBottom: 5 }}>
                        Place of Working
                      </Text>
                      <Controller
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            placeholder="Place of Working"
                            style={styles.inputBox}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        )}
                        name="Workingplz"
                      />
                      {errors.Workingplz && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}

                      <View>
                        <Text style={{ color: "white", marginBottom: 5 }}>
                          From Date
                        </Text>
                        <View>
                          <Text
                            onPress={() => showPicker("fromDate", true)}
                            style={styles.inputBox}
                          >
                            {fromDate !== "" ? fromDate : "From Date"}
                          </Text>
                        </View>

                        <DatePicker
                          onGetDateValue={(value) =>
                            setValue("fromDate", getCurrentDate(value))
                          }
                          onOpenDatePicker={isPickerShow?.fromDate}
                        />
                      </View>
                      {errors.fromDate && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}

                      <View>
                        <Text style={{ color: "white", marginBottom: 5 }}>
                          To Date
                        </Text>
                        <View>
                          <Text
                            onPress={() => showPicker("toDate", true)}
                            style={styles.inputBox}
                          >
                            {toDate !== "" ? toDate : "To Date"}
                          </Text>
                        </View>

                        <DatePicker
                          onGetDateValue={(value) =>
                            setValue("toDate", getCurrentDate(value))
                          }
                          onOpenDatePicker={isPickerShow?.toDate}
                        />
                      </View>
                      {errors.toDate && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                      <Text style={{ color: "white", marginBottom: 5 }}>
                        Other Company
                      </Text>
                      <Controller
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            placeholder="Other Company"
                            style={styles.inputBox}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                          />
                        )}
                        name="companyDet"
                      />
                      {errors.companyDet && (
                        <Text style={styles.errorMessage}>
                          This is required.
                        </Text>
                      )}
                    </View>
                  )}
                </View>
              )}
              <View style={formStyles.flexRow}>
                {currentStep > 0 ? (
                  <TouchableOpacity
                    style={formStyles.prevStep}
                    onPress={() => {
                      if (currentStep > 0) {
                        setCurrentStep(currentStep - 1);
                      }
                    }}
                  >
                    <Text style={formStyles.buttonStepText}>Back</Text>
                  </TouchableOpacity>
                ) : null}
                <TouchableOpacity
                  style={formStyles.signOut}
                  onPress={() => router.navigate("/CandidateLogin")}
                >
                  <Text style={formStyles.buttonStepText}>SingOut</Text>
                </TouchableOpacity>
                {currentStep + 1 <
                  steps.length /* add other conditions here */ && (
                  <TouchableOpacity
                    style={formStyles.nextStep}
                    onPress={handleSubmit((data) => onSubmit(data, "next"))}
                  >
                    <Text style={formStyles.buttonStepText}>Next</Text>
                  </TouchableOpacity>
                )}
                {currentStep + 1 ==
                  steps.length /* add other conditions here */ && (
                  <TouchableOpacity
                    style={formStyles.nextStep}
                    onPress={handleSubmit((data) => onSubmitForm(data))}
                  >
                    <Text style={formStyles.buttonStepText}>Submit</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
export default ApplyJob;
