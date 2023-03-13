import { React, useEffect } from "react";
import { TouchableOpacity, Image, Text, View, ScrollView } from "react-native";
import { StarIcon, MapPinIcon,ArrowLeftIcon } from "react-native-heroicons/solid";

function ResturantInfo({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const { imgurl } = route.params;

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: imgurl,
          }}
          className="h-56 w-full bg-gray-300 p-4"
        ></Image>
        <TouchableOpacity 
            onPress={()=>navigation.goBack()}
            className="absolute top-14 left-5 bg-gray-100 rounded-full">
            <ArrowLeftIcon size="20" color="#00CCDD"></ArrowLeftIcon>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default ResturantInfo;
