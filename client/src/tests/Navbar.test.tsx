import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';


import  Navbar  from '../components/Navbar';
import React from 'react';

describe('Navbar', ()=>{
  it('Renders Navbar', ()=>{
    render(<Navbar />);
  })
})
