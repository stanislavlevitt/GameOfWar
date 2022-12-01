import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';


import  GameTable  from '../../../components/GameTable/GameTable';
import React from 'react';

describe('GameTable', ()=>{
  it('Renders GameTable', ()=>{
    render(<GameTable />);
  })
})
