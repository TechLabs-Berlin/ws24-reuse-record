import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';

import { useContext, useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { WindowDataContext } from './_layout';
import Grid from '@/components/Grid';
import { windowCalc } from '@/helper/calc';

const GridProportion = () => {
  const { windowData, setWindowData } = useContext(WindowDataContext);
  const [rowsFactor, setRowsFactor] = useState<number[]>(windowData.factor.y);
  const [colsFactor, setColsFactor] = useState<number[]>(windowData.factor.x);

  useEffect(() => {
    console.log(rowsFactor);
    const newWindowData = { ...windowData };
    newWindowData.factor.y = rowsFactor;
    const newCalculatedData = windowCalc({ grid: newWindowData }).grid;
    console.log(newCalculatedData.cells);
    setWindowData(newCalculatedData);
  }, [rowsFactor]);

  return (
    <>
      <ScrollView style={{ paddingTop: 10 }}>
        <Grid {...windowData} />
      </ScrollView>
      <View style={{ position: 'absolute', right: 25, top: 0, marginTop: 20 }}>
        {new Array(windowData.count.y).fill('').map((x, i) => {
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
                style={styles.buttonPrimary}
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
                <AntDesign name="minus" size={16} color="#000" />
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
                <AntDesign name="plus" size={16} color="#000" />
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
        {new Array(windowData.count.x).fill('').map((x, i) => {
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
                <AntDesign name="plus" size={16} color="#000" />
              </Pressable>

              <TextInput
                key={i}
                style={styles.inputCol}
                defaultValue={`${colsFactor[i]}`}
                keyboardType="numeric"
              ></TextInput>
              <Pressable
                style={styles.buttonPrimary}
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
                <AntDesign name="minus" size={16} color="#000" />
              </Pressable>
            </View>
          );
        })}
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
  buttonPrimary: {
    shadowColor: '#444', // For iOS shadow
    borderColor: '#999',
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 1, // For iOS shadow
    shadowRadius: 4, // For iOS shadow
    elevation: 6, // For Android shadow
    opacity: 0.9,
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 13,
    width: 45,
    height: 45,
    textAlign: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
