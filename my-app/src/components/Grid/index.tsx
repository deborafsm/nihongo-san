import React, { useState, useRef } from "react";
import { Card, CardProps } from "../Card/index.tsx";
import { duplicateRegenerateSortArray } from '../../utils/cardUtils.ts'
import './style.css'
export interface GridProps {
    cards: CardProps[];
}
export function Grid({ cards }: GridProps) {
    const [stateCards, setStateCards] = useState(() => {
        return duplicateRegenerateSortArray(cards)
    });
    const first = useRef<CardProps | null>(null);
    const second = useRef<CardProps | null>(null);
    const unFlip = useRef(false);
    const [matches, setMatches] = useState(0)
    const [moves, setMoves] = useState(0)
    const handleReset = () => {
        setStateCards(duplicateRegenerateSortArray(cards));
        first.current = null;
        second.current = null;
        unFlip.current = false;
        setMatches(0);
        setMoves(0);
    }
    const handleCliked = (id: string) => {
        const newStateCards = stateCards.map((card) => {
            // se o id do cartao não for o id clicado, nao faz nda
            if (card.id !== id) return card;
            // se o cartao ja estiver vidado, n faz nda
            if (card.flipped) return card;

            // Desvirando possiveis cartas erradas
            if (unFlip.current && first.current && second.current) {
                // A pessoa Errou
                first.current.flipped = false;
                second.current.flipped = false;
                first.current = null;
                second.current = null;
                unFlip.current = false;

            };

            // Virar o card
            card.flipped = true;
            // conf o pri e sec cartão clicado
            if (first.current === null) {
                first.current = card;
            } else if (second.current === null) {
                second.current = card;
            }
            // se eu tenho os dois cartoes virados, posso checar se estão corretos
            if (first.current && second.current) {
                if (first.current.back === second.current.back) {
                    // A pessoa acertou
                    first.current = null;
                    second.current = null;
                    setMatches((matches) => matches + 1)
                } else {
                    // A pessoa errou
                    unFlip.current = true;

                }
                setMoves((moves) => moves + 1)
            }
            return card;
        });
        setStateCards(newStateCards);
        console.log(id)
    };
    return (
        <>
            <div className="text">
                <h1>Memory Game</h1>
                <p>Moves: {moves}</p>
                <p>Matches: {matches}| {' '}</p>
                <button onClick={() => handleReset()}>Reset</button>
            </div>
            <div className="grid">
                {stateCards.map((card) => {
                    return <Card {...card} key={card.id} handleClick={handleCliked} />
                })}
            </div>
        </>
    );
}