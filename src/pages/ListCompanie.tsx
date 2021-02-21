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
  SafeAreaView,
} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {Data} from '../types/types';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEY} from '../utils';

const ListCompanie: React.FC = ({navigation, route}) => {
  const [data, setData] = useState<Data[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function init() {
      //pega item do localstorage
      const dataStorage = await AsyncStorage.getItem('item');
      //converte, caso exista não vira um objeto vazio
      const getData = JSON.parse(dataStorage || '[]');

      getData.forEach((element: Data, id: string) => {
        element.id = id;
      });

      setData(getData);

      setLoading(true);
    }
    init();
    // Atualiza o titulo do documento usando a API do browser
  }, []);

  const HeaderComponent = () => {
    return (
      <View
        style={{
          backgroundColor: '#29323c',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={{color: 'white'}}>Empresas / Cadastrar Empresa</Text>
        <TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              backgroundColor: '#3C3B3F',
              padding: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>SALVAR</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          backgroundColor: 'white',
        }}>
        <View>
          <Text>Indentificação</Text>
        </View>
        <View>
          <Text>Cidade/UF</Text>
        </View>
        <View>
          <Text>CEP</Text>
        </View>
        <View>
          <Text>Data de abertura</Text>
        </View>
      </View>

      {loading === true ? (
        data && data?.length > 0 ? (
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity key={item.id}>
                <View style={styles.container}>
                  <View
                    style={{
                      flex: 1,
                      padding: 15,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>
                      {item.nameCompleteOrCompanyName}
                    </Text>
                    <Text style={{color: 'gray'}}>{item.select}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text>{item.city}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text>{item.cep}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text>{item.openingDate}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>Nenhuma empresa cadastrada</Text>
          </View>
        )
      ) : null}
    </View>
  );
};

{
  /* <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>Nenhuma empresa cadastrada</Text>
          </View> */
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#29323c',
  },
  styledScrollView: {
    marginHorizontal: 20,
    marginBottom: 80,
  },
});

export default ListCompanie;
