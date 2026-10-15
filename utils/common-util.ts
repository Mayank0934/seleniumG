import cryptoJs from 'crypto-js';

export default class CommonUtils {

    private secretKey : string;


   constructor() 
   {

if (process.env.SECRET_KEY) {
this.secretKey = process.env.SECRET_KEY;
} else {
throw new Error("SECRET_KEY is missing");
}

}
/**
 * 
 * @param data provides encrypteddata from String
 * @returns encrypteddata
 */
    public encryptdata(data:string) {
     
       const encrypteddata = cryptoJs.AES.encrypt(data, this.secretKey).toString();
       console.log(encrypteddata);
       return encrypteddata
    }

/****

* @param decyrptdata
* @returns
*/

public decryptData(encData: string) {

const decryptedData = cryptoJs.AES.decrypt(encData,this.secretKey).toString(cryptoJs.enc.Utf8);

return decryptedData;
}

}