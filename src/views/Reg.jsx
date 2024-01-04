import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import api from "../api";
import styles from "./css/login.module.css";
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
      uid: nanoid(),
      username: values.firstName,
      password: values.lastName,
    };

    api
      .reg(param)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <div className={styles.inputGroup}>
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
        </div>

        <button className={styles.submitButton} onClick={handleSubmit(onReg)}>
          注册
        </button>
      </div>
    </>
  );
}
