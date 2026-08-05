const { z } = require('zod');

const contactSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).trim().min(1, 'Name cannot be empty'),
  email: z.string({ required_error: 'Email is required' }).trim().email('Invalid email address'),
  topic: z.string({ required_error: 'Topic is required' }).trim().min(1, 'Topic cannot be empty'),
  message: z.string({ required_error: 'Message is required' }).trim().min(1, 'Message cannot be empty')
});

module.exports = { contactSchema };
