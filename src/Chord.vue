<template>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="80" height="80">
    <text x="60" y="14" fill="black" fontSize="12" fontStyle="italic">
        {{ (barre === 0) ? '' : (barre + 'fr') }}
    </text>
    <text x="20" y="78" fontSize="10" fill="red">
        {{name}}
    </text>
    {{drawOpenStringNotes}}
    {{Fretboard}}
    {{drawNotes}}
</svg>
</template>

<script>

import FretUtil from './utils/fret';

export default {

    name:'vue-guitar-chords',

    props:{
        notes:{
            type:String,
            default:''
        },
        name:{
            type:String,
            default:'',
        },
        barre:{
            type:Number,
            default:0
        }
    },
    data:{
        notesMap:'',
    },
    
    computed:{
        
        drawOpenStringNotes(){
            return FretUtil.drawOpenStringNotes(this.notesMap);
        },
        Fretboard(){
            return FretUtil.drawFretboard()
        },
        drawNotes(){
            return FretUtil.drawNotes(this.notesMap, this.barre)
        }
    },
    methods:{
        mapNote() {
            this.notesMap = this.notes.split('').map(function(item) {
                if (item === 'x') return -1;
                return parseInt(item, 10);
            });
        }
    },
    created(){
        this.mapNote();
    },
}
</script>
