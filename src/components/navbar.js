import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/FontAwesome5';

function Navbar({route, navigation}) {
  return (
    <View style={styles.navbar}>
      <View style={styles.header}>
        <View style={styles.navName}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Octicons
              name="three-bars"
              color="#333"
              size={20}
              style={{marginRight: 20}}
            />
          </Pressable>
          <Text
            style={{
              color: '#333',
              fontSize: 22,
              fontWeight: '500',
              verticalAlign: 'middle',
            }}>
            {route?.name}
          </Text>
        </View>
        <View style={styles.header}>
          {/* <Ionicons
            style={{marginRight: 20}}
            name="ios-search"
            size={23}
            color="#333"
          /> */}
          {route.params?.no_icons || route.params?.no_search ? null : (
            <Ionicons
              name="search"
              style={{marginRight: 20}}
              size={22}
              color="#333"
            />
          )}
          {/* <Material name="storefront-outline" size={23} color="#333" /> */}
          {route.params?.no_icons || route.params?.no_notification ? null : (
            <Fontisto name="bell" size={21} color="#333" />
          )}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#fafafa',
    // backgroundColor: 'orange',
    width: '100%',
    paddingHorizontal: 23,
    paddingTop: 20,
    paddingBottom: 15,
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8,
  },
  navName: {
    flexDirection: 'row',
    alignItems: 'baseline',
    // backgroundColor: 'red',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
});

export default Navbar;
