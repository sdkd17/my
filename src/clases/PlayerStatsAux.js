import {Stats} from './Stats'

export class PlayerStatsAux {
  constructor(stats={}){
    this.id=0;
    this.name="";
    this.blk= 0;
    this.ast= 0;
    this.fg3_pct=0;
    this.dreb = 0;
    this.fg3a = 0;
    this.fg3m = 0;
    this.fg_pct = 0;
    this.fga = 0;
    this.fgm = 0;
    this.ft_pct= 0;
    this.fta = 0;
    this.ftm = 0;
    this.pts = 0;
    this.reb = 0;
    this.stl = 0;
    this.turnover = 0;
      
  
    for (var fld in this) {
      if (stats.hasOwnProperty(fld)) {
        this[fld] = stats[fld];
      }
    }

    if (Object.entries(stats).length > 0){
      this.id = stats.player.id;
      this.name = stats.player.first_name + " " + stats.player.last_name + "(" + stats.player.position +")"; 
    }
  }
}