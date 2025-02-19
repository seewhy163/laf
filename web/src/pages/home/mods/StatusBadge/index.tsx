import { Spinner } from "@chakra-ui/react";
import clsx from "clsx";

import { APP_PHASE_STATUS } from "@/constants/index";

import styles from "./index.module.scss";
const colorScheme: {
  [key: string]: string;
} = {
  Started: "primary",
  Creating: "warn",
  Starting: "blue",
  Deleting: "error",
  Deleted: "error",
  Stopping: "error",
  Stopped: "error",
  Restarting: "blue",
  Created: "warn",
};
export default function StatusBadge(props: {
  statusConditions?: string;
  state?: string;
  className?: string;
}) {
  const { statusConditions = APP_PHASE_STATUS.Started, state, className } = props;
  return (
    <div className={clsx("flex", className)}>
      <div
        className={clsx(
          styles.badgeStyle,
          styles[colorScheme[statusConditions]],
          "px-2 py-1 lg:px-3",
        )}
      >
        <span>{statusConditions}</span>
      </div>
      {statusConditions === APP_PHASE_STATUS.Started ||
      (state !== APP_PHASE_STATUS.Restarting && statusConditions === APP_PHASE_STATUS.Stopped) ? (
        ""
      ) : (
        <div className="flex items-center pr-2">
          <Spinner size="xs" />
        </div>
      )}
    </div>
  );
}
