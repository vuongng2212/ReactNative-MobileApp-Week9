import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import heartIcon from '../assets/akar-icons_heart.png'
export default function Detail({route, navigation }) {
  const {item}=route.params;
  return (
    <SafeAreaView>
      <View style={styles.img}>
         <Image source={{uri:`${item.image}.png`}} style={styles.image}/>
      </View>
      <Text style={{fontSize: 20}}>{item.name}</Text>
      <Text>15% OFF {item.price}</Text>
      <Text>Desciption</Text>
      <Text>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
      <View style={{flex: 1,flexDirection:'row', justifyContent: 'center', alignItems: 'flex-end'}}>
        <Image source={heartIcon} style={{justifyContent: 'center', alignItems:'center'}}/>
        <TouchableOpacity style={{backgroundColor:'red', borderRadius: 20, margin: 10}}>
          <Text style={{color: 'white', fontSize: 18, margin: 10}}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image:{
    width: 300,
    height: 300,
    margin: 20
  },
  img: {
    backgroundColor: '#E941411A',
    borderRadius: 20,
  },
});