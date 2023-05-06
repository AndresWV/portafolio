"use client";
import './globals.css'
import * as React from 'react';
import { Box } from "./components/Box";
import { Content } from "./components/Content.js"
import { NextUIProvider } from '@nextui-org/react';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <NextUIProvider>
      <Box
        css={{
          maxW: "100%"
        }}
      >
        <NavBar/>
        <Content />
      </Box>
    </NextUIProvider>
  )
}

