import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const WORDS = [ "AMIGO", "APPLE", "ARTIFICIAL", "ASSEMBLY", "BIBLIOTECA", "CELULAR", "CHROME", 
    "COMPUTADOR", "DISPOSITIVO", "DORMIR","DRONE","EXERCICIO", "EXPLORER", "FIREFOX", "GRUPO",
    "JOGOS", "LINUX", "MAQUINA", "MONITOR", "PROCESSADOR", "PROGRAMAR", "PROJETO", "PROVA",
    "PYTHON", "REACT", "SCRIPT", "SHARP", "SONORO", "TECLADO", "WINDOWS", "MEGALOVANIA"
];

function getRandomWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export default function HangmanGame({ navigation }: any) {
    const [secretWord, setSecretWord] = useState(getRandomWord());
    const [input, setInput] = useState("");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [attempts, setAttempts] = useState(5);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);

    const maskedWord = secretWord
        .split("")
        .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");

    const guessedList = guessedLetters.join(", ");

    useEffect(() => {
        if (!gameOver && maskedWord.replace(/ /g, "") === secretWord) {
        setWin(true);
        setGameOver(true);
        }
    }, [guessedLetters]);

    function handleSubmitGuess() {
        const guess = input.trim().toUpperCase();
        setInput("");

        if (guess === "") return;

        if (guess.length > 1) {
        setWin(guess === secretWord);
        setGameOver(true);
        return;
        }

        if (!/^[A-Z]$/.test(guess)) return;

        if (guessedLetters.includes(guess)) return;

        setGuessedLetters(prev => [...prev, guess]);

        if (!secretWord.includes(guess)) {
        setAttempts(prev => {
            const newAtt = prev - 1;
            if (newAtt <= 0) {
            setWin(false);
            setGameOver(true);
            }
            return newAtt;
        });
        }
    }

    function resetGame() {
        setSecretWord(getRandomWord());
        setInput("");
        setGuessedLetters([]);
        setAttempts(5);
        setGameOver(false);
        setWin(false);
    }

    return (
        <ImageBackground source={require("../../assets/pics/hangman.jpg")} resizeMode="cover" style={styles.background}>
        <View style={styles.container}>
            
            {gameOver ? (
            <>
                <Text style={styles.title}>
                {win ? "🎉 Você Acertou!" : "❌ Você Perdeu!"}
                </Text>

                <Text style={styles.subtitle}>Palavra: {secretWord}</Text>

                <TouchableOpacity style={styles.button} onPress={resetGame}>
                <Text style={styles.buttonText}>Jogar Novamente</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={[styles.button, styles.backButton]}
                onPress={() => router.push("../")}
                >
                <Text style={styles.buttonText}>Voltar ao Menu</Text>
                </TouchableOpacity>
            </>
            ) : (
            <>
                <Text style={styles.title}>Jogo da Forca</Text>

                <Image source={require("../../assets/other/hangedman.png")} style={styles.hangman}></Image>

                <Text style={styles.word}>{maskedWord}</Text>

                <Text style={styles.attempts}>Tentativas restantes: {attempts}</Text>
                <Text style={styles.guesses}>Letras chutadas: {guessedList || "—"}</Text>

                <TextInput
                style={styles.input}
                placeholder="Digite uma letra ou palavra"
                placeholderTextColor="#aaa"
                value={input}
                onChangeText={setInput}
                onSubmitEditing={handleSubmitGuess}
                autoCapitalize="characters"
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmitGuess}>
                <Text style={styles.buttonText}>ENTER</Text>
                </TouchableOpacity>
            </>
            )}
        </View>
        </ImageBackground>
    );
}
