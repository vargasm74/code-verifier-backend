# code-verifier-backend
node express project backend
# clonar carpeta 
https://github.com/vargasm74/code-verifier-backend.git
# instalar paquetes
## creamos package.json
npm init
## paquetes express
npm i express dotonev
## instalar nodemod en ambiente dev para pruebas global
npm i -D nodemon
## instalamos nodemon en local
npx i -D index.js
## instalar typescript con todas la dependecias para soportar el desarrollo en dev
npm -i -D typescript @types/express @types/nodes
## generar en forma locar tsc 
npx tsc --init luego confirgurar modulos creado en el tsconfig.ts
## instalamos el concurrently
npm -i concurrently
## - esto sirve para tener una solucion mas lijera 
npm i -D webpack webpack-cli webpack-node-externals webpack-shell-plugin


## estandarizar trabajo eslint reglas de trabajos y jest test unitarios
npm i -D eslint jest ts-jest @types/jest supertest
## en la raiz del proyecto metemos la configuracion
npx slint --init 
Respondemos las preguntas y seleccionamos
1) to check sintax, find problms, and enforce code style
2)- javascript modules import export
3)- none of these
4)- Node
5)- Use a popular style guide
6)- Standard
7) JSON

## instalamos jest en raiz
npm jest --init

## es para poder ver el informe de coverage
npm i -D serve
ejemplo

 npm run serve:coverage

code-verifier-backend@1.0.0 serve:coverage
npm run test && cd coverage/lcov-report && npx serve

 code-verifier-backend@1.0.0 test
 jest

 PASS  __tests__/example.spec.ts (7.437 s)
  My First test suite
    √ My first test case (2 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 | 
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        9.938 s, estimated 11 s
Ran all test suites.

   ┌─────────────────────────────────────────────────┐
   │                                                 │
   │   Serving!                                      │
   │                                                 │
   │   - Local:            http://localhost:3000     │
   │   - On Your Network:  http://172.30.48.1:3000   │
   │                                                 │
   │   Copied local address to clipboard!            │
   │                                                 │
   └─────────────────────────────────────────────────┘
   
   
# cracion de log para ver distintos estados info success warning error 
 utils => logger.ts

# configuracion es de router y controller
dir interfaces
index.ts
dir router
index.ts and helloRouter and index.ts 
dir server
index.ts
# instalacion de modulos y mas seguridad helmet
npm i cors helmet
npm i -D cors @types/cors

## se carga el ts-loader
npm i -D ts-loader

## modulo swagger
 npm i --save swagger-jsdoc swagger-ui-express
 # instalamos tsoa
 npm i tsoa


