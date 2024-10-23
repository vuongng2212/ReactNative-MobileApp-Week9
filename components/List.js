import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import heart from '../assets/heart.png';

export default function List({ navigation }) {
  const [navItem, setNavItem] = useState('');
  const [DT, setDT] = useState([]);

  const fetchAPI = (type) => {
    var url = 'https://671230a44eca2acdb5f7850a.mockapi.io/bicycle';
    if (type) {
      url += `?type=${type}`;
    }
    const ft = fetch(url);
    ft.then((res) => res.json()).then((data) => setDT(data));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { item: item })}>
      <View style={styles.itemContainer}>
        <Image
          source={heart}
          style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
        />
        <Image source={{ uri: `${item.image}.png` }} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    fetchAPI(navItem);
  }, [navItem]);

  const addItem = () => {
    setArr((prevArr) => [...prevArr, `Item ${prevArr.length + 1}`]); // Thêm phần tử mới vào mảng
  };
  
  return (
    <SafeAreaView>
      <Text
        style={{
          color: 'red',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        The world’s Best Bike
      </Text>

      <View style={styles.navView}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setNavItem('');
          }}>
          <Text
            style={[styles.textItem, navItem === '' && styles.selectedNavItem]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setNavItem('Road');
          }}>
          <Text
            style={[
              styles.textItem,
              navItem === 'Road' && styles.selectedNavItem,
            ]}>
            Roadbike
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setNavItem('Mountain');
          }}>
          <Text
            style={[
              styles.textItem,
              navItem === 'Mountain' && styles.selectedNavItem,
            ]}>
            Mountain
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={DT}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navView: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  navItem: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'red',
  },
  textItem: {
    color: '#BEB6B6',
    fontSize: 20,
    width: 90,
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  selectedNavItem: {
    color: 'red',
    fontSize: 20,
    width: 90,
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#F7BA8326',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  image: {
    width: 120,
    height: 120,
  },
  name: {
    textAlign: 'center',
    fontSize: 18,
    color: '#00000099',
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
