all: install
	yarn build

dev: install
	yarn serve

install:
	yarn install

.PHONY: all dev install
