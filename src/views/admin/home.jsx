import React, { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import TableExampleApprove from "./form";
import adminHome from "../css/adminHome.module.css";

function Admin() {
  const [itemID, setItemID] = React.useState(0);

  return (
    <div className={adminHome.form_background}>
      <div className={adminHome.nav}>
        <div className="item">
          <a onClick={() => setItemID(1)}>用户管理</a>
        </div>
        <div className="line"></div>
        <div className="item">
          <a onClick={() => setItemID(2)}>栏目管理</a>
        </div>
      </div>
      <div className={adminHome.form}>
        {itemID === 0 ? (
          <></>
        ) : itemID === 1 ? (
          <TableExampleApprove />
        ) : itemID === 2 ? (
          <>111</>
        ) : (
          <>333</>
        )}
        {itemID}
      </div>
    </div>
  );
}

export default Admin;
