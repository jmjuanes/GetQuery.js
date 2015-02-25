# GetQuery.js

Easy way to handling query string parameters.


## Installation

First, you must add GetQuery.js to your HTML document:

```html
<script type="text/javascript" src="https://jmjuanes.github.io/GetQuery.js/getquery.js"></script>
```

Where **https://jmjuanes.github.io/GetQuery.js/** is the url to this repo. You can change this if you have a local copy of **GetQuery.js**. 

You can create an array with the query string parameters:

```javascript
//For example, if the url is: http://www.some.com/index.html?lang=en
//Get an array with the query
var get = GetQuery();

//Access to the parameters
alert(get['lang']); // -> Prints 'en'
```


## License

**GetQuery.js** is under the [MIT License](LICENSE).

[www.jmjuanes.es](http://www.jmjuanes.es/).

:)