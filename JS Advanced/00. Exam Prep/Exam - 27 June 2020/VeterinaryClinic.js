class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.currentWorkload = 0;
        this.totalProfit = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        let customer = this.clients.find(a => a.ownerName == ownerName);
        if (customer == undefined) {
            customer = {
                ownerName,
                pets: [],
            };
            this.clients.push(customer);
        }
        let pet = customer.pets.find(a => a.petName == [petName]);
        if (pet == undefined) {
            pet = {
                petName,
                kind: kind.toLowerCase(),
                procedures
            };
            customer.pets.push(pet);
            this.currentWorkload++;
            return `Welcome ${petName}!`;
        } else {
            if (pet.procedures.length > 0) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${pet.procedures.join(', ')}.`);
            }
            if (this.capacity <= this.currentWorkload) {
                throw new Error('Sorry, we are not able to accept more patients!');
            }
            this.currentWorkload++;
            pet.procedures = procedures;
            return `Welcome ${petName}!`;
        }
    };

    onLeaving(ownerName, petName) {
        let customer = this.clients.find(a => a.ownerName == ownerName);
        if (customer == undefined) {
            throw new Error('Sorry, there is no such client!');
        }
        let pet = customer.pets.find(a => a.petName == [petName]);
        if (pet == undefined || pet.procedures.length == 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }
        this.totalProfit += pet.procedures.length * 500;
        this.currentWorkload--;
        pet.procedures.length = 0;
        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        let percentage = Math.floor(this.currentWorkload / this.capacity * 100).toFixed(0);
        let sortedClients = this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName)).map(a => {
            let [ownerName, pets] = Object.values(a);
            let sortedPets = pets.sort((a, b) => a.petName.localeCompare(b.petName)).map(a => `---${a.petName} - a ${a.kind} that needs: ${a.procedures.join(', ')}`);
            return `${ownerName} with:\n${sortedPets.join('\n')}`;
        });
        let output = [`${this.clinicName} is ${percentage}% busy today!`, `Total profit: ${this.totalProfit.toFixed(2)}$`, ...sortedClients];
        return output.join('\n');
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());
