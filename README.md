# vue-guitar-chords
Port from https://github.com/aliustaoglu/react-js-guitar-chords
A Vue component that shows a guitar chord.

This isn't particularly useful, it's used as a demo for how to publish Vue components to NPM!

## Installation

```js
npm i --save-dev vue-guitar-chords
```

### Browser

Include the script file, then install the component with `Vue.use(VueGuitarChords);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-guitar-chords/dist/vue-guitar-chords.min.js"></script>
<script type="text/javascript">
  Vue.use(VueGuitarChords);
</script>
```

### Module

```js
import VueGuitarChords from 'vue-guitar-chords';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<vue-guitar-chords></vue-guitar-chords>
```
