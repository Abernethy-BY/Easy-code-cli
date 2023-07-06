import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  userName: String,
  userKey: String,
  userPassword: String,
  userPhone: String,
  userEmail: String,
  userAvatar: String,
  userStatus: Number,
  userCreateTime: Date,
  userUpdateTime: Date,
  userLastLoginTime: Date,
  userLastLoginIp: String,
  userLoginCount: Number,
  userId: String,
})
const Users = mongoose.model('users', UserSchema)

const componentSchema = mongoose.Schema({
  componentName: String,
  componentPath: String,
  componentType: String,
  componentId: String,
  componentCreateTime: Date,
  componentUpdateTime: Date,
  componentAuthor: String,
  componentDesc: String,
  belongsUserId: String,
  belongsUserKey: String,
})
const Components = mongoose.model('components', componentSchema)

export { Users, Components }
