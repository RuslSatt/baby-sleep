import { Client, Databases } from 'appwrite';
import { APP_WRITE_ID } from './const';

const client = new Client();

client
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject(APP_WRITE_ID);

export const DB = new Databases(client);