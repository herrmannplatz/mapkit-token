/* eslint-env jest */
const fs = require('fs')
const jwt = require('jsonwebtoken')
const generate = require('./')

// mock date
Date.now = jest.genMockFunction().mockReturnValue(0)

describe('generate', () => {
  it('should generate a token', () => {
    const authKey = fs.readFileSync('./key.p8')
    const teamId = 'maps.org.team.id'
    const keyId = 'c0c0c0'
    const ttl = 60 * 60
    const origin = 'org.team.id'

    const token = generate(authKey, keyId, teamId, ttl, origin)
    expect(jwt.decode(token)).toMatchSnapshot()
  })

  it('should generate a token without ttl and origin', () => {
    const authKey = fs.readFileSync('./key.p8')
    const teamId = 'maps.org.team.id'
    const keyId = 'c0c0c0'

    const token = generate(authKey, keyId, teamId)
    expect(jwt.decode(token)).toMatchSnapshot()
  })

  it('should throw in case of missing parameters', () => {
    const authKey = fs.readFileSync('./key.p8')
    const teamId = 'maps.org.team.id'
    const keyId = 'c0c0c0'

    expect(() => generate()).toThrowError()
    expect(() => generate(authKey)).toThrowError()
    expect(() => generate(authKey, keyId)).toThrowError()
    expect(() => generate(authKey, keyId, teamId)).not.toThrowError()
  })
})
