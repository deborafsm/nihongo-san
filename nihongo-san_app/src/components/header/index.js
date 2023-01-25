import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Header do App</Text>
        <TouchableOpacity>
          <Feather name="use" size={27} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
  },
});
