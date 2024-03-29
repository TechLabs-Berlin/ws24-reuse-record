import { ScrollView, TextInput, View } from 'react-native';
import CatalogItem from '@/components/CatalogItem';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

const CatalogList = () => {
  return (
    <ScrollView>
      <View>
        <TextInput
          style={{
            borderColor: '#ddd',
            borderWidth: 1,
            padding: 10,
            paddingLeft: 20,
            borderRadius: 30,
            marginTop: 8,
            marginBottom: 8,
          }}
          placeholder="search"
        />
        <CatalogItem
          title="3X2"
          img={require('../assets/images/WindowPreview.png')}
          size="100cm x 200cm"
          material={'frame material'}
          feature={'feature'}
        />
        <CatalogItem
          title="Hello"
          img={require('../assets/images/WindowPreview.png')}
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />
        <CatalogItem
          title="Hello"
          img={require('../assets/images/WindowPreview.png')}
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />

        <CatalogItem
          title="Hello"
          img={require('../assets/images/WindowPreview.png')}
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />
        <CatalogItem
          title="Hello"
          img={require('../assets/images/WindowPreview.png')}
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />
        <CatalogItem
          title="Hello"
          img={require('../assets/images/WindowPreview.png')}
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />

        <CatalogItem
          title="Hello"
          img={require('../assets/images/WindowPreview.png')}
          size="Frame size"
          material={'frame material'}
          feature={'feature'}
        />
      </View>
    </ScrollView>
  );
};

export default CatalogList;
