class Icon {

    constructor(iconName, size) {
        this.iconName = iconName;
        this.size = size || 'small'
        this.createIcon()
    }

    createIcon = () => {
        const element = document.createElement('i');
        element.classList.add('fas');
        element.classList.add(this.size);
        element.classList.add(this.iconName);

        this.icon = element;
    }

    getIcon = () => {
        return this.icon;
    }


}

export class AirFreshenerSmall extends Icon {
    constructor(iconName) {
        super(iconName || 'fa-air-freshener', 'small');
    }
}

export class AirFreshenerLarge extends Icon {
    constructor(iconName) {
        super(iconName || 'fa-air-freshener', 'large');
    }
}

export class Cat extends Icon {
    constructor() {
        super('fa-cat');
    }
}


export class Dragon extends Icon {
    constructor() {
        super('fa-dragon');
    }
}

export default Icon;