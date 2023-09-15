import Joi from "joi"

export const user_validations = (req, res, next) => {
    const user_val = Joi.object({
        username: Joi.string().min(5).max(20).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(7).max(15).required()
    });

    const { error } = user_val.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    next();

}