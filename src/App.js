import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { 
  NavigationContainer } from '@react-navigation/native';

const App= () => {

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content"></StatusBar>
      <SafeAreaView>
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
          <Text>Aplikasi Masih Berjalan</Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
