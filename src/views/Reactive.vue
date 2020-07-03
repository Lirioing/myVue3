<template>
    <div class="reactive">
        <h1>Reactive page</h1>
        <h1>Reactive count: {{state.count}}</h1>
        <h1>count * 2 = {{state.doubleCount}}</h1>
        <h1>count * 3: {{state.trebleCount}}</h1>
        <button @click="add">add</button>
    </div>
</template>

<script>
    import { reactive, computed, watch } from 'vue'
    export default {
        name: "Reactive",
        setup(){
            const state = reactive({
                count: 0,
                doubleCount: computed(() => state.count * 2),
                trebleCount: 0
            })
            const add = () =>{
                state.count++
            }
            watch(() => state.count, val => {
                console.log(`trebleCount is ${val}`)
                state.trebleCount = val * 3
            })
            return{
                state,
                add
            }
        }
    }
</script>

<style scoped>
.reactive{
    color: burlywood;
}
</style>
