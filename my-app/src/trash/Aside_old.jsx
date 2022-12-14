import React from 'react';
import {
    Container,
    Headers,
    MenuContainer,
    MenuItemLink,
    Title

} from './styleAside';
import {
    FaColumns,
    FaDoorOpen
} from "react-icons/fa";
const Aside = () => {
    return (
        <Container>
            <Headers>
                <Title>My-App</Title>
            </Headers>
            <MenuContainer>
                <MenuItemLink href="/home">
                    <FaColumns />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/card">
                    Hiragana
                </MenuItemLink>

                <MenuItemLink href="#">
                    <FaDoorOpen />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>

    )
}
export default Aside;