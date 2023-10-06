const showdet = document.getElementById("showdetails");
const detailsuser = document.getElementById("username");
const profiledetails = document.getElementById("profileinfo");

const repodata = document.getElementById("repoinfo");

const getrepo = (username) =>{
    fetch(`https://api.github.com/user/${username}/repos`)
    .then((res)=> res.json())
    .then((repo)=>{
        console.log(repo);
        for(i=0; i<=data.length; i++){
            repodata.innerHTML +=
         `<div class="card">
        <div class="image">
            <img src=${repo} alt=""/>
        </div>
        <div class="body">
            <h1>${repo}</h1>
            <p>${repo}</p>
        </div>
    </div>`
        }
})
   
}

showdet.addEventListener("click",() =>{
    const userid = detailsuser.value;
    fetch(`https://api.github.com/user/${userid}`)
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        profiledetails.innerHTML = `<div class="card">
        <div class="image">
            <img src=${data} alt=""/>
        </div>
        <div class="body">
            <h1>${data}</h1>
            <p>${data}</p>
        </div>
    </div>`
        
    })
    
})