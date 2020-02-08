<<<<<<< HEAD
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import background from './assets/background.png'

export default function App() {
  const[operator,setOperator]=useState("");
  const[aVal,setAVal]=useState("");
  const[bVal,setBVal]=useState("");
  const[resultVal,setResultVal]=useState("0");
  const[curstate,setCurState]=useState(1)
  handleTap=(type={},value={})=>{
    if(type=="default"){
      setOperator("");
      setAVal("");
      setBVal("");
      setResultVal("");
      setCurState("1");
    }
    if(type=="number"){
      console.log(curstate);
      if(curstate==1){
        setAVal(`${aVal+value}`)
      }else{
        setBVal(`${bVal+value}`)
      }
    }
    if(type=="operator"){
      setCurState(-1)
      setOperator(`${value}`)
    }
    if(type=="equal"){
        var a=parseFloat(aVal);
        var b=parseFloat(bVal);
        if(operator=="+"){
          setResultVal(a+b);
        }else if(operator=="-"){
          setResultVal(a-b);
        }else if(operator=="*"){
          setResultVal(a*b);
        }else{
          setResultVal(a/b);
        }
    }
=======
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
>>>>>>> 50ab993731461d0a5dc154ca97f32f51cca222e6
  }
  return (
    <ImageBackground source={background} style={styles.container}>
      {/*  */}
      <View style={styles.one}>
        <View style={styles.handle}>
<<<<<<< HEAD
          <Text style={styles.handle_text}>{aVal}</Text>
          <Text style={styles.handle_text}>{operator}</Text>
          <Text style={styles.handle_text}>{bVal}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.result_text}>{resultVal}</Text>
=======
          <Text style={styles.handle_text}>{a}</Text>
          <Text style={styles.handle_text}>{operation}</Text>
          <Text style={styles.handle_text}>{b}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.result_text}>{sum}</Text>
>>>>>>> 50ab993731461d0a5dc154ca97f32f51cca222e6
        </View>
      </View>
      {/*  */}
      <View style={styles.two}>
        <View style={styles.row}>
<<<<<<< HEAD
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("default","C")}}>
            <Text style={styles.text_btn}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>{handleTap("operator","+")}}>
            <Text style={styles.text_btn,{fontSize:60,color:'white'}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("operator","%")}}>
            <Text style={styles.text_btn}>%</Text>
=======
          <TouchableOpacity style={styles.btn} onPress={()=>{setSum("0");setOperation("");setB(""),setA("")}} >
            <Text style={styles.text_btn}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>±</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text onPress={(a)=>{Alert.alert(a)}} style={styles.text_btn}>%</Text>
>>>>>>> 50ab993731461d0a5dc154ca97f32f51cca222e6
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("operator","/")}}>
            <Text style={styles.text_btn}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("number","7")}}>
            <Text style={styles.text_btn}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("number","8")}}>
            <Text style={styles.text_btn}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("number","9")}}>
            <Text style={styles.text_btn}>9</Text>
          </TouchableOpacity>
<<<<<<< HEAD
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("operator","*")}}>
            <Text style={styles.text_btn,{fontSize:45,paddingTop:25,color:'white'}}>*</Text>
=======
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>*</Text>
>>>>>>> 50ab993731461d0a5dc154ca97f32f51cca222e6
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("number","4")}}>
            <Text style={styles.text_btn}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("number","5")}}>
            <Text style={styles.text_btn}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("number","6")}}>
            <Text style={styles.text_btn}>6</Text>
          </TouchableOpacity>
<<<<<<< HEAD
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("operator","-")}}>
            <Text style={styles.text_btn,{fontSize:65,color:'white'}}>-</Text>
=======
          <TouchableOpacity style={styles.btn}>
            <Text
              style={[styles.text_btn, styles.customSize, { marginBottom: 30 }]}
            >
              -
            </Text>
>>>>>>> 50ab993731461d0a5dc154ca97f32f51cca222e6
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("number","1")}} >
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>{handleTap("number","2")}}>
            <Text style={styles.text_btn}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>{handleTap("number","3")}}>
            <Text style={styles.text_btn}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("operator","+")}}>
            <Text style={styles.text_btn}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}> </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("number","0")}}>
            <Text style={styles.text_btn}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("number",".")}}>
            <Text style={styles.text_btn}>.</Text>
          </TouchableOpacity>
<<<<<<< HEAD
          <TouchableOpacity style={styles.btn} onPress={()=>{handleTap("equal","=")}}>
            <Text style={styles.text_btn}>=</Text>
=======
          <TouchableOpacity style={styles.btn}>
            <Text
              style={[styles.text_btn, styles.customSize, { marginRight: 8 }]}
            >
              =
            </Text>
>>>>>>> 50ab993731461d0a5dc154ca97f32f51cca222e6
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
<<<<<<< HEAD
    marginTop: 30,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  row: {
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
=======
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
>>>>>>> 50ab993731461d0a5dc154ca97f32f51cca222e6
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
<<<<<<< HEAD
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems:'center',
    marginTop:50,
  }, text_btn: {
    fontSize: 45,
    color: 'white',
    alignSelf: 'center',
    borderColor:'red',
    width:60,
    height:60,
    justifyContent: 'center',
    marginLeft:15
  }, result_text: {
=======
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
>>>>>>> 50ab993731461d0a5dc154ca97f32f51cca222e6
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
