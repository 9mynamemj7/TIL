#! /usr/bin/bash
echo ${0}

mkdir boiler-plate
cd boiler-plate

npm init -y
npm install express --save
npm install react react-dom
npm install nodemon --save-dev
npm install bcript --save
npm install jsonwebtoken --save
npm install cookie-parser --save
npm install body-parser -s

touch index.js
