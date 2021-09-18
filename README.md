# mapkit-token

[![npm version](https://badge.fury.io/js/mapkit-token.svg)](https://badge.fury.io/js/mapkit-token)

> 🗺 Easily generate [MapKit JS](https://developer.apple.com/documentation/mapkitjs) authorization tokens.

## Install
```
$ npm install mapkit-token
```

## Usage
```javascript
const generate = require('mapkit-token')

const key = fs.readFileSync('AuthKey_B1B1B1B1B1.p8')
const token = generate(key, 'B1B1B1B1B1', 'A1A1A1A1A1')
```

This generates an authorization token (valid for 30 minutes) which can be used to authorize against the mapkit JS API. Check the [documentation](https://developer.apple.com/documentation/mapkitjs/setting_up_mapkit_js) on how to generate a key.

### `generate(authKey, keyId, teamId[, ttl, origin])`

* **authKey**: MapKit Authorization Key
* **keyId**: MapKit JS Key ID.
* **teamId**: Apple Developer Team ID.
* **ttl**: Time to live in seconds. Defaults to 30 minutes.
* **origin**: Domain restrictions. Optional but recommended.

Returns the authorizaton token.
