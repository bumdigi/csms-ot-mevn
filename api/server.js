const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 4000
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./DB.js')
const postRoute = require('./routes/post.route')
const loginRoute = require('./routes/login.route')

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

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/posts', postRoute)
app.use('/login', loginRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
