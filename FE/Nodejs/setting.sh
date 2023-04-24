#! /usr/bin/bash
echo ${0}

mkdir -p boiler-plate/server boiler-plate/client 
cd boiler-plate

npm init -y
npm install express --save
npm install react react-dom
npm install nodemon --save-dev
npm install bcript --save
npm install body-parser -s

touch boiler-plate/server/index.js


cd client
npm install react-router-dom --save