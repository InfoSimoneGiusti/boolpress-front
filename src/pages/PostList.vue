<template>

    <div class="container">
        <div class="row">

            <div class="col-4" v-for="post in posts">
                <AppPost :post="post"></AppPost>
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <button 
                            @click="getPosts(currentPage - 1)" 
                            :class="{'disabled' : currentPage == 1, 'page-link': true}"
                        >
                            Previous
                        </button>
                    </li>
                    <li class="page-item">
                        <button 
                            @click="getPosts(currentPage + 1)" 
                            :class="{'disabled' : currentPage == lastPage, 'page-link': true}"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
            
        </div>
    </div>

</template>

<script>

    import axios from 'axios';
    import AppPost from '../components/AppPost.vue';
    import { store } from '../store.js';

    export default {
        name: 'PostList',
        data() {
            return {
                posts: [],
                store,
                currentPage: 1,
                lastPage: null
            }
        },
        components: {
            AppPost
        },
        methods: {
            getPosts(gotoPage) {
                console.log('Ciao mondo!');
                axios.get(`${this.store.baseUrl}/api/posts`,
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
            
        },
        mounted() {
            this.getPosts(1);
        }


    }


</script>