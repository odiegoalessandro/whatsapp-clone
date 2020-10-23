import React from 'react'
import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/Chat';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const IconsMenu = styled.div`
    width: 30%;
    justify-content: space-between;
    display: flex;
    align-items: center;
`
const Button = styled.button`
    border: none;
    cursor: pointer;
    color: #919191;
    border-radius: 50%;
    box-sizing: content-box;
`

function MenuIcons(){
    return(
        <IconsMenu>
            <Button><ChatIcon titleAccess="Nova conversa" /></Button>
            <Button><DataUsageIcon titleAccess="Status" /></Button>
            <Button><MoreVertIcon titleAccess="Mais opções" /></Button>
        </IconsMenu>
    )
}

export default MenuIcons