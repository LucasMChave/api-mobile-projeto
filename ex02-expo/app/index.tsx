import { Button } from '@/components/button';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Home() {
    function handleMessage() {
        Alert.alert("Hell")
    }

    return (
        <ScrollView>
            <View style = {styles.conteiner}>
            <Text style = {styles.title}>Lucas Mourato Aureliano de Melo</Text>
            <Text>RA: 00000848725 | Estudante de C3 Unicap de 5º periodo | 22 anos de Idade</Text>
            <Text style = {styles.quote}>Capre Diem - Horácio</Text>

            <Text>-{"\t"}Durante minha infância e adolescência, sempre gostei de videogames, passava minhas tardes jogando e cresci com muitas das 
            minhas inspirações artisticas baseadas nisso, simliar a pessoas que cresceram vendo flimes ou lendo livros.
            Mesmo assim, minha vida educacional nunca foi gravemente afetada, mesmo com dificuldades em certos periodos de tempo
            sempre mantive minhas notas iguais ou acima da média com eficiencia em Matemática e Inglês.  
            Ao me ingressar na faculdade, muitas das minhas dificuldades se ampliaram, graças a pandemia que ocorreu durante o 3º ano
            do meu ensino médio e minha dificuldade em manter os estudos em dia durante essa época me afetando durante meus anos seguintes,
            mesmo com esses impenclihos e cadeiras problemas que tive durante o curso, ainda sigo em frente com intenção de completar
            o curso de C3, para me provar capaz e ingressar na vida profissional.{"\n"}</Text>


            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
            Capacidades
            </Text>
            <Text>• Programação em C e Java;</Text>
            <Text>• Conhecimento básico de HTML-CSS;</Text>
            <Text>• Conhecimento avançado da língua inglesa;</Text>
            <Text>• Manejamento de projetos em grupo;</Text>
            <Text> {"\n"}{"\n"} </Text>
            <Button title = "Prosseguir?" onPress = {handleMessage}/>

            </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        justifyContent: "flex-start",
        padding: 100,
    },

    title: {
        color: "purple",
        fontSize: 24,
        fontWeight: "bold",
    },

    quote: {
        marginBottom: 20,
        fontSize: 18,
        fontStyle: "italic",
    },
})
