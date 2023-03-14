import axios from "axios";
import Swal from "sweetalert2";

const fetchData = async (url, method, data = {}) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response;
  } catch (error) {
    Swal.fire("Error", `${error}`, "error");
  }
};

// export the fetch data method
export default fetchData;
