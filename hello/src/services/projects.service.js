import http from "../http-common";

class ProjectsDataService {
  getAll() {
    return http.get("/projects");
  }

  get(id) {
    return http.get(`/projects/${id}`);
  }

  create(data) {
    return http.post("/projects", data);
  }

  delete(id)
  {
      return http.delete(`/projects/${id}`);
  }
}
export default new ProjectsDataService();