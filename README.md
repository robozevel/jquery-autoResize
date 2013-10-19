# jQuery.autoResize

autoResize is a plugin for auto-resizing textareas, expanding them to fit the text as you type.

It's based on a clean and simple technique that uses the scrollHeight style property, and doesn't create additional elements, as opposed to other plugins.

## Usage
It can be used either directly on an element, or indirectly on a container.

### Direct binding
```javascript
$("textarea").autoResize();
```

### Delegated binding
```javascript
$.autoResize("textarea");
```
Which is equivalent to:
```javascript
$(document).autoResize("textarea");
```

## Supports
* jQuery 1.7+
* Zepto

## Further reading
 [Expanding textareas the easy and clean way
](http://phaistonian.pblogs.gr/expanding-textareas-the-easy-and-clean-way.html) by [George Papadakis](https://github.com/phaistonian‎)
