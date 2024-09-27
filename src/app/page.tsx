'use client'
import { useEffect } from 'react';
import Head from 'next/head';
import { Button } from '@mui/material';

export default function Home() {
  useEffect(() => {
    // Guardar en localStorage
    localStorage.setItem('hola', 'hola');
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Head>
        <title>Mi Proyecto</title>
        <meta name="description" content="Generado con Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl mb-4">¡Hola, Mundo!</h1>
      <Button color="primary">
        Botón de Material-UI
      </Button>
    </div>
  );
}
