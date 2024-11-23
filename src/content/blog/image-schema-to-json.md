---
title: 'Crear un generador de json desde una imagen con ChatGPT'
description: 'Proyecto realizado con Next.js y Vercel AI SDK'
pubDate: 'Nov 23 2024'
heroImage: '/AI_SDK_logo.png'
---

Es un proyecto realizado con Next.js y Vercel AI SDK, que permite generar un json desde una imagen, utilizando la API de ChatGPT y un schema de Zod concreto elegido por el usuario. Creo que es una buena herramienta para generar json desde una imagen, ya que no es necesario conocer el schema del json, solo es necesario que el usuario lo defina. 

Primero he analizado el problema, y he creado un schema de Zod para el json que se generará. Después he creado una función que recibe la imagen y el schema, y utiliza la API de ChatGPT para generar el json. Por último, he creado una interfaz para que el usuario pueda subir la imagen y ver el json generado.

Posteriormente he creado una interfaz para crear el schema de Zod, que es una interfaz muy sencilla con un pequeño formulario para definir el schema y un botón para generar el json.

[Link al repositorio](https://github.com/miguelmartinezmestre/structured-scanner)
