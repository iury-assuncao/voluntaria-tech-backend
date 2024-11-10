export class Project {
  constructor(
    public name: string,
    public description: string,
    public communityLink: string,
    public volunteers: string,
    public status: string,
    public DeliveryDate: Date,
    public readonly ongId?: string,
    public readonly id?: string,
  ) {}
}
