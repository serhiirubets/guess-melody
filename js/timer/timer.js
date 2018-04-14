export default (time) => {
  return {
    tick() {
      if (time <= 0) {
        return 0;
      }

      time -= 1;
      return time;
    }
  };
};
