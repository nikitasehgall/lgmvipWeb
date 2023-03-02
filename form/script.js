let submit=document.querySelector(".submit");
submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
    let imageurl=document.querySelector("#img").value;
    var generatedurl=`https://drive.google.com/drive/u/0/my-drive=${imageurl}`;
    
   


   
    const data={
        name: document.getElementById("name").value,
        img: generatedurl,
        email: document.getElementById("email").value,
        websitelink: document.getElementById("websitelink").value,
        skills: document.getElementById("skills").value
      

        
    };
    console.log(data);

    
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      <img src="${generatedurl}" alt="image">
      <div class="NameContainer">${data.name}</div>
      <a href="mailto:nsehgal148@gmail.com">${data.email}</a><br>
      <a href="www.nikitasehgal.com">${data.websitelink}</a>
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
    
    output.appendChild(newlist);
   
    
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})


