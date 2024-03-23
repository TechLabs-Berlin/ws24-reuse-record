import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { seedWindows } from '@/data/data';
import Grid from '@/components/Grid';

const GridConfigurator = () => {
  const gridData = seedWindows[0].grid;
  return (
    <>
      <Grid {...gridData} />
      <View
        style={{
          position: 'absolute',
          right: 0,
          bottom: '50%',
          marginBottom: -30,
        }}
      >
        <Pressable style={styles.customButton}>
          <Text style={styles.buttonLabel}>+</Text>
        </Pressable>
        <Pressable style={styles.customButton}>
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
        <Pressable style={styles.customButton}>
          <Text style={styles.buttonLabel}>-</Text>
        </Pressable>
        <Pressable style={styles.customButton}>
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
