import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Modal,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Navbar from './navbar';
import logo1 from '../assets/logo1.jpg';
import image1 from '../assets/slider1.jpg';
import image2 from '../assets/slider2.jpg';
import image3 from '../assets/slider3.jpg';
import swiggy from '../assets/swiggy.png';
import zomato from '../assets/zomato.png';
import zomatoBanner from '../assets/zomatoBanner.jpg';
import swiggyBanner from '../assets/swiggyBanner.jpg';
import HomeCards from './homeCards';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from 'react-native-check-box';
import RadioButtonRN from 'radio-buttons-react-native';
import {categories} from '../../dummy/categories';
import BannerCard from './bannerCard';
function OfferDealsFlyers() {
  const [filterOption, setfilterOption] = useState(false);
  const [sortOption, setsortOption] = useState(false);
  const [sortValue, setsortValue] = useState('');

  const [filterItems, setfilterItems] = useState([]);
  const handleChange = name => {
    var arr = filterItems;
    if (filterItems.includes(name)) {
      setfilterItems(arr.filter(item => item !== name));
    } else {
      setfilterItems([...filterItems, name], console.log(filterItems));
    }
  };
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 65}}>
      <ScrollView style={styles.body}>
        <View style={styles.optionConatiner}>
          <Text
            style={{
              fontFamily: 'Signika-Medium',
              fontSize: 16,
              color: '#555',
              marginRight: 'auto',
            }}>
            Showing 114 results
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setfilterOption(true)}>
            <View style={{...styles.option, marginRight: 10}}>
              <Feather name="filter" size={14} color="#333" />
              <Text style={styles.optionText}>Filter</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setsortOption(true)}>
            <View style={styles.option}>
              <MaterialCommunityIcons name="sort" size={14} color="#333" />
              <Text style={styles.optionText}>Sort</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsConatiner}>
          <BannerCard
            name="Swiggy"
            logo={swiggy}
            banner={swiggyBanner}
            message="Swiggy offering the Summer discount of the year!"
            appealingText="Friday Sales"
          />
          <BannerCard
            name="Zomato"
            logo={zomato}
            banner={zomatoBanner}
            message="Zomato offering the Summer discount of the year!"
            appealingText="Sales Mania"
          />
          <BannerCard
            name="Luxary"
            logo={logo1}
            banner={image3}
            message="Luxuary offering the best discount of the year!"
            appealingText="Bumper Sales"
          />
          <BannerCard
            name="Swiggy"
            logo={swiggy}
            banner={swiggyBanner}
            message="Swiggy offering the Summer discount of the year!"
            appealingText="Friday Sales"
          />
          <BannerCard
            name="Zomato"
            logo={zomato}
            banner={zomatoBanner}
            message="Zomato offering the Summer discount of the year!"
            appealingText="Sales Mania"
          />
          <BannerCard
            name="Luxary"
            logo={logo1}
            banner={image3}
            message="Luxuary offering the best discount of the year!"
            appealingText="Bumper Sales"
          />
        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={sortOption}
        onRequestClose={() => {
          setsortOption(false);
        }}>
        <View style={styles.modalWrapper}>
          <View style={{...styles.modal, padding: 15}}>
            <View
              style={{
                ...styles.optionConatiner,
                marginVertical: 0,
                marginBottom: 30,
                paddingHorizontal: 0,
              }}>
              <Text style={styles.heading}>Sort By:</Text>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  setsortOption(false);
                }}>
                <Feather name="x" size={25} color="#333" />
              </TouchableOpacity>
            </View>
            <RadioButtonRN
              data={[{label: 'Newest First'}, {label: 'Oldest First'}]}
              box={false}
              circleSize={10}
              activeColor="#ff7420"
              textStyle={styles.checkboxText}
              boxStyle={{marginVertical: 10, height: 20}}
              selectedBtn={e => console.log(e)}
              // icon={<Feather name="circle" size={25} color="#2c9dd1" />}
            />
            <View
              style={{
                marginTop: 5,
                marginLeft: 'auto',
                borderRadius: 5,
              }}>
              <Pressable
                style={styles.button}
                android_ripple={{color: 'rgba(0,0,0,.1)', borderless: true}}>
                <Text style={styles.buttonText}>APPLY</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/* filterModal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={filterOption}
        onRequestClose={() => {
          setfilterOption(false);
        }}>
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <View
              style={{
                ...styles.optionConatiner,
                paddingHorizontal: 15,
              }}>
              <Text style={styles.heading}>Filter By Category</Text>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  setfilterOption(false);
                  setfilterItems([]);
                }}>
                <Feather name="x" size={25} color="#333" />
              </TouchableOpacity>
            </View>
            <Text style={{...styles.modalText, padding: 15, paddingTop: 0}}>
              Categories:
            </Text>
            <ScrollView
              style={styles.categoriesConatiner}
              contentContainerStyle={{alignItems: 'flex-start'}}>
              {categories.map((item, id) => (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => handleChange(item.text)}
                  key={id}
                  style={{
                    ...styles.checkbox,
                    // backgroundColor:
                    //   id % 2 === 0
                    //     ? 'rgba(178, 212, 221, .1)'
                    //     : 'rgba(0,0,0,.03)',
                  }}>
                  <CheckBox
                    onClick={() => handleChange(item.text)}
                    isChecked={filterItems.includes(item.text)}
                    checkedCheckBoxColor="#555"
                  />
                  <Image source={item.image} style={styles.checkboxImage} />
                  <Text style={styles.checkboxText}>{item.text}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View
              style={{
                marginRight: 20,
                marginVertical: 15,
                marginLeft: 'auto',
                borderRadius: 5,
              }}>
              <Pressable
                android_ripple={{color: 'rgba(0,0,0,.1)', borderless: true}}
                style={{...styles.button}}>
                <Text style={styles.buttonText}>APPLY</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fafafa',
    height: '100%',
    paddingHorizontal: 5,
  },
  button: {
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ff7420',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    letterSpacing: 1,
  },
  heading: {
    color: '#333',
    fontSize: 25,
    letterSpacing: 1,
    fontWeight: 600,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
  cardsConatiner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // marginVertical: 20,
  },
  optionConatiner: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 12,
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  option: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
    padding: 10,
    paddingVertical: 5,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#333',
    marginLeft: 5,
    fontSize: 14,
    letterSpacing: 0.8,
  },
  modalWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    borderColor: 'rgba(0,0,0,.02)',
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    width: '95%',
    maxHeight: '70%',
    // paddingVertical: 15,
  },
  modalText: {
    color: '#333',
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 500,
  },
  checkbox: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  checkboxText: {
    color: '#333',
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: 500,
  },
  checkboxImage: {
    marginHorizontal: 15,
    width: 25,
    height: 25,
  },
  categoriesConatiner: {
    display: 'flex',
    flexDirection: 'column',
  },
});
export default OfferDealsFlyers;
