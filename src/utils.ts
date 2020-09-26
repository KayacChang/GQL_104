import { stringify } from "querystring";

type Props = {
  protocol?: string;
  hostname: string;
  pathname?: string;
  search?: { [key: string]: any };
};

export const toURL = ({
  protocol = "https",
  hostname,
  pathname = "/",
  search = {},
}: Props) =>
  protocol + "://" + [hostname, pathname].join("/") + "?" + stringify(search);
