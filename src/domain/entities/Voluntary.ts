export class Voluntary {
  constructor(
    public name: string,
    public cpf: string,
    public skills: string,
    public linkImg: string,
    public description: string,
    public applications: string[],
    public readonly userId?: string,
    public readonly id?: string,
  ) {}
}
