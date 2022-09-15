FROM node:lts-alpine as builder

WORKDIR /app
# ENV PATH="${PATH}:/app/node_modules/.bin"
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# ---

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/nginx_local.conf /etc/nginx/conf.d

ENV URL_PREFIX=/dgsb-fe
ENV FOLDER=/dist

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]