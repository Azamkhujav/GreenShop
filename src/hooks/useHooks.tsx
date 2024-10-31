import qs from "qs";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const useHooks = () => {
  const location = useLocation();
  const params = useParams();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const navigate = useNavigate();

  return {
    query,
    location,
    params,
    navigate,
    qs,
  };
};

export default useHooks;