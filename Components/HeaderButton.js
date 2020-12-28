import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const HeaderButton = props =>{
    return <HeaderButton {...props} IconComponent = {Icon} iconSize = { 23 } color = '#f5f5f5' />;
};

export default HeaderButton;