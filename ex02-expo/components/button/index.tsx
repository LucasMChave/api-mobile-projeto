import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';


type Props = {
    title ?: string;
    onPress: () => void;
}

export function Button({title, onPress}: Props){
    return(
        <TouchableOpacity onPress = {onPress} activeOpacity={0.3} style = {styles.button}>
            <Text style = {styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
