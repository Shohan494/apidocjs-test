var currentUser = {
	name: "shohan"
}

/**
 * @api {get}/user Request User information
 * @apiName getUser
 * @apiGroup User
 */
function getUser(){
  return {code: 200, data: currentUser}
}

function setName(name){
  if(name.length === 0){
  	return {code: 200, message: 'NameEmptyError'};
  }
  currentUser.name = name;
  return {code: 204};
}
