import Chord from './Chord.vue';

module.exports = {
    install: function (Vue, options) {
        Vue.component('vue-guitar-chords', Chord);
    }
};
