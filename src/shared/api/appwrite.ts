import { Client, Databases } from 'appwrite';
import { DATABASE_ID } from './const';

const client = new Client();

client
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject(DATABASE_ID);

export const DB = new Databases(client);