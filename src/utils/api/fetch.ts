export default class Fetch {
  private baseURL: string;
  private config: RequestInit;
  private handle: TODO;

  constructor(baseURL: string, config: RequestInit, handle: TODO) {
    this.baseURL = baseURL;
    this.config = config;
    this.handle = handle;
  }

  private buildURL = (url: string) => this.baseURL + url;

  private checkResponseContentType = (contentType: string): string => {
    const contentTypeArr: string[] = contentType?.split(';');
    if (contentTypeArr.includes('application/json')) {
      return 'json';
    }
    return 'text';
  };

  private buildRequest<T>(url: string, method: string, body?: BodyInit): Promise<T> {
    return new Promise((resolve, reject) => {
      const {
        credentials,
        headers,
        integrity,
        cache,
        keepalive,
        mode,
        redirect,
        referrer,
        referrerPolicy,
        signal,
        window,
      } = this.config;
      fetch(this.buildURL(url), {
        method,
        credentials,
        headers,
        cache,
        integrity,
        keepalive,
        mode,
        redirect,
        referrer,
        referrerPolicy,
        signal,
        window,
        body: JSON.stringify(body),
      })
        .then(async (response: TODO) => {
          let contentType: string | null = response.headers.get('content-type');
          let type = 'text';
          if (contentType) {
            contentType = contentType.replace(/ +/g, '');
            type = this.checkResponseContentType(contentType);
          }
          const data = await response[type]();
          if (!response.ok) {
            const error: TODO = {};
            error.data = data;
            error.code = response.status;
            error.message = response.message;
            error.isError = true;
            throw error;
          }
          return data;
        })
        .then((data: T) => resolve(data))
        .catch((err: Error) => {
          for (const handleError of this.handle.errors) {
            handleError(err);
          }
          reject(err);
        });
    });
  }

  public async get<T>(url: string): Promise<T> {
    return await this.buildRequest(url, 'GET');
  }

  public async post<T>(url: string, body?: BodyInit): Promise<T> {
    return await this.buildRequest(url, 'POST', body);
  }

  public async put<T>(url: string, body?: BodyInit): Promise<T> {
    return await this.buildRequest(url, 'PUT', body);
  }

  public async delete<T>(url: string): Promise<T> {
    return await this.buildRequest(url, 'DELETE');
  }
}
