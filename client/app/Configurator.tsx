import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from 'react';
import GridConfigurator from '../components/GridConfigurator';

const Configurator = () => {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }
  async function resetScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  }
  useEffect(() => {
    changeScreenOrientation();
    return () => {
      resetScreenOrientation();
    };
  }, []);
  return (
    <View style={{ flexDirection: 'row', height: '100%' }}>
      <View
        style={{
          padding: 15,
          flexDirection: 'column',
          gap: 5,
        }}
      >
        <Text style={styles.tabItem}>Grid</Text>
        <Text style={styles.tabItem}>Layout</Text>
        <Text style={styles.tabItem}>Proporation</Text>
        <Text style={styles.tabItem}>Frame</Text>
        <Text style={styles.tabItem}>Glass</Text>
        <Text style={styles.tabItem}>Location</Text>
      </View>
      <GridConfigurator />
    </View>
  );
};

export const styles = StyleSheet.create({
  tabItem: { fontSize: 18, backgroundColor: '#ccc', padding: 10 },
});

export default Configurator;
