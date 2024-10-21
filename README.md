# Promo-Car - Formulario de registro para sorteo

Este proyecto es un minisite funcional desarrollado con Next.js, diseñado para la recolección de datos de clientes actuales de Promo-Car en Bogotá (nombre inventado por el autor del repositorio). El objetivo del minisite es permitir a los usuarios registrarse para participar en un sorteo al completar un formulario que al completarlo le entregará un código único.

## Características del Proyecto

- **Regex:** Se hizó uso de las expresiones regulares para verificar que los datos que el usuario ingrese en el formulario sean validos.

- **Docker Compose:** Proyecto entregado con un archivo `docker-compose` configurado para levantar la aplicación.

- Para obtener los departamentos y municipios se realizó un fetching de datos de la siguiente URL: https://www.datos.gov.co/resource/xdk5-pm3f.json

## Requisitos Técnicos

- **Framework:** Next.js
- **Docker:** Se recomienda tener Docker y Docker Compose instalados para levantar el proyecto.

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/Camilo-Suarez98/promo-car

2. cd promo-car

3. docker-compose up --build

## Tecnologías Utilizadas
- Next.js: [https://nextjs.org/](https://nextjs.org/)
- React: [https://react.dev/](https://react.dev/)
- TailwindCSS [https://tailwindcss.com/](https://tailwindcss.com/)
- Docker: [https://app.docker.com/](https://app.docker.com/)