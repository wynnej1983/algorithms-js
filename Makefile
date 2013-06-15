test:
	mocha --reporter spec --ui bdd --require should --watch --growl --recursive specs

.PHONY: test
