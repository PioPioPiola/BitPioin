import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserSchema } from "../schemas/UserValidator";

export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm < any > ({
        resolver: zodResolver(UserSchema)
    });

    return (

        <form onChange={handleSubmit((data) => { })}>
            <input {...register("email")} />
            {errors.email && <p>Error: {errors.email.message}</p>}
        </form>
    );
};
