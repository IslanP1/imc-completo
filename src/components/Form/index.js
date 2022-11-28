import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){

const [altura, setAltura] = useState(null)
const [peso, setPeso] = useState(null)
const [messageImc, setMessageImc] = useState("preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function imcCalculator(){
    return setImc(
        (peso/(altura*altura)).toFixed(2)
    );
}

function validationImc(){
    if(peso != null && altura != null){
        imcCalculator()
        setAltura(null)
        setPeso(null)
        setMessageImc("Seu imc é igual: ")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")

}
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                 onChangeText={setAltura}
                 value={altura}
                 placeholder="Ex. 1.75"
                 keyboardType="numeric"
                />
                
                <Text>Peso</Text>
                <TextInput
                 onChangeText={setPeso}
                 value={peso}
                 placeholder="Ex. 70.67"
                 keyboardType="numeric"
                />

                <Button
                 onPress={() => validationImc()}
                 title={textButton}
                />
            </View>
            <ResultImc messageResultImc = {messageImc} resultImc = {imc}/>
            
        </View>
    );
}