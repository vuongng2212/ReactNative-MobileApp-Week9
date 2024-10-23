import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import bicycle from '../assets/bicycle.png';
export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
          A premium online store for sporter and their stylish choice
        </Text>
        <View style={styles.img}>
          <Image source={bicycle} style={{ marginTop: 30, marginBottom: 30 }} />
        </View>
      </View>
      <TouchableOpacity style={styles.startBtn} onPress={()=>navigation.navigate('List')}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
  },
  img: {
    backgroundColor: '#E941411A',
    borderRadius: 20,
  },
  startBtn: {
    backgroundColor: 'red',
    borderRadius: 30,
    marginTop: 20,
  },
});
