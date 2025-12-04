# HormigasAIS LBH Demo


[![Sponsor](https://img.shields.io/badge/Sponsor-HormigasAIS-blue.svg)](https://www.paypal.com/ncp/payment/86Q8SS3NRV876)


[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.17767205.svg)](https://doi.org/10.5281/zenodo.17767205)


![LBH-01-09-19](https://github.com/Thrumanshow/HormigasAIS-LBH-Demo/blob/main/01-09-19.jpg)


**Lenguaje-Binario-HormigasAIS:** Versión 01-09-19  
Proyecto demostrativo y validado del protocolo LBH.


Proyecto demostrativo oficial.


# 🐜 HormigasAIS LBH Demo  
**Lenguaje-Binario-HormigasAIS (LBH) — Versión 01-09-19**  
Proyecto demostrativo oficial del protocolo LBH.

[![Sponsor](https://img.shields.io/badge/Sponsor-HormigasAIS-blue.svg)](https://www.paypal.com/ncp/payment/86Q8SS3NRV876)

[![DOI](https://zenodo.org/badge/735514687.svg)](https://zenodo.org/doi/10.5281/zenodo.17070288)

---

## 🧬 ¿Qué es el LBH?
El **Lenguaje-Binario-HormigasAIS (LBH)** es un protocolo experimental creado para transformar texto humano en una estructura binaria optimizada para:

- Validación digital  
- Firmas ligeras  
- Automatización  
- Predicciones basadas en patrones de datos  
- Uso en flujos n8n y Node.js  
- Integración con el ecosistema HormigasAIS

Este repositorio es el **demo oficial**, listo para ejecutar, estudiar, modificar y validar.

---

## 🚀 Características principales
- Conversión rápida texto → LBH  
- Módulos organizados por funciones (`core`, `cli`, `hash`)  
- Hash propio del LBH para validaciones internas  
- Servidor Express listo para levantarse  
- Configuración editable vía `lbh-config.json`  
- Demo 100% funcional y preparado para ampliaciones

---

## 📂 Estructura del proyecto

📦 HormigasAIS-LBH-Demo ┣ 📜 README.md ┣ 📜 lbh-cli.js ┣ 📜 lbh-core.js ┣ 📜 lbh-hash.js ┣ 📜 server.js ┣ 📜 lbh-config.json ┗ 📁 assets (imágenes del proyecto)

---

## ⚙️ Cómo usar el demo

### 1. Instalar dependencias
```bash
npm install

2. Ejecutar el servidor

node server.js

3. Usar la CLI

node lbh-cli.js "Tu texto aquí"


---

📡 API Demo (server.js)

El servidor incluye un endpoint base listo para pruebas:

POST /lbh

Envía:

{
  "text": "Hola HormigasAIS"
}

Recibe:

{
  "lbh": "01010100 11010011 001101..."
}


---

🐜 Ecosistema HormigasAIS

Este proyecto forma parte del laboratorio abierto HormigasAIS Open Lab, cuyo propósito es:

Democratizar el acceso a la IA

Crear herramientas ligeras y experimentales

Generar automatización accesible para creadores

Construir un puente entre datos, creatividad y humanidad


> “La mente curiosa y la colaboración humana.”




---

❤️ Apoya este proyecto

El LBH ha sido un desarrollo experimental y completamente autodidacta.
Si querés apoyar su evolución, podés hacerlo aquí:



Cada aporte impulsa el ecosistema HormigasAIS, la documentación, los demos y nuevas ideas.


---

📜 DOI y versión científica

Este proyecto está referenciado en Zenodo:

👉 https://doi.org/10.5281/zenodo.17070288

Disponible para citación en trabajos experimentales, informes y documentación.


---

🧠 Autor

Cristhiam Quiñonez
Fundador de HormigasAIS
Estratega Digital, Creador de Lenguajes Experimentales, IA & Automatización


---
