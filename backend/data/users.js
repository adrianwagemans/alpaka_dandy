import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Amin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Robert Plant',
    email: 'rplant@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jimmy Page',
    email: 'jpage@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];
export default users;
