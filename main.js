fetch('https://restcountries.com/v2/all')
  .then(function (response) {
    return response.json();

  })
  .then(function (data) {

    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendData(data) {
  const newDiv = document.querySelector('main');
  for (var i = 0; i < data.length; i++) {
    let Liso639_1=[];
    let  Liso639_2=[];
  let  Lname=[];
  let LnativeName =[];
    var outputData = data[i].languages.map(Object.values);
    console.log(  Liso639_1);
    outputData.forEach(function (item) {
      Liso639_1[Liso639_1.length] = item[0];
      Liso639_2[Liso639_2.length] = item[1];
      Lname[Lname.length] = item[2];
      LnativeName[LnativeName.length] = item[3];
    });


    const OverlayDiv = document.createElement('div');
    OverlayDiv.innerHTML =
      `
   <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src=${data[i].flags.svg} alt="Avatar" style="width:100%;height:100%;">
    </div>
    <div class="flip-card-back">
    <img src=${data[i].flags.svg} alt="Avatar" style="width:20%;height:10%;margin: 1rem;
    border-radius: 0.3rem;">
      <p>Country Name: <span>${data[i].name}</span></p> 
      <p style="text-decoration:underline;"> Spoken Languages: 
      <ul>
      <li>- iso639_1: <span>${Liso639_1}</span></li>
      <li>- iso639_2: <span>${Liso639_2}</span></li>
      <li>- name: <span>${Lname}</span></li>
      <li>- nativeName: <span>${LnativeName}</span></li> 


      </ul>
      </p> 
    </div>
  </div>
</div>
   `;
    newDiv.appendChild(OverlayDiv);
  }
}







