export interface IJwt {
  generateToken(payload: object): string;
  verifyToken(token: string): object | null;
}
