import React from "react";
import {render} from '@testing-library/react'
import App from './App'

test('render react for test', ()=>{
    const {getByText} = render(<App />)
    const linkElement = getByText(/Count/)
    expect(linkElement).toBeInTheDocument()
})