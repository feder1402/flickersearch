import React from 'react'
const DefaultCase = () => <h1>Unknown State</h1>

const switchcase = cases => key => cases.hasOwnProperty(key) ? cases[key] : DefaultCase;
export const match = cases => key => xState => switchcase(cases)(key)(xState);
