import { Button } from '@/components/button';
import { Link, router } from "expo-router";
import { Alert, Image, ImageBackground, ScrollView, Text, View } from 'react-native';

import { styles } from './style';

export default function Home() {
    function hangmanMessage() {
        Alert.alert("Adivinhe a palvra dentro das seguintes regras:", 
            "- Clique ENTER pra chutar uma letra\n- Apenas 5 tentativas\n- 1 chute ENCERRA o jogo\n", [
                {
                    text: 'Cancelar', onPress: () => console.log('Cancel Pressed'),
                },{
                    text: 'Começar', onPress: () => router.push("./jdf"),
                }
            ]);
    }

    return (
        <ScrollView>
            <ImageBackground source={require("../assets/pics/background.jpg")} resizeMode="cover">
                <View style = {styles.Home}>
                    <Text style = {styles.title}>Lucas Mourato Aureliano de Melo</Text>
                    <Text style = {styles.description}>Estudante de C3 Unicap de 5º periodo{"\n"}22 anos de Idade{"\n"}RA: 00000848725</Text>
                    <View style = {styles.portrait}>
                        <Image source={require('../assets/pics/foto.jpg')} style = {styles.picture}/>
                    </View>
                    <Text style = {styles.quote}>"Capre Diem" - Horácio{""}
                        <Text style = {styles.sup}>23a.C</Text>
                    </Text>
                    
                    <View style={styles.segment}>
                        <Text style={styles.chapter}>• Biografia •</Text>
                        <Text style={styles.box}>Durante minha infância e adolescência, sempre gostei de videogames, passava minhas tardes jogando e cresci com muitas das 
                        minhas inspirações artisticas baseadas nisso, simliar a pessoas que cresceram vendo flimes ou lendo livros.
                        Mesmo assim, minha vida educacional nunca foi gravemente afetada, mesmo com dificuldades em certos periodos de tempo
                        sempre mantive minhas notas iguais ou acima da média com eficiencia em Matemática e Inglês.  
                        Ao me ingressar na faculdade, muitas das minhas dificuldades se ampliaram, graças a pandemia que ocorreu durante o 3º ano
                        do meu ensino médio e minha dificuldade em manter os estudos em dia durante essa época me afetando durante meus anos seguintes,
                        mesmo com esses impenclihos e cadeiras problemas que tive durante o curso, ainda sigo em frente com intenção de completar
                        o curso de C3, para me provar capaz e ingressar na vida profissional.</Text>
                    </View>

                    <View style={styles.segment}>
                        <Text style={styles.chapter}>• Capacidades •</Text>
                        <Text style={styles.box}>- Programação em C e Java;{"\n"}
                        - Conhecimento básico de HTML-CSS;{"\n"}
                        - Fluencia na língua inglesa;{"\n"}
                        - Manejamento de projetos em grupo;{"\n"}</Text>
                    </View>

                    <View style={styles.segment}>
                        <Text style={styles.chapter}>• Experiencia e Conquistas •</Text>
                        <Text style={styles.box}>- Formação no ensino Médio e parcial de Ensino Superior;{"\n"}
                        - 175 pontos na Prova do FCE da Universidade de Cambridge em 2019;{"\n"}
                        - Projeto na Biblioteca Comunitária Caranguejo Tabaiares;{"\n"}</Text>
                    </View>

                    <View style={styles.segment}>
                        <Text style={styles.chapter}>• Interesses Profissionais •</Text>
                        <Text style={styles.box}>-  Design grafico (UI-UX);{"\n"}
                            - Desenvilvimento de Softwares;{"\n"}
                            - Gamedesign e Game Development;{"\n"}
                            - Artes Visuais;{"\n"}
                            - Filosofia;{"\n"}
                            - Atividades competitivas;{"\n"}</Text>
                    </View>

                    <View style={styles.segment}>
                        <Text style={styles.chapter}>• Referencias •</Text>
                        <View style={styles.groupLinks}>
                            <Link href="https://www.linkedin.com/in/lucas-mourato-5b6a062b5/" style={styles.hyperlink}>Linkedin {""}
                                <Image source={require('../assets/other/linkedin_icon.png')} style={styles.logo}/>
                            </Link>
                            <Link href="https://github.com/LucasMChave" style={styles.hyperlink}>GitHub {""}
                                <Image source={require('../assets/other/github.png')} style={styles.logo}/>
                            </Link>
                            <Link href="https://www.instagram.com/lucasmourato.ch" style={styles.hyperlink}>Instagram {""}
                                <Image source={require('../assets/other/Instagram_icon.png')} style={styles.logo}/>
                            </Link>
                            <Link href="https://www.youtube.com/@lukey3474" style={styles.hyperlink}>Youtube {""}
                                <Image source={require('../assets/other/Youtube_logo.png')} style={styles.logo}/>
                            </Link>
                        </View>
                    </View>
                    
                    <Button title = "Jogo da Forca" onPress = {hangmanMessage}/>
                </View>
            </ImageBackground>
        </ScrollView>
  );
}
