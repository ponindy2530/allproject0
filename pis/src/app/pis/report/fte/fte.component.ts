import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Dataservice } from '../../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fte',
  templateUrl: './fte.component.html',
  styleUrls: ['./fte.component.css']
})
export class FteComponent implements OnInit {


  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router) {


  }

  models: any;
  models2: any;
  loading: any;
  ngOnInit() {
    this.loading = true;
    //FTE2
    this._productService.dbData(126)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      , () => {
        this._productService.dbData(132)
          .subscribe(resproducts => this.models2 = resproducts,
          err => console.log(err)
          , () => {
            this.loading = false;
          }
          );
      }
      );



  }



  coli: any;
  clickcoli(i: number) {
    this.coli = i;
  }
  type: string;
  models3: any;
  idtb: number;
  idpos: string;
  clickshow(j: number, hcode: string) {
    // console.log(j);
    if (j >= 7 && j <= 14) {
      this.idpos = "60104";
      if (j == 7) {
        this.type = "1";
        this.idtb = 127;
      } else if (j == 8) {
        this.type = "2";
        this.idtb = 127;
      } else if (j == 9) {
        this.type = "3";
        this.idtb = 127;
      } else if (j == 10) {
        this.type = "5";
        this.idtb = 127;
      } else if (j == 11) {
        this.type = "4";
        this.idtb = 127;
      } else if (j == 12) {
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 13) {
        this.type = "6";
        this.idtb = 127;
      } else {
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      }
    } else if (j >= 18 && j <= 25) {
      this.idpos = "60204";
      if (j == 18) {
        this.type = "1";
        this.idtb = 127;
      } else if (j == 19) {
        this.type = "2";
        this.idtb = 127;
      } else if (j == 20) {
        this.type = "3";
        this.idtb = 127;
      } else if (j == 21) {
        this.type = "5";
        this.idtb = 127;
      } else if (j == 22) {
        this.type = "4";
        this.idtb = 127;
      } else if (j == 23) {
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 24) {
        this.type = "6";
        this.idtb = 127;
      } else {
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      }
    } else if (j >= 29 && j <= 36) {
      this.idpos = "60603";
      if (j == 29) {
        this.type = "1";
        this.idtb = 127;
      } else if (j == 30) {
        this.type = "2";
        this.idtb = 127;
      } else if (j == 31) {
        this.type = "3";
        this.idtb = 127;
      } else if (j == 32) {
        this.type = "5";
        this.idtb = 127;
      } else if (j == 33) {
        this.type = "4";
        this.idtb = 127;
      } else if (j == 34) {
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 35) {
        this.type = "6";
        this.idtb = 127;
      } else {
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      }
    } else if (j >= 40 && j <= 56) {
      if (j == 40 || j == 48) {
        if (j == 40) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 41 || j == 49) {
        if (j == 41) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 42 || j == 50) {
        if (j == 42) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 43 || j == 51) {
        if (j == 43) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 44 || j == 52) {
        if (j == 44) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 45 || j == 53) {
        if (j == 45) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 46 || j == 54) {
        if (j == 46) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 47 || j == 55) {
        if (j == 47) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "61523,62601";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }
    } else if (j >= 60 && j <= 92) {
      if (j == 60 || j == 68 || j == 76 || j == 84) {
        if (j == 60) {
          this.idpos = "60413";
        } else if (j == 68) {
          this.idpos = "82950";
        } else if (j == 76) {
          this.idpos = "62212";
        } else {
          this.idpos = "62602";
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 61 || j == 69 || j == 77 || j == 85) {
        if (j == 61) {
          this.idpos = "60413";
        } else if (j == 69) {
          this.idpos = "82950";
        } else if (j == 77) {
          this.idpos = "62212";
        } else {
          this.idpos = "62602";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 62 || j == 70 || j == 78 || j == 86) {
        if (j == 62) {
          this.idpos = "60413";
        } else if (j == 70) {
          this.idpos = "82950";
        } else if (j == 78) {
          this.idpos = "62212";
        } else {
          this.idpos = "62602";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 63 || j == 71 || j == 79 || j == 87) {
        if (j == 63) {
          this.idpos = "60413";
        } else if (j == 71) {
          this.idpos = "82950";
        } else if (j == 79) {
          this.idpos = "62212";
        } else {
          this.idpos = "62602";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 64 || j == 72 || j == 80 || j == 88) {
        if (j == 64) {
          this.idpos = "60413";
        } else if (j == 72) {
          this.idpos = "82950";
        } else if (j == 80) {
          this.idpos = "62212";
        } else {
          this.idpos = "62602";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 65 || j == 73 || j == 81 || j == 89) {
        if (j == 65) {
          this.idpos = "60413";
        } else if (j == 73) {
          this.idpos = "82950";
        } else if (j == 81) {
          this.idpos = "62212";
        } else {
          this.idpos = "62602";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 66 || j == 74 || j == 82 || j == 90) {
        if (j == 66) {
          this.idpos = "60413";
        } else if (j == 74) {
          this.idpos = "82950";
        } else if (j == 82) {
          this.idpos = "62212";
        } else {
          this.idpos = "62602";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 67 || j == 75 || j == 83 || j == 91) {
        if (j == 67) {
          this.idpos = "60413";
        } else if (j == 75) {
          this.idpos = "82950";
        } else if (j == 83) {
          this.idpos = "62212";
        } else {
          this.idpos = "62602";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "60413,82950,62212,62602";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }

    } else if (j >= 96 && j <= 112) {
      if (j == 96 || j == 104) {
        if (j == 96) {
          this.idpos = "61803";
        } else {
          this.idpos = "62603";
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 97 || j == 105) {
        if (j == 97) {
          this.idpos = "61803";
        } else {
          this.idpos = "62603";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 98 || j == 106) {
        if (j == 98) {
          this.idpos = "61803";
        } else {
          this.idpos = "62603";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 99 || j == 107) {
        if (j == 99) {
          this.idpos = "61803";
        } else {
          this.idpos = "62603";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 100 || j == 108) {
        if (j == 100) {
          this.idpos = "61803";
        } else {
          this.idpos = "62603";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 101 || j == 109) {
        if (j == 101) {
          this.idpos = "61803";
        } else {
          this.idpos = "62603";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 102 || j == 110) {
        if (j == 102) {
          this.idpos = "61803";
        } else {
          this.idpos = "62603";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 103 || j == 111) {
        if (j == 103) {
          this.idpos = "61803";
        } else {
          this.idpos = "62603";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "61803,62603";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }
    } else if (j >= 116 && j <= 132) {
      if (j == 116 || j == 124) {
        if (j == 116) {
          this.idpos = "61723";
        } else {
          this.idpos = "61724";
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 117 || j == 125) {
        if (j == 117) {
          this.idpos = "61723";
        } else {
          this.idpos = "61724";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 118 || j == 126) {
        if (j == 118) {
          this.idpos = "61723";
        } else {
          this.idpos = "61724";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 119 || j == 127) {
        if (j == 119) {
          this.idpos = "61723";
        } else {
          this.idpos = "61724";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 120 || j == 128) {
        if (j == 120) {
          this.idpos = "61723";
        } else {
          this.idpos = "61724";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 121 || j == 129) {
        if (j == 121) {
          this.idpos = "61723";
        } else {
          this.idpos = "61724";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 122 || j == 130) {
        if (j == 122) {
          this.idpos = "61723";
        } else {
          this.idpos = "61724";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 123 || j == 131) {
        if (j == 123) {
          this.idpos = "61723";
        } else {
          this.idpos = "61724";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "61723,61724";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }
    } else if (j >= 136 && j <= 143) {
      this.idpos = "61914";
      if (j == 136) {
        this.type = "1";
        this.idtb = 127;
      } else if (j == 137) {
        this.type = "2";
        this.idtb = 127;
      } else if (j == 138) {
        this.type = "3";
        this.idtb = 127;
      } else if (j == 139) {
        this.type = "5";
        this.idtb = 127;
      } else if (j == 140) {
        this.type = "4";
        this.idtb = 127;
      } else if (j == 141) {
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 142) {
        this.type = "6";
        this.idtb = 127;
      } else {
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      }
    } else if (j >= 147 && j <= 171) {
      if (j == 147 || j == 155 || j == 163) {
        if (j == 147) {
          this.idpos = "62504";
        } else if (j == 155) {
          this.idpos = "62802";
        } else {
          this.idpos = "62605";
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 148 || j == 156 || j == 164) {
        if (j == 148) {
          this.idpos = "62504";
        } else if (j == 156) {
          this.idpos = "62802";
        } else {
          this.idpos = "62605";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 149 || j == 157 || j == 165) {
        if (j == 149) {
          this.idpos = "62504";
        } else if (j == 157) {
          this.idpos = "62802";
        } else {
          this.idpos = "62605";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 150 || j == 158 || j == 166) {
        if (j == 150) {
          this.idpos = "62504";
        } else if (j == 158) {
          this.idpos = "62802";
        } else {
          this.idpos = "62605";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 151 || j == 159 || j == 167) {
        if (j == 151) {
          this.idpos = "62504";
        } else if (j == 159) {
          this.idpos = "62802";
        } else {
          this.idpos = "62605";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 152 || j == 160 || j == 168) {
        if (j == 152) {
          this.idpos = "62504";
        } else if (j == 160) {
          this.idpos = "62802";
        } else {
          this.idpos = "62605";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 153 || j == 161 || j == 169) {
        if (j == 153) {
          this.idpos = "62504";
        } else if (j == 161) {
          this.idpos = "62802";
        } else {
          this.idpos = "62605";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 154 || j == 162 || j == 170) {
        if (j == 154) {
          this.idpos = "62504";
        } else if (j == 162) {
          this.idpos = "62802";
        } else {
          this.idpos = "62605";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "62504,62802,62605";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }
    } else if (j >= 175 && j <= 191) {
      if (j == 175 || j == 183) {
        if (j == 175) {
          this.idpos = "61204";
        } else {
          this.idpos = "61203";
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 176 || j == 184) {
        if (j == 176) {
          this.idpos = "61204";
        } else {
          this.idpos = "61203";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 177 || j == 185) {
        if (j == 177) {
          this.idpos = "61204";
        } else {
          this.idpos = "61203";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 178 || j == 186) {
        if (j == 178) {
          this.idpos = "61204";
        } else {
          this.idpos = "61203";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 179 || j == 187) {
        if (j == 179) {
          this.idpos = "61204";
        } else {
          this.idpos = "61203";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 180 || j == 188) {
        if (j == 180) {
          this.idpos = "61204";
        } else {
          this.idpos = "61203";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 181 || j == 189) {
        if (j == 181) {
          this.idpos = "61204";
        } else {
          this.idpos = "61203";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 182 || j == 190) {
        if (j == 182) {
          this.idpos = "61204";
        } else {
          this.idpos = "61203";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "61204,61203";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }
    } else if (j >= 195 && j <= 202) {
      this.idpos = "62312";
      if (j == 195) {
        this.type = "1";
        this.idtb = 127;
      } else if (j == 196) {
        this.type = "2";
        this.idtb = 127;
      } else if (j == 197) {
        this.type = "3";
        this.idtb = 127;
      } else if (j == 198) {
        this.type = "5";
        this.idtb = 127;
      } else if (j == 199) {
        this.type = "4";
        this.idtb = 127;
      } else if (j == 200) {
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 201) {
        this.type = "6";
        this.idtb = 127;
      } else {
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      }
    } else if (j >= 206 && j <= 222) {
      if (j == 206 || j == 214) {
        if (j == 206) {
          this.idpos = "60813";
        } else {
          this.idpos = "60802";
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 207 || j == 215) {
        if (j == 207) {
          this.idpos = "60813";
        } else {
          this.idpos = "60802";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 208 || j == 216) {
        if (j == 208) {
          this.idpos = "60813";
        } else {
          this.idpos = "60802";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 209 || j == 217) {
        if (j == 209) {
          this.idpos = "60813";
        } else {
          this.idpos = "60802";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 210 || j == 217) {
        if (j == 210) {
          this.idpos = "60813";
        } else {
          this.idpos = "60802";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 211 || j == 218) {
        if (j == 211) {
          this.idpos = "60813";
        } else {
          this.idpos = "60802";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 212 || j == 219) {
        if (j == 212) {
          this.idpos = "60813";
        } else {
          this.idpos = "60802";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 213 || j == 220) {
        if (j == 213) {
          this.idpos = "60813";
        } else {
          this.idpos = "60802";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "60813,60802";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }
    } else if (j >= 226 && j <= 250) {
      if (j == 226 || j == 234 || j == 242) {
        if (j == 226) {
          this.idpos = "60414";
        } else if (j == 234) {
          this.idpos = "62604";
        } else {
          this.idpos = "62600";
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 227 || j == 235 || j == 243) {
        if (j == 227) {
          this.idpos = "60414";
        } else if (j == 235) {
          this.idpos = "62604";
        } else {
          this.idpos = "62600";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 228 || j == 236 || j == 244) {
        if (j == 228) {
          this.idpos = "60414";
        } else if (j == 236) {
          this.idpos = "62604";
        } else {
          this.idpos = "62600";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 229 || j == 237 || j == 245) {
        if (j == 229) {
          this.idpos = "60414";
        } else if (j == 237) {
          this.idpos = "62604";
        } else {
          this.idpos = "62600";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 230 || j == 238 || j == 246) {
        if (j == 230) {
          this.idpos = "60414";
        } else if (j == 238) {
          this.idpos = "62604";
        } else {
          this.idpos = "62600";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 231 || j == 239 || j == 247) {
        if (j == 231) {
          this.idpos = "60414";
        } else if (j == 239) {
          this.idpos = "62604";
        } else {
          this.idpos = "62600";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 232 || j == 240 || j == 248) {
        if (j == 232) {
          this.idpos = "60414";
        } else if (j == 240) {
          this.idpos = "62604";
        } else {
          this.idpos = "62600";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 233 || j == 241 || j == 249) {
        if (j == 233) {
          this.idpos = "60414";
        } else if (j == 241) {
          this.idpos = "62604";
        } else {
          this.idpos = "62600";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "60414,62604,62600";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }
    } else if (j >= 254 && j <= 270) {
      if (j == 254 || j == 262) {
        if (j == 254) {
          this.idpos = "12003";
        } else {
          this.idpos = "12003";
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 255 || j == 263) {
        if (j == 255) {
          this.idpos = "12003";
        } else {
          this.idpos = "12003";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 256 || j == 264) {
        if (j == 256) {
          this.idpos = "12003";
        } else {
          this.idpos = "12003";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 257 || j == 265) {
        if (j == 257) {
          this.idpos = "12003";
        } else {
          this.idpos = "12003";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 258 || j == 266) {
        if (j == 258) {
          this.idpos = "12003";
        } else {
          this.idpos = "12003";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 259 || j == 267) {
        if (j == 259) {
          this.idpos = "12003";
        } else {
          this.idpos = "12003";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 260 || j == 268) {
        if (j == 260) {
          this.idpos = "12003";
        } else {
          this.idpos = "12003";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 261 || j == 269) {
        if (j == 261) {
          this.idpos = "12003";
        } else {
          this.idpos = "12003";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "12003,12003";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }
    } else if (j >= 274 && j <= 290) {
      if (j == 274 || j == 282) {
        if (j == 274) {
          this.idpos = "32512";
        } else {
          this.idpos = "32523";
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 275 || j == 283) {
        if (j == 275) {
          this.idpos = "32512";
        } else {
          this.idpos = "32523";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 276 || j == 284) {
        if (j == 276) {
          this.idpos = "32512";
        } else {
          this.idpos = "32523";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 277 || j == 285) {
        if (j == 277) {
          this.idpos = "32512";
        } else {
          this.idpos = "32523";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 278 || j == 286) {
        if (j == 278) {
          this.idpos = "32512";
        } else {
          this.idpos = "32523";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 279 || j == 287) {
        if (j == 279) {
          this.idpos = "32512";
        } else {
          this.idpos = "32523";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 280 || j == 288) {
        if (j == 280) {
          this.idpos = "32512";
        } else {
          this.idpos = "32523";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 281 || j == 289) {
        if (j == 281) {
          this.idpos = "32512";
        } else {
          this.idpos = "32523";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "32512,32523";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }
    } else if (j >= 294 && j <= 301) {
      this.idpos = "62803";
      if (j == 294) {
        this.type = "1";
        this.idtb = 127;
      } else if (j == 295) {
        this.type = "2";
        this.idtb = 127;
      } else if (j == 296) {
        this.type = "3";
        this.idtb = 127;
      } else if (j == 297) {
        this.type = "5";
        this.idtb = 127;
      } else if (j == 298) {
        this.type = "4";
        this.idtb = 127;
      } else if (j == 299) {
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 300) {
        this.type = "6";
        this.idtb = 127;
      } else {
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      }
    } else if (j >= 305 && j <= 321) {
      if (j == 305 || j == 313) {
        if (j == 305) {
          this.idpos = "62503";
        } else {
          this.idpos = "63503";
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 306 || j == 314) {
        if (j == 306) {
          this.idpos = "62503";
        } else {
          this.idpos = "63503";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 307 || j == 315) {
        if (j == 307) {
          this.idpos = "62503";
        } else {
          this.idpos = "63503";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 308 || j == 316) {
        if (j == 308) {
          this.idpos = "62503";
        } else {
          this.idpos = "63503";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 309 || j == 317) {
        if (j == 309) {
          this.idpos = "62503";
        } else {
          this.idpos = "63503";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 310 || j == 318) {
        if (j == 310) {
          this.idpos = "62503";
        } else {
          this.idpos = "63503";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 311 || j == 319) {
        if (j == 311) {
          this.idpos = "62503";
        } else {
          this.idpos = "63503";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 312 || j == 320) {
        if (j == 312) {
          this.idpos = "62503";
        } else {
          this.idpos = "63503";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "62503,63503,62600";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }
    } else {
      this.idpos = "60104,60204,60603,61523,62601,82950,62212,60413,62602,61803,62603,61723,61724,61914,62802,62504,61204,61203,62312,60813,60802,62604,60414,12003,12304,32512,32523,62803,62600,63503,62503";
      if (j == 325) {
        this.type = "1";
        this.idtb = 127;
      } else if (j == 326) {
        this.type = "2";
        this.idtb = 127;
      } else if (j == 327) {
        this.type = "3";
        this.idtb = 127;
      } else if (j == 328) {
        this.type = "5";
        this.idtb = 127;
      } else if (j == 329) {
        this.type = "4";
        this.idtb = 127;
      } else if (j == 330) {
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 331) {
        this.type = "6";
        this.idtb = 127;
      } else {
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      }
    }
    // console.log(this.idtb + "=" + this.type + "=" + this.idpos + "=" + hcode);

    this._productService.dbData3(this.idtb, this.type, this.idpos, hcode)
      .subscribe(resproducts => this.models3 = resproducts,
      err => console.log(err)
      // , () => { }
      );

  }

  getres() {
    this.ngOnInit()
  }

}