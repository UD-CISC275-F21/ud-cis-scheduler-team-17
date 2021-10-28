import { Year } from "../interfaces/year";
import { TableFace } from "../interfaces/tableface";


export function fixYear (listS: TableFace[]): Year[] {
    let tempList: Year[] = [];
    let tempy: Year = {thisYear: []};
    //tempy = tempList[0];
    let temps: TableFace;
    for (let i=0, j=0, t=1; listS[i]; i++) {
        temps = listS[i];
        if (temps.year!=t) {
            tempList.push(tempy);
            t += 1;
            j = 0;
            tempy.thisYear = [];
        }
        tempy.thisYear[j] = temps;
    }

    return tempList;
}