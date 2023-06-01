<template>

    <div v-if="post">
        <img v-if="post.cover_image" :src="`${this.store.baseUrl}/storage/${post.cover_image}`" class="img-fluid"/>
        <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="img-fluid"/>
        <h1>{{post.title}}</h1>
        <h5>{{post.category?.name}}</h5>
        <span v-for="tag in post.tags" class="badge rounded-pill text-bg-primary">{{ tag.name }}</span>
        <p>{{post.content}}</p>

        <router-link :to="{name: 'single-post', params: {cicciobello: 'pippo-pippo'}}" class="btn btn-primary">
            Vedi Post Pippo Pippo
        </router-link>


    </div>
    <div v-else>
        <img src="/loader.gif" alt="Caricamento in corso"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        name: 'SinglePost',
        data() {
            return {
                store,
                post: null
            }
        },
        mounted() {
            const slug = this.$route.params.cicciobello;
            
            axios.get(`${this.store.baseUrl}/api/posts/${slug}`)
            .then(response => {
                if (response.data.success == true) {
                    this.post = response.data.post;
                } else {
                    //alert(response.data.error);

                    this.$router.push({name: 'not-found'});
                }
                
            });

        }
    }
</script>