const { z } = require('zod');

const paperSchema = z.object({
  author: z.string({ required_error: 'Author name is required' }).trim().min(1, 'Author name cannot be empty'),
  email: z.string({ required_error: 'Email is required' }).trim().email('Invalid email address'),
  title: z.string({ required_error: 'Title is required' }).trim().min(1, 'Title cannot be empty'),
  track: z.string({ required_error: 'Track is required' }).trim().min(1, 'Track cannot be empty'),
  coauthors: z.string().optional().default(''),
  abstract: z.string({ required_error: 'Abstract is required' }).trim().min(1, 'Abstract cannot be empty'),
  fileUrl: z.string({ required_error: 'File URL is required' }).trim().min(1, 'File URL cannot be empty')
});

module.exports = { paperSchema };
