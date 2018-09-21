const nextPage = () => {
  if (timerid) {
    clearTimeout(timerid);
  }

  const timerid = setTimeout(() => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" });
  }, 1);
};

export default nextPage;
