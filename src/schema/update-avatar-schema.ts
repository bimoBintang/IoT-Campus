import { z } from 'zod';


export const UpdateProfilSchema = z.object({
    name: z.string().min(1, {message: "Nama tidak boleh kosong"}).optional(),
    password: z.string().min(6, {message: "Password minimal 6 karakter"}).optional(),
    avatar: z
        .custom<File | undefined>()
        .refine(
        (file) =>
            !file || (file instanceof File && file.type.startsWith("image/*")),
            {message: "Foto profile harus berupa gambar"}
        )
        .refine((file) => {
        return !file || file.size < 1024 * 1024 * 3;
        }, {message: "Foto profile tidak boleh lebih dari 3MB"}),
});