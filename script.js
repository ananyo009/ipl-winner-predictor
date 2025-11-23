let arr = [
  {
    logo: "https://i.pinimg.com/736x/66/b5/30/66b5307c59b28c12a31712782a027db1.jpg",
    jersey:
      "https://i.pinimg.com/1200x/2d/69/4b/2d694b617dcedb0b0b136aa3d3755448.jpg",
    captain: "ajinkya rahane",
    team: "Kolkata Knight Riders",
    state: "west Bengal",
    primary: "purple",
    secondary: "gold",
  },
  {
    logo: "https://i.pinimg.com/736x/4e/e7/ac/4ee7ac144c048d64edcb30d3129a895f.jpg",
    jersey:
      "https://i.pinimg.com/736x/44/f4/d9/44f4d9629a370e951e13bcc43d425ae7.jpg",
    captain: "Ruturaj Gaikwad",
    team: "Chennai Super Kings",
    state: "Tamil Nadu",
    primary: "yellow",
    secondary: "blue",
  },
  {
    logo: "https://i.pinimg.com/736x/5d/a6/04/5da6045278a7a7dba53540a9226ac1c7.jpg",
    jersey:
      "https://i.pinimg.com/1200x/19/b8/f5/19b8f54866d9769056b615c4152c115b.jpg",
    captain: "Axar Patel",
    team: "Delhi Capitals",
    state: "Delhi",
    primary: "red",
    secondary: "blue",
  },
  {
    logo: "https://i.pinimg.com/736x/ea/df/52/eadf52ed1b962b079801ed8e912c7e10.jpg",
    jersey:
      "https://i.pinimg.com/736x/9a/f6/4d/9af64de0d0b26720af3f11fade350cf3.jpg",
    captain: "Subhman gill",
    team: "Gujarat Titans",
    state: "Gujarat",
    primary: "navy",
    secondary: "gold",
  },
  {
    logo: "https://i.pinimg.com/736x/42/92/9f/42929f323d5f435c7838c8d7ab26f40b.jpg",
    jersey:
      "https://i.pinimg.com/1200x/b9/69/99/b969995783a4d1068a6b6c44ca51eb95.jpg",
    captain: "Risabh Pant",
    team: "Lucknow Super Giants",
    state: "Uttar pradesh",
    primary: "navy",
    secondary: "orange",
  },
  {
    logo: "https://i.pinimg.com/1200x/e8/87/a8/e887a81959a66337b7ccc7835c38470e.jpg",
    jersey:
      "https://i.pinimg.com/1200x/44/84/79/448479b044698a1f24af06d6e60c500c.jpg",
    captain: "Hardik Pandya",
    team: "Mumbai Indians",
    state: "Maharashtra",
    primary: "blue",
    secondary: "gold",
  },
  {
    logo: "https://i.pinimg.com/736x/3f/2c/ba/3f2cbaf00d6c568ab8124ede563a12b7.jpg",
    jersey:
      "https://i.pinimg.com/736x/87/c2/b7/87c2b7a256ff85f06f47c8090a3e34f8.jpg",
    captain: "Shreyas Iyer",
      team: "punjab Kings",
    state:"punjab",
    primary: "red",
    secondary: "silver",
  },
  {
    logo: "https://i.pinimg.com/1200x/3c/b7/89/3cb7898be033622d2fcff689bbf96491.jpg",
    jersey:
      "https://i.pinimg.com/1200x/7a/4e/ea/7a4eea1a55af179e40c7dc3916197a2c.jpg",
    captain: "Sanju Samson",
    team: "Rajasthan Royals",
    state: "Rajasthan",
    primary: "pink",
    secondary: "blue",
  },
  {
    logo: "https://i.pinimg.com/736x/dc/dd/f2/dcddf2c68b12648a99119b922b9996d9.jpg",
    jersey:
      "https://i.pinimg.com/736x/9b/fc/6f/9bfc6fc5d6446119b243d053297a7496.jpg",
    captain: "Rajat Patidar",
    team: "Royal Challengers Bangalore",
    state: "Karnataka",
    primary: "red",
    secondary: "black",
  },
  {
    logo: "https://i.pinimg.com/1200x/4f/5c/76/4f5c7677936223a563557edee12cb01e.jpg",
    jersey:
      "https://i.pinimg.com/1200x/25/33/dd/2533dd2be2bc74b4083bb9834c8e1686.jpg",
    captain: "Pat Cummins",
    team: "Sunrisers Hyderabad",
    state: "Telangana",
    primary: "orange",
    secondary: "black",
  },
];

var box = document.querySelector(".box")
var button = document.querySelector(".box button")
var main = document.querySelector(".main")
var head = document.querySelector(".main>h1")


button.addEventListener('click', function () {
    let val = arr[Math.floor(Math.random() * 10)]
    head.textContent ="Winner of ipl 2026"
    box.innerHTML=`<div class="images">
                <img src=${val.logo} alt="" class="logo">
                <img src=${val.jersey} alt="" class="jersey">
            </div>
            <div class="text">
                <h1>${val.team}</h1 >
                <h2>${val.captain}</h2>
                <h2>${val.state}</h2>
            </div>
    `;
    main.style.backgroundColor = `${val.primary}`
    box.style.backgroundColor = `${val.secondary}`
    box.style.color =`${val.primary}`
})