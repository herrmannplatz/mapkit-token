# mapkit-token

[![npm version](https://badge.fury.io/js/mapkit-token.svg)](https://badge.fury.io/js/mapkit-token) [![Build Status](https://travis-ci.org/herrmannplatz/mapkit-token.svg?branch=master)](https://travis-ci.org/herrmannplatz/mapkit-token)

🗺 Easily generate MapKit authorization tokens.

## Usage
```javascript
const generate = reqire('mapkit-token')

const token = generate('AUTH_KEY', 'KEY_ID', 'TEAM_ID', 1 * 60, 'com.domain.my')
```

### `generate(authKey, keyId, teamId[, ttl=30*60, origin=undefined])`

* **authKey**: MapKit Authorization Key
* **keyId**: MapKit JS Key ID.
* **teamId**: Apple Developer Team ID.
* **ttl**: Time to live in seconds. Defaults to 30 minutes.
* **origin**: Domain restrictions. Optional.
