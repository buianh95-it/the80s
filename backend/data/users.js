import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('', 10),
    isAdmin: true,
  },
]

export default users
