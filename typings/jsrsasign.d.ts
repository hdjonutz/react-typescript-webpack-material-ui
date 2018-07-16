declare module 'jsrsasign' {
    module KJUR {
        module jws {
            module JWS {
                //function readSafeJSONString(token: string): any;
                //function verifyJWT(token: string, key: string, data: Object): boolean;
                function parse(jwt: string): Token;
                //function verify(jwt, key, AllowedSigningAlgs): any;
            }
        }
    }

    export interface Token {
        headerObj: TokenHeader;
        payloadObj: TokenClaims;
        sigHex: string;
    }

    export interface TokenHeader{
        alg: string;
        type: string;
        kid: string;
    }

    export interface TokenClaims {
        [key: string]: any;
        sub: string;
        iss: string;
        exp: string;
        iat: string;
        nbf: string;
        aud: string;
    }
}
