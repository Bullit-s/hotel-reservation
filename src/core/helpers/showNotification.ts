import { notification } from "antd";
import { IconType } from "antd/es/notification";

export const showNotification = (
  type: IconType,
  message: string,
  description?: string
) => {
  notification[type]({
    message: message,
    description: description
  });
};
