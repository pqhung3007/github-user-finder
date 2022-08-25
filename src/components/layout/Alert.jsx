import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { AiOutlineWarning } from "react-icons/ai";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    <div style={{ visibility: alert ? "visible" : "hidden" }}>
      <div className="flex items-center space-x-2">
        <AiOutlineWarning className="fill-red-500" />
        <strong className="text-red-500">{alert?.message}</strong>
      </div>
    </div>
  );
}

export default Alert;
