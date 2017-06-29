import Component from './Component';
import Edit from './Edit';
import App from '../app';

class Post extends Component {
    constructor(props) {
        super();

        this.state = {
            author: props.author,
            thumb: props.thumb,
            title: props.title,
            body: props.body,
            time: props.time
        };

        this.edit = new Edit(this);
    }

    render() {
        return `
            <article id="${this._key}">
                <header>
                    <a href="#." class="btn-edit" onclick="document.componentRegistry[${this._id}].showEdit(this)">+</a>
                    <img src="${this.state.thumb}" />
                    <div class="caption">
                        <p>${this.state.author}</p>
                        <h3>${this.state.title}</h3>
                    </div>
                </header>
                <p class="reading-time">${this.state.time} min</p>
                <h1>${this.state.title}</h1>
                <p>${this.state.body}</p>
            </article>
        `
    }

    setTitle(title) {
        this.state.title = title;
        this.update();
    }

    setBody(body) {
        this.state.body = body;
        this.update();
    }

    showEdit(element) {
        let postItem = element.parentNode.parentNode.parentNode;
        let editElement = postItem.querySelector('.edit-modal');
        editElement.classList.add('show');
    }

    update() {
        document.querySelector("#" + this._key).outerHTML = this.render();
    }
}

export default Post;