export const jsonFetch = async (
  url: string,
  options: RequestInit = {},
): Promise<any> => {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
    const json = await res.json();

    return json;
  } catch (error) {
    return Promise.reject(error);
  }
};
