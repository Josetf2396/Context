import React, {useContext} from 'react'
import { ThemeContext } from '../App'
import { Text, View } from "react-native";


export default function FunctionContextComponent() {
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: 30,
        margin: 30
    }
    return (
        <View style={themeStyles}>
            <Text>Jose</Text> 
        </View>
    )
}