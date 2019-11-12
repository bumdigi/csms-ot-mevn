# csms-ot-mevn project

## Mongo DB + Express.js + Vue.js + Node.js 로 이루 어진 MEVN Stack 프로젝트

  현재 화면과 기능은 우리가 개발하려는 것과 좀 거리가 있지만 기본적인 CRUD를 구현해 놓았으므로 이후 개발시 이 소스를 참고하여 개발하면 될듯
  
  기본적인 구조는 Vue CLI 를 통해 생성했으며, vue.js로 이루어진 front end와 Express.js로 이루어진 back end로 이루어져 있다. front end에서 받은 요청(url)에 따라 그에 해당하는 요청을 axios를 통해 back end로 전달하면 back end는 전달 받은 요청을 처리하며, 필요시 mongoose를 통해 mongo DB접근한다. back end 요청 처리가 완료되면 front end는 응답에 따라 필요한 작업을 수행한다.
 
  프로젝트 시작전에 mongo DB를 설치하고 localhost 하위에 csms-ot 라는 인스턴스를 생성해야 한다. 즉 node.js 서버에서 'mongodb://localhost:27017/csms-ot' 로 접근이 가능해야 한다.

## 관련 기술
##### Vue.js
##### Vue Router
##### Vue CLI
##### node.js
##### Express.js
##### bootstrap
##### axios
##### mongoDB
##### mongoose


## 준비
#### 1) MongoDB 설치
#### 2) csms-ot 인스턴트 생성

## 실행
#### 1) mongoDB 서버 실행

#### 2) vue.js 서버 실행
```
cd csms-ot-mevn // csms-ot-mevn 폴더 까지 접근
```
```
npm install
```
```
npm run serve
```
#### 3) node.js 서버 실행
```
cd api  // api 폴더 접근
```
```
npm install
```
```
npm install -g nodemon // nodemon 이 설치되지 않았을 경우
```
```
nodemon server
```
```
http://localhost:8080 접속
```
 
