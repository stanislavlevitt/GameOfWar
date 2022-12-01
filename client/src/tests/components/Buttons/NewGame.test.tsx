import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';


import  NewGame  from '../../../components/Buttons/NewGame';
import React from 'react';

describe('NewGame', ()=>{
  it('Renders NewGame', ()=>{
    render(<NewGame />);
    // expect(screen.getAllByRole('button'))
  })
})
