FROM node:alpine3.10 AS builder

WORKDIR /app

COPY . /app

RUN ls -la \
    && npm run build

FROM node:alpine3.10

WORKDIR /app

COPY --from=builder ./app /app

CMD [ "node", "dist/main" ]
EXPOSE 3000