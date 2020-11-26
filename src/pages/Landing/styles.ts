import { StyleSheet } from 'react-native'
import {colors} from '../../styles/global'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color.backgoundBlack,
        padding: 40,
      },

    containerTitle:{

        height: 200,
        justifyContent: 'center',
        padding: 20,
        marginBottom: 40,
    },
    title: {
        color: '#fff',
        fontSize:64,
        maxWidth: 200
    },

    containerImage:{

        height: 200,
        justifyContent: 'center',
        alignItems:'flex-end',
        padding: 20,
        marginBottom: 40,
    },

    containerBottons:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        width: "80%",
        height: 100,
        borderRadius: 8,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottonPrimary:{
        backgroundColor: colors.color.backgroundPurple,
        marginBottom: 20,
    },
    bottonSecondary:{
        
    },
    buttonText:{
        fontSize:24,

    },
    textPrimary:{
        color: '#fff',
    },
    textCadastro:{
        fontSize:18,
       textDecorationLine: "underline",
    }
})

export default styles;