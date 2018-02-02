import { UserAddress } from "./UserAddress";

export class UserDetail {
    constructor(public sex = '',
        public initials = '',
        public firstName = '',
        public lastName = '',
        public dateOfBirth = new Date(),
        public countryOfBirth = '',
        public placeOfBirth = '',
        public nationality = '',
        public socialSecurityNumber = 0,
        public address = new UserAddress()) {
    }
}