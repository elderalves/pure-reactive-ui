class Component {

    constructor() {
        this._id = ++document.nextId;
        this._key = "uid_" + this._id;
        document.componentRegistry[this._id] = this;
    }

}


export default Component;