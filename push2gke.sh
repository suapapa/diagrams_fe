#!/bin/bash
set -e

rm -rf node_modules

IMAGE_TAG=gcr.io/homin-dev/diagrams_fe
IMAGE_NAME=$IMAGE_TAG:$1
IMAGE_NAME_LATEST=$IMAGE_TAG:latest

docker buildx build --platform linux/amd64 --build-arg=URL_PREFIX=dsb -t $IMAGE_NAME .
docker push $IMAGE_NAME

docker tag $IMAGE_NAME $IMAGE_NAME_LATEST
docker push $IMAGE_NAME_LATEST

git tag -a $1 -m "add tag for $1"
git push origin master --tags

