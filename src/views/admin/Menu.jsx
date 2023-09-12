import { useNavigate } from "react-router-dom";
import adminMenu from "./css/adminHome.module.css";

export default function Menu() {
  const navigate = useNavigate();
  const logOut = () => {
    {
      localStorage.removeItem("users");
    }
    navigate("/");
  };
  const menuList = [
    {
      id: 1,
      title: "用户管理",
    },
    {
      id: 2,
      title: "资讯管理",
    },
    {
      id: 3,
      title: "数据源管理",
    },
    {
      id: 4,
      title: "网页管理",
    },
    {
      id: 5,
      title: "用户管理",
    },
  ];
  return (
    <>
      <div className={adminMenu.form_background}>
        <div className={adminMenu.nav}>
          <div className={adminMenu.menu}>
            {menuList.map((list, index) => (
              <div key={index}>
                <div className={adminMenu.item}>
                  <span>{list.title}</span>
                </div>
                <div className={adminMenu.line}></div>
              </div>
            ))}
          </div>

          <div className={adminMenu.item} onClick={logOut}>
            退出
          </div>
        </div>
      </div>
    </>
  );
}
