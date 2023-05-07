"use client";
import './globals.css'
import * as React from 'react';
import { Content } from "./components/Content.js"
import { NextUIProvider } from '@nextui-org/react';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <NextUIProvider>
      <NavBar/>
      <Content />
    </NextUIProvider>
  )
}

