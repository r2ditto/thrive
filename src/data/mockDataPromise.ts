import mockData from "./mock_data.json";

export const fetchMockData = () =>
  new Promise<{ data: typeof mockData.data }>((resolve) => {
    setTimeout(() => {
      resolve({ data: mockData.data });
    }, 1000);
  });
