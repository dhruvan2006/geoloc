import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
const CustomButton = ({title,handlePress,isLoading,image = null}) => {

  return (
    <TouchableOpacity className="bg-white w-full mt-7 py-4 rounded-md items-center" onPress={handlePress}>
      { image && 
        <Image
        source={image}
        className="h-12"
        resizeMode="contain"
        />
      }
        <Text className="text-primary font-psemibold text-sm">
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})