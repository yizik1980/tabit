const User = require('../sechemas/userSchema');
const Score = require('../sechemas/scoreSchema');

class UserDataEntity {
    constructor() {}
    getUser(id) {
        return User.findOne({ UserId: id }).exec();
    }
    async setUser(UserOb) {
        try {
            const scoresEntity = new Score(UserOb.score);
            const scoreResult = await scoresEntity.save();
            UserOb.score = scoreResult._id;
            console.table(scoreResult);
            if (scoreResult._id) {
                const UsersEntity = new User(UserOb);
                const UserResult = await UsersEntity.save();
                return { UserResult, scoreResult };
            }
            return { scoreResult };
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserDataEntity;