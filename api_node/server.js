const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');
config = require('./DB');
const businessRoute = require('./routes/business.route');
/* mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
); */
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/business', businessRoute);
let port = process.env.PORT || 4000;

app.listen(4000,() => {
  console.log('Live on Port :4000');
});
//-----------------------------------------------
/* in postman data send in json like
{
  "person_name": "SN",
  "business_name": "H",
  "business_gst_number": "001"
}
 */
//------------------------------------------------
// const server = app.listen(function(){
//         console.log('servers is running and Listening on port ' + port);
// });