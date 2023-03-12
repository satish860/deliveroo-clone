import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";

function CategoryCard({img,text}) {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image
          className="h-20 w-20 rounded"
          source={{
            uri: img,
          }}
        />
        <Text className="absolute bottom-1 left-1 text-white font-bold">
          {text}
        </Text>
      </TouchableOpacity>
  )
}

export default CategoryCard