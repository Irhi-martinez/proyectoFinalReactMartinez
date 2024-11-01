import React from "react";
import {PropTypes} from "prop-types";

export const PropTypesClass = ({Number, label, isValid}) => {
    return isValid ? (
    <div>Elnumero existe y es: {Number}</div>
) : (
    <div>{label} </div>
);
};
PropTypesClass.PropTypes = {
    Number: PropTypes.string,
    label: PropTypes.string,
    isValid: PropTypes.string
};