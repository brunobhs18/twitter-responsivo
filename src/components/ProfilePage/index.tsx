import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>
        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>

            <h1>Bruno Henrique</h1>
            <h2>@brunobhs18</h2>

            <p>
                Developer Front-End
            </p>
            <ul>
                <li>
                    <LocationIcon />
                    Minas Gerais, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 21 de Dezembro de 1995
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong> 120</strong>
                </span>
                <span>
                    <strong>175 </strong> seguidores
                </span>
            </Followage>

        </ProfileData>

        <Feed /> 
    </Container>
  );
}

export default ProfilePage;