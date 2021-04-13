const User = require('../sechemas/userSchema');
const Score = require('../sechemas/scoreSchema');

class UserDataEntity {
    constructor() {}
    getUsers() {
        return User.find().sort({ finalScore: "descending" }).limit(5).exec();
    }
    async setUser(UserOb) {
        try {

            const UsersEntity = new User(UserOb);
            const UserResult = await UsersEntity.save();
            return UserResult;
            // }
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserDataEntity;