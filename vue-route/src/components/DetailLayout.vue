<template>
    <div>
        <div class="grid grid-cols-3">
            <div class="col-span-2 px-5 py-5 h-screen">
                <h3 class="font-bold text-2xl text-gray-700 text-left">
                    <button @click="$router.back()" class="bg-teal-400 text-white rounded-full p-2 mr-10">
                        <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-narrow-left w-6 h-6"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    {{ $route.name }}
                </h3>
                <div class="animate__animated animate__fadeIn py-5 grid grid-cols-1 gap-4">
                    <slot name="card" :data="data">
                        <card :data="data" />
                    </slot>
                </div>
            </div>
            <div class="col-span-1">
                <side-bar :model="model" :data="featuredData"></side-bar>
            </div>
        </div>
    </div>
</template>

<script>
import fetch from '@/plugins/fetch'
export default {
    props: ['data', 'model', 'featuredData']
}
</script>
