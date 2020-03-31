
function TransformConsole(){
	const DEBUG_MODE = true;
	if(!DEBUG_MODE){
		 console.log = function() {}
	}
	
}
module.exports = {
  'TransformConsole' : TransformConsole
};