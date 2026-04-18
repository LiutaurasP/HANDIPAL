# HANDIPAL-APP
Marketplace for connecting customers with local service providers
-----------------
Stack

Frontend:
-React (Vite)
-JavaScript

Backend:
-FastAPI (Python)
--Uvicorn (server)

Infra:
-Docker
-Docker Compose

What it does as of now:
>React runs the UI in the browser
>React calls FastAPI via HTTP (fetch)
>FastAPI returns JSON data
>Docker runs both services together

How to run?:

Run with Docker (https://www.docker.com/products/docker-desktop/)

From project root:

docker compose up --build

Open app:

Frontend:
http://localhost:5173

Backend:
http://localhost:8000/test