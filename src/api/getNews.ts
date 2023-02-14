export const getNews = async (
  setData?: any,
  setLoading?: any,
  setNews?: any,
) => {
  try {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=5fc3d4b6a95343cebfd2576b61f7e47f',
    );
    const json = await response.json();
    if (setData) {
      setData(json.articles);
    } else {
      setNews(json.articles);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
