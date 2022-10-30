const changehtlm = (json1,c) => {
        let cat_list = document.querySelector(".row");
        for (catI in json1){
          const cat = json1[catI]
            if (cat.username==c){
              cat_list.innerHTML='';
                cat_list.innerHTML += '<tbody><tr><td>'+cat.Id_Chores+'</td><td>'+cat.Chore_Name+'</td><td>'+cat.Descr+'</td><td>'+cat.room_name+'</td></tbody><div>'
            }
        }

}