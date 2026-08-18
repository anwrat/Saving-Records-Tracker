import api from "./axios";
import type { Member } from "../types/member.type";
import type { MemberFormData } from "../schemas/member.schema";

export const getMembers = async (): Promise<Member[]> => {
  const response = await api.get<Member[]>("/members");

  return response.data;
};

export const createMember = async (data: MemberFormData): Promise<Member> => {
  const response = await api.post<Member>("/members", data);

  return response.data;
};
