export interface IAppConfig {
  env: {
    name: string;
  };

  apiServer: {
    url: string;
  };

  properties: {
    siteName: string;
    mainColor: string;
  };
}
