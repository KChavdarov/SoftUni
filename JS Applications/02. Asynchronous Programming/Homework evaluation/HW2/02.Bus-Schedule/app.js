function solve() {

    let departButton = document.getElementById("depart");
    departButton.addEventListener("click",depart);

    let arriveButton = document.getElementById("arrive");
    arriveButton.addEventListener("click",arrive);

    let div = document.getElementsByClassName("info")[0];
    console.log(div);

    let currStopId = {
        name: "stopName",
        next: "depot"
      };


    async function depart() {

        const url = "http://localhost:3030/jsonstore/bus/schedule/";

       

          let responce = await fetch(url + currStopId.next);
          let data = await responce.json();

          console.log();


          div.textContent = `Next stop ${data.name}`;
          currStopId = data;

          departButton.disabled = true;
          arriveButton.disabled = false;



    }

    function arrive() {
  

        div.textContent = div.textContent.replace("Next stop","Arriving at");

        departButton.disabled = false;
        arriveButton.disabled = true;
        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();