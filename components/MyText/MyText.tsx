import { Text } from 'react-native';
import { styles } from './style';

type MyTextProps = {
  title?: string;
  fontSize?: number;
  style?: object;
  onPress?: () => void;
};

const MyText = ({
  title = 'Hello word',
  fontSize = 20,
  style = {},
  onPress = () => {},
}: MyTextProps) => {
  return (
    <Text
      onPress={onPress}
      style={[
        styles.text,
        styles.fontStyle,
        { fontSize: fontSize },
        style ? style : null,
      ]}
    >
      {title}
    </Text>
  );
};

export default MyText;
