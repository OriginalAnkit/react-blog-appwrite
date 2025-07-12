import { Client, Account, Databases} from 'appwrite';
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from '../constants';

export const client = new Client();

client
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export const database=new Databases(client)
export { ID } from 'appwrite';
