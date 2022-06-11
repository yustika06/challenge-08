import React from "react";

const ListItem = ({ id, title, delHandler, doneHandler, done }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center`}>
      {done && <del>{title}</del>}
      {!done && <>{title}</>}
      <div>
        <button className="btn btn-sm btn-danger mr-2" onClick={() => delHandler(id)}>
          Hapus
        </button>
        <button className={`btn btn-sm ${done ? "btn-warning" : "btn-success"}`} onClick={() => doneHandler(id)}>
          {done ? `Ulang` : `Selesai`}
        </button>
      </div>
    </li>
  );
};

export default ListItem;
