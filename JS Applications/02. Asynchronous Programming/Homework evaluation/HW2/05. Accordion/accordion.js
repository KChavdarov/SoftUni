window.onload = solution();

function solution() {

  
    async function loadAcordion(){

        const urlLIst = "http://localhost:3030/jsonstore/advanced/articles/list";
        
        const request = await fetch(urlLIst);
        const data = await request.json();




       (Object.values(data)).forEach(createAccordeon);

    }

    async function createAccordeon(obj){


        const url = "http://localhost:3030/jsonstore/advanced/articles/details/" + obj._id;

        let responce = await fetch(url);
        let data = await responce.json();

        let current = Object.values(data)
       // console.log(current);




        let divAcc = document.createElement("div");
        divAcc.setAttribute("class","accordion");

        let divH = document.createElement("div");
        divH.setAttribute("class","head");

        let divExtra = document.createElement("div");
        divExtra.setAttribute("class","extra");

        let p = document.createElement("p");
        p.textContent = current[2];
        divExtra.appendChild(p);

        let span = document.createElement("span");
        span.textContent = obj.title;

        let butn = document.createElement("button");
        butn.setAttribute("class","button");
        butn.setAttribute("id",obj._id);
        butn.textContent = "More";
        butn.addEventListener("click", showMore);

        divH.appendChild(span);
        divH.appendChild(butn)
        divAcc.appendChild(divH);
        divAcc.appendChild(divExtra);


        document.getElementById("main").appendChild(divAcc);
    }


    function showMore(e){

        let div = e.target.parentNode.parentNode.childNodes[1].style.display = "block";
        
        let btnLess = document.createElement("button");
        btnLess.classList = e.target.classList;
        btnLess.textContent = "Less";
        btnLess.addEventListener("click",showLess)

        e.target.parentNode.appendChild(btnLess);

        e.target.remove();


    }

    function showLess(e){

        let div = e.target.parentNode.parentNode.childNodes[1].style.display = "none";

        let btnMore = document.createElement("button");
        btnMore.classList = e.target.classList;
        btnMore.textContent = "More";
        btnMore.addEventListener("click",showMore)

        e.target.parentNode.appendChild(btnMore);

        e.target.remove();

    }

    loadAcordion()

    
}