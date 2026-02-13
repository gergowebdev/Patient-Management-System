"use client";

import { Controller, Control } from "react-hook-form";
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FormFieldType } from "./forms/PatientForm";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";

interface CustomProps {
    control: Control<any>;
    fieldType: FormFieldType;
    name: string;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
    const { fieldType, iconSrc, iconAlt, placeholder } = props;

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className="flex rounded-md border border-base-500 bg-base-400">
                    {iconSrc && (
                        <Image
                            src={iconSrc}
                            height={24}
                            width={24}
                            alt={iconAlt || "icon"}
                            className="ml-2"
                        />
                    )}
                    <FieldContent>
                        <Input
                            {...field}
                            placeholder={placeholder}
                            className="bg-base-400 placeholder:text-base-600 border-base-500 h-11 focus-visible:ring-0 focus-visible:ring-offset-0 border-0 !important;"
                        />
                    </FieldContent>
                </div>
            );
        case FormFieldType.PHONE_INPUT:
            return (
                <FieldContent>
                    <PhoneInput
                        defaultCountry="US"
                        placeholder={placeholder}
                        international
                        withCountryCallingCode
                        value={field.value as ZodE164 | undefined}
                        onChange={field.onChange}
                        className="mt-2 h-11 rounded-md px-3 text-sm border bg-base-400 placeholder:text-base-600 border-base-500 !important;"
                    />
                </FieldContent>
            );
        default:
            break;
    }
};

const CustomFormController = (props: CustomProps) => {
    const { control, name, label } = props;

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                        {label}
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
