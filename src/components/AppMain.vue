<template>

    <div class="container">
        <div class="row">

            <div class="col-4" v-for="post in posts">
                <div class="card">
                    <img v-if="post.cover_image" :src="`${this.baseUrl}/storage/${post.cover_image}`" class="card-img-top">
                    <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">{{post.title}}</h5>
                        <h5>{{post.category?.name}}</h5>
                        <p class="card-text">{{truncateText(post.content)}}</p>
                        <a href="#" class="btn btn-primary">Vedi post completo ... </a>
                    </div>
                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><button class="page-link" @click="getPosts(currentPage - 1)" :class="{'disabled' : currentPage == 1}">Previous</button></li>
                    <li class="page-item"><button class="page-link" @click="getPosts(currentPage + 1)" :class="{'disabled' : currentPage == lastPage}">Next</button></li>
                </ul>
            </nav>
            
        </div>
    </div>

</template>

<script>

    import axios from 'axios';

    export default {
        name: 'AppMain',
        data() {
            return {
                posts: [],
                contentMaxLength: 200,
                baseUrl: 'http://localhost:8000',
                currentPage: 1,
                lastPage: null
            }
        },
        methods: {
            getPosts(gotoPage) {
                console.log('Ciao mondo!');

                axios.get(`${this.baseUrl}/api/posts`,
                    {
                        params: {
                            page: gotoPage
                        }
                    }
                )
                .then(response => {
                    console.log(response);
                    this.posts = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                });
            },
            truncateText(text) {
                if (text && text.length > this.contentMaxLength) {
                    return text.substr(0, this.contentMaxLength) + '...';
                }
                return text;
            }
        },
        mounted() {
            this.getPosts(1);
        }


    }


</script>