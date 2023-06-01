
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const routes = require('./routes');
// // const cookieParser = require('cookie-parser');
// const productRoutes = require('./productRoutes');
// // const authRoutes = require('./authRoutes')
// const categoryRoutes = require('./categoryController')

// main().catch(err => console.log(err));

// async function main() {
//   // await mongoose.connect('mongodb+srv://rentalagriindia:cluster123@userlogs.tbiwfbc.mongodb.net/');
//   await mongoose.connect('mongodb://127.0.0.1:27017/userlogs');
//   console.log('db connected')
// }

// const server = express();

// server.use(cors());
// server.use(bodyParser.json());

// server.use('/api', routes);
// // server.use(cookieParser());

// server.use('/admin/products', productRoutes);
// // server.use('/admin/auth', adminlogin);
// server.use('/admin/categories', categoryRoutes);

// server.listen(8080, () => {
//   console.log('Server started on port 8080');
// });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/userroutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/userlogs');
  console.log('db connected');
}

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use('/api', routes);
server.use('/admin/products', productRoutes);
server.use('/admin/categories', categoryRoutes);

server.listen(8080, () => {
  console.log('Server started on port 8080');
});
