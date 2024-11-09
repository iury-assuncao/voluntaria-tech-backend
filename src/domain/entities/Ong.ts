export class Ong {
  constructor(
    public name: string,
    public cnpj: string,
    public mission: string,
    public linkImg: string,
    public projects: string[],
    public readonly userId?: string,
    public readonly id?: string,
  ) {}
}
