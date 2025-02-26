import urlJoin from "url-join";


var basename = " "
  if (process.env.NODE_ENV == 'production') {
      basename = "/form-validation"
  }
  else if (process.env.NODE_ENV == 'development')
      basename = "/"
    

export const APP_ROOT_URL = basename;

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
