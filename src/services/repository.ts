import { ServiceHandlingInterface } from '../shared/service-handling';

export const repository = {
  get: async <T>(url: RequestInfo): Promise<ServiceHandlingInterface<T>> => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        //authorization: `Bearer ${await getToken()}`,
      },
    }).catch((err) => {
      return createResponse(400, err);
    });

    const hasData = response?.ok ?? false;
    const result: ServiceHandlingInterface<T> = {
      data: hasData ? await response?.json() : undefined,
      error: !hasData,
      loading: false,
      status: response.status,
    };
    return result;
  },
  getNoNull: async <T>(url: RequestInfo): Promise<ServiceHandlingInterface<T>> => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        //authorization: `Bearer ${await getToken()}`,
      },
    }).catch((err) => {
      return createResponse(400, err);
    });

    const hasData = (response?.ok && response?.status != 204) ?? false;
    const result: ServiceHandlingInterface<T> = {
      data: hasData ? await response?.json() : undefined,
      error: !hasData,
      loading: false,
      status: response.status,
    };
    return result;
  },
  post: async <T>(url: RequestInfo, data: string): Promise<ServiceHandlingInterface<T>> => {
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        //authorization: `Bearer ${await getToken()}`,
      },
      mode: 'cors',
      body: data,
    }).catch((err) => {
      return createResponse(400, err);
    });
    const hasData = response.ok;
    const result: ServiceHandlingInterface<T> = {
      data: hasData ? await response?.json() : undefined,
      error: !hasData,
      loading: false,
      status: response.status,
    };
    return result;
  },
  getAsBlob: async (url: RequestInfo): Promise<Blob> => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/octet-stream',
        //authorization: `Bearer ${await getToken()}`,
        responseType: 'arraybuffer',
        dataType: 'blob',
      },
    });
    if (!response.ok) {
      return undefined!;
    }
    return response.blob();
  },
  delete: async (url: RequestInfo): Promise<boolean> => {
    const response = await fetch(url, {
      method: 'delete',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        //authorization: `Bearer ${await getToken()}`,
      },
      mode: 'cors',
    }).catch((err) => {
      return createResponse(400, err);
    });
    return response.ok;
  },
};

const createResponse = (status: number, err?: string): Response => {
  const strFunc: Promise<string> = new Promise((resolve) => {
    resolve(err ?? '');
  });

  const headFunc: Promise<Headers> = new Promise((resolve) => {
    resolve(new Headers());
  });

  return {
    headers: new Headers(),
    ok: false,
    redirected: false,
    status: status,
    statusText: '',
    trailer: headFunc,
    type: 'default',
    url: '',
    clone: (): Response => {
      return null!;
    },
    bodyUsed: false,
    body: null,
    arrayBuffer: null!,
    blob: null!,
    formData: null!,
    json: () => strFunc,
    text: () => strFunc,
  };
};
