import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from 'react';
import { Slot, usePathname } from 'expo-router';
import { Link } from 'expo-router';

const Configurator = () => {
  const pathname = usePathname();
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
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Grid' ? '#3498db' : '#ccc',
              }}
            >
              Grid
            </Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Layout" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Layout' ? '#3498db' : '#ccc',
              }}
            >
              Layout
            </Text>
          </Pressable>
        </Link>

        <Link href="/Configurator/Type" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Type' ? '#3498db' : '#ccc',
              }}
            >
              Type
            </Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Size" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Size' ? '#3498db' : '#ccc',
              }}
            >
              Size
            </Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Proportion" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Proportion' ? '#3498db' : '#ccc',
              }}
            >
              Proporation
            </Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Frame" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Frame' ? '#3498db' : '#ccc',
              }}
            >
              Frame
            </Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Glass" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Glass' ? '#3498db' : '#ccc',
              }}
            >
              Glass
            </Text>
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
