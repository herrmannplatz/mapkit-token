import { Secret } from 'jsonwebtoken'

function generate(authKey: Secret, keyId: string, teamId: string, ttl?: number, origin?: string): string;
export = generate;