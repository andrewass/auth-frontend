
export interface AuthParameters {
    clientId: string | null;
    scope: string | null;
    redirectUri: string | null;
    state: string | null;
    codeChallenge: string | null;
    codeChallengeMethod: string | null;
}