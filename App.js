import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EnterPhoneNumber from "./PhoneCodePicker";
import React, { useState } from "react";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState(null);
  return (
    <View style={styles.container}>
      <EnterPhoneNumber
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
