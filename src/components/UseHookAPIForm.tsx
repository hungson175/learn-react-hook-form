import * as React from "react"
import { useForm, useController, UseControllerProps } from "react-hook-form"
type FormValues = {
    FirstName: string
}

function Input(props: UseControllerProps<FormValues>) {
    const { field, fieldState } = useController(props)
    return (
        <div>
            <input {...field} placeholder={props.name} />
            <p>{fieldState.isTouched && "Touched"}</p>
            <p>{fieldState.isDirty && "Dirty"}</p>
            <p>{fieldState.invalid ? "invalid":"valid"}</p>
        </div>
    )
}

export default function UseHookAPIForm() {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            FirstName: "",
        }
    })
    const onSubmit = (data : FormValues) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name="FirstName" rules={{ required: true }} />
            <input type="submit" />
        </form>
    )
}