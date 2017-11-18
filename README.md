# &lt;hz-range&gt;

Custom element range component, a part of Bigfoot UI kit.

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/zhukovka/hz-range)

[Live Demo ↗](https://jsfiddle.net/p7j9608w/2/)

## Installation

``` npm install bigfoot-ui ```

## Usage

1. full library with polyfills

index.js

```
import * as bigfootui from "bigfoot-ui";
```

index.html

```
<html lang="en">
    <body>
        <hz-range></hz-range>
        <div id="hzrange"></div>
        <script src="index.js"></script>
        <script>
                document.querySelector("hz-range").addEventListener("range-change", (e)=>{
                    hzrange.innerText = e.detail
                })
        </script>
    </body>
</html>
```

<!--
```
<custom-element-demo>
  <template>
    <script src="index.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<div>
    <hz-range></hz-range>
</div>
```


## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

Apache License 2.0

