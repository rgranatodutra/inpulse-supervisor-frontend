import { createClient } from "smtpexpress";

// IMPORTANT: setup project Id and Project secret from https://smtpexpress.com/, create project, overview page has id and secret
export const smtpexpressClient = createClient({
	projectId: "sm0pid-S7pdJtDl6JRVhiqkAtb0dScR2",
	projectSecret: "ffd882570cb91d08263373e7b3ed370f48499b4b9deaacd695",
});
