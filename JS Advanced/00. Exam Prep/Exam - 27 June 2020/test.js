Unexpected error: Incorrect output: expected 'SoftCare is 20% busy today!\nTotal profit: 500$\nAnna Morgan with:\n---Max - a dog that needs: SK456, DFG45, KS456\nJim Jones with:\n---Tiny - a cat that needs: \n---Tom - a cat that needs: A154B, 2C32B, 12CDB' to equal 'SoftCare is 20% busy today!\nTotal profit: 500.00$\nAnna Morgan with:\n---Max - a dog that needs: SK456, DFG45, KS456\nJim Jones with:\n---Tiny - a cat that needs: \n---Tom - a cat that needs: A154B, 2C32B, 12CDB'

//Zero test 2 - same + toString
let VeterinaryClinic = result;
        let clinic = new VeterinaryClinic('SoftCare', 10);
        clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']);          
        clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456'])
        clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])
        clinic.onLeaving('Jim Jones', 'Tiny');
        
        let string = `SoftCare is 20% busy today!
Total profit: 500.00$
Anna Morgan with:
---Max - a dog that needs: SK456, DFG45, KS456
Jim Jones with:
---Tiny - a cat that needs: 
---Tom - a cat that needs: A154B, 2C32B, 12CDB`;
        expect(clinic.toString()).to.be.equal(string, 'Incorrect output');
