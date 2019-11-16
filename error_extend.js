class AuthenticationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'AuthenticationError'
    this.message = 'Something bad'
    this.myField = 'some custom messages'
  }
}