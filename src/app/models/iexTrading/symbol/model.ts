export interface IIExTradingSymbol {
  symbol: string;
  name: string;
  date: string;
  isEnabled: boolean;
  type: string;
  iexId: string;
}

export class IExTradingSymbol {
  public symbol: string;
  public name: string;
  public date: Date;
  public isEnabled: boolean;
  public type: string;
  public iexId: string;

  constructor(args: IIExTradingSymbol) {
    this.symbol = args.symbol;
    this.name = args.name;
    this.date = new Date(args.date);
    this.isEnabled = args.isEnabled;
    this.type = args.type;
    this.iexId = args.iexId;
  }
}