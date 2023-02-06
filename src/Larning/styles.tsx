import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../Theme';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.neutras.darkBlue, flex: 1, 
        paddingHorizontal: 24, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    componet: {
        backgroundColor: theme.neutras.drayishBlue, 
        padding: 32, 
        paddingBottom: 64,
        alignItems: 'center',
        borderRadius: 8
    },

    adviceText: {
        fontSize: 12,
        letterSpacing: 1,
        fontFamily: theme.text,
        color: theme.primerias.neonGreen,
        marginBottom: 16
    },

    text: {
        fontSize: 28,
        textAlign: 'center',
        fontFamily: theme.text,
        color: theme.primerias.can,
        marginBottom: 16
    },

    divider: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        width: '100%'
    },

    button: {
        padding: 16, 
        backgroundColor: theme.primerias.neonGreen, 
        borderRadius: 50, 
        position: 'absolute', 
        top: "135%"
    },
})