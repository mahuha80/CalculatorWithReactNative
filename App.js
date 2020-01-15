import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import background from './assets/background.png'

export default function App() {
  return (
    <ImageBackground
      source={background}
      style={styles.container}>
      <View style={styles.one}>
        <View style={styles.result}>
          <Text style={styles.result_text}>result</Text>
        </View>
        <View style={styles.handle}>
          <Text style={styles.handle_text}>a</Text>
          <Text style={styles.handle_text}>+</Text>
          <Text style={styles.handle_text}>b</Text>
        </View>
      </View>
      <View style={styles.two}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>%</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.text_btn}>1</Text>
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
  }, two: {
    display: 'flex',
    flex: 0.71,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    marginBottom: 24
  }, text_btn: {
    fontSize: 40,
    color: 'white',
    alignSelf: 'center',
    borderColor:'red',
    width:50,
    height:50
  }, result_text: {
    fontSize: 40,
    color: 'white'
  }, handle_text: {
    color: 'white',
    fontSize: 20
  },btn:{
    width:50,
    height:50,
    justifyContent: 'center',
  }
});
