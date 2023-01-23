# diagrams-front

## Test with yarn in local

Install dependencies:

```bash
yarn install
```

Compiles and hot-reloads for development:

```bash
yarn serve
```

Compiles and minifies for production:

```bash
yarn build
```

Lints and fixes files:

```bash
yarn lint
```

## Build

Build image:

```bash
docker build --build-arg=URL_PREFIX=dsb -t dsb:dev
```

Run container:

```bash
docker run -it --rm -p 8080:80 --name dsb gcr.io/homin-dev/diagrams_fe:latest
```

## Reference

- [Configuration Reference](https://cli.vuejs.org/config/)
