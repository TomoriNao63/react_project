import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import api from "../api";

export default function Reg() {
  const defaultVaules = {
    firstName: "",
    lastName: "",
    email: "",
    agree: false,
  };
  const { register, handleSubmit, errors, watch, clearErrors } =
    useForm(defaultVaules);

  const onReg = (values) => {
    const param = {
      id: nanoid(),
      username: values.firstName,
      password: values.lastName,
    };

    const res = api.reg(param);
    console.log(res);
  };
  return (
    <>
      <div className="ui container">
        <div className="ui form">
          <input
            name="username"
            placeholder="账号"
            type="text"
            {...register("firstName", { required: true, maxLength: 8 })}
          ></input>
          <input
            name="password"
            placeholder="密码"
            type="password"
            {...register("lastName", { required: true })}
          ></input>
          <button className="ui button" onClick={handleSubmit(onReg)}>
            注册
          </button>
        </div>
      </div>
    </>
  );
}
