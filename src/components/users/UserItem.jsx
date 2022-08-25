import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="bg-slate-100 rounded-xl p-8 flex items-center space-x-6 hover:shadow-lg duration-200">
      <img src={avatar_url} alt="" className="w-16 h-16 rounded-full" />
      <div>
        <h1 className="text-base font-bold mb-1">{login}</h1>
        <Link
          to={`/user/${login}`}
          className="text-blue-400 hover:text-blue-600 duration-200"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
