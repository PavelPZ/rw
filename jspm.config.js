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
    "rw-login": {
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
  },
  map: {
    "redux-saga/effects": "npm:redux-saga@0.14.8/lib/effects",
    "redux-saga/index": "npm:redux-saga@0.14.8/lib/index"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "firebase": "npm:firebase@3.9.0",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "@types/js-cookie": "npm:@types/js-cookie@2.0.28",
    "@types/lodash": "npm:@types/lodash@4.14.63",
    "@types/react": "npm:@types/react@15.0.23",
    "@types/react-dom": "npm:@types/react-dom@15.5.0",
    "@types/react-intl": "npm:@types/react-intl@2.2.6",
    "@types/react-redux": "npm:@types/react-redux@4.4.39",
    "ajv": "npm:ajv@4.11.7",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "classnames": "npm:classnames@2.2.5",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "eslint": "npm:eslint@3.19.0",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fela": "npm:fela@4.3.2",
    "fela-dom": "npm:fela-dom@4.3.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "immutability-helper": "npm:immutability-helper@2.1.2",
    "intl": "npm:intl@1.2.5",
    "js-cookie": "npm:js-cookie@2.1.4",
    "load-script": "npm:load-script@1.0.0",
    "lodash": "npm:lodash@4.17.4",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "react": "npm:react@15.4.2",
    "react-addons-css-transition-group": "npm:react-addons-css-transition-group@15.4.2",
    "react-css-themr": "npm:react-css-themr@1.7.2",
    "react-dom": "npm:react-dom@15.4.2",
    "react-intl": "npm:react-intl@2.2.3",
    "react-redux": "npm:react-redux@5.0.4",
    "react-toolbox": "npm:react-toolbox@2.0.0-beta.8",
    "readline": "npm:jspm-nodelibs-readline@0.2.1",
    "redux": "npm:redux@3.6.0",
    "redux-batched-actions": "npm:redux-batched-actions@0.2.0",
    "redux-logger": "npm:redux-logger@3.0.1",
    "redux-saga": "npm:redux-saga@0.14.8",
    "reselect": "npm:reselect@3.0.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "tslib": "npm:tslib@1.6.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "whatwg-fetch": "npm:whatwg-fetch@2.0.3",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:redux@3.6.0": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "loose-envify": "npm:loose-envify@1.3.1",
        "symbol-observable": "npm:symbol-observable@1.0.4",
        "lodash-es": "npm:lodash-es@4.17.4"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.0"
      }
    },
    "npm:react-addons-css-transition-group@15.4.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.9"
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
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-hmac": "npm:create-hmac@1.1.4",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.9",
        "readable-stream": "npm:readable-stream@2.2.9"
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
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0"
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
        "whatwg-fetch": "npm:whatwg-fetch@2.0.3",
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
        "brorand": "npm:brorand@1.1.0"
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
        "iconv-lite": "npm:iconv-lite@0.4.16"
      }
    },
    "npm:react-css-themr@1.7.2": {
      "map": {
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:file-entry-cache@2.0.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "flat-cache": "npm:flat-cache@1.2.2"
      }
    },
    "npm:concat-stream@1.6.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.9",
        "inherits": "npm:inherits@2.0.3",
        "typedarray": "npm:typedarray@0.0.6"
      }
    },
    "npm:escope@3.6.0": {
      "map": {
        "estraverse": "npm:estraverse@4.2.0",
        "es6-map": "npm:es6-map@0.1.5",
        "es6-weak-map": "npm:es6-weak-map@2.0.2",
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
    "npm:table@3.8.3": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "lodash": "npm:lodash@4.17.4",
        "string-width": "npm:string-width@2.0.0",
        "slice-ansi": "npm:slice-ansi@0.0.4",
        "ajv-keywords": "npm:ajv-keywords@1.5.1",
        "ajv": "npm:ajv@4.11.7"
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
    "npm:levn@0.3.0": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2"
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
    "npm:write@0.2.1": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.3.3"
      }
    },
    "npm:cli-cursor@1.0.2": {
      "map": {
        "restore-cursor": "npm:restore-cursor@1.0.1"
      }
    },
    "npm:argparse@1.0.9": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:del@2.2.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "rimraf": "npm:rimraf@2.6.1",
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
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.7"
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
    "npm:immutability-helper@2.1.2": {
      "map": {
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:react-redux@5.0.4": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "prop-types": "npm:prop-types@15.5.8",
        "create-react-class": "npm:create-react-class@15.5.2",
        "loose-envify": "npm:loose-envify@1.3.1",
        "invariant": "npm:invariant@2.2.2",
        "lodash-es": "npm:lodash-es@4.17.4",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0"
      }
    },
    "npm:@types/react-redux@4.4.39": {
      "map": {
        "redux": "npm:redux@3.6.0",
        "@types/react": "npm:@types/react@15.0.23"
      }
    },
    "npm:react-toolbox@2.0.0-beta.8": {
      "map": {
        "react-css-themr": "npm:react-css-themr@1.7.2",
        "react-style-proptype": "npm:react-style-proptype@2.0.2",
        "ramda": "npm:ramda@0.23.0",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:eslint@3.19.0": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "esutils": "npm:esutils@2.0.2",
        "file-entry-cache": "npm:file-entry-cache@2.0.0",
        "doctrine": "npm:doctrine@2.0.0",
        "estraverse": "npm:estraverse@4.2.0",
        "is-resolvable": "npm:is-resolvable@1.0.0",
        "path-is-inside": "npm:path-is-inside@1.0.2",
        "natural-compare": "npm:natural-compare@1.4.0",
        "esquery": "npm:esquery@1.0.0",
        "strip-bom": "npm:strip-bom@3.0.0",
        "imurmurhash": "npm:imurmurhash@0.1.4",
        "user-home": "npm:user-home@2.0.0",
        "require-uncached": "npm:require-uncached@1.0.3",
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "text-table": "npm:text-table@0.2.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "levn": "npm:levn@0.3.0",
        "progress": "npm:progress@1.1.8",
        "strip-json-comments": "npm:strip-json-comments@2.0.1",
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "pluralize": "npm:pluralize@1.2.1",
        "escope": "npm:escope@3.6.0",
        "concat-stream": "npm:concat-stream@1.6.0",
        "optionator": "npm:optionator@0.8.2",
        "chalk": "npm:chalk@1.1.3",
        "ignore": "npm:ignore@3.2.7",
        "globals": "npm:globals@9.17.0",
        "is-my-json-valid": "npm:is-my-json-valid@2.16.0",
        "table": "npm:table@3.8.3",
        "js-yaml": "npm:js-yaml@3.8.3",
        "debug": "npm:debug@2.6.4",
        "shelljs": "npm:shelljs@0.7.7",
        "espree": "npm:espree@3.4.2",
        "inquirer": "npm:inquirer@0.12.0",
        "glob": "npm:glob@7.1.1"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-os@0.2.1": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:fela@4.3.2": {
      "map": {
        "css-in-js-utils": "npm:css-in-js-utils@1.0.3"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:doctrine@2.0.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:create-react-class@15.5.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:esquery@1.0.0": {
      "map": {
        "estraverse": "npm:estraverse@4.2.0"
      }
    },
    "npm:ajv@4.11.7": {
      "map": {
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "co": "npm:co@4.6.0"
      }
    },
    "npm:prop-types@15.5.8": {
      "map": {
        "fbjs": "npm:fbjs@0.8.12"
      }
    },
    "npm:fbjs@0.8.12": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "loose-envify": "npm:loose-envify@1.3.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "core-js": "npm:core-js@1.2.7",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.12"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.6"
      }
    },
    "npm:shelljs@0.7.7": {
      "map": {
        "glob": "npm:glob@7.1.1",
        "rechoir": "npm:rechoir@0.6.2",
        "interpret": "npm:interpret@1.0.3"
      }
    },
    "npm:css-in-js-utils@1.0.3": {
      "map": {
        "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2"
      }
    },
    "npm:is-my-json-valid@2.16.0": {
      "map": {
        "jsonpointer": "npm:jsonpointer@4.0.1",
        "xtend": "npm:xtend@4.0.1",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "generate-function": "npm:generate-function@2.0.0"
      }
    },
    "npm:stream-http@2.7.0": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "readable-stream": "npm:readable-stream@2.2.9",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:espree@3.4.2": {
      "map": {
        "acorn-jsx": "npm:acorn-jsx@3.0.1",
        "acorn": "npm:acorn@5.0.3"
      }
    },
    "npm:buffer@5.0.6": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:debug@2.6.4": {
      "map": {
        "ms": "npm:ms@0.7.3"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:js-yaml@3.8.3": {
      "map": {
        "argparse": "npm:argparse@1.0.9",
        "esprima": "npm:esprima@3.1.3"
      }
    },
    "npm:readable-stream@2.2.9": {
      "map": {
        "string_decoder": "npm:string_decoder@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "core-util-is": "npm:core-util-is@1.0.2"
      }
    },
    "npm:string_decoder@1.0.0": {
      "map": {
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:es6-map@0.1.5": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es6-set": "npm:es6-set@0.1.5",
        "event-emitter": "npm:event-emitter@0.3.5",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "es5-ext": "npm:es5-ext@0.10.15"
      }
    },
    "npm:es6-weak-map@2.0.2": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "es5-ext": "npm:es5-ext@0.10.15"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.9.1",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:es6-iterator@2.0.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "es5-ext": "npm:es5-ext@0.10.15"
      }
    },
    "npm:es6-set@0.1.5": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "event-emitter": "npm:event-emitter@0.3.5",
        "es5-ext": "npm:es5-ext@0.10.15"
      }
    },
    "npm:event-emitter@0.3.5": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.15"
      }
    },
    "npm:es6-symbol@3.1.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.15"
      }
    },
    "npm:d@1.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.15"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "brorand": "npm:brorand@1.1.0",
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:es5-ext@0.10.15": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.1",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:resolve@1.3.3": {
      "map": {
        "path-parse": "npm:path-parse@1.0.5"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:brace-expansion@1.1.7": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:rimraf@2.6.1": {
      "map": {
        "glob": "npm:glob@7.1.1"
      }
    },
    "npm:@types/react-dom@15.5.0": {
      "map": {
        "@types/react": "npm:@types/react@15.0.23"
      }
    },
    "npm:firebase@3.9.0": {
      "map": {
        "dom-storage": "npm:dom-storage@2.0.2",
        "faye-websocket": "npm:faye-websocket@0.9.3",
        "xmlhttprequest": "npm:xmlhttprequest@1.8.0",
        "promise-polyfill": "npm:promise-polyfill@6.0.2",
        "jsonwebtoken": "npm:jsonwebtoken@7.4.0"
      }
    },
    "npm:faye-websocket@0.9.3": {
      "map": {
        "websocket-driver": "npm:websocket-driver@0.6.5"
      }
    },
    "npm:jsonwebtoken@7.4.0": {
      "map": {
        "jws": "npm:jws@3.1.4",
        "lodash.once": "npm:lodash.once@4.1.1",
        "xtend": "npm:xtend@4.0.1",
        "joi": "npm:joi@6.10.1",
        "ms": "npm:ms@0.7.3"
      }
    },
    "npm:redux-logger@3.0.1": {
      "map": {
        "deep-diff": "npm:deep-diff@0.3.4"
      }
    },
    "npm:websocket-driver@0.6.5": {
      "map": {
        "websocket-extensions": "npm:websocket-extensions@0.1.1"
      }
    },
    "npm:jws@3.1.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "base64url": "npm:base64url@2.0.0",
        "jwa": "npm:jwa@1.1.5"
      }
    },
    "npm:jwa@1.1.5": {
      "map": {
        "base64url": "npm:base64url@2.0.0",
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "buffer-equal-constant-time": "npm:buffer-equal-constant-time@1.0.1",
        "ecdsa-sig-formatter": "npm:ecdsa-sig-formatter@1.0.9"
      }
    },
    "npm:joi@6.10.1": {
      "map": {
        "isemail": "npm:isemail@1.2.0",
        "hoek": "npm:hoek@2.16.3",
        "topo": "npm:topo@1.1.0",
        "moment": "npm:moment@2.18.1"
      }
    },
    "npm:topo@1.1.0": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:ecdsa-sig-formatter@1.0.9": {
      "map": {
        "base64url": "npm:base64url@2.0.0",
        "safe-buffer": "npm:safe-buffer@5.0.1"
      }
    },
    "npm:react@15.4.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.12",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:react-dom@15.4.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.12",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    }
  }
});
