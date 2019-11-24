const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 4000
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./DB.js')
const configPassport = require('./config/passport')
const postRoute = require('./routes/post.route')
const loginRoute = require('./routes/user.route')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')

const runWandbox = require('wandbox-api'); //

mongoose.Promise = global.Promise
mongoose.connect(config.DB, {useNewUrlParser: true, useUnifiedTopology: true}).then(
  () => {console.log(`Database is connected`)},
  err => {console.log(`Can not connect to the database ${err}`)}
)

//code입력
runWandbox.fromString('console.log(1+1);',{'compiler':'nodejs-head'},function clbk(error, results){
	if(error){
		throw new Error(error.message);
	}
	var out=results;
	
	var response = JSON.parse(JSON.stringify(out));
	console.log(response['program_output']);
});

configPassport(app, passport)

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cookieParser('secret'))
app.use(session({ key: 'secret' })) //sessionID 암호화

app.use(passport.initialize()) // passport 초기화
app.use(passport.session())
app.use(flash())

app.use('/posts', postRoute)
app.use('/', loginRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
