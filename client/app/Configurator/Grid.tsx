import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';

import { seedWindows } from '@/data/data';
import Grid from '@/components/Grid';
import { useContext, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import ActionBtn from '@/components/ActionBtn';
import { WindowDataContext } from './_layout';
import { windowCalc } from '@/helper/calc';
import CatalogList from '../CatalogList';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

const GridConfigurator = () => {
  const { windowData, setWindowData } = useContext(WindowDataContext);
  const [rows, setRows] = useState<number>(windowData?.count?.y || 1);
  const [cols, setCols] = useState<number>(windowData?.count?.x || 1);

  useEffect(() => {
    const newGridData = { ...windowData };

    if (newGridData?.count?.y) {
      newGridData.count.y = rows;
      newGridData.count.x = cols;
      const newCalcGrid = windowCalc({ grid: newGridData }).grid;
      setWindowData(newCalcGrid);
    }
  }, [rows, cols]);

  return (
    <>
      <View
        style={{
          ...styles.container,
          backgroundColor: '#f2f2f2',
        }}
      >
        <Grid {...windowData} />
      </View>
      <View
        style={{
          position: 'absolute',
          right: 50,
          bottom: '50%',
          marginBottom: -70,
        }}
      >
        <Pressable
          style={{
            ...styles.customButton,
            backgroundColor: '#007bff',
          }}
          onPress={() => {
            setCols((prev) => (prev < 3 ? prev + 1 : prev));
          }}
        >
          <Text style={styles.buttonLabel}>+</Text>
        </Pressable>
        <Pressable
          style={{
            ...styles.customButton,
            backgroundColor: '#555555',
          }}
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
          bottom: 18,
          right: '50%',
          marginRight: -70,
        }}
      >
        <Pressable
          style={{ ...styles.customButton, backgroundColor: '#555555' }}
          onPress={() => {
            setRows((prev) => prev - 1 || 1);
          }}
        >
          <Text style={styles.buttonLabel}>-</Text>
        </Pressable>
        <Pressable
          style={{
            ...styles.customButton,
            backgroundColor: '#007bff',
          }}
          onPress={() => {
            setRows((prev) => (prev < 3 ? prev + 1 : prev));
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
    width: '70%',
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 32,
    elevation: 3,
  },
  buttonLabel: {
    color: '#fff',
  },
});

export default GridConfigurator;
