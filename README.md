# csms-ot-mevn project

Mongo DB + Express.js + Vue.js + Node.js 로 이루 어진 MEVN Stack 프로젝트
프로젝트 시작전에 mongo DB를 설치하고 localhost 하위에 csms-ot 라는 인스턴스를 생성해야 함
'mongodb://localhost:27017/csms-ot' 로 접근이 가능해야함

## 준비
#### 1) MongoDB 설치
#### 2) csms-ot 인스턴트 생성

## 실행
#### 1) vue.js 서버 실행
```
cd csms-ot-mevn // csms-ot-mevn 폴더 까지 접근
```
```
npm install
```
```
cd npm run server
```
#### 2) node.js 서버 실행
```
cd api  // api 폴더 접근
```
```
npm install
```
```
npm install nodemon --save-dev  // nodemon 이 설치되지 않았을 경우
```
```
nodemon server
```


### Compiles and hot-reloads for development
```
npm run serve
```
