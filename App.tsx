/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MyText from './components/MyText/MyText';
import { Alert, Image, Text, TextInput, View } from 'react-native';
import nata from './styled';
import { useState } from 'react';
function App() {
  const [imageSource, setImageSource] = useState({ uri: 'http://example.com' });
  const [textValue, setTextValue] = useState('');
  const [email, setEmail] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={nata.header}>
          <Text style={nata.headerTitle}>Hello word</Text>
        </View>
        <MyText
          title="Nata"
          fontSize={50}
          onPress={() => Alert.alert('hello')}
        />
        <Image
          source={imageSource}
          style={{ width: 100, height: 100 }}
          resizeMode={'stretch'}
          onError={() => {
            console.log('err');
            setImageSource(require('./assets/images/discord.png'));
          }}
        />
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />

        <TextInput
          style={{ borderWidth: 1, padding: 10, borderRadius: 4 }}
          value={textValue}
          onChangeText={value => setTextValue(value)}
          autoFocus={true}
          placeholder={'Please enter your name'}
        />
        <TextInput
          style={{ borderWidth: 1, padding: 10, borderRadius: 4 }}
          value={email}
          onChangeText={value => setEmail(value)}
          returnKeyType={'search'}
          keyboardType={'email-address'}
          autoFocus={true}
          placeholder={'Please enter your email here'}
        />
        <TextInput
          style={{ borderWidth: 1, padding: 10, borderRadius: 4 }}
          value={passwordValue}
          onChangeText={value => setPasswordValue(value)}
          keyboardType={'phone-pad'}
          secureTextEntry={true}
          autoFocus={true}
          placeholder={'Please enter your password'}
        />

        <View style={nata.footer}>
          <Text style={nata.footerTitle}>Copyright © 2026</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
