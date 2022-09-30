import React from "react";
import { Text, View } from "react-native";
import { Modal } from "../atoms";
import ListVertical from "./ListVertical";

const SelectScreen = () => {
    return(
        <Modal>
            <ListVertical />
        </Modal>
    )
}

export default SelectScreen