import React from "react";

const Form = ({ value, submit, onChange }) => {
  return (
    <form onSubmit={submit}>
      <div className="form-group row align-items-center">
        <div className="col-8 pr-0">
          <input type="text" className="form-control-plaintext" placeholder="Apa yang mau kamu lakukan?" required value={value} onChange={onChange} />
        </div>
        <div className="col-4 text-right">
          <button type="submit" className="btn btn-primary">
            Tambahkan Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
