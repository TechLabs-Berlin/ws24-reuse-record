import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { createContext, useContext, useEffect, useState } from 'react';
import { Slot, usePathname, useRouter } from 'expo-router';
import { Link } from 'expo-router';
import ActionBtn from '@/components/ActionBtn';
import { Grid } from '@/data/data';
import { windowCalc } from '@/helper/calc';

const navItems = ['Size', 'Grid', 'Type', 'Proportion', 'Frame', 'Glass'];

const defaultWindowData = {
  grid: {
    width: 200,
    height: 200,
    factor: { x: [1], y: [1] },
    count: { x: 1, y: 1 },
  },
};
export const WindowDataContext = createContext<{
  windowData: Grid;
  setWindowData: React.Dispatch<any>;
}>({
  windowData: windowCalc(defaultWindowData).grid,
  setWindowData: () => {},
});

const Configurator = () => {
  const [windowData, setWindowData] = useState<Grid>(
    windowCalc(defaultWindowData).grid
  );
  const router = useRouter();
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
  const goToNextPage = () => {
    const currentPage = pathname.replace('/Configurator/', '');
    const currentPageNumber = navItems.indexOf(currentPage);
    if (currentPageNumber === navItems.length - 1) {
      router.replace(`/CatalogList`);
    } else {
      const nextPage = navItems[currentPageNumber + 1];
      // @ts-ignore
      router.push(`/Configurator/${nextPage}`);
    }
  };
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
          justifyContent: 'center',
        }}
      >
        {navItems.map((item) => {
          return (
            <Pressable
              key={item}
              style={{
                ...styles.tabItem,
                borderLeftColor:
                  pathname === `/Configurator/${item}`
                    ? '#74b8ed'
                    : 'transparent',
                backgroundColor:
                  pathname === `/Configurator/${item}` ? '#fff' : 'transparent',
              }}
            >
              <Text
                style={{
                  ...styles.tabText,
                  color:
                    pathname === `/Configurator/${item}` ? 'black' : '#999',
                  fontWeight:
                    pathname === `/Configurator/${item}` ? 'bold' : 'normal',
                }}
              >
                {item}
              </Text>
            </Pressable>
          );
        })}
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
        <WindowDataContext.Provider value={{ windowData, setWindowData }}>
          <Slot />
        </WindowDataContext.Provider>
      </View>
      <ActionBtn onNext={goToNextPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    display: 'flex',
    padding: 10,
    gap: 10,
    borderLeftColor: '#fff',
    borderLeftWidth: 5,
  },
  tabText: {
    color: '#777',
  },
});

export default Configurator;
