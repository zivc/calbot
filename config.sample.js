module.exports = {
	slack:{
		team:'',
		user:'',
		password:'',
		channels:['*'],
		webApiToken:''
	},
	bot: {
		admins:['ash'],
		trigger:'@rosie'
	},
	orm:{
		adapter:{
			rosie:require('sails-mysql')
		},
		connections:{
			rosie:{
				host:'localhost',
				user:'root',
				password:'',
				database:'rosie',
				adapter:'rosie'
			}
		}
	}
};
