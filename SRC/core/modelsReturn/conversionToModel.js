const ConversionModelObjects = {
    userReturnToUser(userReturn) {
        const user = {
            id: userReturn.id,
            username: userReturn.username,
            name: userReturn.name,
            surname: userReturn.surname,
            email: userReturn.email,
            pic_path: userReturn.pic_path,
            birthdate: userReturn.birthdate,
            address: userReturn.address,
            country: userReturn.country,
            city: userReturn.city,
            hobbies: userReturn.hobbies,
            job: userReturn.job,
        }
        return user;
    }
};

module.exports = ConversionModelObjects;