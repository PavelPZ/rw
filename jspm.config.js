SystemJS.config({
  production: false,
  baseURL: ".",
  paths: {
    "npm:": "jspm_packages/npm/"
  },
  packages: {
    "rw-config": {
      "main": "index.js",
      "defaultExtension": "js"
    },
    "rw-lib": {
      "main": "index.js",
      "defaultExtension": "js"
    },
    "rw-router": {
      "main": "index.js",
      "defaultExtension": "js"
    },
    "rw-redux": {
      "main": "index.js",
      "defaultExtension": "js"
    },
    "rw-course": {
      "main": "index.js",
      "defaultExtension": "js"
    },
    "rw-gui-rt": {
      "defaultExtension": "js"
    },
    "rw-instr": {
      "defaultExtension": "js"
    },
    "design": {
      "defaultExtension": "js"
    },
    "lm": {
      "defaultExtension": "js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "@types/lodash": "npm:@types/lodash@4.14.52",
    "@types/react": "npm:@types/react@0.14.57",
    "@types/react-dom": "npm:@types/react-dom@0.14.23",
    "@types/react-intl": "npm:@types/react-intl@2.2.2",
    "@types/react-redux": "npm:@types/react-redux@4.4.36",
    "ajv": "npm:ajv@4.11.3",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "classnames": "npm:classnames@2.2.5",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "eslint": "npm:eslint@3.15.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "immutability-helper": "npm:immutability-helper@2.1.1",
    "intl": "npm:intl@1.2.5",
    "load-script": "npm:load-script@1.0.0",
    "lodash": "npm:lodash@4.17.4",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "react": "npm:react@15.4.2",
    "react-addons-css-transition-group": "npm:react-addons-css-transition-group@15.4.2",
    "react-css-themr": "npm:react-css-themr@1.7.2",
    "react-dom": "npm:react-dom@15.4.2",
    "react-intl": "npm:react-intl@2.2.3",
    "react-redux": "npm:react-redux@4.4.6",
    "react-toolbox": "npm:react-toolbox@2.0.0-beta.6",
    "readline": "npm:jspm-nodelibs-readline@0.2.0",
    "redux": "npm:redux@3.6.0",
    "redux-logger": "npm:redux-logger@2.8.1",
    "reselect": "npm:reselect@2.5.4",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "tslib": "npm:tslib@1.5.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "whatwg-fetch": "npm:whatwg-fetch@2.0.2",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:@types/react-redux@4.4.36": {
      "map": {
        "redux": "npm:redux@3.6.0",
        "@types/react": "npm:@types/react@0.14.57"
      }
    },
    "npm:react-redux@4.4.6": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "invariant": "npm:invariant@2.2.2",
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:redux@3.6.0": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "loose-envify": "npm:loose-envify@1.3.1",
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "lodash-es": "npm:lodash-es@4.17.4"
      }
    },
    "npm:redux-logger@2.8.1": {
      "map": {
        "deep-diff": "npm:deep-diff@0.3.4"
      }
    },
    "npm:immutability-helper@2.1.1": {
      "map": {
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.6.3"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:react-dom@15.4.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.9"
      }
    },
    "npm:react@15.4.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.9"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:react-addons-css-transition-group@15.4.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.9"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:fbjs@0.8.9": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "ua-parser-js": "npm:ua-parser-js@0.7.12",
        "promise": "npm:promise@7.1.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "core-js": "npm:core-js@1.2.7"
      }
    },
    "npm:stream-http@2.6.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.9",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@1.0.1"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.3.3",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "isarray": "npm:isarray@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.3"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.2",
        "node-fetch": "npm:node-fetch@1.6.3"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.7"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.15"
      }
    },
    "npm:react-toolbox@2.0.0-beta.6": {
      "map": {
        "eslint-plugin-babel": "npm:eslint-plugin-babel@4.0.1",
        "core-js": "npm:core-js@2.4.1",
        "gulp-rimraf": "npm:gulp-rimraf@0.2.1",
        "ramda": "npm:ramda@0.23.0",
        "react-css-themr": "npm:react-css-themr@1.7.2"
      }
    },
    "npm:react-css-themr@1.7.2": {
      "map": {
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:gulp-rimraf@0.2.1": {
      "map": {
        "through2": "npm:through2@2.0.3",
        "rimraf": "npm:rimraf@2.5.4",
        "gulp-util": "npm:gulp-util@3.0.8"
      }
    },
    "npm:gulp-util@3.0.8": {
      "map": {
        "object-assign": "npm:object-assign@3.0.0",
        "through2": "npm:through2@2.0.3",
        "array-differ": "npm:array-differ@1.0.0",
        "gulplog": "npm:gulplog@1.0.0",
        "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
        "has-gulplog": "npm:has-gulplog@0.1.0",
        "lodash._reescape": "npm:lodash._reescape@3.0.0",
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.template": "npm:lodash.template@3.6.2",
        "array-uniq": "npm:array-uniq@1.0.3",
        "beeper": "npm:beeper@1.1.1",
        "fancy-log": "npm:fancy-log@1.3.0",
        "dateformat": "npm:dateformat@2.0.0",
        "multipipe": "npm:multipipe@0.1.2",
        "replace-ext": "npm:replace-ext@0.0.1",
        "minimist": "npm:minimist@1.2.0",
        "chalk": "npm:chalk@1.1.3",
        "vinyl": "npm:vinyl@0.5.3"
      }
    },
    "npm:through2@2.0.3": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:eslint@3.15.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@4.17.4",
        "strip-bom": "npm:strip-bom@3.0.0",
        "is-resolvable": "npm:is-resolvable@1.0.0",
        "file-entry-cache": "npm:file-entry-cache@2.0.0",
        "levn": "npm:levn@0.3.0",
        "natural-compare": "npm:natural-compare@1.4.0",
        "require-uncached": "npm:require-uncached@1.0.3",
        "glob": "npm:glob@7.1.1",
        "imurmurhash": "npm:imurmurhash@0.1.4",
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "path-is-inside": "npm:path-is-inside@1.0.2",
        "estraverse": "npm:estraverse@4.2.0",
        "concat-stream": "npm:concat-stream@1.6.0",
        "doctrine": "npm:doctrine@1.5.0",
        "strip-json-comments": "npm:strip-json-comments@2.0.1",
        "text-table": "npm:text-table@0.2.0",
        "user-home": "npm:user-home@2.0.0",
        "optionator": "npm:optionator@0.8.2",
        "escope": "npm:escope@3.6.0",
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "progress": "npm:progress@1.1.8",
        "js-yaml": "npm:js-yaml@3.8.1",
        "pluralize": "npm:pluralize@1.2.1",
        "espree": "npm:espree@3.4.0",
        "table": "npm:table@3.8.3",
        "debug": "npm:debug@2.6.1",
        "globals": "npm:globals@9.14.0",
        "is-my-json-valid": "npm:is-my-json-valid@2.15.0",
        "ignore": "npm:ignore@3.2.2",
        "inquirer": "npm:inquirer@0.12.0",
        "shelljs": "npm:shelljs@0.7.6"
      }
    },
    "npm:fancy-log@1.3.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "time-stamp": "npm:time-stamp@1.0.1"
      }
    },
    "npm:lodash.template@3.6.2": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
        "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
        "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
        "lodash.escape": "npm:lodash.escape@3.2.0",
        "lodash.restparam": "npm:lodash.restparam@3.6.1",
        "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
        "lodash.templatesettings": "npm:lodash.templatesettings@3.1.1",
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.1.1"
      }
    },
    "npm:file-entry-cache@2.0.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "flat-cache": "npm:flat-cache@1.2.2"
      }
    },
    "npm:gulplog@1.0.0": {
      "map": {
        "glogg": "npm:glogg@1.0.0"
      }
    },
    "npm:has-gulplog@0.1.0": {
      "map": {
        "sparkles": "npm:sparkles@1.0.0"
      }
    },
    "npm:concat-stream@1.6.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "inherits": "npm:inherits@2.0.3",
        "typedarray": "npm:typedarray@0.0.6"
      }
    },
    "npm:doctrine@1.5.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:vinyl@0.5.3": {
      "map": {
        "replace-ext": "npm:replace-ext@0.0.1",
        "clone-stats": "npm:clone-stats@0.0.1",
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:escope@3.6.0": {
      "map": {
        "estraverse": "npm:estraverse@4.2.0",
        "es6-map": "npm:es6-map@0.1.4",
        "es6-weak-map": "npm:es6-weak-map@2.0.1",
        "esrecurse": "npm:esrecurse@4.1.0"
      }
    },
    "npm:optionator@0.8.2": {
      "map": {
        "levn": "npm:levn@0.3.0",
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2",
        "deep-is": "npm:deep-is@0.1.3",
        "wordwrap": "npm:wordwrap@1.0.0",
        "fast-levenshtein": "npm:fast-levenshtein@2.0.6"
      }
    },
    "npm:babel-code-frame@6.22.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@3.0.1"
      }
    },
    "npm:multipipe@0.1.2": {
      "map": {
        "duplexer2": "npm:duplexer2@0.0.2"
      }
    },
    "npm:table@3.8.3": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "lodash": "npm:lodash@4.17.4",
        "string-width": "npm:string-width@2.0.0",
        "slice-ansi": "npm:slice-ansi@0.0.4",
        "ajv-keywords": "npm:ajv-keywords@1.5.1",
        "ajv": "npm:ajv@4.11.3"
      }
    },
    "npm:glob@7.1.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "inflight": "npm:inflight@1.0.6",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "once": "npm:once@1.4.0",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "supports-color": "npm:supports-color@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1"
      }
    },
    "npm:inquirer@0.12.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "lodash": "npm:lodash@4.17.4",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "string-width": "npm:string-width@1.0.2",
        "cli-width": "npm:cli-width@2.1.0",
        "cli-cursor": "npm:cli-cursor@1.0.2",
        "ansi-escapes": "npm:ansi-escapes@1.4.0",
        "readline2": "npm:readline2@1.0.1",
        "run-async": "npm:run-async@0.1.0",
        "figures": "npm:figures@1.7.0",
        "ansi-regex": "npm:ansi-regex@2.1.1",
        "rx-lite": "npm:rx-lite@3.1.2",
        "through": "npm:through@2.3.8"
      }
    },
    "npm:shelljs@0.7.6": {
      "map": {
        "glob": "npm:glob@7.1.1",
        "rechoir": "npm:rechoir@0.6.2",
        "interpret": "npm:interpret@1.0.1"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:user-home@2.0.0": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2"
      }
    },
    "npm:is-resolvable@1.0.0": {
      "map": {
        "tryit": "npm:tryit@1.0.3"
      }
    },
    "npm:glogg@1.0.0": {
      "map": {
        "sparkles": "npm:sparkles@1.0.0"
      }
    },
    "npm:require-uncached@1.0.3": {
      "map": {
        "resolve-from": "npm:resolve-from@1.0.1",
        "caller-path": "npm:caller-path@0.1.0"
      }
    },
    "npm:json-stable-stringify@1.0.1": {
      "map": {
        "jsonify": "npm:jsonify@0.0.0"
      }
    },
    "npm:lodash.templatesettings@3.1.1": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.escape": "npm:lodash.escape@3.2.0"
      }
    },
    "npm:levn@0.3.0": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2"
      }
    },
    "npm:is-my-json-valid@2.15.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "generate-function": "npm:generate-function@2.0.0",
        "jsonpointer": "npm:jsonpointer@4.0.1"
      }
    },
    "npm:duplexer2@0.0.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:type-check@0.3.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:string-width@2.0.0": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@2.0.0"
      }
    },
    "npm:espree@3.4.0": {
      "map": {
        "acorn-jsx": "npm:acorn-jsx@3.0.1",
        "acorn": "npm:acorn@4.0.4"
      }
    },
    "npm:lodash.escape@3.2.0": {
      "map": {
        "lodash._root": "npm:lodash._root@3.0.1"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    },
    "npm:esrecurse@4.1.0": {
      "map": {
        "estraverse": "npm:estraverse@4.1.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "code-point-at": "npm:code-point-at@1.1.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:readline2@1.0.1": {
      "map": {
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "code-point-at": "npm:code-point-at@1.1.0",
        "mute-stream": "npm:mute-stream@0.0.5"
      }
    },
    "npm:figures@1.7.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:run-async@0.1.0": {
      "map": {
        "once": "npm:once@1.4.0"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:es6-map@0.1.4": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "es5-ext": "npm:es5-ext@0.10.12",
        "es6-symbol": "npm:es6-symbol@3.1.0",
        "es6-set": "npm:es6-set@0.1.4",
        "event-emitter": "npm:event-emitter@0.3.4",
        "d": "npm:d@0.1.1"
      }
    },
    "npm:es6-weak-map@2.0.1": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "es5-ext": "npm:es5-ext@0.10.12",
        "es6-symbol": "npm:es6-symbol@3.1.0",
        "d": "npm:d@0.1.1"
      }
    },
    "npm:caller-path@0.1.0": {
      "map": {
        "callsites": "npm:callsites@0.2.0"
      }
    },
    "npm:acorn-jsx@3.0.1": {
      "map": {
        "acorn": "npm:acorn@3.3.0"
      }
    },
    "npm:flat-cache@1.2.2": {
      "map": {
        "write": "npm:write@0.2.1",
        "circular-json": "npm:circular-json@0.3.1",
        "del": "npm:del@2.2.2",
        "graceful-fs": "npm:graceful-fs@4.1.11"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:es6-set@0.1.4": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.12",
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "es6-symbol": "npm:es6-symbol@3.1.0",
        "event-emitter": "npm:event-emitter@0.3.4"
      }
    },
    "npm:write@0.2.1": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.2.0"
      }
    },
    "npm:cli-cursor@1.0.2": {
      "map": {
        "restore-cursor": "npm:restore-cursor@1.0.1"
      }
    },
    "npm:event-emitter@0.3.4": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12",
        "d": "npm:d@0.1.1"
      }
    },
    "npm:argparse@1.0.9": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:del@2.2.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "rimraf": "npm:rimraf@2.5.4",
        "is-path-in-cwd": "npm:is-path-in-cwd@1.0.0",
        "is-path-cwd": "npm:is-path-cwd@1.0.0",
        "globby": "npm:globby@5.0.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:es5-ext@0.10.12": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "es6-symbol": "npm:es6-symbol@3.1.0"
      }
    },
    "npm:es6-iterator@2.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12",
        "es6-symbol": "npm:es6-symbol@3.1.0",
        "d": "npm:d@0.1.1"
      }
    },
    "npm:es6-symbol@3.1.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12",
        "d": "npm:d@0.1.1"
      }
    },
    "npm:d@0.1.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:restore-cursor@1.0.1": {
      "map": {
        "onetime": "npm:onetime@1.1.0",
        "exit-hook": "npm:exit-hook@1.1.1"
      }
    },
    "npm:globby@5.0.0": {
      "map": {
        "glob": "npm:glob@7.1.1",
        "object-assign": "npm:object-assign@4.1.1",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "arrify": "npm:arrify@1.0.1",
        "array-union": "npm:array-union@1.0.2"
      }
    },
    "npm:is-path-in-cwd@1.0.0": {
      "map": {
        "is-path-inside": "npm:is-path-inside@1.0.0"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:is-path-inside@1.0.0": {
      "map": {
        "path-is-inside": "npm:path-is-inside@1.0.2"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:array-union@1.0.2": {
      "map": {
        "array-uniq": "npm:array-uniq@1.0.3"
      }
    },
    "npm:@types/react-dom@0.14.23": {
      "map": {
        "@types/react": "npm:@types/react@0.14.57"
      }
    },
    "npm:ajv@4.11.3": {
      "map": {
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "co": "npm:co@4.6.0"
      }
    },
    "npm:js-yaml@3.8.1": {
      "map": {
        "argparse": "npm:argparse@1.0.9",
        "esprima": "npm:esprima@3.1.3"
      }
    },
    "npm:debug@2.6.1": {
      "map": {
        "ms": "npm:ms@0.7.2"
      }
    },
    "npm:elliptic@6.3.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.7"
      }
    },
    "npm:react-intl@2.2.3": {
      "map": {
        "intl-messageformat": "npm:intl-messageformat@1.3.0",
        "intl-format-cache": "npm:intl-format-cache@2.0.5",
        "intl-relativeformat": "npm:intl-relativeformat@1.3.0",
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:intl-relativeformat@1.3.0": {
      "map": {
        "intl-messageformat": "npm:intl-messageformat@1.3.0"
      }
    },
    "npm:intl-messageformat@1.3.0": {
      "map": {
        "intl-messageformat-parser": "npm:intl-messageformat-parser@1.2.0"
      }
    },
    "npm:@types/react-intl@2.2.2": {
      "map": {
        "@types/react": "npm:@types/react@0.14.57"
      }
    }
  }
});
