const jwt = require('jsonwebtoken');
const secretKey = 'secretkeymithun';
const User = require('../models/User');

// Signup controller
const signup = async (req, res) => {
  const { fname, lname, mobile, email, password, address, state, city } = req.body;

  try {
    // Check if user already exists with the same email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create new user and save to database
    const newUser = new User({ fname, lname, mobile, email, password, cpassword: password, address, state, city });
    const savedUser = await newUser.save();
    
    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists with the given email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token and send back to client
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    let isAdmin = false;
    let role = user.role;

    // Check if the user is an admin
    if (role === 1) {
      isAdmin = true;
      console.log('logged as admin');
    }

    res.json({ token, userID: user._id, role, isAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// const profile = async (req, res) => {
//   try {
//     const userId = req.user.userId;
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const { fname, lname, mobile, email, address, state, city, role } = user;
//     const userProfile = {
//       fname,
//       lname,
//       mobile,
//       email,
//       address,
//       state,
//       city,
//       role: role == '1' ? 'Admin' : 'User',
//     };

//     res.json(userProfile);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };



 const profile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { fname, lname, mobile, email, address, state, city, role } = user;
    const userProfile = {
      fname,
      lname,
      mobile,
      email,
      address,
      state,
      city,
      role: role == '1' ? 'Admin' : 'User',
      isAdmin: role == '1' ? true : false,
    };

    res.json(userProfile);

    // Export isAdmin
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



module.exports = { signup, login, profile };
