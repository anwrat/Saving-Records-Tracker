import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Form from "../../components/ui/Form";

import { memberSchema, type MemberFormData } from "../../schemas/member.schema";

interface MemberFormProps {
  onSubmit: (data: MemberFormData) => void;
  isSubmitting?: boolean;
}

const MemberForm = ({ onSubmit, isSubmitting = false }: MemberFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemberFormData>({
    resolver: zodResolver(memberSchema),
    mode: "all",

    defaultValues: {
      name: "",
      email: "",
      armyNo: "",
      phone: "",
      address: "",
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="name"
        label="Name"
        placeholder="Enter member name"
        {...register("name")}
        error={errors.name?.message}
      />

      <Input
        id="armyNo"
        label="Army Number"
        placeholder="Enter army number"
        {...register("armyNo")}
        error={errors.armyNo?.message}
      />

      <Input
        id="phone"
        label="Phone"
        type="tel"
        placeholder="Enter phone number"
        {...register("phone")}
        error={errors.phone?.message}
      />

      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="Enter email address"
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        id="address"
        label="Address"
        placeholder="Enter address"
        {...register("address")}
        error={errors.address?.message}
      />

      <div className="flex justify-end">
        <Button type="submit" isLoading={isSubmitting}>
          Add Member
        </Button>
      </div>
    </Form>
  );
};

export default MemberForm;
