"use client";

import { Controller, Control } from "react-hook-form";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FormFieldType } from "./forms/PatientForm";

interface CustomProps {
    control: Control<any>;
    fieldType: FormFieldType;
}

const CustomFormController = ({
    control,
    fieldType,
    name,
    label,
}: CustomProps) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                        Username
                    </FieldLabel>
                    <Input
                        {...field}
                        id="form-rhf-demo-title"
                        aria-invalid={fieldState.invalid}
                        placeholder="shadcn"
                        autoComplete="off"
                    />
                    <FieldDescription>
                        This is your public display name
                    </FieldDescription>
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
            )}
        />
    );
};

export default CustomFormController;
