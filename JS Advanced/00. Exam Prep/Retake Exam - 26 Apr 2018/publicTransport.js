class PublicTransportTable {
    constructor(townNAme) {
        this.townNAme = townNAme;
        this.vehicles = [];
        this.vehiclesInfo = document.querySelector('tbody.vehicles-info');

    }
    get townNAme() {
        return this._townNAme;
    }
    set townNAme(value) {
        this._townNAme = value;
        document.querySelector('table caption').textContent = `${value}'s Public Transport`;
        const tableHeader = document.querySelector('thead');
        tableHeader.addEventListener('click', this.buttonActions.bind(this));
    }

    addVehicle(vehicleObj) {
        const mainInfo = createElement('tr', ['class=main-info'],
            createElement('td', [], vehicleObj.type),
            createElement('td', [], vehicleObj.name),
            createElement('td', [], createElement('button', [], 'More Info'))
        );

        const additionalInfo = createElement('tr', ['class=more-info'],
            createElement('td', ['colspan=3'],
                createElement('table', [],
                    createElement('tr', [],
                        createElement('td', [], `Route: ${vehicleObj.route}`)
                    ),
                    createElement('tr', [],
                        createElement('td', [], `Price: ${vehicleObj.price}`)
                    ),
                    createElement('tr', [],
                        createElement('td', [], `Driver: ${vehicleObj.driver}`)
                    ),
                )
            )
        );

        const infoButton = mainInfo.querySelector('button');
        infoButton.addEventListener('click', toggleAdditionalInfo.bind(this));
        this.vehiclesInfo.appendChild(mainInfo);
        this.vehicles.push([mainInfo, additionalInfo]);

        function toggleAdditionalInfo(event) {
            if (infoButton.textContent == 'More Info') {
                this.vehiclesInfo.insertBefore(additionalInfo, mainInfo.nextSibling);
                infoButton.textContent = 'Less Info';
            } else {
                this.vehiclesInfo.removeChild(additionalInfo);
                infoButton.textContent = 'More Info';
            }
        }

        function createElement(type, attributes = [], ...content) {
            const result = document.createElement(type);
            if (attributes.length > 0) {
                attributes.forEach(attr => {
                    let [attribute, value] = attr.split('=');
                    result.setAttribute(attribute, value);
                });
            } content.forEach(e => {
                if (typeof e == 'string') {
                    let text = document.createTextNode(e);
                    result.appendChild(text);
                } else {
                    result.appendChild(e);
                }
            });
            return result;
        }
    }

    buttonActions(event) {
        const [typeInput, nameInput] = document.querySelectorAll('thead input');
        if ((event.target).className == 'search-btn') {
            this.vehicles.forEach(([mainInfo]) => mainInfo.style.display = '');
            const filtered = this.vehicles.filter(([mainInfo]) => !mainInfo.textContent.includes(typeInput.value) || !mainInfo.textContent.includes(nameInput.value));
            filtered.forEach(([mainInfo, additionalInfo]) => {
                mainInfo.style.display = 'none';
                if (mainInfo.querySelector('button').textContent == 'Less Info') {
                    this.vehiclesInfo.removeChild(additionalInfo);
                    mainInfo.querySelector('button').textContent = 'More Info';
                }
            });
        }

        if ((event.target).className == 'clear-btn') {
            typeInput.value = '';
            nameInput.value = '';
            this.vehicles.forEach(([mainInfo]) => mainInfo.style.display = '');
        }
    }
}