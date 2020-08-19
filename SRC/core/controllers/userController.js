const Validations = require('../utils/validations');

const MainController = {

    async update(req, res) {
        try {
//exist
            const id = parseInt(req.body.id);

            Validations.validaId(id);

            const user = await User.findOne({
                where: { id: id, deletedAt: null }
            });
//
            if (!user) { throw Error(' User error. '); }

            const userF = {
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: user.password,
                pic_path: req.body.pic_path,
                birthdate: req.body.answerSecret,
                address: req.body.adress,
                country: req.body.country,
                city: req.body.city
            };

            Validations.validaUser(userF);

            await User.update(userF, {
                where: { id: id }
            });
            res.status(200).send({ message: 'Todo OK' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'There was an error. Contact with the administrator.' });
        }
    },
    async delete(req, res) {
        try {
//exist
            const id = parseInt(req.body.id);

            Validations.validaId(id);

            const user = await User.findOne({
                where: { id: id, deletedAt: null }
            });
//
            if (!user) { throw Error(' User error. '); }

            await User.delete(id);
            res.status(200);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    async usersNear(req, res) {
        try {
//exist
            let id = req.body.id;

            Validations.validaId(id);

            const user = await User.findOne({
                where: { id: id, deletedAt: null }
            });
//
            if (!user) { throw Error(' User error. '); }

            const userList = await User.where({ city: user.city});
            res.status(201).send(userList);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
};