
function trim (string) {
  return String(string).replace(/(^\s*)|(\s*$)/, '')
}

function encode (string) {
  return encodeURIComponent(trim(string))
}

function decode (string) {
  return decodeURIComponent(trim(string))
}

function getCookieData () {
  var cookieData = {}
  var cookieString = window.document.cookie.split(';')
  for (var i = 0; i < cookieString.length; i++) {
    var cookie = cookieString[i].split('=')
    var key = decode(cookie[0])
    var value = decode(cookie[1])
    cookieData[key] = value
  }
  return cookieData
}

function cookie () {
  if (arguments.length === 0) {
    return getCookieData()
  } else if (arguments.length === 1) {
    return cookie.getItem(arguments[0])
  } else if (arguments[1] === null) {
    return cookie.removeItem(arguments[0], arguments[2])
  } else {
    return cookie.setItem(arguments[0], arguments[1], arguments[2])
  }
}

if (typeof Object.defineProperty !== 'undefined') {
  Object.defineProperty(cookie, 'length', {
    configurable: false,
    enumerable: false,
    get () {
      const data = getCookieData()
      return Object.keys(data).length
    }
  })
}

cookie.key = function (index) {
  const data = getCookieData()
  return Object.keys(data)[index]
}

cookie.getItem = function (key) {
  const data = getCookieData()
  return data[key]
}

cookie.setItem = function (key, value, options) {
  let settingsStr = `${encode(key)}=${encode(value)};`
  if (options) {
    if (options.expires) {
      var now = new Date()
      const expires = Number(options.expires) * 24 * 60 * 60 * 1000
      now.setTime(now.getTime() + expires)
      settingsStr += ` expires=${now.toUTCString()};`
    }
    if (options.path) settingsStr += ` path=${trim(options.path)};`
    if (options.domanin) settingsStr += ` domanin=${trim(options.domanin)};`
    if (options.secure) settingsStr += ` secure=${trim(options.secure)};`
  }
  window.document.cookie = settingsStr
}

cookie.removeItem = function (key, options) {
  return cookie.setItem(key, '', Object.assign({
    expires: -1
  }, options || {}))
}

cookie.clear = function () {
  const data = getCookieData()
  const keys = Object.keys(data)
  for (let i = 0; i < keys.length; i++) {
    cookie.removeItem(keys[i])
  }
}

export default cookie
