const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

Object.assign(user, { mood: "happy" });
user["hobby"] = "javasript";
user.premium = false;

for (const entry of Object.entries(user)) {
  console.log(`${entry[0]}:${entry[1]}`);
}