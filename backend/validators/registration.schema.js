const { z } = require('zod');

const registrationSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).trim().min(1, 'Name cannot be empty'),
  email: z.string({ required_error: 'Email is required' }).trim().email('Invalid email address'),
  phone: z.string({ required_error: 'Phone is required' }).trim().min(1, 'Phone number cannot be empty'),
  institution: z.string({ required_error: 'Institution is required' }).trim().min(1, 'Institution cannot be empty'),
  category: z.string({ required_error: 'Category is required' }).trim().min(1, 'Category cannot be empty'),
  dietary: z.enum(['Vegetarian', 'Non-Vegetarian'], {
    errorMap: () => ({ message: "Dietary preference must be 'Vegetarian' or 'Non-Vegetarian'" })
  }).default('Vegetarian')
});

module.exports = { registrationSchema };
