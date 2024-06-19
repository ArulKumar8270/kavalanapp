import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { styles } from "./style/style";

function PostJobs({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#212761",
      }}
    >
      <ImageBackground
        // source={{ uri: "https://kavalarnalantn.in/images/Banner.png" }}
        resizeMode="repeat"
        style={styles.backImage}
      >
        <ScrollView>
          <View style={styles.card}>
            <View>
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
                <Text style={styles.titleText}>Post Jobs</Text>
              </View>

              <TextInput
                placeholder="Company / Organization Name"
                style={styles.inputBox}
              />
              <TextInput
                placeholder="Contact Person Name"
                style={styles.inputBox}
              />
              <TextInput placeholder="Phone Number" style={styles.inputBox} />
              <TextInput placeholder="Email-Id" style={styles.inputBox} />
              <TextInput placeholder="GST / PAN No" style={styles.inputBox} />
              <TextInput
                placeholder="Upload GST Document"
                style={styles.inputBox}
              />
              <TextInput placeholder="UserName" style={styles.inputBox} />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.inputBox}
              />
              <View style={styles.center}>
                <Pressable
                  style={styles.button}
                  onPress={() => navigation.navigate("HomePage")}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
export default PostJobs;
