import React from 'react'
import styled from 'styled-components'

const IconBox = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

function UserIcon(){
    return(
        <IconBox>
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="UserPhoto" style={{width: "40px", height: "40px", borderRadius: "50%"}} />           
        </IconBox>
    )
}

export default UserIcon