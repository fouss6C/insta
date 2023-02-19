import { View, Text } from 'react-native'
import styles from './Styles'
import AntDesign from "react-native-vector-icons/AntDesign"

const Instagram  = () => {
  return (
    <View 
      style = {styles.root}>
      <Text 
        style = {styles.text}
      > this is my first React Tsx app 
      </Text>
      <AntDesign name = "forward"  size = {30} /> 
    </View>
  )
}

export default Instagram