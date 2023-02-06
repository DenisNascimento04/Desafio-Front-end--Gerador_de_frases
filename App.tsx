import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { Manrope_700Bold } from '@expo-google-fonts/manrope';
import Larning from './src/Larning';
import { theme } from './src/Theme';

export default function App() {

  let [loadingFonts] = useFonts({
    Manrope_700Bold
  })

  if (!loadingFonts) {
    return (
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: theme.neutras.darkGrayishBlue 
      }}>
        <ActivityIndicator />
      </View>
    );
  }else{
    return (
      <Larning />
    );
  }

}
