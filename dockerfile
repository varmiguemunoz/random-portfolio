
FROM node:18.15.0 as builder

COPY . /usr/src
WORKDIR /usr/src

# Instala las dependencias y construye tu aplicación
RUN npm install
RUN npm run build

# Utiliza la imagen oficial de NGINX para servir la aplicación
FROM nginx:latest

# Copia los archivos construidos desde el contenedor de Node.js al directorio de NGINX
COPY --from=builder /usr/src/dist /usr/share/nginx/html

# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

# NGINX se iniciará automáticamente al arrancar el contenedor
CMD ["nginx", "-g", "daemon off;"]