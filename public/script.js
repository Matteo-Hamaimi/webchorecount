const bar =   document.getElementById('bar');
const close = document.getElementById('close')
const nav =   document.getElementById('navbar');
const userloged="danny-grn";
var errorsignin=false;

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); 
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); 
    })
}

const changehtlm = (json1,c) => {
  let cat_list = document.querySelector(".row");

  for (catI in json1){
    const cat = json1[catI]
    console.log(cat.id_chores);
      if (cat.username==c){
        cat_list.innerHTML='';
          cat_list.innerHTML += '<tbody><tr><td>'+cat.id_chores+'</td><td>'+cat.chore_name+'</td><td>'+cat.descr+'</td><td>'+cat.room_name+'</td></tbody><div>'
      }
  }

}
const pingApi = () => {
  console.log({ value: document.getElementById("inputNumber").value });
  fetch(
    "/api/ping?" +
      new URLSearchParams({
        value: document.getElementById("inputNumber").value,
      })
  ).then((res) => res.json());
};

const executeFunction = () => {
      getCreation();
};
const executeFunction1 = () => {
  getCreation();
};
const executeFunction2 = () => {
  getseechores();
};

const getlogin=() =>{
  var pword = document.getElementById("pword").value;
  var username = document.getElementById("username").value;
  if ("/users/username"!=null){
  }
}

const getseechores=()=>{
  fetch("/chores/")
      .then((data) => data.json())
      .then((data) => changehtlm(data,userloged));
}


const getRead = () => {
  var Id_User = document.getElementById("Id_User").value;
  var lastname = document.getElementById("Lastname").value;
  var firstname = document.getElementById("Firstname").value;
  var username = document.getElementById("username").value;
  if (Id_User != "") {
    fetch("/users/id_user=" + Id_User)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else if (lastname != "") {
    fetch("/users/lastname=" + lastname)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else if (firstname != "") {
    fetch("/users/firstname=" + firstname)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else if (username != "") {
    fetch("/users/username=" + username)
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  } else {
    fetch("/chores/")
      .then((data) => data.json())
      .then((data) => alert(JSON.stringify(data)));
  }
};

const getCreation = () => {
  var lastname = document.getElementById("Lastname").value;
  var firstname = document.getElementById("Firstname").value;
  var username = document.getElementById("username").value;
  var pword = document.getElementById("pword").value;

  var payload = {
    lastname: lastname,
    firstname: firstname,
    username: username,
    pword: pword
  };

  fetch("/users/", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
})
  .then((res) => res.json())
  .then((res) => alert(JSON.stringify(res)));

};

const getDelete = () => {
  var Id_User = document.getElementById("Id_User").value;
  fetch("/users/" + Id_User, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => alert(JSON.stringify(res)));
};

const getUpdate = () => {
  var Id_User = document.getElementById("Id_User").value;
  var lastname = document.getElementById("Lastname").value;
  var firstname = document.getElementById("Firstname").value;
  var username = document.getElementById("username").value;

  var payload = {
    Id_User : Id_User,
    lastname: lastname,
    firstname: firstname,
    username: username,
  };

  
  fetch("/users/"+Id_User, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => alert(JSON.stringify(res)));
};
