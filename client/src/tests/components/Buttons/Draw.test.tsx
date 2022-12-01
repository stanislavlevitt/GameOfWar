import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';


import  Draw  from '../../../components/Buttons/Draw';
import React from 'react';

describe('Draw', ()=>{
  it('Renders Draw', ()=>{
    render(<Draw />);
    // expect(screen.getAllByRole('button'))
  })
})
