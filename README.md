# documenter
Framework documentation RDF vocab and display tools

[![Build Status](https://travis-ci.org/inf3rno/documenter.png?branch=master)](https://travis-ci.org/inf3rno/documenter)

## documentation

The goal of this project to describe project documentations with json-ld files,
and view them from github pages using a single page javascript application.
I hate to add documentation annotations to the code that's why I started this project.

## tasks needs to be done

- find or create a project list descriptor vocab (probably https://github.com/edumbill/doap)
- find or create an oo framework API descriptor vocab (probably http://www.w3.org/TR/rdf-schema/)
 - check whether the API descriptor vocab can be used to describe the documentation
- create documentation viewer which can display a project list and the documentations
 - need a json-ld parser (probably using https://github.com/digitalbazaar/jsonld.js)
 - need to use the history API to make the documentation shareable
 - build an SPA HTML json-ld viewer (probably using https://angularjs.org/)

## License

MIT - 2015 Jánszky László Lajos