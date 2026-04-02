/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, Text, View } from 'react-native';
import nata from './styled';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={nata.header}>
          <Text style={nata.headerTitle}>Hello word</Text>
        </View>
        <ScrollView
          onScroll={() => {
            console.log('we are now scrolling');
          }}
          contentContainerStyle={{ backgroundColor: 'red', height: 600 }}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          horizontal={true}
        >
          <Image
            source={require('./assets/images/cake.png')}
            style={{ height: 500, width: 500 }}
          />
          <Image
            source={require('./assets/images/cake.png')}
            style={{ height: 500, width: 500 }}
          />
          <Image
            source={require('./assets/images/cake.png')}
            style={{ height: 500, width: 500 }}
          />
        </ScrollView>
        <View style={nata.footer}>
          <Text style={nata.footerTitle}>Copyright © 2026</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
