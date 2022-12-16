import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, Image } from "react-native";
import ResultImc from "./ResultImc";
import { Button, TextInput } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';

export default function Form() {
    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState(null)
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const [resultMaginTop, setResultMaginTop] = useState('200%')

    function animateResultBox(from, to) {
        const speed = 10;
        var value = from;
        const lerpInterval = setInterval(() => {
            if (from > to) {
                if (value <= to) clearInterval(lerpInterval);
                setResultMaginTop(value + '%')
                value -= speed
            } else {
                if (value >= to) clearInterval(lerpInterval);
                setResultMaginTop(value + '%')
                value += speed
            }
        }, 1);
    }

    function validationImc() {
        const imc = (peso / (altura * altura)).toFixed(2);
        setImc(imc);
        animateResultBox(200, 0);

        if (peso != null && altura != null) {
            if (imc <= 18.5) {
                setMessageImc("Abaixo do peso!")
                setAltura('')
                setPeso('')
            } else if (imc > 18.5 && imc <= 25) {
                setMessageImc("Peso normal!")
                setAltura('')
                setPeso('')
            } else if (imc > 25 && imc <= 30) {
                setMessageImc("Sobrepeso")
                setAltura('')
                setPeso('')
            } else if (imc > 30 && imc <= 35) {
                setMessageImc("Obesidade grau I")
                setAltura('')
                setPeso('')
            } else if (imc > 35 && imc <= 40) {
                setMessageImc("Obesidade grau II")
                setAltura('')
                setPeso('')
            } else {
                setMessageImc("Obesidade grau III")
                setAltura('')
                setPeso('')
            }
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        // setResultMaginTop('1000%')
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
    }
    return (
        <View style={[styles.container, { width: screenWidth, height: screenHeight }]} >

            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <ScrollView keyboardShouldPersistTaps="always">
                    <View style={[styles.app, { width: screenWidth, height: screenHeight }]}>
                        <LinearGradient
                            // Background Linear Gradient
                            colors={['#00d4ff', '#2b259a']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.background}
                        />
                        <Image style={styles.imagem} source={require('../../../assets/calculo-imc.png')}></Image>
                        <Text style={styles.titulo}>CALCULAR IMC</Text>
                        <View style={styles.inputArea}>
                            <TextInput
                                style={styles.caixaAltura}
                                label={'Altura'}
                                // mode="outlined"
                                onChangeText={setAltura}
                                value={altura}
                                placeholder="Ex. 1.75 Metros"
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.caixaPeso}
                                label={'Peso'}
                                // mode="outlined"
                                onChangeText={setPeso}
                                value={peso}
                                placeholder="Ex. 70.67 Kg"
                                keyboardType="numeric"
                            />
                            <Button
                                mode='contained'
                                style={styles.botaoCalcular}
                                onPress={() => validationImc()}
                            >{textButton}</Button>
                            <ResultImc messageResultImc={messageImc} resultImc={imc} marginTop={resultMaginTop} setResultMaginTop={animateResultBox} />
                        </View>
                        
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fbeed3',
        display: 'flex',
        width: '100%',
        height: '100%'

    },
    app: {
        position: 'absolute',
        display: 'flex',
        justifyContent: "space-evenly"
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    estilos: {
        backgroundColor: 'blue',
        color: 'red',
    },
    caixaAltura: {
        marginLeft: '10%',
        marginRight: '10%',
        // marginTop: '15%'
    },
    caixaPeso: {
        // marginTop: '5%',
        marginLeft: '10%',
        marginRight: '10%',
    },
    botaoCalcular: {
        // marginTop: '10%',
        marginLeft: '25%',
        marginRight: '25%',
    },
    imagem: {
        width: 150,
        height: 150,
        // marginTop: 50,
        alignItems: 'center'
    },
    titulo: {
        fontSize: 35,
        textAlign: 'center',
        // marginTop: 20,
        color: '#fff',
        fontFamily: 'calibri',
        fontWeight: '800',
        zIndex: 1,
    },
    imagem: {
        alignSelf: 'center',
        width: 200,
        height: 200,
    },
    inputArea: {
        height: '30%',
        display: 'flex',
        justifyContent: 'space-evenly',
    }

});
