const onClickAlert = () => {
  return alert("Button was clicked");
};

const onClickConsoleLog = () => {
  return console.log("Button was clicked");
};

const showEvent = (e) => {
  return console.log(e);
};

const onChangeShowValue = (e) => {
  return console.log(e.target.value);
};

export { onClickAlert, onClickConsoleLog, showEvent, onChangeShowValue };
