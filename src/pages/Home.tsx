import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
  Image,
  Dimensions,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';

import data from '../assets/products.json';

import {
  faArrowAltCircleUp,
  faBuilding,
  faStore,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
//fa-arrow-alt-circle-up
import {Data} from '../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEY} from '../utils';

const Home: React.FC = ({navigation, route}) => {
  const [products, setProducts] = useState<Data[]>();
  const [item, setItem] = useState<Data[]>();
  const [modalVisible, setModalVisible] = useState(false);
  const [positionHide, setPositionHide] = useState('100%');
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = Math.round((dimensions.width * 9) / 16);

  useEffect(() => {
    async function init() {
      //adiciona id ao array
      console.log(navigation);
    }
    init();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.aside}>
        <TouchableOpacity>
          <View style={{padding: 15}}>
            <FontAwesomeIcon icon={faArrowAltCircleUp} size={20} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Listar empresas')}>
          <View style={{padding: 15}}>
            <FontAwesomeIcon icon={faBuilding} size={20} color="gray" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastrar empresas')}>
          <View style={{padding: 15}}>
            <FontAwesomeIcon icon={faStore} size={20} color="gray" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Listar empresas')}>
            <View style={styles.box}>
              <FontAwesomeIcon icon={faBuilding} size={40} color="gray" />
              <Text>Listar empresas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cadastrar empresas')}>
            <View style={styles.box}>
              <FontAwesomeIcon icon={faStore} size={40} color="gray" />
              <Text>Cadastrar empresas</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
  },
  aside: {
    backgroundColor: '#29323c',
  },
  content: {
    backgroundColor: 'whitesmoke',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  box: {
    padding: 20,
    margin: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d3d3d3',
  },
  bg: {
    backgroundColor: 'red',
  },
  grid: {
    padding: 20,
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Home;
