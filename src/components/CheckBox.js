import React from 'react';
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

//Usamos um destructuring para pegar a props onChange
export default function CheckBox(props) {
  function handleChange() {
    const { onChange } = props;
    if (onChange) {
      return onChange();
    }
  }
  //o evento será chamado quando o usuário ao clicar no onPress essa props será 
  //uma função que irá ser passada para o componente, que em tese, irá mudar o estado 
  //da props value.
  return (
    <View style={styles.WrapperCheckBox}>

      <TouchableOpacity onPress={handleChange} style={[
        styles.CheckBox,
        { borderColor: props.checkColor ? props.checkColor : '#fff' }
      ]}>
        {
          props.value ? <Icon name="check"
            style={{
              fontSize: 16,
              color: props.iconColor ? props.iconColor : '#fff'
            }}
          /> : null
        }

      </TouchableOpacity>

      <Text style={[styles.LabelCheck, props.labelStyle]}>
        {props.label}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  CheckBox: {
    width: 25,
    height: 25,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  WrapperCheckBox: {
    flexDirection: "row",
    alignItems: "center"
  },
  LabelCheck: {
    color: '#fff',
    marginLeft: 6
  }
});


CheckBox.propTypes = {
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  iconColor: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  checkColor: PropTypes.string,
};

//  Nosso componente será basicamente um quadrado vazado e ao lado desse
//  quadrado uma label. Ao clicar no quadrado (que está vazado no momento),
//  terá que aparecer um check e vice-versa. Precisamos então de um botão, algumas views,
//  texto, ícones e estilo.