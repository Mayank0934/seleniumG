import CommonUtils from '../../utils/common-util.js';
import { test as baseTest } from './pom-fixture.js';



type CommonFixtureType = {

    commonUtils : CommonUtils
}
export const test = baseTest.extend<CommonFixtureType>({

    commonUtils : async({},use)=> {
     await use(new CommonUtils())

    }
})