/**
 * IKBIT PACKAGES
 */
//% weight=1000 color=#436EEE icon="\uf1cb" block="Ckmaker-BIT"
namespace ikbit { 

    const BIT_WSG_ADD = 0X03;
    const REG_WENDU = 0X30;        
    const REG_SHIDU = 0X31;
    const REG_GUANGDU = 0X32;


    /**
     *  from BIT-WSG get tmperature
     */
    //% blockId=wsgGetTem block="BIT-WSG GetTemperature"
    //% weight=160 blockGap=3 color=#00BFFF
    export function wsgGetTem(): number {
        return readReg8(BIT_WSG_ADD,REG_WENDU);
    }
    /**
     *  from BIT-WSG get dampness
     */
    //% blockId="wsgGetDam" block="BIT-WSG GetDampness"
    //% weight=159 blockGap=3 color=#00BFFF
    export function wsgGetDam(): number {
        return readReg8(BIT_WSG_ADD,REG_SHIDU);
    }
    /**
     *  from BIT-WSG get luminosity
     */
    //% blockId="wsgGetLight" block="BIT-WSG GetLight"
    //% weight=158 blockGap=30 color=#00BFFF
    export function wsgGetLight(): number {
        return readReg8(BIT_WSG_ADD,REG_GUANGDU);
    }    
}