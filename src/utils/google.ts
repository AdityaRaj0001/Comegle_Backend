import { OAuth2Client } from "google-auth-library";
import { GOOGLE_CLIENT_ID } from "../config/env";

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export const verifyGoogleIdToken = async (idToken: string) => {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: GOOGLE_CLIENT_ID,
  });
  return ticket.getPayload();
};
