import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@mui/material"
import Select from "react-select"

interface IFormInput {
    firstName: string
    lastName: string
    iceCreamType: { label: string, value: string }
}

const IntegrateUILibForm = () => {
    const {control, handleSubmit} = useForm<IFormInput>({
        defaultValues: {
            firstName: '',
            lastName: '',
            iceCreamType: {}
        }
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Controller
                    name="firstName"
                    control={control}
                    render={({field}) => <Input {...field} />}
                />
            </div>
            <div>
                <Controller
                    name="lastName"
                    control={control}
                    render={({field}) => <Input {...field} />}
                />
            </div>

            <Controller
                name="iceCreamType"
                control={control}
                render={({field}) => (
                    <Select
                        {...field}
                        options={[
                            {value: "chocolate", label: "Chocolate"},
                            {value: "strawberry", label: "Strawberry"},
                            {value: "vanilla", label: "Vanilla"},
                        ]}
                    />
                )}
            />
            <input type="submit"/>
        </form>
    );
}

export default IntegrateUILibForm;