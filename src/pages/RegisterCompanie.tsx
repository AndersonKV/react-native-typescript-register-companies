import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {Data} from '../types/types';

import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterCompanie: React.FC = () => {
  // const [dataSaved, setDataSaved] = useState<Data[]>();
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = Math.round((dimensions.width * 9) / 16);

  const [cpf, setCpf] = useState('');
  const [cpfError, setCpfError] = useState('black');
  const [myDoc, setMyDoc] = useState('');
  const [myDocError, setMyDocError] = useState('black');
  const [nameOrCompany, setNameOrCompany] = useState('');
  const [nameOrCompanyError, setNameOrCompanyError] = useState('black');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('black');
  const [cep, setCep] = useState('');
  const [cepError, setCepError] = useState('black');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('black');
  const [districtNumber, setDistrictNumber] = useState('');
  const [districtNumberError, setDistrictNumberError] = useState('black');
  const [complement, setComplement] = useState('');
  const [complementError, setComplementError] = useState('black');
  const [district, setDistrict] = useState('');
  const [districtError, setDistrictError] = useState('black');
  const [uf, setUf] = useState('');
  const [ufError, setUfError] = useState('black');
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState('black');
  const [openingDate, setOpeningDate] = useState('');
  const [openingDateError, setOpeningDateError] = useState('black');

  useEffect(() => {
    async function init() {
      //AsyncStorage.clear();
    }
    init();
    // Atualiza o titulo do documento usando a API do browser
  }, []);

  async function handleSubmit() {
    console.log('districtNumber ' + districtNumber.length);
    console.log('districtNumberError ' + districtNumberError.length);

    if (cpf.trim().length === 0) {
      setCpfError('red');
      return;
    } else {
      setCpfError('black');
    }

    if (myDoc.trim().length === 0) {
      setMyDocError('red');
      return;
    } else {
      setMyDocError('black');
    }

    if (nameOrCompany.trim().length === 0) {
      setNameOrCompanyError('red');
      return;
    } else {
      setNameOrCompanyError('black');
    }

    if (email.trim().length === 0) {
      setEmailError('red');
      return;
    } else {
      setEmailError('black');
    }

    if (openingDate.trim().length === 0) {
      setOpeningDateError('red');
      return;
    } else {
      setOpeningDateError('black');
    }

    if (cep.trim().length === 0) {
      setCepError('red');
      return;
    } else {
      setCepError('black');
    }
    if (districtNumber.trim().length === 0) {
      setDistrictNumberError('red');
      return;
    } else {
      setDistrictNumberError('black');
    }

    if (address.trim().length === 0) {
      setAddressError('red');
      return;
    } else {
      setAddressError('black');
    }

    if (complement.trim().length === 0) {
      setComplementError('red');
      return;
    } else {
      setComplementError('black');
    }

    if (district.trim().length === 0) {
      setDistrictError('red');
      return;
    } else {
      setDistrictError('black');
    }

    if (uf.trim().length === 0) {
      setUfError('red');
      return;
    } else {
      setUfError('black');
    }

    if (city.trim().length === 0) {
      setCityError('red');
      return;
    } else {
      setCityError('black');
    }

    const item = [];

    item.push({
      select: cpf,
      myDocument: myDoc,
      nameCompleteOrCompanyName: nameOrCompany,
      email: email,
      cep: cep,
      address: address,
      number: districtNumber,
      complement: complement,
      district: district,
      uf: uf,
      city: city,
      openingDate: openingDate,
    });

    //pega item do localstorage
    const dataStorage = await AsyncStorage.getItem('item');
    //converte, caso exista não vira um objeto vazio
    const getData = JSON.parse(dataStorage || '[]');
    //junta os dois array, do localstorage e o novo da data
    const dataFinal = getData.concat(item);
    //converte para ser inserido no localstorage
    const dataStringfy = JSON.stringify(dataFinal);
    AsyncStorage.setItem('item', dataStringfy);

    Alert.alert(
      'Registro salvo',
      'Dados salvo com sucesso',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );

    // setCpf('');
    // setMyDoc('');
    // setNameOrCompany('');
    // setEmail('');
    // setCpf('');
    // setAddress('');
    // setDistrictNumber('');
    // setComplement('');
    // setDistrict('');
    // setUf('');
    // setCity('');
    // setOpeningDate('');
  }

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
        <TouchableOpacity onPress={handleSubmit}>
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
    <View style={styles.container}>
      <HeaderComponent />
      <ScrollView style={styles.styledScrollView}>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 10,
            }}>
            Tipo de documento
          </Text>
          <TextInput
            placeholder="CPF"
            style={{...styles.input, borderBottomColor: cpfError}}
            value={cpf}
            onChangeText={(event) => setCpf(event)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Documento"
            style={{...styles.input, borderBottomColor: myDocError}}
            value={myDoc}
            onChangeText={(event) => setMyDoc(event)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Nome completo/Razão social"
            style={{...styles.input, borderBottomColor: nameOrCompanyError}}
            value={nameOrCompany}
            onChangeText={(event) => setNameOrCompany(event)}
          />
        </View>
        <View>
          <TextInput
            placeholder="E-email"
            style={{...styles.input, borderBottomColor: emailError}}
            value={email}
            onChangeText={(event) => setEmail(event)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Data de abertura"
            style={{...styles.input, borderBottomColor: openingDateError}}
            value={openingDate}
            onChangeText={(event) => setOpeningDate(event)}
          />
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 10,
            }}>
            Endereço
          </Text>
          <TextInput
            placeholder="CEP"
            style={{...styles.input, borderBottomColor: cepError}}
            value={cep}
            onChangeText={(event) => setCep(event)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Número"
            style={{...styles.input, borderBottomColor: districtNumberError}}
            value={districtNumber}
            onChangeText={(event) => setDistrictNumber(event)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Endereço"
            style={{...styles.input, borderBottomColor: addressError}}
            value={address}
            onChangeText={(event) => setAddress(event)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Complemento"
            style={{...styles.input, borderBottomColor: complementError}}
            value={complement}
            onChangeText={(event) => setComplement(event)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Bairro"
            style={{...styles.input, borderBottomColor: districtError}}
            value={district}
            onChangeText={(event) => setDistrict(event)}
          />
        </View>
        <View>
          <TextInput
            placeholder="UF"
            style={{...styles.input, borderBottomColor: ufError}}
            value={uf}
            onChangeText={(event) => setUf(event)}
          />
        </View>
        <View>
          <TextInput
            placeholder="Cidade"
            style={{...styles.input, borderBottomColor: cityError}}
            value={city}
            onChangeText={(event) => setCity(event)}
          />
        </View>
        <Text style={{textAlign: 'center'}}>Fim da pagina</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: '100%',
    backgroundColor: 'whitesmoke',
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

export default RegisterCompanie;
