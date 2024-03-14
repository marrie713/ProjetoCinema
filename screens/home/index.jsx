import { Text, View, ImageBackground, Image, StyleSheet, } from "react-native";
import { estilo } from "./style.jsx";

export default function Home(){
    return(
        <View id="root">
            <View style={estilo.cabecalho}>
                <Image
                
                />
            </View>

            <View style={estilo.corpo}>
                <Text style={estilo.titulo}>Sessões</Text>

            </View>
        </View>
    )
}