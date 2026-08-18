import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Card from "../../components/ui/Card";
import MemberForm from "../../components/members/MemberForm";

import { createMember } from "../../api/members.api";
import type { MemberFormData } from "../../schemas/member.schema";

const CreateMember = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const createMemberMutation = useMutation({
    mutationFn: createMember,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["members"],
      });

      navigate("/members");
    },
  });

  const handleSubmit = (data: MemberFormData) => {
    createMemberMutation.mutate(data);
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Add Member</h1>

        <p className="mt-1 text-sm text-gray-500">
          Add a new member to the saving group.
        </p>
      </div>

      <Card className="max-w-2xl p-6">
        <MemberForm
          onSubmit={handleSubmit}
          isSubmitting={createMemberMutation.isPending}
        />
      </Card>
    </div>
  );
};

export default CreateMember;
