#!/bin/bash

set -e

VER=$1
TAG=gcr.io/homin-dev/diagrams_fe

rm -rf node_modules

docker build --build-arg=URL_PREFIX=dsb -t $TAG:$VER .
docker push $TAG:$VER

docker tag $TAG:$VER $TAG:latest
docker push $TAG:latest

git tag -a $1 -m "Release $1"
git push --tags