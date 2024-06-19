import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./style/style";
import Footer from "@/components/Footer";
export default function MenuBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <View style={styles.menuButton}>
          <Text style={styles.menuButtonText}>
            <FontAwesome name="bars" size={20} />
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={menuVisible} transparent={false} animationType="slide">
        <View style={styles.menuHeader}>
          <Text style={styles.textWhite}>Menu</Text>
          <Text style={styles.textWhite} onPress={toggleMenu}>
            <FontAwesome
              name="close"
              size={25}
              backgroundColor={"transparent"}
              style={{ padding: 0 }}
            />
          </Text>
        </View>
        <View style={styles.sideBar}>
          {/* Menu content goes here */}
          <Text style={styles.menuText}>Login</Text>
          <Text style={styles.menuText}>About Us</Text>
          <Text style={styles.menuText}>Initiatives</Text>
          <Text style={styles.menuText}>Contact Us</Text>
        </View>
        <Footer content={"Contact : +91 1234567890"} />
      </Modal>
    </>
  );
}
