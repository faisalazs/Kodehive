const user = {
		id: 672,
		name: 'Sam',
		getId(){
			
		},
        employee: {
		id: 676,
		username:'Don',
		getId(){
			return this.id
		  }
		}
}		
		console.log(user.employee.getId());
