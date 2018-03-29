function DbConection(){
	this.pg = require('pg');
	this.connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/test';

	this.client = new pg.Client(connectionString);
	reurn client.connect();
}

module.exports = DbConection;
