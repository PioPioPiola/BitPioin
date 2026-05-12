import { z } from 'zod';

export const UserSchema = z.object({
  username: z.string().min(3, "Mínimo 3 letras").max(20),
  email: z.string().email("Correo no válido"),
  points: z.number().positive().int(),
  birthDate: z.date().optional()
});

export type User = z.infer<typeof UserSchema>;

export const UserSchemaOwn = z.object({
   validator: z.number().min(0).max(100)
});