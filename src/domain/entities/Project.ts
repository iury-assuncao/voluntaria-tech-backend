export class Project {
  constructor(
    public name: string,
    public description: string,
    public communityLink: string,
    public volunteers: string[],
    public deliveryDate: Date,
    public readonly ongId?: string,
    public status?: string,
    public readonly id?: string,
  ) {}
}
