import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect } from 'react';
import { Slot, usePathname, useRouter } from 'expo-router';
import { Link } from 'expo-router';
import ActionBtn from '@/components/ActionBtn';

const navItems = [
  'Grid',
  'Layout',
  'Type',
  'Size',
  'Proportion',
  'Frame',
  'Glass',
];

const Configurator = () => {
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
    const nextPage = navItems[currentPageNumber + 1];
    console.log(nextPage);
    router.push(`/Configurator/${nextPage}`);
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
        }}
      >
        <Link href="/Configurator/Grid" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Grid' ? '#74b8eb' : '#ccc',
              }}
            >
              Grid
            </Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Layout" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Layout' ? '#74b8eb' : '#ccc',
              }}
            >
              Layout
            </Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Type" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Type' ? '#74b8eb' : '#ccc',
              }}
            >
              Type
            </Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Size" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Size' ? '#74b8eb' : '#ccc',
              }}
            >
              Size
            </Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Proportion" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Proportion' ? '#74b8eb' : '#ccc',
              }}
            >
              Proporation
            </Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Frame" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Frame' ? '#74b8eb' : '#ccc',
              }}
            >
              Frame
            </Text>
          </Pressable>
        </Link>
        <Link href="/Configurator/Glass" asChild>
          <Pressable>
            <Text
              style={{
                ...styles.tabItem,
                backgroundColor:
                  pathname === '/Configurator/Glass' ? '#74b8eb' : '#ccc',
              }}
            >
              Glass
            </Text>
          </Pressable>
        </Link>
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
        <Slot />
      </View>
      <ActionBtn onNext={goToNextPage} />
    </View>
  );
};

export const styles = StyleSheet.create({
  tabItem: { fontSize: 18, backgroundColor: '#ccc', padding: 10 },
});

export default Configurator;
