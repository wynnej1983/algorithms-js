test:
	mocha --reporter spec --ui bdd --compilers coffee:coffee-script specs
	
test-w:
	mocha --reporter spec --ui bdd --compilers coffee:coffee-script --watch --growl --recursive specs	

.PHONY: test
