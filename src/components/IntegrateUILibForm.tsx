import Select from "react-select"
import {useForm, Controller, SubmitHandler} from "react-hook-form"
import {Input} from "@mui/material"

interface IFormInput
{
    firstName: string
    lastName: string
    iceCream: {
        label: string
        value: number
    }
}
const IntegrateUILibForm = () => {
    const {control, handleSubmit} = useForm({
        defaultValues: {
            firstName:"",
            lastName:"",
            iceCream:{ label: "", value: -1},
        }
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                render={({field}) => <Input {...field} />}/>
            <Controller
                name="lastName"
                control={control}
                render={({field}) => <Input {...field}/>}/>
            <Controller
                name="iceCream"
                control={control}
                render={({field}) => (
                    <Select
                        {...field}
                        options = {[
                            { value: 0, label: "Chocolate"},
                            { value: 1, label: "Banana"},
                            { value: 2, label: "Mango"},
                        ]}
                    />
                )}
            />
            <input type="submit" />
        </form>
    );
}

export default IntegrateUILibForm;