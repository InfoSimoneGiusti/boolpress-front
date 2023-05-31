<template>
    <h1>Questo è un post singolo</h1>
</template>

<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        name: 'SinglePost',
        data() {
            return {
                store
            }
        },
        mounted() {
            const slug = this.$route.params.slug;
            
            console.log(slug);

            axios.get(`${this.store.baseUrl}/api/post/${slug}`)
            .then(response => {
                console.log(response);
            });

        }
    }
</script>