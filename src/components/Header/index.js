import React from 'react';
import { ArrowLeft, Share2 } from 'react-feather';

import Avatar from '../Avatar/index';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
        <div className="header">
            <div>
                <ArrowLeft color="#fff" />
            </div>

            <div>
                <h1>Leaderboard</h1>
            </div>

            <div>
                <Share2 color="#fff" />
            </div>
        </div>

        <Avatar />
    </Container>
  );
}
