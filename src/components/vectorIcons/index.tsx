
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from 'react';

interface Props {
  name: string, icon: string, size: number, color: string, styles: object
}

export default function Icons({ name, icon, size, color, styles }: Props) {
  let data;
  switch (icon) {
    case 'AntDesign':
      data = <AntDesign name={name} size={size} color={color} styles={styles} />;
      break;
    case 'Entypo':
      data = <Entypo name={name} size={size} color={color} styles={styles} />;
      break;
    case 'EvilIcons':
      data = <EvilIcons name={name} size={size} color={color} styles={styles} />;
      break;
    case 'FontAwesome':
      data = <FontAwesome name={name} size={size} color={color} styles={styles} />;
      break;
    case 'FontAwesome5Pro':
      data = <FontAwesome5Pro name={name} size={size} color={color} styles={styles} />;
      break;
    case 'Ionicons':
      data = <Ionicons name={name} size={size} color={color} styles={styles} />;
      break;
    case 'Feather':
      data = <Feather name={name} size={size} color={color} styles={styles} />;
      break;
    case 'MaterialCommunityIcons':
      data = (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
          styles={styles}
        />
      );
      break;
    case 'MaterialIcons':
      data = (
        <MaterialIcons name={name} size={size} color={color} styles={styles} />
      );
      break;
    case 'FontAwesome5':
      data = (
        <FontAwesome5 name={name} size={size} color={color} styles={styles} />
      );
      break;
    default:
      console.log('not found');
  }
  return data;
}