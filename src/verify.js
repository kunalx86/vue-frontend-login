import Joi from "@hapi/joi";

export function validate(data) {

  const schema = Joi.object({
    name: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email({
        tlds: {
          allow: false
        }
      }),
    password: Joi.string()
      .min(6)
      .regex(/^[a-zA-Z]\w{3,14}$/)
      .required()
  });
  return schema.validate(data);
}

export function validateLogin(data) {

  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email({
        tlds: {
          allow: false
        }
      }),
    password: Joi.string()
      .min(6)
      .regex(/^[a-zA-Z]\w{3,14}$/)
      .required()
  });
  return schema.validate(data);
}