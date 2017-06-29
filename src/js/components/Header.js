import Component from './Component';
import App from '../app';

class Header extends Component {
    
    constructor() {
        super();
    }

    render() {
        return `

            <header class="top-header" onclick="document.componentRegistry[${this._id}].updateCount()">
                <h1>Pure Reactive UI</h1>
                <h2>Blog Page</h2>
            </header>

        `
    }

    updateCount() {
        console.log('asd');
        this.state.count++;
        App.update();
    }

}


export default Header;