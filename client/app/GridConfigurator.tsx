import { Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect } from 'react';
import Configurator from './Configurator';

const GridCongigurator = () => {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  }
  async function resetScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }
  useEffect(()=>{
    changeScreenOrientation()
    return(()=>{
      resetScreenOrientation()
    })
  }, [])
  return (
  <View style={{flexDirection:'row'}}>
 <View style={{padding:15, flexDirection:'column', gap:15,  }}>
      <Text style={{fontSize:18}}>Grid</Text>  
      <Text style={{fontSize:18}}>Layout</Text>       
      <Text style={{fontSize:18}}>Proporation</Text>
      <Text style={{fontSize:18}}>Frame</Text>
      <Text style={{fontSize:18}}>Glass</Text>
      <Text style={{fontSize:18}}>Location</Text>
    </View>
    <Configurator/>
    </View>
   
  );
};

export default GridCongigurator;
