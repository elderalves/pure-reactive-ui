import { blogPosts } from '../model/posts';
import Component from "./Component";
import Post from "./Post";
import Edit from "./Edit";

class Blog extends Component {
    constructor() {
        super();

        this.posts = [];
        this.edits = [];

        // init
        this.loadPosts();
    }

    loadPosts() {
        blogPosts.map((post) => {
            let newPost = new Post(post);
            this.posts.push(newPost);
            this.edits.push(new Edit(newPost));
        });
    }

    render() {

        return `

            <div class="blog">

                ${ 
                    this.posts.map((post, index) => { 
                        return '<div class="post-item">' + post.render() + this.edits[index].render() + '</div>'
                    }).join('') 
                }

            </div>

        `
    }
}

export default Blog;