import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import avatar from '../../assets/avataaars.png';
import logo from '../../assets/logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="" />
                    <Link id="Contacts" to="/contacts">MEUS CONTATOS</Link>
                    <Link id="Home" to="/dashboard">HOME</Link>
                </nav>
                <aside>
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img src={avatar} alt="" />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}