import Component from './Component';

class Edit extends Component {
    constructor(post) {
        super();
        this.post = post;
    }

    render() {
        return `

            <div class="edit-modal">
                <a href="#." class="close-modal" onclick="document.componentRegistry[${this._id}].closeModal(this)">x</a>
                <form>
                    <div class="field">
                        <label>Post Title</label>
                        <input type="text" value="${this.post.state.title}" onkeyup="document.componentRegistry[${this.post._id}].setTitle(this.value)"/>
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <textarea onkeyup="document.componentRegistry[${this.post._id}].setBody(this.value)">${this.post.state.body}</textarea>
                    </div>
                </form>
            </div>

        `;
    }

    closeModal(element) {
        element.parentNode.classList.remove('show');
    }
}


export default Edit;