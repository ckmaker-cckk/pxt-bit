/**
 * IKBIT PACKAGES
 */
//% weight=1000 color=#436EEE icon="\uf1cb"
namespace ikbit {
    const BIT_LCD1602_ADD = 0X02;

    const REG_1602_CLEAR_SCREEN = 0X30;
    const REG_1602_LINE1_NORMAL = 0X31;
    const REG_1602_LINE2_NORMAL = 0X32;
    const REG_1602_LINE1_SCROLL = 0X33;
    const REG_1602_LINE2_SCROLL = 0X34;
    const REG_1602_BACK_LIGHT = 0X35;

    /**
     *  clear BIT-LCD1602 screen display
     */
    //% blockId=lcd1602ClearScreen block="BIT-LCD1602 ClearScreen"
    //% weight=186 blockGap=3 color=#2E8B57
    export function lcd1602ClearScreen(): void {
        writeReg(BIT_LCD1602_ADD,REG_1602_CLEAR_SCREEN);
    }
    /**
     * Set BIT-LCD1602 backlight
     * @param value set Backlight level[0-5] , eg: "3"
     */
    //% blockId=lcd1602SetBackLight block="BIT-LCD1602 SetBackLight|%value "
    //% value.min=0 value.max=5
    //% weight=185 blockGap=3 color=#2E8B57
    export function lcd1602SetBackLight(value: number): void {
        if (value < 0 || value > 5) { return; }
        let buf = pins.createBuffer(1);
        buf[0] = value;
        ikbit.writeRegBufNoLength(BIT_LCD1602_ADD,REG_1602_BACK_LIGHT,buf);
    }
    /**
     *  Display a string at a specified location in BIT-LCD1602
     * @param x The location in a line begins to display , eg: "1"
     * @param y The location in a row begins to display , eg: "1"
     */
    //% blockId=lcd1602DisString  block="BIT-LCD1602 DisString|X %x |y %y |%str"
    //% x.min=1  x.max=2
    //% y.min=1  y.max=16
    //% weight=180 blockGap=3 color=#2E8B57
    export function lcd1602DisString(x: number, y: number, str: string): void {
        if (y > 16) return;
        let size = str.length;
        if (size > 16) size = 16;
        let tline: number;
        let tbuf = pins.createBuffer(size +1);
        if (x == 1) {
            tline = REG_1602_LINE1_NORMAL;
        }
        else if (x == 2) {
            tline = REG_1602_LINE2_NORMAL;
        }
        tbuf[0] = y;
        copyStrToBuf(str, tbuf, 1, size);
        writeRegBufNoLength(BIT_LCD1602_ADD,tline,tbuf);
    }
    /**
      *  Display a number at a specified location in BIT-LCD1602
      * @param x The location in a line begins to display , eg: "1"
      * @param y The location in a row begins to display , eg: "1"
      */
    //% blockId=ikbit_lcd1602DisNumber  block="BIT-LCD1602 display number|X|%x |y|%y |value|%num"
    //% x.min=1  x.max=2
    //% y.min=1  y.max=16
    //% weight=175 blockGap=30 color=#2E8B57
    export function lcd1602DisNumber(x: number, y: number, n: number): void {
        let str=n.toString();
        lcd1602DisString(x,y,str);
    }
    /**
     *  Scroll display a string at a specified location in BIT-LCD1602
     * @param x The location in a line begins to display , eg: "1"
     * @param y The location in a row begins to display , eg: "1"
     */
    //% blockId=ikbit_lcd1602ScrollDisString block="BIT-LCD1602 scroll display string|X|%x |y|%y |%str"
    //% x.min=1  x.max=2
    //% y.min=1  y.max=16
    //% advanced=true
    //% weight=170 blockGap=3 color=#2E8B57
    export function lcd1602ScrollDisString(x: number, y: number, str: string): void {
        let size=str.length;
        if (size > 16) size = 16;

        let tline: number;
        let tbuf = pins.createBuffer(size +1);
        if (x == 1) {
            tline = REG_1602_LINE1_SCROLL;
        }
        else if (x == 2) {
            tline = REG_1602_LINE2_SCROLL;
        }
        tbuf[0] = y;
        copyStrToBuf(str, tbuf, 1, size);
        writeRegBufNoLength(BIT_LCD1602_ADD,tline,tbuf);
    }
    /**
      *  Scroll display a number at a specified location in BIT-LCD1602
      * @param x The location in a line begins to display , eg: "1"
      * @param y The location in a row begins to display , eg: "1"
      */
    //% blockId=ikbit_lcd1602ScrollDisNumber  block="BIT-LCD1602 scroll display number|X|%x |y|%y |value|%num"
    //% x.min=1  x.max=2
    //% y.min=1  y.max=16
    //% advanced=true
    //% weight=165 blockGap=30 color=#2E8B57
    export function lcd1602ScrollDisNumber(x: number, y: number, n: number): void {
        let str=n.toString();
        lcd1602ScrollDisString(x,y,str);
    }

}
