"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
// import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

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
                    <Controller
                        name="username"
                        control={form.control}
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
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
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
