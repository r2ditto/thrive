import mockData from "./mock_data.json";

export const fetchMockDataPage = (page: number, pageSize: number) =>
  new Promise<{ data: typeof mockData.data }>((resolve) => {
    setTimeout(() => {
      const start = page * pageSize;
      const end = start + pageSize;
      resolve({ data: mockData.data.slice(start, end) });
    }, 1000);
  });
