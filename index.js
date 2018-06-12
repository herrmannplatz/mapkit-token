const jwt = require('jsonwebtoken')

function generate (authKey, keyId, teamId, ttl = 30 * 60, origin) {
  if (authKey == null) {
    throw new Error('Missing your MapKit Authorization Key')
  }

  if (keyId == null) {
    throw new Error('Missing your MapKit JS Key ID')
  }

  if (teamId == null) {
    throw new Error('Missing your Apple Developer Team ID')
  }

  const payload = {
    iss: teamId,
    iat: Date.now() / 1000,
    exp: (Date.now() / 1000) + ttl,
    origin
  }

  const header = {
    kid: keyId,
    typ: 'JWT',
    alg: 'ES256'
  }

  return jwt.sign(payload, authKey, { header })
}

module.exports = generate
