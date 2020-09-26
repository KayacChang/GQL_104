import { stringify } from "querystring";

type Props = {
  protocol?: string;
  hostname: string;
  pathname?: string;
  search?: { [key: string]: any };
};

export function toURL({
  protocol = "https",
  hostname,
  pathname = "/",
  search = {},
}: Props) {
  return (
    protocol + "://" + [hostname, pathname].join("/") + "?" + stringify(search)
  );
}
