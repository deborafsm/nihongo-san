import React from 'react'
import { Grid } from '../components/Grid/index.tsx'
import { cards } from '../json/cards.ts'
export default function  MemoryGame() {
  return (
    <div>
      <Grid cards={cards} />
    </div>
  )
}
