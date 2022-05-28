# README

This project consists of a Rails API and a React frontend, using a 
SQLite database. 

For questions or comments, feel free to reach out to me at 
[wm96n2@gmail.com](mailto:wm96n2@gmail.com), or via
[LinkedIn](https://www.linkedin.com/in/weylin-morris/).

### Prerequisites
* Ruby 3.1.2
* Rails 7.0.3
* NodeJS 16.15.0

### Setup

#### Install Gems
```
$ bundle install
```

#### Install React Dependencies
```
$ yarn install
```

#### DB Migrations
```
$ rake db:reset db:migrate
```

#### Webpack
```
$ yarn build --watch
```

#### Tests
```
$ rspec
```

#### Development Server
```
$ rails server -b 0.0.0.0 -p <port> -e development
```
