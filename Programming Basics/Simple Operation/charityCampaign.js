function charityCampaign (d,pc,c,w,p){
    let days = Number(d);
    let pastryChefs = Number(pc);
    let cakes = Number(c);
    let waffles = Number(w);
    let pancakes = Number(p);
    
    let dailyProduction = (cakes * 45 + waffles * 5.8 + pancakes * 3.2) * pastryChefs;
    let totalProduction = dailyProduction * days;
    let charityDonation = totalProduction * 7 / 8;

    // console.log(dailyProduction);
    // console.log(totalProduction);
    console.log(charityDonation.toFixed(2));
}

charityCampaign (20,8,14,30,16);