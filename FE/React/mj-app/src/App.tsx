import React from 'react'
import AppRoutes from './routes'
import './App.scss'
import { AppProvider } from './providers/app'
import { RecoilRoot } from "recoil";
import * as m$ from '@mediaiplus/ui';


function App() {
  return (
    <RecoilRoot>
      <AppProvider>
        <AppRoutes />
        <m$.MessageBox />
        <m$.Loading />
      </AppProvider>
    </RecoilRoot>
  )
}

export default App