import {useForm} from "react-hook-form";

type Inputs = {
    example: string
    exampleRequired: string
};

const BasicForm = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>()
    const onSubmit = (data: Inputs) => console.log(data);
    let currentExampleFieldValue = watch('example');
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input defaultValue="test" {...register("example")}/>
            </div>
            <p>{currentExampleFieldValue}</p>
            <div>
                <input {...register("exampleRequired", {required: true})} />
                {/*{errors.exampleRequired && (errors.exampleRequired.message)}*/}
            </div>
            {errors.exampleRequired && (<p>This field is required !</p>)}

            <input type="submit"/>
        </form>
    );

}

export default BasicForm;