const { REST, Routes } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');

dotenv.config();

const rest = new REST().setToken(process.env.CruSquad_Radio1_Token);


// for global commands
rest.put(Routes.applicationCommands(process.env.CruSquad_Radio1_ClientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);