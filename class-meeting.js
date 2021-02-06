window.onload = () => {
  const topicField = document.getElementById("topic-field");
  const topic = document.getElementById("topic");
  topicField.onchange = () => {
    const topicValue = topicField.value;
    topic.textContent = topicValue ? topicValue + "主题" : "";
  };
};
