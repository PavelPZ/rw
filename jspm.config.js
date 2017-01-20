SystemJS.config({
  production: false,
  baseURL: "/",
  paths: {
    "npm:": "jspm_packages/npm/",
    "config": "./app-config.js",
    "react-cdn": "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js",
    "react-dom-cdn": "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"
  },
  browserConfig: {
    "bundles": {
      "bundle.js": [
        "rw-router/test.js",
        "rw-router/index.js",
        "rw-router/url-parser.js",
        "config",
        "rw-router/state.js",
        "npm:lodash@4.17.4/isEqual.js",
        "npm:lodash@4.17.4.json",
        "npm:lodash@4.17.4/_baseIsEqual.js",
        "npm:lodash@4.17.4/isObjectLike.js",
        "npm:lodash@4.17.4/_baseIsEqualDeep.js",
        "npm:lodash@4.17.4/isTypedArray.js",
        "npm:lodash@4.17.4/_nodeUtil.js",
        "npm:lodash@4.17.4/_freeGlobal.js",
        "npm:lodash@4.17.4/_baseUnary.js",
        "npm:lodash@4.17.4/_baseIsTypedArray.js",
        "npm:lodash@4.17.4/isLength.js",
        "npm:lodash@4.17.4/_baseGetTag.js",
        "npm:lodash@4.17.4/_objectToString.js",
        "npm:lodash@4.17.4/_getRawTag.js",
        "npm:lodash@4.17.4/_Symbol.js",
        "npm:lodash@4.17.4/_root.js",
        "npm:lodash@4.17.4/isBuffer.js",
        "npm:lodash@4.17.4/stubFalse.js",
        "npm:lodash@4.17.4/isArray.js",
        "npm:lodash@4.17.4/_getTag.js",
        "npm:lodash@4.17.4/_toSource.js",
        "npm:lodash@4.17.4/_WeakMap.js",
        "npm:lodash@4.17.4/_getNative.js",
        "npm:lodash@4.17.4/_getValue.js",
        "npm:lodash@4.17.4/_baseIsNative.js",
        "npm:lodash@4.17.4/isObject.js",
        "npm:lodash@4.17.4/_isMasked.js",
        "npm:lodash@4.17.4/_coreJsData.js",
        "npm:lodash@4.17.4/isFunction.js",
        "npm:lodash@4.17.4/_Set.js",
        "npm:lodash@4.17.4/_Promise.js",
        "npm:lodash@4.17.4/_Map.js",
        "npm:lodash@4.17.4/_DataView.js",
        "npm:lodash@4.17.4/_equalObjects.js",
        "npm:lodash@4.17.4/_getAllKeys.js",
        "npm:lodash@4.17.4/keys.js",
        "npm:lodash@4.17.4/isArrayLike.js",
        "npm:lodash@4.17.4/_baseKeys.js",
        "npm:lodash@4.17.4/_nativeKeys.js",
        "npm:lodash@4.17.4/_overArg.js",
        "npm:lodash@4.17.4/_isPrototype.js",
        "npm:lodash@4.17.4/_arrayLikeKeys.js",
        "npm:lodash@4.17.4/_isIndex.js",
        "npm:lodash@4.17.4/isArguments.js",
        "npm:lodash@4.17.4/_baseIsArguments.js",
        "npm:lodash@4.17.4/_baseTimes.js",
        "npm:lodash@4.17.4/_getSymbols.js",
        "npm:lodash@4.17.4/stubArray.js",
        "npm:lodash@4.17.4/_arrayFilter.js",
        "npm:lodash@4.17.4/_baseGetAllKeys.js",
        "npm:lodash@4.17.4/_arrayPush.js",
        "npm:lodash@4.17.4/_equalByTag.js",
        "npm:lodash@4.17.4/_setToArray.js",
        "npm:lodash@4.17.4/_mapToArray.js",
        "npm:lodash@4.17.4/_equalArrays.js",
        "npm:lodash@4.17.4/_cacheHas.js",
        "npm:lodash@4.17.4/_arraySome.js",
        "npm:lodash@4.17.4/_SetCache.js",
        "npm:lodash@4.17.4/_setCacheHas.js",
        "npm:lodash@4.17.4/_setCacheAdd.js",
        "npm:lodash@4.17.4/_MapCache.js",
        "npm:lodash@4.17.4/_mapCacheSet.js",
        "npm:lodash@4.17.4/_getMapData.js",
        "npm:lodash@4.17.4/_isKeyable.js",
        "npm:lodash@4.17.4/_mapCacheHas.js",
        "npm:lodash@4.17.4/_mapCacheGet.js",
        "npm:lodash@4.17.4/_mapCacheDelete.js",
        "npm:lodash@4.17.4/_mapCacheClear.js",
        "npm:lodash@4.17.4/_ListCache.js",
        "npm:lodash@4.17.4/_listCacheSet.js",
        "npm:lodash@4.17.4/_assocIndexOf.js",
        "npm:lodash@4.17.4/eq.js",
        "npm:lodash@4.17.4/_listCacheHas.js",
        "npm:lodash@4.17.4/_listCacheGet.js",
        "npm:lodash@4.17.4/_listCacheDelete.js",
        "npm:lodash@4.17.4/_listCacheClear.js",
        "npm:lodash@4.17.4/_Hash.js",
        "npm:lodash@4.17.4/_hashSet.js",
        "npm:lodash@4.17.4/_nativeCreate.js",
        "npm:lodash@4.17.4/_hashHas.js",
        "npm:lodash@4.17.4/_hashGet.js",
        "npm:lodash@4.17.4/_hashDelete.js",
        "npm:lodash@4.17.4/_hashClear.js",
        "npm:lodash@4.17.4/_Uint8Array.js",
        "npm:lodash@4.17.4/_Stack.js",
        "npm:lodash@4.17.4/_stackSet.js",
        "npm:lodash@4.17.4/_stackHas.js",
        "npm:lodash@4.17.4/_stackGet.js",
        "npm:lodash@4.17.4/_stackDelete.js",
        "npm:lodash@4.17.4/_stackClear.js",
        "npm:lodash@4.17.4/valuesIn.js",
        "npm:lodash@4.17.4/keysIn.js",
        "npm:lodash@4.17.4/_baseKeysIn.js",
        "npm:lodash@4.17.4/_nativeKeysIn.js",
        "npm:lodash@4.17.4/_baseValues.js",
        "npm:lodash@4.17.4/_arrayMap.js",
        "rw-router/router.js",
        "rw-redux/index.js",
        "rw-redux/match-media.js",
        "rw-redux/block-gui.js",
        "npm:react-redux@4.4.6/lib/index.js",
        "npm:react-redux@4.4.6.json",
        "npm:jspm-nodelibs-process@0.2.0/process.js",
        "npm:jspm-nodelibs-process@0.2.0.json",
        "npm:react-redux@4.4.6/lib/components/connect.js",
        "npm:invariant@2.2.2/browser.js",
        "npm:invariant@2.2.2.json",
        "npm:hoist-non-react-statics@1.2.0/index.js",
        "npm:hoist-non-react-statics@1.2.0.json",
        "npm:lodash@4.17.4/isPlainObject.js",
        "npm:lodash@4.17.4/_getPrototype.js",
        "npm:react-redux@4.4.6/lib/utils/warning.js",
        "npm:react-redux@4.4.6/lib/utils/wrapActionCreators.js",
        "npm:redux@3.6.0/lib/index.js",
        "npm:redux@3.6.0.json",
        "npm:redux@3.6.0/lib/utils/warning.js",
        "npm:redux@3.6.0/lib/compose.js",
        "npm:redux@3.6.0/lib/applyMiddleware.js",
        "npm:redux@3.6.0/lib/bindActionCreators.js",
        "npm:redux@3.6.0/lib/combineReducers.js",
        "npm:redux@3.6.0/lib/createStore.js",
        "npm:symbol-observable@1.0.4/index.js",
        "npm:symbol-observable@1.0.4.json",
        "npm:symbol-observable@1.0.4/lib/index.js",
        "npm:symbol-observable@1.0.4/lib/ponyfill.js",
        "npm:react-redux@4.4.6/lib/utils/shallowEqual.js",
        "npm:react-redux@4.4.6/lib/utils/storeShape.js",
        "npm:react-redux@4.4.6/lib/components/Provider.js",
        "rw-redux/app-loader.js",
        "npm:redux-logger@2.7.4/lib/index.js",
        "npm:redux-logger@2.7.4.json",
        "npm:redux-logger@2.7.4/lib/defaults.js",
        "npm:redux-logger@2.7.4/lib/helpers.js",
        "npm:redux-logger@2.7.4/lib/core.js",
        "npm:redux-logger@2.7.4/lib/diff.js",
        "npm:deep-diff@0.3.4/index.js",
        "npm:deep-diff@0.3.4.json",
        "rw-redux/recordings.js",
        "rw-redux/recording.js",
        "npm:tslib@1.5.0/tslib.js",
        "npm:tslib@1.5.0.json",
        "rw-redux/async.js",
        "rw-router/route-hook.js",
        "rw-router/lib.js",
        "rw-gui-rt/block-gui/index.js",
        "rw-gui-rt/theme.js",
        "npm:react-toolbox@1.3.2/lib/overlay/Overlay.js",
        "npm:react-toolbox@1.3.2.json",
        "npm:react-toolbox@1.3.2/lib/hoc/Portal.js",
        "npm:react-toolbox@1.3.2/lib/identifiers.js",
        "npm:react-css-themr@1.7.1/lib/index.js",
        "npm:react-css-themr@1.7.1.json",
        "npm:react-css-themr@1.7.1/lib/components/themr.js",
        "npm:react-css-themr@1.7.1/lib/components/ThemeProvider.js",
        "npm:react-css-themr@1.7.1/lib/utils/themr-shape.js",
        "npm:classnames@2.2.5/index.js",
        "npm:classnames@2.2.5.json",
        "rw-gui-rt/get-app-root.js",
        "rw-gui-rt/recordings/index.js",
        "npm:react-toolbox@1.3.2/lib/button/Button.js",
        "npm:react-toolbox@1.3.2/lib/ripple/Ripple.js",
        "npm:react-toolbox@1.3.2/lib/utils/utils.js",
        "npm:react-toolbox@1.3.2/lib/utils/prefixer.js",
        "npm:react-toolbox@1.3.2/lib/utils/events.js",
        "npm:immutability-helper@2.1.1/index.js",
        "npm:immutability-helper@2.1.1.json",
        "npm:react-toolbox@1.3.2/lib/font_icon/FontIcon.js"
      ]
    }
  },
  packages: {
    "rw-lib": {
      "defaultExtension": "js"
    },
    "rw-gui-rt": {
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
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "load-script": "npm:load-script@1.0.0",
    "react": "react-cdn",
    "react-dom": "react-dom-cdn",
    "@types/lodash": "npm:@types/lodash@4.14.50",
    "@types/react": "npm:@types/react@0.14.57",
    "@types/react-dom": "npm:@types/react-dom@0.14.20",
    "@types/react-redux": "npm:@types/react-redux@4.4.35",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "classnames": "npm:classnames@2.2.5",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "domain": "npm:jspm-nodelibs-domain@0.2.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "immutability-helper": "npm:immutability-helper@2.1.1",
    "lodash": "npm:lodash@4.17.4",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "react-addons-css-transition-group": "npm:react-addons-css-transition-group@15.4.2",
    "react-css-themr": "npm:react-css-themr@1.7.1",
    "react-toolbox": "npm:react-toolbox@1.3.2",
    "react-redux": "npm:react-redux@4.4.6",
    "redux": "npm:redux@3.6.0",
    "redux-logger": "npm:redux-logger@2.7.4",
    "reselect": "npm:reselect@2.5.4",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "tslib": "npm:tslib@1.5.0",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "whatwg-fetch": "npm:whatwg-fetch@2.0.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:react-toolbox@1.3.2": {
      "map": {
        "react-css-themr": "npm:react-css-themr@1.7.1",
        "core-js": "npm:core-js@2.4.1",
        "normalize.css": "npm:normalize.css@4.2.0"
      }
    },
    "npm:@types/react-redux@4.4.35": {
      "map": {
        "@types/react": "npm:@types/react@0.14.57",
        "redux": "npm:redux@3.6.0"
      }
    },
    "npm:react-redux@4.4.6": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "invariant": "npm:invariant@2.2.2",
        "loose-envify": "npm:loose-envify@1.3.1",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0"
      }
    },
    "npm:redux-logger@2.7.4": {
      "map": {
        "deep-diff": "npm:deep-diff@0.3.4"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
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
    "npm:fbjs@0.8.8": {
      "map": {
        "core-js": "npm:core-js@1.2.7",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.12"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.1",
        "node-fetch": "npm:node-fetch@1.6.3"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.5"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:node-fetch@1.6.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.6.2"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.15"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.0": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.9"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.2"
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
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.9.1"
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
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:sha.js@2.4.8": {
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
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:@types/react-dom@0.14.20": {
      "map": {
        "@types/react": "npm:@types/react@0.14.57"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:react-css-themr@1.7.1": {
      "map": {
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:react-addons-css-transition-group@15.4.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.8",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:immutability-helper@2.1.1": {
      "map": {
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:stream-http@2.6.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "readable-stream": "npm:readable-stream@2.2.2",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.0"
      }
    }
  }
});
