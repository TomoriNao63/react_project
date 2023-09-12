import api from "../../api";

export default function User() {
  const user = JSON.parse(localStorage.getItem("users"));

  const onTest = () => {
    api
      .home()
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div>
          <button onClick={onTest}>测试</button>
        </div>
      </div>
    </>
  );
}
