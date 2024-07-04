import { z } from "zod";

export type signInFormType = z.infer<typeof signInFormSchema>;

export const signInFormSchema = z.object({
    name: z.string()
    .min(1, {message: "Email tidak boleh kosong"}),
    password: z.string() .min(5, {message: "Password tidak boleh kosong"})
})