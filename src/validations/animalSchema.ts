import {z} from 'zod'

const sex = ["Macho", "Hembra"] as const;

export const animalSchema = z.object({
    name: z.string().min(2
        , {message: "Name must be at least 2 characters long"}
    ).max(255, {message: "Name must be at most 255 characters long"}),
    age: z.string().refine(age => {
        return !isNaN(parseInt(age))
    }, {message: "Age must be a number"}), 
    image: z.string().url({message: "Image must be a valid URL"}),
    description: z.string().
    min(2, {message: "Description must be at least 2 characters long"}).
    max(255, {message: "Description must be at most 255 characters long"}),
    especie: z.string().min(2, {message: "Especie must be at least 2 characters long"}).
    max(255, {message: "Especie must be at most 255 characters)"}),
    race: z.string().max(255, {message: "must be at most 255 characters long"}),
    coat_color: z.string().max(255, {message: "must be at most 255 characters long"}),
    weight: z.string().refine(weight => {
        return !isNaN(parseFloat(weight))
    }, {message: "Weight must be a number"}),
    sex: z.enum(sex, {
        errorMap: () => ({message: "Seleccione el sexo del animal"})
    })
})