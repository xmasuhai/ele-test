<script lang="ts" name="Login" setup>
/* ref */
// const count: Ref<number> = ref(0)

/* reactive */
// interface Num {count?: number}
// const state: Num = reactive<{count: number}>({ count: 0 })

/* props */ // Syntax Limitations: https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
// const props = defineProps({ foo: { type: String, required: true },}) // runtime props option
// const props = defineProps<{ msg: string }>() // generic type argument
// cannot use both runtime and generic at the same time
/* move the props types into a separate interface + Props Default Values */
/*
interface Props {
  foo: string
  bar?: number
}
const props = withDefaults(defineProps<Props>(), {...})
*/
// const { name, count = 100 } = defineProps<Props>() // vue@^3.2.25+ need set vite.config.js // https://vuejs.org/guide/extras/reactivity-transform.html#explicit-opt-in
/* PropType */
// import type { PropType } from 'vue'
// interface Book { title: string }
// const props = defineProps({ book: Object as PropType<Book> })

/* emits */
// const emit = defineEmits(['change', 'update']) // runtime
// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>() // type-based

/* methods */
// const increment = () => {count.value++} // ref
// const increment = () => {state.count++} // reactive
// emit('change') // emits

/* computed */
// const doubleCount = computed<number>(() => {() => count.value * 2})

/* watch */
// watch(anyRef, async (new, old) => {}, { deep: true, immediate: true }) // single ref
// watch(() => x.value + reactiveObj.count, (returnOfGetter) => {}, ) // getter // watch a property of a reactive object only by getter, deep by default
// watch([x, () => y.value], ([newX, newY], returnOfGetter) => {}, ) // array of multiple sources
// watchEffect(async () => { data.value = await fetch('...') }) // watch automatically, immediately by default
/* using watchEffect, only properties accessed before the first await tick will be tracked */

/* Event Handlers: <input type="text" @change="handleChange" /> */
// const eventHandler = (e: Event) => {console.log((event.target as HTMLInputElement).value)}

/*  Provide/Inject */
// import type { InjectionKey } from 'vue'
// const key = Symbol() as InjectionKey<string>
// provide(key, 'foo') // providing non-string value will result in error
// in other component: // const foo = inject(key) // type of foo: string | undefined

/* Template Refs */
/* html elements */
// <input ref="el" />
// const el = ref<HTMLInputElement | null>(null)
// onMounted(() => { el.value?.focus() }) // use optional chaining or type guards
/* components: invoke method expose by Child Comp */
// const open = () => (isContentShown.value = true) // in Child Comp
// defineExpose({ open })
// import MyComp from './MyComp.vue' // in Parent Comp
// const modal = ref<InstanceType<typeof MyModal> | null>(null)
// const openModal = () => { modal.value?.open() }
</script>

<template>
  <div class="red-border">
    登录组件
  </div>
</template>

<style lang="scss" scoped>
.red-border {
  border: 1px solid red;
}
</style>
