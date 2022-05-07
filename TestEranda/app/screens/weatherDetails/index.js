import React, {useEffect, useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {ItemSeparatorView} from '../../components/weatherListItem';
import {useDispatch} from 'react-redux';
import {getWeatherData} from '../../redux/actions/weatherActions';

const WeatherDetails = props => {
  const [dataSet, setDataSet] = useState({});
  const dispatch = useDispatch();

  const loadWeatherData = async () => {
    dispatch(
      getWeatherData({
        data: {},
        callBack: data => {
          if (data && data.list && data.list.length > 0) {
            console.log(data)
            setDataSet(data.list);
          }
        },
      }),
    );
  };

  useEffect(() => {
    loadWeatherData();
  }, []);

  const ItemView = ({item}) => <ItemSeparatorView item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSet}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
        enableEmptySections={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WeatherDetails;
