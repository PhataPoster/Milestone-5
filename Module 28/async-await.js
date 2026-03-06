const fetchUsers = async () =>{
    const url = "https://jsonplaceholder.typicode.com/users";

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);


    
}