export class Stats {
  constructor() {
    // this.FG = this.fgm.toString() + '/' + this.fga.toString();
    // this.FG3 = this.fg3m.toString() + '/' + this.fg3a.toString();;
    // this.FT = this.ft.toString() + '/' + this.fta.toString();;

    this.FG= 0;
    this.FG3= 0;
    this.FT= 0;
    this.fga=0;
    this.fgm=0;
    // this.fg_pct=0.0;
    this.fg3a=0;
    this.fg3m=0;
    // this.fg3_pct=0.0;
    this.fta=0;
    this.ftm=0;
    // this.ft_pct = 0.0;
    this.ast = 0;

    this.dreb=0;
    this.oreb=0;
    this.reb=0;

    this.blk = 0;
    this.pf=0;
    this.stl=0;
    this.turnover=0

    // "blk"     : 0,
    // "dreb"    : 0,
    // "fg3a"    : 0,
    // "fg3m"    : 0,
    // "fga"     : 0,
    // "fgm"     : 0,
    // "fta"     : 0,
    // "ftm"     : 0,
    // "oreb"    : 0,
    // "pf"      : 0,
    // "reb"     : 0,
    // "stl"     : 0,
    // "turnover": 0
    // this.rank = rank;
    // this.suit = suit;
  }

  makeTotals() {
    
    this['FG'] = this['fgm'].toString() + '/' + this['fga'].toString();
    this['FG3'] = this['fg3m'].toString() + '/' + this['fg3a'].toString();
    this['FT'] = this['ftm'].toString() + '/' + this['fta'].toString();
 }

  getKeys() {
    return Object.keys(this);
  }

  //coments only

}