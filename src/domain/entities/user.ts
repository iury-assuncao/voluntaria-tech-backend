export class User {
  constructor(
    public email: string,
    public password: string,
    public userType: string,
    public readonly id?: string,
  ) {}
}
