import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';

import { seedWindows } from '@/data/data';
import Grid from '@/components/Grid';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import ActionBtn from '@/components/ActionBtn';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

const gridData = seedWindows[0].grid;
const GridConfigurator = () => {
  const [rows, setRows] = useState<number>(gridData.count.y);
  const [cols, setCols] = useState<number>(gridData.count.x);
  return (
    <>
      <View
        style={{
          ...styles.container,
          backgroundColor: '#f2f2f2',
        }}
      >
        <ScrollView>
          {new Array(rows).fill('').map((x, i) => {
            return (
              <View
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                  marginBottom: 2,
                }}
              >
                {new Array(cols).fill('').map((y, j) => {
                  return (
                    <View key={j} style={{ width: 50, height: 50 }}>
                      <LinearGradient
                        colors={['#bdd7f4', '#b8e1fc', '#a2caf2', '#a9d2f3']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        locations={[0.3, 0.4, 0.4, 0.6]} // Adjust the color stop positions here
                        style={{ width: 50, height: 50 }}
                      ></LinearGradient>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
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
