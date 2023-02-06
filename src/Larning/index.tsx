import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native'
import { SvgUri, SvgXml, Svg, Path } from 'react-native-svg';
import { theme } from '../Theme';
import { styles } from './styles';

const data = [
    {
        id: 0,
        frase: "A pessoa mais perigosa é aquela que ouve, pensa e observa."
    },
    {
        id: 1,
        frase: "Demorei mas aprendi. Nem todo mundo é oque diz ser."
    },
    {
        id: 2,
        frase: "Treine sua mente até ela entender, que você só sofre se você deixar."
    },
    {
        id: 3,
        frase: "Eu não chamo nenhuma pessoa de amigo, de amor ou de filho da puta sem que ela seja."
    },
    {
        id: 4,
        frase: "Niguem tem que achar nada. Eu estou fazendo por mim."
    },
    {
        id: 5,
        frase: "Experiência é o nome que dou aos meus erros."
    },
    {
        id: 6,
        frase: "Por trás de toda frieza existe alguém que já se importou demais."
    },
    {
        id: 7,
        frase: "Estava sozinho na minha pior fase, na melhor, quero estar da mesma forma."
    },
    {
        id: 8,
        frase: "Pare de tratar as pessoas como se devesse algo a elas."
    },
    {
        id: 9,
        frase: "Você sempre será o vilão quando deixar de agradar alguém"
    },
    {
        id: 0,
        frase: "Não espere de mim mais do que eu recebo de você."
    },
]

const img1 = require('../assets/icon-dice.svg');
const img2 = require('../assets/pattern-divider-desktop.svg');
const img3 = require('../assets/pattern-divider-mobile.svg');

export default function Larning() {

    const [index, setIndex] = useState(0);
    //Math.floor(Math.random() * (data.length - 0 + 1)) + 0

    function randomFrase() {
        setIndex(Math.floor(Math.random() * ((data.length-1) - 0 + 1)) + 0)
    }

    return(
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.componet}>
                <Text style={styles.adviceText}>ADVICE #{data[index].id}</Text>
                <Text style={styles.text}>"{data[index].frase}"</Text>
                <View style={styles.divider}>
                    <View style={{ backgroundColor: theme.primerias.can, height: 1, width: 120 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ height: 15, width: 5, borderRadius: 2, backgroundColor: theme.primerias.can}} />
                        <View style={{ height: 15, width: 5,  marginLeft: 4, borderRadius: 2, backgroundColor: theme.primerias.can}} />
                    </View>
                    <View style={{ backgroundColor: theme.primerias.can, height: 1, width: 120 }} />
                </View>
                <Pressable onPress={() => randomFrase()} style={styles.button}>
                    <Svg width="24" height="24">
                        <Path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" 
                        fill="#202733"
                        />
                    </Svg>
                </Pressable>
            </View>
        </View>
    );
}