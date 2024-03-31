import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

import { seedWindows } from '@/data/data';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
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
      <View style={{ position: 'absolute', right: 100, top: 0, marginTop: 20 }}>
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
              <Button
                title="-"
                onPress={() => {
                  setRowsFactor((prev) => {
                    const newFactor = [...prev];
                    newFactor[i] -= 1;
                    return newFactor;
                  });
                }}
              />
              <TextInput
                style={styles.input}
                defaultValue={`${rowsFactor[i]}`}
                keyboardType="numeric"
              />
              <Button
                title="+"
                onPress={() => {
                  setRowsFactor((prev) => {
                    const newFactor = [...prev];
                    newFactor[i] += 1;
                    return newFactor;
                  });
                }}
              />
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
              <Button
                title="+"
                onPress={() => {
                  setColsFactor((prev) => {
                    const newFactor = [...prev];
                    newFactor[i] += 1;
                    return newFactor;
                  });
                }}
              />

              <TextInput
                key={i}
                style={styles.input}
                defaultValue={`${colsFactor[i]}`}
                keyboardType="numeric"
              ></TextInput>
              <Button
                title="-"
                onPress={() => {
                  setColsFactor((prev) => {
                    const newFactor = [...prev];
                    newFactor[i] -= 1;
                    return newFactor;
                  });
                }}
              />
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
  input: {
    width: 60,
    borderRadius: 50,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
});

export default GridProportion;
