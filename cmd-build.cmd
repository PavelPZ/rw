d:
cd rw/rw
jspm build rw-router/test.js build.js --externals react --skip-source-maps --format umd --global-name test --global-deps "{'react':'React', 'react-dom':'ReactDOM'}"