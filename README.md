# angular-snake


## To run in Docker on port 8080

Build the repository
```
docker build -t angular-snake git@github.com:astrobass/angular-snake.git
```

Run the web server
```
docker run -d -p 8080:80 --name snake angular-snake
```

## To e2e run tests locally

Start local web server in app directory in background
```
cd app
http-server &
```

Start selenium standalone server in background
```
node_modules/selenium-standalone/bin/selenium-standalone start &
```

Run tests
```
npm test
```

