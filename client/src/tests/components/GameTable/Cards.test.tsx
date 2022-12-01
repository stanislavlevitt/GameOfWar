import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';


import  Cards  from '../../../components/GameTable/Cards';
import React from 'react';

describe('Cards', ()=>{
  it('Renders Cards', ()=>{
    render(<Cards />);
  })
})
