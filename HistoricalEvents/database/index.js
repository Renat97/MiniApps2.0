const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/history', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we connected!');
});

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);

var save =  async () => {
var saved = await Kitten.create({ name: 'bob'});
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
console.log(saved);
}

save();

module.exports = {
  save
}