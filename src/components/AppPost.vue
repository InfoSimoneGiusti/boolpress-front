<template>
    <div class="card">
        <img v-if="post.cover_image" :src="`${this.store.baseUrl}/storage/${post.cover_image}`" class="card-img-top">
        <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top"/>
        <div class="card-body">            
            <h5 class="card-title">{{post.title}}</h5>
            <h5>{{post.category?.name}}</h5>
            <span v-for="tag in post.tags" class="badge rounded-pill text-bg-primary">{{ tag.name }}</span>
            <p class="card-text">{{truncateText(post.content)}}</p>
            <router-link :to="{name: 'single-post', params: {cicciobello: post.slug}}" class="btn btn-primary">
                Vedi post completo
            </router-link>
        </div>
    </div>
</template>

<script>
    import { store } from '../store.js';

    export default {
        name: 'AppPost',
        props: ['post'],
        data() {
            return {
                contentMaxLength: 200,
                store
            }
        },
        methods: {
            truncateText(text) {
                if (text && text.length > this.contentMaxLength) {
                    return text.substr(0, this.contentMaxLength) + '...';
                }
                return text;
            }
        }
    };
</script>