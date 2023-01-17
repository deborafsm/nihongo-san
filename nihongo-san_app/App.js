import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={{ marginTop: 100 }}>
      <Text style={{ color: "red", fontSize: 30 }}>Nihongo-San App</Text>
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
