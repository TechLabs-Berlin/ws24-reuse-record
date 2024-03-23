import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from 'react';
import { Slot } from 'expo-router';
import { Link } from 'expo-router';

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
    <View
      style={{
        flexDirection: 'row',
        height: '100%',
        width: '100%',
      }}
    >
      <View
        style={{
          padding: 15,
          flexDirection: 'column',
          gap: 5,
        }}
      >
        <Link href="/Configurator/Grid" asChild>
          <Pressable>
            <Text style={styles.tabItem}>Grid</Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Layout" asChild>
          <Pressable>
            <Text style={styles.tabItem}>Layout</Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Size" asChild>
          <Pressable>
            <Text style={styles.tabItem}>Size</Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Proporation" asChild>
          <Pressable>
            <Text style={styles.tabItem}>Proporation</Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Frame" asChild>
          <Pressable>
            <Text style={styles.tabItem}>Frame</Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Glass" asChild>
          <Pressable>
            <Text style={styles.tabItem}>Glass</Text>
          </Pressable>
        </Link>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Slot />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  tabItem: { fontSize: 18, backgroundColor: '#ccc', padding: 10 },
});

export default Configurator;
