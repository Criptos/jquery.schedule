module.exports = {
    "env": {
        "browser": true,
        "node": false,
        'jquery': true
    },
    'extends': [
        'airbnb-base/legacy',
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "console": true,
        "$": true
    },
    "plugins": [
        "jquery"
    ],
    "rules": {
        "indent": [2, 4]
    }
};