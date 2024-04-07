import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Pressable,
} from 'react-native';

import { seedWindows } from '@/data/data';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
const gridData = seedWindows[0].grid;

const rows = gridData.count.y;
const cols = gridData.count.x;
const GridProportion = () => {
  const [rowsFactor, setRowsFactor] = useState<number[]>(gridData.factor.y);
  const [colsFactor, setColsFactor] = useState<number[]>(gridData.factor.x);
  return (
    <>
      <ScrollView style={{ paddingTop: 10 }}>
        <View
          style={{
            backgroundColor: '#aaa',
            padding: 10,
          }}
        >
          {new Array(rows).fill('').map((y, j) => {
            return (
              <View
                key={j}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                  marginBottom: 2,
                }}
              >
                {new Array(cols).fill('').map((x, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        width: 50 * colsFactor[i],
                        height: 50 * rowsFactor[j],
                      }}
                    >
                      <LinearGradient
                        colors={['#bdd7f4', '#b8e1fc', '#a2caf2', '#a9d2f3']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        locations={[0.3, 0.4, 0.4, 0.6]} // Adjust the color stop positions here
                        style={{
                          width: 50 * colsFactor[i],
                          height: 50 * rowsFactor[j],
                        }}
                      ></LinearGradient>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', right: 25, top: 0, marginTop: 20 }}>
        {new Array(rows).fill('').map((x, i) => {
          return (
            <View
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                height: 50 * rowsFactor[i],
              }}
            >
              <Pressable
                style={styles.buttonSecondary}
                onPress={() => {
                  setRowsFactor((prev) => {
                    const newFactor = [...prev];
                    if (newFactor[i] > 1) {
                      newFactor[i] -= 1;
                    }

                    return newFactor;
                  });
                }}
              >
                <AntDesign name="minus" size={16} color="#fff" />
              </Pressable>
              <TextInput
                style={styles.inputRow}
                defaultValue={`${rowsFactor[i]}`}
                keyboardType="numeric"
              />
              <Pressable
                style={styles.buttonPrimary}
                onPress={() => {
                  setRowsFactor((prev) => {
                    const newFactor = [...prev];
                    newFactor[i] += 1;
                    return newFactor;
                  });
                }}
              >
                <AntDesign name="plus" size={16} color="#fff" />
              </Pressable>
            </View>
          );
        })}
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 30,
          width: '100%',
          left: 0,
        }}
      >
        {new Array(cols).fill('').map((x, i) => {
          return (
            <View
              style={{
                width: 20 + 50 * colsFactor[i],
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Pressable
                style={styles.buttonPrimary}
                onPress={() => {
                  setColsFactor((prev) => {
                    const newFactor = [...prev];
                    newFactor[i] += 1;
                    return newFactor;
                  });
                }}
              >
                <AntDesign name="plus" size={16} color="#fff" />
              </Pressable>

              <TextInput
                key={i}
                style={styles.inputCol}
                defaultValue={`${colsFactor[i]}`}
                keyboardType="numeric"
              ></TextInput>
              <Pressable
                style={styles.buttonSecondary}
                onPress={() => {
                  setColsFactor((prev) => {
                    const newFactor = [...prev];
                    if (newFactor[i] > 1) {
                      newFactor[i] -= 1;
                    }
                    return newFactor;
                  });
                }}
              >
                <AntDesign name="minus" size={16} color="#fff" />
              </Pressable>
            </View>
          );
        })}
      </View>
      <View
        style={{
          position: 'absolute',
          right: 50,
          bottom: '50%',
          marginBottom: -30,
        }}
      ></View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 18,
          right: '50%',
          marginRight: -70,
        }}
      ></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimary: {
    shadowColor: '#555', // For iOS shadow
    borderColor: '#999',
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 1, // For iOS shadow
    shadowRadius: 4, // For iOS shadow
    elevation: 6, // For Android shadow
    opacity: 0.9,
    backgroundColor: '#333',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  buttonSecondary: {
    shadowColor: '#555', // For iOS shadow
    borderColor: '#999',
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 1, // For iOS shadow
    shadowRadius: 4, // For iOS shadow
    elevation: 6, // For Android shadow
    opacity: 0.9,
    backgroundColor: '#666',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  laelPrimary: {
    color: '#fff',
  },
  inputCol: {
    fontSize: 16,
    marginBottom: 2,
    marginTop: 2,
  },
  inputRow: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default GridProportion;
