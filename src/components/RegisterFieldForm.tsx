
import { useForm } from "react-hook-form";

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
}

interface IFormInput {
    firstName: string;
    gender: GenderEnum;
}

function RegisterFieldForm() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit = (data: IFormInput) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label> First Name </label>
            <input {...register('firstName')}/>
            <label> Gender Selection </label>
            <select {...register("gender")}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
            </select>
            <input type="submit"/>
        </form>
    );
}

export default RegisterFieldForm;