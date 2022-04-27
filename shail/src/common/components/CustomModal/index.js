import React, {useState} from 'react';
import {View, Text, Modal, Alert} from 'react-native';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import ModalBody from './ModalBody';
import styles from './styles';

const CustomModal = ({
  visible,
  setVisible,
  itemData,
  setItemData,
  modalFor,
  setData,
  navigation,
}) => {
  const [itemNameLocal, setItemNameLocal] = useState(itemData.itemName);
  const [expiryDateLocal, setExpiryDateLocal] = useState(
    new Date(itemData.expiryDate),
  );
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setVisible(!visible);
      }}>
      <View style={styles.outerModalView}>
        <View style={styles.innerModalView}>
          <ModalHeader setVisible={setVisible} modalFor={modalFor} />
          <View style={styles.horizontalDivider}></View>
          <ModalBody
            navigation={navigation}
            itemData={itemData}
            visible={visible}
            setVisible={setVisible}
            setItemData={setItemData}
            modalFor={modalFor}
            itemNameLocal={itemNameLocal}
            expiryDateLocal={expiryDateLocal}
            setItemNameLocal={setItemNameLocal}
            setExpiryDateLocal={setExpiryDateLocal}
          />
          <ModalFooter
            itemData={itemData}
            modalFor={modalFor}
            itemNameLocal={itemNameLocal}
            expiryDateLocal={expiryDateLocal}
            setItemData={setItemData}
            setData={setData}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
