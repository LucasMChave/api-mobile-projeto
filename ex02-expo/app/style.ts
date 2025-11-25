import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Home: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        gap: 12,
        marginTop: 22,
    },
    
    title: {
        color: "purple",
        fontSize: 34,
        fontWeight: "bold",
        fontStyle: "italic",
    },

    picture: {
        width: 200,
        height: 200,
        borderRadius: 75,
        marginBottom: 20
    },

    segment:{
        fontSize: 24,
        marginBottom: 12,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
    },

    topics:{
        justifyContent: "flex-start",
        alignSelf: "flex-start",
    },

    quote: {
        marginBottom: 20,
        fontSize: 18,
        fontStyle: "italic",
        textDecorationLine: "underline",
    },

    sup: {
        fontSize: 12,
        textAlignVertical: "top",
        textDecorationLine: "none",
    },

    hyperlink: {
        color: 'blue',
        textDecorationLine: 'underline',
        justifyContent: "flex-start",
        alignSelf: "flex-start",
    },

    logo: {
        width: 16,
        height: 16,
    },

});