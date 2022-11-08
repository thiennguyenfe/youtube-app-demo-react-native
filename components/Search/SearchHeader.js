import {useNavigation} from '@react-navigation/native';
// import axios from 'axios';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import ArrowLeftIcon from '../../assets/icons/ArrowLeft';
import VoiceIcon from '../../assets/icons/Voice';

const SearchHeader = props => {
  const navigation = useNavigation();
  const [value, setValue] = useState(props.value);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(searchResult);

  // const handleSearchYoutube = async () => {
  //   let res = await axios.get(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyCW-mcjtshmtMlpLuFjWzarR-auzodar7I`,
  //   );
  // };

  const handleSearchYoutube = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyB_CxzJp0WG9pI2Ojt1jV12BQDkyAABrQw`,
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setSearchResult(data.items);
        console.log('data', data.items);
      });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowLeftIcon />
      </Pressable>
      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        placeholder="Search on Youtube"
        style={styles.searchInput}
        autoFocus
      />
      <Pressable
        style={styles.searchVoice}
        onPress={() => handleSearchYoutube()}>
        <VoiceIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#ECECEC',
    marginHorizontal: 12,
    paddingVertical: 4,
  },
  searchVoice: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#ECECEC',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default SearchHeader;