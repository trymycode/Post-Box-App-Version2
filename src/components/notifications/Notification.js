import React from "react";
import moment from "moment";
const Notification = (props) => {
  const { notifications } = props;
  return (
    <div className="section notification-box">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title notification-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map((notification) => {
                return (
                  <li key={notification.id}>
                    <span className="Grey-text">
                    <span className="notification-name">{notification.user}</span> {" " + notification.content + " "}
                    </span>
                    <div className="Grey-text note-date">
                      {moment(notification.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Notification;
