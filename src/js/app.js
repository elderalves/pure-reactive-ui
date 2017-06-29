import { blogPosts } from './model/posts';
import Header from './components/Header';
import Blog from './components/Blog';
import Animations from './utils/Animations';

class App {
    constructor() {
        document.componentRegistry = {};
        document.nextId = 0;
        
        // init Components
        this.header = new Header();
        this.blog = new Blog();
    }

    render() {
        return `
            <div>
                ${ this.header.render() }
                ${ this.blog.render() }
            </div>
        `
    }

    static update() {
        document.querySelector('#app').innerHTML = app.render();
    }
}

export default App;

let app = new App();

document.querySelector('#app').innerHTML = app.render();

let anima = new Animations();
anima.start.resume();