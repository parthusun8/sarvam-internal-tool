import React from 'react'

import Button from './Button'
import Input from './Input'
import { gcsSchema } from "../validations"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";


const InputForm = ({ handleSubmitForm }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(gcsSchema),
        mode: "onChange",
        defaultValues: {
            "file_path": ""
        }
    });

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        handleSubmitForm(data);
    });

    return (
        <div className=' bg-black w-full h-full text-white flex flex-col gap-y-4 items-center justify-center'>
            <Input register={register} fieldName={"file_path"} error={errors} message={errors.file_path?.message} placeholder={"Enter GCS URI"} type="text" />
            <Button disabled={!isValid} onClick={onSubmit}>Load Dataset</Button>
        </div>
    )
}

export default InputForm