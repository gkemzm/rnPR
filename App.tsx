/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Hello word</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
