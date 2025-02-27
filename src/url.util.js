import urlJoin from "url-join";

export const APP_ROOT_URL = "/form-validation";

export const getBaseUrlPath = () => {
  const currentPath = document.location.pathname || APP_ROOT_URL;
  const startOfAppBase = currentPath.indexOf(APP_ROOT_URL);

  let base = currentPath;

  if (startOfAppBase !== -1) {
    base = currentPath.substr(0, startOfAppBase);
  }

  base = urlJoin(base, APP_ROOT_URL);

  return base;
};
