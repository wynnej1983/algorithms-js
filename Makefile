test:
	mocha --reporter spec --ui bdd specs
	
test-w:
	mocha --reporter spec --ui bdd --watch --growl --recursive specs	

.PHONY: test
