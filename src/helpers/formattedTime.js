const formattedTime = (data) => {
  const date = new Date(data);

  const horas = date.getHours();
  const minutos = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

  return (
    (horas % 12 || 12) + ":" + minutos + " " + (horas >= 12 ? "p.m." : "a.m.")
  );
};

export default formattedTime;
