"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import { Field, FieldGroup } from "@/components/ui/field";
import CustomFormController from "../CustomFormController";

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}

const formSchema = z.object({
    username: z.string().min(2, {
        message: "USername must be at least 2 characters.",
    }),
});

const PatientForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);
    }

    return (
        <>
            <form
                id="form-rhf-demo"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 flex-1"
            >
                <section className="mb-12 space-y-4">
                    <h1 className="text-[32px] leading-9 font-bold md:text-[36px] md:leading-10 md:font-bold">
                        Hi there 👋
                    </h1>
                    <p className="text-base-700">
                        Schedule your first appointment.
                    </p>
                </section>

                <FieldGroup>
                    <CustomFormController
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="name"
                        label="Full name"
                        placeholder="John Doe"
                        iconSrc="/assets/icons/user.svg"
                        iconAlt="user"
                    />
                    <CustomFormController
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="johndoe@example.com"
                        iconSrc="/assets/icons/email.svg"
                        iconAlt="email"
                    />
                    <CustomFormController
                        fieldType={FormFieldType.PHONE_INPUT}
                        control={form.control}
                        name="phone"
                        label="Phone number"
                        placeholder="(555) 123-4567"
                    />
                </FieldGroup>
            </form>
            <Field orientation="horizontal">
                <Button type="submit" form="form-rhf-demo">
                    Submit
                </Button>
            </Field>
        </>
    );
};

export default PatientForm;
