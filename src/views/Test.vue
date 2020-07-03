<template>
    <div class="test">
        <h1>test page</h1>
        <h1>test count: {{count}}</h1>
        <div>count * 2 = {{doubleCount}}</div>
        <h1>count * 3: {{trebleCount}}</h1>
        <button @click="add">add</button>
        <button @click="initCount">init</button>
    </div>
</template>

<script>
    import { ref, computed, watch } from 'vue'
    export default {
        name: "Test",
        setup () {
            // count and add start
            const count = ref(1)
            const add = () => {
                console.log(count)
                count.value++
            }
            watch(() => count.value, val => {
                console.log(`count is ${val}`)
            })
            const doubleCount = computed(() => count.value * 2)
            const trebleCount = ref(3)
            const initCount = () => {
                count.value ++
                trebleCount.value = init(count)
            }
            watch(() => trebleCount.value, val => {
                console.log(`trebleCount is ${val}`)
            })
            return {
                count,
                doubleCount,
                trebleCount,
                add,
                initCount
            }
        }
    }
    function init(num) {
        return num.value * 3
    }
</script>

<style lang="less" scoped>
    .test {
        color: red;
    }
</style>
