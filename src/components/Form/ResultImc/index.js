import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function ResultImc(props) {
    return (
        <View style={[styles.resultBox, { marginTop: props.marginTop }]}>
            <View style={styles.texts}>
                <Text style={styles.texto}>{props.messageResultImc}</Text>
                <Text style={styles.texto}>{props.resultImc}</Text>
            </View>
            <Button
                mode='contained'
                style={styles.voltar}
                onPress={() => props.setResultMaginTop(0, 200)}
            >Voltar</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    resultBox: {
        position: 'absolute',
        zIndex: 2,
        width: '80%',
        height: '100%',
        marginLeft: '10%',
        backgroundColor: '#330077',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#77FF77',
        display: 'flex',
        justifyContent: 'space-between',
        overflow: 'hidden',
        // marginTop: '1000%',
    },
    texto: {
        fontSize: 20,
        textAlign: 'center',
        // marginTop: 20,
        color: '#FFF',
        fontFamily: 'calibri',
        fontWeight: '800'
    },
    voltar: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    texts: {
        marginTop: '3%'
    }
});