export const getDaysSinceRegistered = (dateString: string) => {
  const registered = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - registered.getTime();

  return Math.floor(diff / (1000 * 60 * 60 * 24));
};
