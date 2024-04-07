import { Text, View, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Grid from '@/components/Grid';
import { seedWindows } from '@/data/data';
import { useContext } from 'react';
import { WindowDataContext } from './_layout';
const gridData = seedWindows[0].grid;

const WindowType = () => {
  const { windowData, setWindowData } = useContext(WindowDataContext);
  console.log(windowData);
  return (
    <>
      <Grid {...windowData} />
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

export default WindowType;
