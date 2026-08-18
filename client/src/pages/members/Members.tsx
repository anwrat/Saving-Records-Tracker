import { Search, Plus, Eye, Pencil } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { getMembers } from "../../api/members.api";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import EmptyState from "../../components/ui/EmptyState";

const Members = () => {
  const {
    data: members = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["members"],
    queryFn: getMembers,
  });

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="p-6">
        <p className="text-sm text-gray-500">Loading members...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-600">
            Failed to load members: {error.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      {/* Page Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Members</h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage all members of the saving group.
          </p>
        </div>

        <Button onClick={() => navigate("/members/new")}>
          <Plus size={18} />
          Add Member
        </Button>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-xl border bg-white p-5">
          <p className="text-sm text-gray-500">Total Members</p>

          <p className="mt-2 text-2xl font-bold text-gray-900">
            {members.length}
          </p>
        </Card>
      </div>

      {/* Members Section */}
      <div className="rounded-xl border bg-white">
        {/* Search */}
        <div className="border-b p-4">
          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search members..."
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
            />
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Member
                </th>

                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Army No.
                </th>

                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Phone
                </th>

                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Email
                </th>

                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {members.map((member) => (
                <tr key={member.id} className="transition hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {member.name}
                    </div>

                    <div className="mt-1 text-xs text-gray-500">
                      {member.address}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {member.armyNo}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {member.phone}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {member.email || "—"}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost">
                        <Eye size={18} />
                      </Button>

                      <Button variant="ghost">
                        <Pencil size={18} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="divide-y md:hidden">
          {members.map((member) => (
            <div key={member.id} className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-gray-900">{member.name}</h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Army No: {member.armyNo}
                  </p>
                </div>

                <div className="flex gap-1">
                  <Button variant="ghost">
                    <Eye size={18} />
                  </Button>

                  <Button variant="ghost">
                    <Pencil size={18} />
                  </Button>
                </div>
              </div>

              <div className="mt-4 space-y-1 text-sm text-gray-600">
                <p>{member.phone}</p>

                {member.email && <p>{member.email}</p>}

                <p>{member.address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {members.length === 0 && (
          <EmptyState
            title="No members found"
            description="Add your first member to get started."
            action={
              <Button onClick={() => navigate("/members/new")}>
                Add Member
              </Button>
            }
          />
        )}
      </div>
    </div>
  );
};

export default Members;
