import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

function OnboardingScreen() {
  const navigation = useNavigation()
  const DotComponent = ({ selected }) => {
    return (
      <View className={`w-4 h-4 flex items-center justify-center rounded-full  ${selected ?"border border-red-400" : ""} p-2 `}>
        <View className={`w-2 h-2 ${selected ? "bg-red-400" : "bg-red-200"} rounded-full`}></View>
      </View>
    )
  }



  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() => navigation.replace("Home")}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image 
                    source={require('../assets/shopping.png')} 
                    className="w-72 h-72 object-contain"
                    />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fe6e58',
          image: <Image 
                    source={{
                      uri : "https://img.icons8.com/external-itim2101-flat-itim2101/64/external-illustration-graphic-and-design-itim2101-flat-itim2101.png"
                    }} 
                    className="w-72 h-72 object-contain"
                    />,
          title: 'The Title',
          subtitle: 'This is the subtitle that sumplements the title.',
        },
        {
          backgroundColor: '#fff',
          image: <Image 
                    source={require('../assets/complete.png')}  
                    className="w-72 h-72 object-contain"
                    />,
          title: 'Triangle',
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  )
}

export default OnboardingScreen
