import { Text, View,StyleSheet, Pressable } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

const Configurator = () =>{
 
    return(
      <View style={{display:"flex", flexDirection:"column"}}>
           <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }} >
        <LinearGradient
            colors={['#bdd7f4', '#b8e1fc','#a2caf2', '#a9d2f3']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.3, 0.3]} // Adjust the color stop positions here
            style={styles.gradient}
      />
      <View style={{display:"flex", flexDirection:"column", gap:10}}>
      <Pressable style={styles.customButton }>
        <Text style={styles.buttonLabel}>+</Text>
        </Pressable>
        <Pressable style={styles.customButton }>
        <Text style={styles.buttonLabel}>-</Text>
        </Pressable>  
      </View>
     
     </View>
      </View>
  
    )
}

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
    customButton:{
      borderRadius: 50,
        backgroundColor:"rgb(146 159 29)",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
    },
    buttonLabel:{
       color:"#fff"
    }
  });

export default Configurator;