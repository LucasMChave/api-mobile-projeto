import { Button } from '@/components/button';
import { Link } from "expo-router";
import { Alert, Image, ScrollView, Text, View } from 'react-native';

import { styles } from './style';

export default function Home() {
    function handleMessage() {
        Alert.alert("TBD")
    }

    return (
        <ScrollView>
            <View style = {styles.Home}>
                <Text style = {styles.title}>Lucas Mourato Aureliano de Melo</Text>
                <Text style = {styles.description}>Estudante de C3 Unicap de 5º periodo{"\n"}22 anos de Idade{"\n"}RA: 00000848725</Text>
                <Image source={require('../assets/pics/foto.jpg')} style = {styles.picture}/>
                <Text style = {styles.quote}>"Capre Diem" - Horácio{""}
                    <Text style = {styles.sup}>23a.C</Text>
                </Text>
                
                <Text style={styles.segment}>• Biografia •</Text>
                <Text style={styles.bio}>-Durante minha infância e adolescência, sempre gostei de videogames, passava minhas tardes jogando e cresci com muitas das 
                minhas inspirações artisticas baseadas nisso, simliar a pessoas que cresceram vendo flimes ou lendo livros.
                Mesmo assim, minha vida educacional nunca foi gravemente afetada, mesmo com dificuldades em certos periodos de tempo
                sempre mantive minhas notas iguais ou acima da média com eficiencia em Matemática e Inglês.  
                Ao me ingressar na faculdade, muitas das minhas dificuldades se ampliaram, graças a pandemia que ocorreu durante o 3º ano
                do meu ensino médio e minha dificuldade em manter os estudos em dia durante essa época me afetando durante meus anos seguintes,
                mesmo com esses impenclihos e cadeiras problemas que tive durante o curso, ainda sigo em frente com intenção de completar
                o curso de C3, para me provar capaz e ingressar na vida profissional.</Text>


                <Text style={styles.segment}>• Capacidades •</Text>
                <Text style={styles.topics}>- Programação em C e Java;{"\n"}
                - Conhecimento básico de HTML-CSS;{"\n"}
                - Conhecimento avançado da língua inglesa;{"\n"}
                - Manejamento de projetos em grupo;{"\n"}</Text>

                <Text style={styles.segment}>• Referencias •</Text>
                <Link href="https://www.linkedin.com/in/lucas-mourato-5b6a062b5/" style={styles.hyperlink}>Linkedin{""}
                    <Image source={require('../assets/other/linkedin_icon.png')} style={styles.logo}/>
                </Link>
                <Link href="https://github.com/LucasMChave" style={styles.hyperlink}>GitHub{""}
                    <Image source={require('../assets/other/github.png')} style={styles.logo}/>
                </Link>
                <Link href="https://www.instagram.com/lucasmourato.ch" style={styles.hyperlink}>Instagram{""}
                    <Image source={require('../assets/other/Instagram_icon.png')} style={styles.logo}/>
                </Link>
                <Link href="https://www.youtube.com/@lukey3474" style={styles.hyperlink}>Youtube{""}
                    <Image source={require('../assets/other/Youtube_logo.png')} style={styles.logo}/>
                </Link>
                
                
                <Button title = "Jogo da Velha" onPress = {handleMessage}/>
            </View>
        </ScrollView>
  );
}
