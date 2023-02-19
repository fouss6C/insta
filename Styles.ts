import { StyleSheet } from "react-native"
import colors from "./src/theme/colors"
import font from "./src/theme/font"

const Styles = StyleSheet.create({
    root : {
        flex : 1, 
        top : 50 , 
        alignItems : 'center',
        justifyContent : 'center'
    },
    text : {
        color : colors.black,
        fontSize : font.size.lg,
    }
})
export default Styles