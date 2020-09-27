import { stringify } from "querystring";
import { nthArg, pipe, filter, keys } from "ramda";

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

export const keysOfEnum = pipe(keys, filter(pipe(nthArg(0), isNaN)));
