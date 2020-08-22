
const ConversionObjects = {
    userToUserReturn (user){
        const userReturn = {
            username: user.username,
            name: user.name,
            surname: user.surname,
            email: user.email,
            pic_path: user.pic_path,
            birthdate: user.birthdate,
            address: user.address,
            country : user.country,
            city: user.city,
            hobbies: user.hobbies,
            job: user.job
        }
        return userReturn;
    }
};

module.exports = ConversionObjects;