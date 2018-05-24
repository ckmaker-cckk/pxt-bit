
/**
 * IKBIT PACKAGES
 */
//% weight=1000 color=#436EEE icon="\uf1cb"
namespace ikbit {

    export function writeReg(add: number, reg: number) {
        pins.i2cWriteNumber(add, reg, NumberFormat.Int8LE)
    }
    export function writeRegBuf(add: number, reg: number,buf: Buffer): void {
        let size =buf.length;
        let tbuf = pins.createBuffer(size + 2);
        tbuf[0] = reg;
        tbuf[1] = size;
        tbuf.write(2, buf);
        pins.i2cWriteBuffer(add, tbuf);
    }
    export function writeRegBufNoLength(add: number, reg: number, buf: Buffer): void {
        let size = buf.length;
        let tbuf = pins.createBuffer(size + 1);
        tbuf[0] = reg;
        tbuf.write(1, buf);
        pins.i2cWriteBuffer(add, tbuf);
    }

    export function readReg8(add: number, reg: number): number {
        let value: number;
        pins.i2cWriteNumber(add, reg, NumberFormat.Int8LE);
        value = pins.i2cReadNumber(add, NumberFormat.Int8LE);
        return value;
    }

    export function  copyStrToBuf(str:string,buf:Buffer,offset:number,size:number):void {
        for(let i=0;i<size;i++)
        {
            buf[offset+i]=str.charCodeAt(i);
        }
    }
}