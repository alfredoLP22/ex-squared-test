# Usa una imagen oficial de Node.js como imagen base
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json para instalar dependencias primero
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Construir la aplicación TypeScript
RUN npm run build

# Expone el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "run", "start"]
