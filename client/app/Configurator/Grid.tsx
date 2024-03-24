import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';

import { seedWindows } from '@/data/data';
import Grid from '@/components/Grid';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const gridData = seedWindows[0].grid;
const GridConfigurator = () => {
  const [rows, setRows] = useState<number>(gridData.count.y);
  const [cols, setCols] = useState<number>(gridData.count.x);
  return (
    <>
      <Text
        style={{
          borderWidth: 1,
          borderColor: '#444',
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 20,
          marginVertical: 5,
        }}
      >
        {cols} x {rows}
      </Text>
      <ScrollView>
        {new Array(rows).fill('').map(() => {
          return (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                marginBottom: 2,
              }}
            >
              {new Array(cols).fill('').map(() => {
                return (
                  <View style={{ width: 100, height: 100 }}>
                    <LinearGradient
                      colors={['#bdd7f4', '#b8e1fc', '#a2caf2', '#a9d2f3']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      locations={[0.3, 0.4, 0.4, 0.6]} // Adjust the color stop positions here
                      style={{ width: 100, height: 100 }}
                    ></LinearGradient>
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          right: 0,
          bottom: '50%',
          marginBottom: -30,
        }}
      >
        <Pressable
          style={styles.customButton}
          onPress={() => {
            setCols((prev) => prev + 1);
          }}
        >
          <Text style={styles.buttonLabel}>+</Text>
        </Pressable>
        <Pressable
          style={styles.customButton}
          onPress={() => {
            setCols((prev) => prev - 1 || 1);
          }}
        >
          <Text style={styles.buttonLabel}>-</Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          right: '50%',
          marginRight: -80,
        }}
      >
        <Pressable
          style={styles.customButton}
          onPress={() => {
            setRows((prev) => prev - 1 || 1);
          }}
        >
          <Text style={styles.buttonLabel}>-</Text>
        </Pressable>
        <Pressable
          style={styles.customButton}
          onPress={() => {
            setRows((prev) => prev + 1);
          }}
        >
          <Text style={styles.buttonLabel}>+</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#e2e8f1',
  },
  customButton: {
    borderRadius: 50,
    backgroundColor: 'rgb(146 159 29)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
  },
  buttonLabel: {
    color: '#fff',
  },
});

export default GridConfigurator;
