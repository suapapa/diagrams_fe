install:
	yarn install

all: install
	yarn build

dev: install
	yarn serve

.PHONY: all dev install
