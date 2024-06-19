import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";
import axios from "axios";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "./DatePicker";
import Modal from "react-native-modal";
import { styles } from "./style/style";
import { Link, router } from "expo-router";

function Register() {
  const [otpModal, setOtpModal] = useState(null);
  const [otp, setOtp] = useState(null);
  const [sentOtp, setSentOtp] = useState(null);
  const [buttonDisable, setButtonDisable] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      empName: "",
      empStatus: "",
      gpfcpd: "",
      ppocps: "",
      familystatusList: "",
      CandidateName: "",
      rand: "",
      department: "",
      District: "",
      dob: "",
      doe: "",
      dopr: "",
      dod: "",
      gender: "",
      mobileNo: "",
      emailId: "",
      gno: "",
      policePersonnel: "",
      familyMember: "",
      unitName: "",
      userName: "",
      password: "",
      conformpass: "",
    },
  });
  const [isPickerShow, setIsPickerShow] = useState(null);
  const watchedFields = watch();

  const dob = watch("dob");
  const doe = watch("doe");
  const dopr = watch("dopr");
  const dod = watch("dod");
  const password = watch("password");

  useEffect(() => {
    setIsPickerShow(null);
  }, [dob, doe, dopr, dod]);

  const getCurrentDate = (value) => {
    console.log(value, "valueasd");
    const currentDate = value ? value : new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${day}-${month}-${year}`;
    console.log(formattedDate, "formattedDate");
    return formattedDate;
  };

  const showPicker = (name, value) => {
    setIsPickerShow((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const itemsStatus = ["Serving", "Retired", "Deceased"];
  const itemsGender = ["Male", "Female", "Transgender"];

  const itemsDepartment = [
    "Police Personnel",
    "Ministerial Staff",
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

  console.log(watchedFields, "watchedFieldswatchedFields123");

  const onSubmit = async () => {
    setButtonDisable(true);
    try {
      let data = {
        number: watchedFields.emailId,
      };
      console.log(data, "datadata87987");
      const response = await axios.post(
        "https://nodebackend.kavalarnalantn.in:5000/user_Register/generateEmailOtp",
        data
      );
      setSentOtp(response.data);
      console.log(response.data, "responseresponse");
      setOtpModal(true);
    } catch (error) {
      setSentOtp(null);
      setOtp(null);
      setButtonDisable(false);
      setOtpModal(false);
      console.log("Error:", error);
    }
  };

  const submitOtp = async (data) => {
    console.log(sentOtp, "opsssssss", otp);
    if (String(sentOtp) === String(otp)) {
      try {
        const response = await axios.post(
          "https://nodebackend.kavalarnalantn.in:5000/user_Register/register",
          data
        );
        setButtonDisable(false);
        setOtpModal(null);
        router.replace("/Login");
      } catch (error) {
        setButtonDisable(false);
        setOtpModal(null);
        setSentOtp(null);
        setOtp(null);
        Alert.alert(error?.response?.data?.message);
        console.log("Error:", error?.response?.data?.message);
      }
    } else {
      Alert.alert("Entered Wrong Otp");
    }
  };

  return (
    <View style={styles.flex}>
      <Modal isVisible={otpModal}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
          <Text
            style={{
              color: "Black",
              fontSize: 20,
              paddingTop: 18,
              paddingBottom: 18,
              textAlign: "center",
            }}
          >
            Enter OTP sent your registered email id
          </Text>
          <TextInput
            placeholder="Enter Otp"
            style={styles.inputBox}
            value={otp}
            onChangeText={(value) => setOtp(value)}
            keyboardType="numeric"
          />
          <View>
            <Pressable style={styles.button} onPress={handleSubmit(submitOtp)}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                setButtonDisable(false);
                setSentOtp(null);
                setOtp(null);
                setOtpModal(null);
              }}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ImageBackground
        resizeMode="repeat"
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#212761",
        }}
      >
        <ScrollView>
          <View style={styles.card}>
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
              <Text style={styles.titleText}>Employee Registration</Text>
            </View>
            <View
              style={{
                backgroundColor: "#ffffff3b",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", marginBottom: 5 }}>
                Name of the Employee
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Name of the Employee"
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
                Select Employee Status
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
                    defaultButtonText="Select Employee Status"
                    buttonStyle={styles.DropDownPicker}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    defaultValue={value}
                  />
                )}
                name="empStatus"
              />
              {errors?.["status"] && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              {watchedFields?.empStatus === "Serving" && (
                <>
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Enter GPF / CPS / PPO No
                  </Text>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        placeholder="Enter GPF / CPS / PPO No"
                        style={styles.inputBox}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        keyboardType="numeric"
                      />
                    )}
                    name="gpfcpd"
                  />
                  {errors?.["gpfcpsNo"] && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </>
              )}
              <Text style={{ color: "white", marginBottom: 5 }}>
                Select Department
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsDepartment}
                    onSelect={onChange}
                    defaultButtonText="Select Department"
                    buttonStyle={styles.DropDownPicker}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    defaultValue={value}
                  />
                )}
                name="policePersonnel"
              />
              {errors.policePersonnel && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <Text style={{ color: "white", marginBottom: 5 }}>
                Select Rank
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SelectDropdown
                    data={itemsRank}
                    onSelect={onChange}
                    defaultButtonText="Select Rank"
                    buttonStyle={styles.DropDownPicker}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    defaultValue={value}
                  />
                )}
                name="rand"
              />
              {errors.rand && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}
              <Text style={{ color: "white", marginBottom: 5 }}>
                Police Grade Number
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Police Grade Number"
                    style={styles.inputBox}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="numeric"
                  />
                )}
                name="gno"
              />
              {errors.gno && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}
              <Text style={{ color: "white", marginBottom: 5 }}>Unit Name</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Unit Name"
                    style={styles.inputBox}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="unitName"
              />
              {errors.unitName && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}
              <Text style={{ color: "white", marginBottom: 5 }}>
                Select City / District
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
                    defaultButtonText="Select City / District"
                    buttonStyle={styles.DropDownPicker}
                    renderDropdownIcon={() => (
                      <AntDesign name="down" size={16} color="black" />
                    )}
                    buttonTextStyle={styles.dropDownText}
                    onBlur={onBlur}
                    defaultValue={value}
                  />
                )}
                name="District"
              />
              {errors.District && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <View>
                {/* Display the selected date */}
                <View>
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Date of Birth
                  </Text>
                  <Text
                    onPress={() => showPicker("dob", true)}
                    style={styles.inputBox}
                  >
                    {dob !== "" ? getCurrentDate(dob) : "Date of Birth"}
                  </Text>
                </View>

                <DatePicker
                  onGetDateValue={(value) => setValue("dob", value)}
                  onOpenDatePicker={isPickerShow?.dob}
                />
              </View>
              {errors.dob && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}

              <View>
                {/* Display the selected date */}
                <View>
                  <Text style={{ color: "white", marginBottom: 5 }}>
                    Date of Enlistment
                  </Text>
                  <Text
                    onPress={() => showPicker("doe", true)}
                    style={styles.inputBox}
                  >
                    {doe !== "" ? getCurrentDate(doe) : "Date of Enlistment"}
                  </Text>
                </View>
                <DatePicker
                  onGetDateValue={(value) => setValue("doe", value)}
                  onOpenDatePicker={isPickerShow?.doe}
                />
              </View>
              {errors.doe && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}
              {watchedFields?.empStatus === "Retired" && (
                <View>
                  <View>
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Date of Retirement
                    </Text>
                    <Text
                      onPress={() => showPicker("dopr", true)}
                      style={styles.inputBox}
                    >
                      {dopr !== ""
                        ? getCurrentDate(dopr)
                        : "Date of Retirement"}
                    </Text>
                  </View>
                  <DatePicker
                    onGetDateValue={(value) => setValue("dopr", value)}
                    onOpenDatePicker={isPickerShow?.dopr}
                  />
                  {errors.dopr && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              {watchedFields?.empStatus === "Deceased" && (
                <View>
                  {/* Display the selected date */}
                  <View>
                    <Text style={{ color: "white", marginBottom: 5 }}>
                      Date of Death
                    </Text>
                    <Text
                      onPress={() => showPicker("dod", true)}
                      style={styles.inputBox}
                    >
                      {dod !== ""
                        ? getCurrentDate(dod)
                        : "Date of Date of Death"}
                    </Text>
                  </View>
                  <DatePicker
                    onGetDateValue={(value) => setValue("dod", value)}
                    onOpenDatePicker={isPickerShow?.dod}
                  />
                  {errors.dod && (
                    <Text style={styles.errorMessage}>This is required.</Text>
                  )}
                </View>
              )}
              <Text style={{ color: "white", marginBottom: 5 }}>
                Select Gender
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
                    defaultButtonText="Select Gender"
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
              <Text style={{ color: "white", marginBottom: 5 }}>Mobile No</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: /^\d{0,10}$/,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Mobile No"
                    keyboardType="numeric"
                    style={styles.inputBox}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="mobileNo"
              />
              {errors.mobileNo && (
                <Text style={styles.errorMessage}>
                  Maximum 10 Number allowed
                </Text>
              )}
              <Text style={{ color: "white", marginBottom: 5 }}>Email ID</Text>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Email ID"
                    style={styles.inputBox}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="emailId"
              />
              {errors.emailId && (
                <Text style={styles.errorMessage}>Email Id required</Text>
              )}
              <Text style={{ color: "white", marginBottom: 5 }}>
                Name of the Family Member with Relation
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Name of the Family Member with Relation"
                    style={styles.inputBox}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="familyMember"
              />
              {errors?.["realation"] && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}
              <Text style={{ color: "white", marginBottom: 5 }}>User Name</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="User Name"
                    style={styles.inputBox}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="userName"
              />
              {errors.userName && (
                <Text style={styles.errorMessage}>This is required.</Text>
              )}
              <Text style={{ color: "white", marginBottom: 5 }}>Password</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Password"
                    style={styles.inputBox}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry={false}
                    enablesReturnKeyAutomatically
                    value={value}
                  />
                )}
                name="password"
              />
              {errors.password && (
                <Text style={styles.errorMessage}>
                  Password must contain at least one uppercase letter, one
                  lowercase letter, one number, and one special character, and
                  must be at least 8 characters long.
                </Text>
              )}
              <Text style={{ color: "white", marginBottom: 5 }}>
                Confirm Password
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: (value) =>
                    value === password || "Passwords do not match.",
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Confirm Password"
                    secureTextEntry
                    style={styles.inputBox}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="conformpass"
              />
              {errors.conformpass && (
                <Text style={styles.errorMessage}>Passwords do not match.</Text>
              )}

              <View style={styles.center}>
                <Pressable
                  style={styles.button}
                  onPress={handleSubmit(onSubmit)}
                  disabled={buttonDisable}
                >
                  <Text style={styles.buttonText}>
                    {buttonDisable ? "Sending..." : "Submit"}
                  </Text>
                </Pressable>
                <Link href={"/Login"}>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "700",
                      fontSize: 14,
                      marginLeft: 10,
                      textAlign: "center",
                    }}
                  >
                    Login
                  </Text>
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default Register;
