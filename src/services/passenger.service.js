import http from "../http-common"

class PassengerDataService {
    
  getAll() {
    return http.get("/");
  }

  create(data) {
    return http.post("/", data);
  }
}

export default new PassengerDataService();