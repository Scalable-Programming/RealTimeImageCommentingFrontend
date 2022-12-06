export const getAbolutePagePosition = (event: MouseEvent) => {
  const { pageX: x, pageY: y } = event;

  return {
    x: `${(x / window.innerWidth) * 100}%`,
    y: `${(y / window.innerHeight) * 100}%`,
  };
};
