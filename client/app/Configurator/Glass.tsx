import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Grid = () => {
  return (
    <View style={{ display: 'flex', gap: 20, flexDirection: 'row' }}>
      <View style={styles.glass}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.glass}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.glass}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glass: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#999',
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});

export default Grid;
