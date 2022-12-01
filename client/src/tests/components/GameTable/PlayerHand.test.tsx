import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';


import  PlayerHand  from '../../../components/GameTable/PlayerHand';
import React from 'react';

describe('PlayerHand', ()=>{
  it('Renders PlayerHand', ()=>{
    render(<PlayerHand />);
  })
})
