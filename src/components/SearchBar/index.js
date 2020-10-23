import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

const InputBox = styled.div`
    background: #fff;
    width: 95%;
    height: 35px;
    border-radius: 30px;
    display: flex;
    color: #919191;
    align-items: center;
    padding: 5px 10px;
`
const Input = styled.input`
    border: none;
    margin-left: 10px;
    width: 90%;
    font-size: 15px;
    padding: 5px;
    height: 100%;
    &::placeholder{
        color: #919191;
        text-align: center;
    }
`

function SearchBar(){
    return(
        <InputBox>
            <SearchIcon />
            <Input placeholder="Procurar ou começar uma nova conversa" />
        </InputBox>
    )
}

export default SearchBar