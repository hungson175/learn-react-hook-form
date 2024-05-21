import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { TextField, Checkbox } from "@mui/material"

interface IFormInputs {
    TextField: string
    MyCheckBox: boolean
}

const IntegrateControlledInputForm = () => {
    const { control, handleSubmit } = useForm<IFormInputs>({
        defaultValues: {
            MyCheckBox: false,
        }
    })

    const onSubmit : SubmitHandler<IFormInputs> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="TextField"
                control={control}
                render={({ field }) => <TextField {...field} />}
            />
            <Controller
                name="MyCheckBox"
                control={control}
                rules={{required: false}}
                render={({field}) => <Checkbox {...field}/>}
            />
            <input type="submit"/>
        </form>
    );
}

export default  IntegrateControlledInputForm;