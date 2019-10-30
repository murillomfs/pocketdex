import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ArrowLeft, Share2, Award } from 'react-feather';

import { Container, List } from './styles';

export default function Header() {
    const [pokedex, setPokedex] = useState([]);
    const [wildPokemon, setWildPokemon] = useState({});

    useEffect(() => {
        encounterWildPokemon();
    }, [])

    const pokeId = () => {
        const min = Math.ceil(1)
        const max = Math.floor(151)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const encounterWildPokemon = () => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeId()}`)
        .then(response => {
            console.log(response.data);
            setWildPokemon(response.data);
        })
    }

    const catchPokemon = (pokemon) => {
        setPokedex(state => {
            const monExists = (state.filter(p => pokemon.id === p.id).lenght > 0);
            const quantity = state.length;

            if(quantity < 7){
                if(!monExists) {
                    state = [...state, pokemon]
                    state.sort(function (a, b) {
                        return a.id - b.id
                    })
                }
    
                encounterWildPokemon();
                return state;
            } else {
                return state;
            }
        })
    }

    const releasePokemon = id => {
        setPokedex(state => state.filter(p => p.id !== id))
    }

  return (
    <>
        <Container>
            <div className="header">
                <div>
                    <ArrowLeft color="#fff" />
                </div>

                <div>
                    <h1>Pocketdex</h1>
                </div>

                <div>
                    <Share2 color="#fff" />
                </div>
            </div>

            <div className="avatar-holder">
                <div className="avatar" onClick={() => catchPokemon(wildPokemon)}>
                    <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${wildPokemon.id}.png`} 
                        alt={wildPokemon.name}
                    />
                </div>
                <span>{wildPokemon.name}</span>
            </div>
        </Container>

        <List>
            <ul>
                {pokedex.map((pokemon, index) => (
                    <li 
                        key={pokemon.id} 
                        onClick={() => releasePokemon(pokemon.id)}
                    >
                        {/* <span className="close">x</span> */}

                        <span className="number">{index}</span>
                        <Award color="#fff" />

                        <img 
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
                            alt={pokemon.name}
                        />

                        <span className="name">{pokemon.name}</span>

                        <span className="type">{pokemon.types[0].type.name}</span>
                    </li>
                ))}
            </ul>
        </List>
    </>
  );
}
