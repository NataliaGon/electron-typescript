'use strict'

const Store = require('electron-store')

class UserStore extends Store {
  constructor (settings) {
    super(settings)
    this.users= this.get('users') || []
  }

  saveUser () {
    this.set('users', this.users)
    return this
  }

  getUser () {
    this.users = this.get('users') || []
    return this
  }

  addUser (users) {
    this.users = [ ...this.users, users ]
    return this.saveUser()
  }

  deleteUser (user) {
    this.users = this.users.filter(t => t !== user)
    return this.saveUser()
  }

}

module.exports = UserStore