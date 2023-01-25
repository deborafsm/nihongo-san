import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";
function App() {
  return (
    <View style={{ marginTop: 100 }}>
      <Text style={styles.container}>Nihongo-San App</Text>
    </View>
    <Header/>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});