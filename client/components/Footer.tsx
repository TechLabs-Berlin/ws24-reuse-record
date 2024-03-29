import { Tabs } from 'expo-router';
import { View } from 'react-native';
const item = [{ name: 'Info', href: '#' }];

const Footer = () => {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the dynamic route.
        name="[user]"
        options={{
          // Ensure the tab always links to the same href.
          href: '/evanbacon',
          // OR you can use the href object:
          href: {
            pathname: '/[user]',
            params: {
              user: 'evanbacon',
            },
          },
        }}
      />
    </Tabs>
  );
};
export default Footer;
