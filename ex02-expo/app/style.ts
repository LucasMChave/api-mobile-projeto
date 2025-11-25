import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Home: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        gap: 12,
        backgroundColor: "#fcbacb",
    },
    
    title: {
        width: "90%",
        color: "#750180",
        fontSize: 34,
        fontWeight: "bold",
        fontStyle: "italic",
        marginTop: 22,
        backgroundColor: "#FC94AF",
        textAlign: "center",
    },

    description: {
        width: "90%",
        color: "#750180",
        fontSize: 16,
        marginBottom: 12,
        textAlign: "center",
        backgroundColor: "#FC9483",
    },

    bio:{
        color: "#750180",
        backgroundColor: "#FC9483", 
        fontSize: 16,
        marginBottom: 15,
        marginLeft: 15,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
    },

    picture: {
        width: 200,
        height: 200,
        borderRadius: 75,
        marginBottom: 20,
        backgroundColor: "#ffffff",
    },

    segment:{
        backgroundColor: "#FC94AF",
        width: "90%",
        fontSize: 24,
        marginBottom: 12,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
    },

    topics:{
        backgroundColor: "#FC9483", 
        marginLeft: 15,
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