import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import background from './assets/background.png'

export default function App() {
  return (
    <ImageBackground
      source={background}
      style={styles.container}>
        {/*  */}
      <View style={styles.one}>
        <View style={styles.handle}>
          <Text style={styles.handle_text}>a</Text>
          <Text style={styles.handle_text}>+</Text>
          <Text style={styles.handle_text}>b</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.result_text}>result</Text>
        </View>
      </View>
      {/*  */}
      <View style={styles.two}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn,{fontSize:60,color:'white'}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>%</Text>
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
            <Text style={styles.text_btn,{fontSize:45,paddingTop:25,color:'white'}}>*</Text>
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
            <Text style={styles.text_btn,{fontSize:65,color:'white'}}>-</Text>
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
            <Text style={styles.text_btn}>=</Text>
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
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:15
    
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  }, one: {
    display: 'flex',
    flex: 0.29,
    width: '100%',
    height: '100%',
    flexDirection:"row",
    justifyContent: 'center',
    alignItems:'center',
    marginBottom:20
  }, two: {
    display: 'flex',
    flex: 0.71,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
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
    fontSize: 50,
    color: 'white',
    fontWeight:'bold',
    marginLeft:70,
    marginBottom:50

  }, handle_text: {
    color: 'white',
    fontSize: 20,
  },btn:{
    width:50,
    height:50,
    justifyContent: 'center',
  },handle:{
    marginRight:60,
    marginTop:30
  }
});
