import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){

const [altura, setAltura] = useState(null)
const [peso, setPeso] = useState(null)
const [messageImc, setMessageImc] = useState("preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function validationImc(){
    const imc = (peso/(altura*altura)).toFixed(2);
    setImc(imc);

    if(peso != null && altura != null){
        if (imc <= 18.5){
            setMessageImc("Abaixo do peso!")
            setAltura('')
            setPeso('')
        } else if(imc > 18.5 && imc <= 25){
            setMessageImc("Peso normal!")
            setAltura('')
            setPeso('')
        } else if(imc > 25 && imc <= 30){
            setMessageImc("Sobrepeso")
            setAltura('')
            setPeso('')
        } else if(imc > 30 && imc <= 35){
            setMessageImc("Obesidade grau I")
            setAltura('')
            setPeso('')
        } else if(imc > 35 && imc <= 40){
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
