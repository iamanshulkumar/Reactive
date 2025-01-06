import { Client, Avatars, Account, OAuthProvider } from "react-native-appwrite";
import * as  Linking from 'expo-linking';
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
    platform: 'com.reactive.restate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIV_APPWRITE_PROJECT_ID,
}

export const client = new Client();

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
    try {
        const redirectUri = Linking.createURL('/');

        const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri);

        if(!response) throw new Error('Failed to login');

        const browsetResult = await openAuthSessionAsync(
            response.toString(),
            redirectUri
        )

        if(browsetResult.type != 'success') throw new Error('Failed to login');

        const url = new URL(browsetResult.url);

        const secret = url.searchParams.get('secret')?.toString();
        const userId = url.searchParams.get('userId')?.toString();


    } catch (error) {
        console.error(error);
        return false;
    }
}