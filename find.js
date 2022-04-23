const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

function findByUsername(arr, username){
    return arr.find(function(input){
      return input.username === username;
    })
}

function removeUser(arr, username){
    let toRemove = arr.findIndex(function(input){
        return input.username === username;
    })
    if(toRemove === -1) return undefined;
    return arr.splice(toRemove, 1)[0];
}