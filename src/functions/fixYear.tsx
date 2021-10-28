import { Year } from "../interfaces/year";
import { TableFace } from "../interfaces/tableface";


export function fixYear (listS: TableFace[]): Year[] {
    let tempList: Year[] = [];
    let tempy: Year = {yearNum:1, thisYear: []};
    //tempy = tempList[0];
    let temps: TableFace;
    for (let i=0, j=0; listS[i]; i++) {
        temps = listS[i];
        if (temps.year!=tempy.yearNum) {
            tempList.push(tempy);
            tempy.yearNum += 1;
            j = 0;
            tempy.thisYear = [];
        }
        tempy.thisYear.push(temps);
    }

    return tempList;
}