# connexion-api-sdk-js
![GitHub last commit](https://img.shields.io/github/last-commit/Connector-Gamefi/connexion-api-sdk-js)
![GitHub top language](https://img.shields.io/github/languages/top/Connector-Gamefi/connexion-api-sdk-js?color=red)
# API Documentation
- [Official documentation](https://docs.connexion.games/openapi-en)

# Usage

```javaScript
import { toSha } from "./crypto/tosha.js"
```

## api request example
```javaScript
import { toSha } from "./crypto/tosha.js"

const params = {"topNum":"5","timestamp":"1675998834"}

// toSha(key, value)
toSha({"topNum":"5","timestamp":"1675998834"}, 'a05315753c2842598ee5daca4f7ef399')
```


