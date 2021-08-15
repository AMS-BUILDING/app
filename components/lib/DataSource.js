import axios from "axios";
//moi lan ket noi wifi thi a de y ip address nhe. lay no r thay vao kia. va de y port be nua 
//ok em port be la 8080 thi de 8080 ak em anh thay em dang de 8081. dung roi.oke em de anh test xem sao
// em noi qua ket qua cho anh phat, khi bam dang ki thi no se the nao
const BASE_URL = "http://192.168.1.8:8080/api";
export const doPost = async (path, headers, formData) => {
  return axios({
    url: BASE_URL + path,
    method: "POST",
    headers: headers,
    data: formData,
  });
};

export const doGet = async (path, headers) => {
  return axios({
    url: BASE_URL + path,
    method: "GET",
    headers: headers,
  });
};

export const doPut = async (path, headers, formData) => {
  return axios({
    url: BASE_URL + path,
    method: "PUT",
    headers: headers,
    data: formData,
  });
};
export const doDelete = async (path) => {
  return axios({
    url: BASE_URL + path,
    method: "DELETE",
  });
};
