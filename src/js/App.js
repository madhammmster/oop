import Icon, { AirFreshenerSmall, AirFreshenerLarge, Cat, Dragon } from './Icon';

class App {
    constructor() {
        this.init();
        this.renderIcons();
    }

    init() {
        console.log(`App started`);
        this.app = document.querySelector('#app');
    }

    renderIcons = () => {
        this.app.appendChild(new AirFreshenerSmall('fa-wind').getIcon());
        this.app.appendChild(new AirFreshenerLarge().getIcon());
        this.app.appendChild(new AirFreshenerLarge().getIcon());
        this.app.appendChild(new Cat().getIcon());
        this.app.appendChild(new Dragon().getIcon());
    }
}

export default App;