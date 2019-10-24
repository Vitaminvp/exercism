export const hey = message => {
  if (message === "") return "Fine. Be that way!";
  else if (message === message.toUpperCase() && message.includes("?"))
    return "Calm down, I know what I'm doing!";
  else if (message.includes("?")) return "Sure.";
  else if (message === message.toUpperCase() && message.includes("!"))
    return "Whoa, chill out!";
  else if (message.includes("!")) return "Whatever.";
  // else if (message === message.toUpperCase()) return "Whoa, chill out!";
  else if (message === "") return "Fine. Be that way!";
  else if (message.includes("!")) return "Fine. Be that way!";
  else return "Whatever.";
};
