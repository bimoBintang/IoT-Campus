import z from "zod";

export type signUpFormType = z.infer<typeof signUpFormSchema>;

export const signUpFormSchema = z
  .object({
    name: z.string().min(1, "Nama tidak boleh kosong"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    passwordConfirm: z.string().min(6, "Password minimal 6 karakter"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password tidak sama",
    path: ["passwordConfirm"],
  });

export const createUserSchema = z.object({
  name: z.string().min(1, "Nama tidak boleh kosong"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});
