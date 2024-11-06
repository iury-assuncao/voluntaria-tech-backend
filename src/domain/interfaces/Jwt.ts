export interface Jwtoken {
  generateToken(payload: object): string;
  verifyToken(token: string): object | null;
}
