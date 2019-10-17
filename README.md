# Kasvilajitunnistus

Tree species identifying app for school kids made with Vue. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Deploy to Heroku
* heroku login
* heroku create puulajitunnistus
* heroku config:set NODE_ENV=production --app puulajitunnistus
* npm install express serve-static --save
* npm run build
* serves /dist directory (Vue compressed production build )
* testing: node server.js http://localhost:8080/
* add start script to package.json