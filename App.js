import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert
} from "react-native";
import background from "./assets/background.png";

export default function App() {
  const [a, setA] = useState("");
  const [operation, setOperation] = useState("");
  const [b, setB] = useState("");
  const [sum, setSum] = useState("");
  setOnClick=()=>{
    Alert.alert("hello anh em ");
  }
  return (
    <ImageBackground source={background} style={styles.container}>
      {/*  */}
      <View style={styles.one}>
        <View style={styles.handle}>
          <Text style={styles.handle_text}>{a}</Text>
          <Text style={styles.handle_text}>{operation}</Text>
          <Text style={styles.handle_text}>{b}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.result_text}>{sum}</Text>
        </View>
      </View>
      {/*  */}
      <View style={styles.two}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={()=>{setSum("0");setOperation("");setB(""),setA("")}} >
            <Text style={styles.text_btn}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>±</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text onPress={(a)=>{Alert.alert(a)}} style={styles.text_btn}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={[styles.text_btn, styles.customSize, { marginBottom: 30 }]}
            >
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}> </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={[styles.text_btn, styles.customSize, { marginRight: 8 }]}
            >
              =
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
// There are 3 main component : result ,handle,keyboard
// row is sub of keyboard
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  one: {
    display: "flex",
    flex: 0.29,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20
  },
  two: {
    display: "flex",
    flex: 0.71,
    width: "80%",
    height: "100%",
    justifyContent: "flex-start",
    marginTop: 50
  },
  text_btn: {
    fontSize: 40,
    color: "white",
    alignSelf: "center",
    borderColor: "red",
    width: 60,
    height: 60,
    justifyContent: "center",
    marginLeft: 15
  },
  result_text: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
    marginBottom: 50
  },
  handle: {
    marginTop: 30
  },
  handle_text: {
    color: "white",
    fontSize: 20
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: "center"
  },
  customSize: {
    fontSize: 60
  }
});
