function lockedProfile() {

    function createUser(e){
        let age = e.age;
        let email = e.email;
        let username = e.username;
        let id  = e._id;

        let div = document.createElement("div");
        div.setAttribute("class","profile");

        let img = document.createElement("img");
        img.src = "./iconProfile2.png";
        img.setAttribute("class","userIcon");

        let label1 = document.createElement("label");
        label1.textContent = "Lock";

        let input = document.createElement("input");
        input.setAttribute("type","radio");
        input.setAttribute("name","user1Lockd");
        input.setAttribute("value","");
        input.setAttribute("checked","checked");
        

        let label2 = document.createElement("label");
        label2.textContent = "Unlock";

        let input2 = document.createElement("input");
        input2.setAttribute("type","radio");
        input2.setAttribute("name","user1Lockd");
        input2.setAttribute("value","lock");

        let label3 = document.createElement("label");
        label3.textContent = "Username";

        let input3 = document.createElement("input");
        input3.setAttribute("type","text");
        input3.setAttribute("name","user1Lockd");
        input3.value = username;
        input3.disabled  =true;

        let divHiden = document.createElement("div");

        let label = document.createElement("label");
        label.textContent = "Email:";

        let inputH = document.createElement("input");
        inputH.setAttribute("type","email");
        inputH.setAttribute("name","user1Email");
        inputH.value = email;

        let labelAge = document.createElement("label");
        labelAge.textContent = "Age:";

        let inputA = document.createElement("input");
        inputA.setAttribute("type","email");
        inputA.setAttribute("name","user1Email");
        inputA.value = age;


        divHiden.appendChild(label);
        divHiden.appendChild(inputH);
        divHiden.appendChild(labelAge);
        divHiden.appendChild(inputA);
        divHiden.style.display = "none";

        let button = document.createElement("button");
        button.textContent = "Show more";
        button.addEventListener("click",getInfo)

        let br =document.createElement("br");
        let hr =document.createElement("hr");

        div.appendChild(img);
        div.appendChild(label1);
        div.appendChild(input);
        div.appendChild(label2);
        div.appendChild(input2);
        div.appendChild(br);
        div.appendChild(hr);
        div.appendChild(label3);
        div.appendChild(input3);
        div.appendChild(divHiden);
        div.appendChild(button);

        document.getElementById("main").appendChild(div);

    }


    async function loadUsers(){

        let url = "http://localhost:3030/jsonstore/advanced/profiles";

        let responce = await fetch(url);
        let data = await responce.json();

        Object.values(data).forEach(e => {
            
           

            createUser(e)

        });

        console.log(data);



    }

    loadUsers();



    let button = document.querySelector("button");

    let radioButtons = document.querySelectorAll("input");

    let lockRadio = radioButtons[0];
    let unLockRadio = radioButtons[1];

    button.addEventListener("click",getInfo)

    
   

    async function getInfo(e){

        let radioUnlockBtn = e.target.parentNode.querySelectorAll("input")[1];

        if (radioUnlockBtn.checked){

            e.target.parentNode.querySelector("div").style.display = "block";
            
            let btn = document.createElement("button");
            btn.textContent = "Show less";
            e.target.parentNode.appendChild(btn);

            e.target.remove();

            btn.addEventListener("click",(e)=>{

                if (radioUnlockBtn.checked){

                e.target.parentNode.querySelector("div").style.display = "none";
                let button = document.createElement("button");
                button.textContent = "Show more";
                button.addEventListener("click",getInfo);

                e.target.parentNode.appendChild(button);
                btn.remove();
                }

            })


        }


    }



}