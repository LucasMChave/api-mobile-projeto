import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        flex: 1,
    },
    
    hangman:{
        justifyContent: "center",
        height: 284,
        width: 165,
    },

    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 32,
        color: "#ffd6ff",
        marginBottom: 20,
        fontWeight: "bold",
    },

    word: {
        fontSize: 40,
        letterSpacing: 5,
        color: "#ffd6ff",
        marginBottom: 20,
    },

    attempts: {
        width: 227,
        color: "#ffffff",
        backgroundColor: "#5A189A",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ffffff",
        fontSize: 18,
        marginBottom: 15,
        textAlign: "center",
    },

    guesses: {
        width: 200,
        color: "#ffffff",
        backgroundColor: "#5A189A",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ffffff",
        fontSize: 18,
        marginBottom: 15,
        textAlign: "center",
    },

    button: {
        width: "70%",
        backgroundColor: "#5A189A",
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },

    backButton: {
        backgroundColor: "#ff0008",
    },

    buttonText: {
        color: "#ffffffff",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    },

    subtitle: {
        fontSize: 24,
        color: "#ffd6ff",
        marginBottom: 20,
    },
});
