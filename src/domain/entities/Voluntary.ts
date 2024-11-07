export class Voluntary {
  constructor(
    public name: string,
    public cpf: string,
    public skills: string,
    public availability: string,
    public linkImg: string,
    public applications: string[],
    public preferences: string,
    public createdBy: string,
    public readonly userId?: string,
    public readonly id?: string,
  ) {}
}
