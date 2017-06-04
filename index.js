var currentUser = {
	name: "shohan"
}

/**
 * @api {get}/user Request User information
 * @apiName getUser
 * @apiGroup User
 * @apiVersion 0.2.0
 *
 * @apiSuccess {String} name The users name
 * @apiSuccess {Number} age Calculated age from Birthday
 *
 * @apiSuccessExample Example data on success
 * {
 *   name: 'Shohan',
 *   age: 24
 * }
 *
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
