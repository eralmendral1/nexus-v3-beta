import { Injectable } from '@nestjs/common';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { BearerStrategy } from 'passport-azure-ad';

const clientID = '65aee1c3-845e-41d2-b67a-a30f9182060e';
const tenantID = 'c8bf7d4f-6677-436a-8994-17a3ff24848d';

// AZURE_CLIENT_ID=65aee1c3-845e-41d2-b67a-a30f9182060e
// AZURE_CLIENT_SECRET=rZq7Q~hV6TGawg1t3k2VAmmKXusgJ6NKO4XYb
// AZURE_REDIRECT_URI="http://localhost:8000/api/oauth/graph/callback"
// AZURE_TENANT_ID=c8bf7d4f-6677-436a-8994-17a3ff24848d


/**
 * Extracts ID token from header and validates it.
 */
@Injectable()
export class AzureADStrategy extends PassportStrategy(
  BearerStrategy,
  'azure-ad',
) {
  constructor() {
    super({
      identityMetadata: `https://login.microsoftonline.com/${tenantID}/v2.0/.well-known/openid-configuration`,
      clientID,
    });
  }

  async validate(data) {
    return data;
  }
}

export const AzureADGuard = AuthGuard('azure-ad');
