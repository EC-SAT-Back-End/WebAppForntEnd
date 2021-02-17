export class Master {

	public id?: string;
	public actionId?: string;
	public userId?: string;
	public userName?: string;
	public date?: Date;
	public beforTotal?: number;
	public netTotal?: number;
	public discount?: number;



	constructor(actionId?: string,
		userId?: string, userName?: string,
		date?: Date, beforTotal?: number,
		netTotal?: number, discount?: number) {

		this.actionId = actionId;
		this.userId = userId;
		this.userName = userName;
		this.date = date;
		this.beforTotal = beforTotal;
		this.netTotal = netTotal;
		this.discount = discount;
	}
}
