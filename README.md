# gulp-coffee-includer

*Using gulp-coffee-includer you can finally include files with proper intendation.*

## Installation

```bash
npm install gulp-coffee-includer --save-dev
```

## Usage

### gulpfile.js

```javascript
const gulp = require('gulp');
const CI = require('gulp-coffee-includer');
const coffee = require('gulp-coffee');

gulp.task('build', function(){
  gulp.src('main.coffee')
  .pipe(CI)
  .pipe(coffee())
  .pipe(gulp.dest('build'))
});
```

### Include statements

main.coffee

```coffeescript
foo = ->
  bar()
  #intend include statement according to current scope
  #=include <path/to/file.coffee>
```

file.coffee

```coffeescript
do awsome_things in coding unless
  awsome_things is boring
```

output.coffee

```coffeescript
foo = ->
  bar()
  #file.coffee contents is placed, where you need it!
  do awsome_things in coding unless
    awsome_things is boring
```

## Looking for CLI version?

### See [*coffee-includer*](https://github.com/Zydnar/coffee-includer.git)

## License

### MIT