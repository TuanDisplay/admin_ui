import ideaRequest from "~/utils/axios/ideaRequest";
import problemRequest from "~/utils/axios/problemRequest";

//idea
export const ideaWatting = async () => {
  const res = await ideaRequest.get("/ideas/list-watting");
  return res.data;
};

export const ideaWattingDe = async (idea_id: string) => {
  const res = await ideaRequest.get(`/ideas/${idea_id}/detail-watting`);
  return res.data;
};

export const ideaAccept = async (idea_id: string) => {
  await ideaRequest.put(`/ideas/${idea_id}/accept-status`, {
    is_active: 1,
  });
};

export const ideaReject = async (idea_id: string) => {
  await ideaRequest.put(`/ideas/${idea_id}/reject-status`, {
    is_delete: 1,
  });
};

//problem

export const problemWatting = async () => {
  const res = await problemRequest.get("/problem/list-watting");
  return res.data;
};

export const problemWattingDe = async (problem_id: string) => {
  const res = await problemRequest.get(`/problem/${problem_id}/detail-watting`);
  return res.data;
};

export const problemAccept = async (problem_id: string) => {
  await problemRequest.put(`/problem/${problem_id}/accept-status`, {
    is_active: 1,
  });
};

export const problemReject = async (problem_id: string) => {
  await problemRequest.put(`/problem/${problem_id}/reject-status`, {
    is_delete: 1,
  });
};
