import ideaRequest from "~/utils/axios/ideaRequest";
import problemRequest from "~/utils/axios/problemRequest";

interface IStatusProduct {
  is_active: number;
  is_delete: number;
  page: number;
  industry: string;
  ideasname?: string;
  problemname?: string;
}

//idea
export const ideaMana = async (params: IStatusProduct) => {
  const res = await ideaRequest.get("/ideas/admin-list", {
    params: {
      is_active: params.is_active,
      is_delete: params.is_delete,
      page: params.page,
      industry: params.industry,
      ideasname: params.ideasname,
    },
  });
  return res.data;
};

export const ideaWattingDe = async (idea_id: string) => {
  const res = await ideaRequest.get(`/ideas/${idea_id}/detail-watting`);
  return res.data;
};

export const ideaAccept = async (idea_id: string, is_active: 0 | 1) => {
  await ideaRequest.put(`/ideas/${idea_id}/accept-status`, {
    is_active: is_active,
  });
};

export const ideaReject = async (idea_id: string, is_delete: 0 | 1) => {
  await ideaRequest.put(`/ideas/${idea_id}/reject-status`, {
    is_delete: is_delete,
  });
};

//problem

export const problemMana = async (params: IStatusProduct) => {
  const res = await problemRequest.get("/problem/admin-list", {
    params: {
      is_active: params.is_active,
      is_delete: params.is_delete,
      page: params.page,
      industry: params.industry,
      problemname: params.problemname,
    },
  });
  return res.data;
};

export const problemWattingDe = async (problem_id: string) => {
  const res = await problemRequest.get(`/problem/${problem_id}/detail-watting`);
  return res.data;
};

export const problemAccept = async (problem_id: string, is_active: 0 | 1) => {
  await problemRequest.put(`/problem/${problem_id}/accept-status`, {
    is_active: is_active,
  });
};

export const problemReject = async (problem_id: string, is_delete: 0 | 1) => {
  await problemRequest.put(`/problem/${problem_id}/reject-status`, {
    is_delete: is_delete,
  });
};

// dashboard
export const totalIdeas  = async () => {
  const res = await ideaRequest.get('/ideas/countideas')
  return res.data
}

export const totalProblems  = async () => {
  const res = await problemRequest.get('/problem/countproblem')
  return res.data
}