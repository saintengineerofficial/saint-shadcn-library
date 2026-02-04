import queryString from "query-string";

export function appendQueryString(target: string, uParam: string | null) {
  if (!uParam) return target;

  const [withoutHash, hash] = target.split("#", 2);
  const [pathname, search = ""] = withoutHash.split("?", 2);
  const params = queryString.parse(search);

  if (params.u) return target;

  params.u = uParam;
  const qs = queryString.stringify(params);
  const rebuilt = qs ? `${pathname}?${qs}` : pathname;

  return hash ? `${rebuilt}#${hash}` : rebuilt;
}
