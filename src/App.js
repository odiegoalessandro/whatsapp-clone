import React from 'react';
import Container from './components/Container/index.js'
import Sidebar from './components/Sidebar/index.js'
import Contentarea from './components/Contentarea/index.js'
import SearchBar from './components/SearchBar/index.js'
import Header from './components/Header/index.js'
import MenuOptions from './components/MenuOptions/index.js'
import UserIcon from './components/IconUser/index.js'
import MenuIcons from './components/MenuIcons/index.js'
import SearchBarContainer from './components/SearchBarContainer/index.js'

function App() {
    return (
        <>
            <Container>
                <Sidebar>
                    <Header>
                        <MenuOptions>
                            <UserIcon />
                            <MenuIcons />
                        </MenuOptions>
                        <SearchBarContainer>
                            <SearchBar />
                        </SearchBarContainer>
                    </Header>
                </Sidebar>
                <Contentarea>
                </Contentarea>
            </Container>
        </>
    );
}

export default App;

//https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg