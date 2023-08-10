export interface ClientEditRequest {
  firstName: string;
  lastName: string;
  username: string;
  email?: string;
  address: string;
  countryIso: string;
}
