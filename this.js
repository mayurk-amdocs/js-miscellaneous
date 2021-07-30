const obj = {
	name: "Mayur",
	callFunction: () => {
		console.log("THIS -> ",this.name);
	}
}
obj.callFunction();
